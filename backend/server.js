const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/bookings", (req, res) => {
  const booking = req.body;

  fs.readFile("bookings.json", "utf8", (err, data) => {
    let bookings = [];
    if (!err && data) {
      bookings = JSON.parse(data);
    }

    bookings.push(booking);

    fs.writeFile("bookings.json", JSON.stringify(bookings, null, 2), (err) => {
      if (err) {
        console.error("❌ Error saving booking:", err);
        return res.status(500).json({ message: "Failed to save booking" });
      }

      console.log("✅ Booking saved successfully");

      // Moved the email logic INSIDE this block so 'booking' is in scope
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: booking.email,
        subject: "Booking Confirmation",
        html: `
          <p>Hi <strong>${booking.name}</strong>,</p>
          <p>Thank you for booking a <strong>${booking.shootType}</strong> on <strong>${booking.date}</strong> at <strong>${booking.time}</strong>.</p>
          <p>We'll contact you soon to confirm the details.</p>
          <p>– Your Photographer</p>
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("❌ Email send error:", error);
        } else {
          console.log("✅ Email sent successfully:", info.response);
        }
      });

      res.status(200).json({ message: "Booking received and email sent!" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
