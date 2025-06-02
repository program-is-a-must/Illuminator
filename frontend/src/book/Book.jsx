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
    "Family Shoot": ["32,500", "60,000", "90,000", "120,000", "150,000"],
    "Pre Wedding Shoot": ["32,500", "60,000", "90,000", "120,000", "150,000"],
    "Maternity Shoot": ["32,500", "60,000", "90,000", "120,000", "150,000"],
    "Personal Shoot": ["30,000", "52,500", "78,750", "105,000", "131,500"],
    "Newborn Shoot": ["40,000", "75,000", "105,000"],
    "Kiddies Shoot": ["32,000", "60,000", "90,000", "120,000", "150,000"],
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
      await axios.post("http://localhost:5000/api/bookings", formData);
      setStatus("Booking successful!");
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
      setStatus("Booking failed. Please try again.");
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
            <option value="">Select shoot type</option>
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
