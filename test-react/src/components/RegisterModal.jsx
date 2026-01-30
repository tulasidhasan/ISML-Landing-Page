import React, { useState } from "react";

export default function RegisterModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
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
            phone: formData.phone
          })
        }
      );

      const data = await res.json();

      // Create PayU form
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://test.payu.in/_payment"; // change to LIVE later

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
      alert("Payment initiation failed");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-header">
          <h3>Secure Your Spot</h3>
          <p>Complete your registration for the upcoming batch.</p>
        </div>

        <form className="register-form" onSubmit={handlePayment}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ex: Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="rahul@example.com"
            value={formData.email}
            onChange={handleChange}
          />

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

          <button type="submit" className="submit-btn pulse-btn">
            Proceed to Payment (₹1299)
          </button>

          <p className="privacy-note">Your data is safe with ISML.</p>
        </form>
      </div>
    </div>
  );
}
