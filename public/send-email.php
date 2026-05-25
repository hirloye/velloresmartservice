<?php
// Disable CORS issues
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

// Read raw POST data
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$appliance = $input['appliance'] ?? '';
$brand = $input['brand'] ?? '';
$problem = $input['problem'] ?? '';
$address = $input['address'] ?? '';
$phone = $input['phone'] ?? '';
$date = $input['date'] ?? '';

if (!$appliance || !$address || !$phone || !$date) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields"]);
    exit;
}

// Resend API Key setup (secured on the server side)
$apiKey = getenv('RESEND_API_KEY') ?: 're_dNQ2nowy_AF5wMVpAPpFvLzwyzgjNLGHn';
$emailTo = getenv('TO_EMAIL') ?: 'velloreservice23@gmail.com';

$htmlContent = '
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #007aff; border-bottom: 2px solid #007aff; padding-bottom: 10px; margin-top: 0;">New Appointment Request</h2>
    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold; width: 180px;">Appliance Type:</td>
        <td style="padding: 10px; text-transform: uppercase;">' . htmlspecialchars($appliance) . '</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Brand:</td>
        <td style="padding: 10px;">' . htmlspecialchars($brand) . '</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Problem Description:</td>
        <td style="padding: 10px;">' . htmlspecialchars($problem) . '</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Customer Phone:</td>
        <td style="padding: 10px;"><a href="tel:' . htmlspecialchars($phone) . '" style="color: #007aff; text-decoration: none; font-weight: bold;">' . htmlspecialchars($phone) . '</a></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Preferred Date:</td>
        <td style="padding: 10px;">' . htmlspecialchars($date) . '</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Service Address:</td>
        <td style="padding: 10px; line-height: 1.4;">' . htmlspecialchars($address) . '</td>
      </tr>
    </table>
    <div style="margin-top: 25px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 15px;">
      This request was sent from the Vellore Smart Service booking form.
    </div>
  </div>
';

$data = [
    "from" => "onboarding@resend.dev",
    "to" => $emailTo,
    "subject" => "New Repair Appointment: " . strtoupper($appliance) . " - " . $brand,
    "html" => $htmlContent
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode(["success" => true, "result" => json_decode($response)]);
} else {
    http_response_code($httpCode);
    echo json_encode(["error" => "Error sending email via Resend API", "details" => json_decode($response)]);
}
?>
