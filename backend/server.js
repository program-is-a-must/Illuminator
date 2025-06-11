const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Brevo (Sendinblue) setup
const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

app.post("/api/bookings", async (req, res) => {
  const booking = req.body;

  const sender = {
    email: "balogunmishael7@gmail.com",
    name: "Illuminator Studio",
  };

  const receivers = [
    {
      email: booking.email, // Make sure you're collecting email from the form
      name: booking.name,
    },
  ];

  const subject = "📸 Booking Confirmation - Illuminator Studio";
  const content = `
    <h3>Hello ${booking.name},</h3>
    <p>Your <strong>${booking.shootType}</strong> session has been successfully booked.</p>
    <ul>
      <li><strong>Package:</strong> ${booking.packagePrice} NGN</li>
      <li><strong>Date:</strong> ${booking.date}</li>
      <li><strong>Time:</strong> ${booking.time}</li>
    </ul>
    <p>We'll reach out to confirm more details. Thank you for choosing Illuminator Studio!</p>
  `;

  try {
    const response = await tranEmailApi.sendTransacEmail({
      sender,
      to: receivers,
      subject,
      htmlContent: content,
    });

    console.log("✅ Email sent successfully!");
    console.log("📩 Brevo Message ID:", response.messageId);
    res.status(200).json({ message: "Booking successful, email sent." });
  } catch (error) {
    console.error("❌ Failed to send email via Brevo.");
    console.error("💥 Error message:", error.message);
    if (error.response) {
      console.error("📋 Brevo response body:", error.response.body);
    }
    res.status(500).json({ error: "Booking failed. Email could not be sent." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
