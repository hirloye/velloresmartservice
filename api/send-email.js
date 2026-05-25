export default async function handler(req, res) {
  // Support CORS if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { appliance, brand, problem, address, phone, date } = req.body;

  if (!appliance || !address || !phone || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Resend API Key is not configured on the server. Please add RESEND_API_KEY to your environment variables.' });
  }

  const emailTo = process.env.TO_EMAIL || 'velloreservice23@gmail.com';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'Vellore Smart Service <onboarding@resend.dev>',
        to: emailTo,
        subject: `New Repair Appointment: ${appliance.toUpperCase()} - ${brand || 'Unknown Brand'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #007aff; border-bottom: 2px solid #007aff; padding-bottom: 10px; margin-top: 0;">New Appointment Request</h2>
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
              This request was sent from the Vellore Smart Service booking form.
            </div>
          </div>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Error from Resend API' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
