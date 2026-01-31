import React, { useState } from "react";

export default function RegisterModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    state: "",
    batch: "" // Added to capture Weekday vs Weekend preference
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      // Sending all collected data to your backend
      const res = await fetch(
        "https://isml-backend-production.up.railway.app/create-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            profession: formData.profession,
            state: formData.state,
            batch: formData.batch,
            amount: "1299.00" // Fixed amount from Circular
          })
        }
      );

      const data = await res.json();

      // Create PayU form dynamically
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://test.payu.in/_payment"; // Switch to "https://secure.payu.in/_payment" for LIVE

      const fields = {
        key: data.key,
        txnid: data.txnid,
        amount: data.amount,
        productinfo: data.productinfo,
        firstname: data.firstname,
        email: data.email,
        phone: data.phone,
        surl: data.surl,
        furl: data.furl,
        hash: data.hash
        // You can add udf1: formData.batch if your backend maps it
      };

      for (const name in fields) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = fields[name];
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();

    } catch (err) {
      console.error(err);
      alert("Payment initiation failed. Please check your connection.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-header">
          <h3>Secure Your Spot</h3>
          <p>Register for the ISML Foundation Program 2026.</p>
        </div>

        <form className="register-form" onSubmit={handlePayment}>
          {/* Full Name */}
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ex: Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Email */}
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="rahul@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Mobile */}
          <label>Mobile Number</label>
          <div className="phone-input">
            <span>🇮🇳 +91</span>
            <input
              type="tel"
              name="phone"
              required
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Row for Profession & State */}
          <div className="form-row">
            <div className="form-group">
              <label>Profession</label>
              <select 
                name="profession" 
                required 
                value={formData.profession} 
                onChange={handleChange}
              >
                <option value="" disabled>Select...</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Career Switcher</option>
              </select>
            </div>

            <div className="form-group">
              <label>State</label>
              <select 
                name="state" 
                required 
                value={formData.state} 
                onChange={handleChange}
              >
                <option value="" disabled>Select...</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Batch Preference - Added from Circular */}
          <label>Preferred Batch</label>
          <select 
            name="batch" 
            required 
            value={formData.batch} 
            onChange={handleChange}
          >
            <option value="" disabled>Select Batch...</option>
            <option value="Weekday">Weekday (Mon / Wed / Fri)</option>
            <option value="Weekend">Weekend (Sat / Sun)</option>
          </select>

          <button type="submit" className="submit-btn pulse-btn">
            Proceed to Payment (₹1299)
          </button>

          <p className="privacy-note">Your data is safe with ISML.</p>
        </form>
      </div>
    </div>
  );
}