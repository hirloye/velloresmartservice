import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env files
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-dev-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            // Check if the requested route is the email API
            if ((req.url === '/api/send-email' || req.url === '/send-email.php') && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', async () => {
                res.setHeader('Content-Type', 'application/json');
                try {
                  const { appliance, brand, problem, address, phone, date } = JSON.parse(body);

                  const apiKey = env.RESEND_API_KEY;
                  if (!apiKey) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Resend API Key is not configured in local .env file.' }));
                    return;
                  }

                  const emailTo = env.TO_EMAIL || 'velloreservice23@gmail.com';

                  const response = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                      from: 'onboarding@resend.dev',
                      to: emailTo,
                      subject: `New Repair Appointment: ${appliance.toUpperCase()} - ${brand || 'Unknown Brand'}`,
                      html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                          <h2 style="color: #007aff; border-bottom: 2px solid #007aff; padding-bottom: 10px; margin-top: 0;">New Appointment Request (Local Dev Mode)</h2>
                          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                            <tr style="background-color: #f9f9f9;">
                              <td style="padding: 10px; font-weight: bold; width: 180px;">Appliance Type:</td>
                              <td style="padding: 10px; text-transform: uppercase;">${appliance}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px; font-weight: bold;">Brand:</td>
                              <td style="padding: 10px;">${brand || 'Not Specified'}</td>
                            </tr>
                            <tr style="background-color: #f9f9f9;">
                              <td style="padding: 10px; font-weight: bold;">Problem Description:</td>
                              <td style="padding: 10px;">${problem || 'Not Specified'}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px; font-weight: bold;">Customer Phone:</td>
                              <td style="padding: 10px;"><a href="tel:${phone}" style="color: #007aff; text-decoration: none; font-weight: bold;">${phone}</a></td>
                            </tr>
                            <tr style="background-color: #f9f9f9;">
                              <td style="padding: 10px; font-weight: bold;">Preferred Date:</td>
                              <td style="padding: 10px;">${date}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px; font-weight: bold;">Service Address:</td>
                              <td style="padding: 10px; line-height: 1.4;">${address}</td>
                            </tr>
                          </table>
                          <div style="margin-top: 25px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 15px;">
                            This request was sent from the local Vite dev server.
                          </div>
                        </div>
                      `
                    })
                  });

                  const data = await response.json();
                  if (response.ok) {
                    res.statusCode = 200;
                    res.end(JSON.stringify({ success: true, data }));
                  } else {
                    res.statusCode = response.status;
                    res.end(JSON.stringify({ error: data.message || 'Error from Resend API' }));
                  }
                } catch (err) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: err.message }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ]
  };
});
