import { useState } from "react";
import axios from "axios";
import "./book.css";

function Book() {
  const [formData, setFormData] = useState({
    shootType: "",
    packagePrice: "",
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const packageOptions = {
    "Family Shoot": [
      "1 Outfit-Package = 32,500",
      "2 Outfit-Package = 60,000",
      "3 Outfit-Package = 90,000",
      "4 Outfit-Package = 120,000",
      "5 Outfit-Package = 150,000",
    ],
    "Pre Wedding Shoot": [
      "1 Outfit-Package = 32,500",
      "2 Outfit-Package = 60,000",
      "3 Outfit-Package = 90,000",
      "4 Outfit-Package = 120,000",
      "5 Outfit-Package = 150,000",
    ],
    "Maternity Shoot": [
      "1 Outfit-Package = 32,500",
      "2 Outfit-Package = 60,000",
      "3 Outfit-Package = 90,000",
      "4 Outfit-Package = 120,000",
      "5 Outfit-Package = 150,000",
    ],
    "Personal Shoot": [
      "1 Outfit-Package = 30,000",
      "2 Outfit-Package = 52,500",
      "3 Outfit-Package = 78,750",
      "4 Outfit-Package = 105,000",
      "5 Outfit-Package = 131,500",
    ],
    "Newborn Shoot": [
      "1 Outfit-Package = 40,000",
      "2 Outfit-Package = 75,000",
      "3 Outfit-Package = 105,000",
    ],
    "Kiddies Shoot": [
      "1 Outfit-Package = 32,000",
      "2 Outfit-Package = 60,000",
      "3 Outfit-Package = 90,000",
      "4 Outfit-Package = 120,000",
      "5 Outfit-Package = 150,000",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "shootType") {
      setFormData((prev) => ({
        ...prev,
        shootType: value,
        packagePrice: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://adventurous-splendid-aluminum.glitch.me/api/bookings",
        formData
      );
      setStatus("✅ Booking successful! Confirmation email sent.");
      setFormData({
        shootType: "",
        packagePrice: "",
        name: "",
        email: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      setStatus("❌ Booking failed. Please try again.");
    }
  };

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Book a Photography Package</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Shoot Type:</label>
          <select
            className="form-select"
            name="shootType"
            value={formData.shootType}
            onChange={handleChange}
            required
          >
            <option value="">Select Package type</option>
            {Object.keys(packageOptions).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {formData.shootType && (
          <div className="form-group">
            <label className="form-label">Package Price:</label>
            <select
              className="form-select"
              name="packagePrice"
              value={formData.packagePrice}
              onChange={handleChange}
              required
            >
              <option value="">Select package price</option>
              {packageOptions[formData.shootType].map((price, index) => (
                <option key={index} value={price}>
                  {price} NGN
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="e.g. your@email.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            className="form-input"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Time:</label>
          <input
            className="form-input"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Message (optional):</label>
          <textarea
            className="form-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button className="submit-button" type="submit">
          Submit Booking
        </button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </div>
  );
}

export default Book;
