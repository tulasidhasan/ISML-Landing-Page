import React, { useState } from "react";

export default function RegisterModal({ open, onClose }) {
  // 1. STATE MANAGEMENT
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    state: "",
    profession: "",
  });
  const [loading, setLoading] = useState(false);

  // CONSTANTS
  const PRODUCT_INFO = "ISML Foundation Batch";
  const AMOUNT = "1299.00"; // PayU expects 2 decimal places

  // REPLACE THIS WITH YOUR RAILWAY BACKEND URL
  const BACKEND_URL = "https://isml-backend-production.up.railway.app/"; 

  // TOGGLE THIS FOR LIVE MODE
  // const PAYU_URL = "https://secure.payu.in/_payment"; // LIVE
  const PAYU_URL = "https://test.payu.in/_payment"; // TEST

  if (!open) return null;

  // 2. INPUT HANDLER
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. PAYMENT LOGIC
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    // A. Generate Unique Transaction ID
    const txnid = "ISML" + Math.floor(Math.random() * 1000000000);

    try {
      // B. Get Hash from Railway Backend
      const response = await fetch(`${BACKEND_URL}/api/payment/hash`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          txnid: txnid,
          amount: AMOUNT,
          productinfo: PRODUCT_INFO,
          firstname: formData.firstname,
          email: formData.email,
        }),
      });

      const data = await response.json();

      if (!data.hash) {
        alert("Payment Error: Failed to connect to server.");
        setLoading(false);
        return;
      }

      // C. Submit to PayU dynamically
      const form = document.createElement("form");
      form.action = PAYU_URL;
      form.method = "POST";

      const addField = (name, value) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      // Required PayU Fields
      addField("key", data.key); // Key comes from backend for safety
      addField("txnid", txnid);
      addField("amount", AMOUNT);
      addField("productinfo", PRODUCT_INFO);
      addField("firstname", formData.firstname);
      addField("email", formData.email);
      addField("phone", formData.phone);
      addField("surl", window.location.origin + "/success"); // Redirect after success
      addField("furl", window.location.origin + "/failure"); // Redirect after failure
      addField("hash", data.hash);

      document.body.appendChild(form);
      form.submit(); // Redirects user to PayU

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Check your internet connection.");
      setLoading(false);
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
            type="text" name="firstname" placeholder="Ex: Rahul Sharma" 
            required onChange={handleChange} 
          />

          <label>Email Address</label>
          <input 
            type="email" name="email" placeholder="rahul@example.com" 
            required onChange={handleChange} 
          />

          <label>Mobile Number</label>
          <div className="phone-input">
            <span>🇮🇳 +91</span>
            <input 
              type="tel" name="phone" placeholder="98765 43210" 
              required onChange={handleChange} 
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Profession</label>
              <select name="profession" required onChange={handleChange} defaultValue="">
                <option value="" disabled>Select...</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Career Switcher</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>State</label>
              <select name="state" required onChange={handleChange} defaultValue="">
                 <option value="" disabled>Select...</option>
                 <option>Tamil Nadu</option>
                 <option>Karnataka</option>
                 <option>Kerala</option>
                 <option>Others</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn pulse-btn" disabled={loading}>
            {loading ? "Processing..." : `Proceed to Payment (₹${AMOUNT})`}
          </button>
          
          <p className="privacy-note">Your data is safe with ISML.</p>
        </form>
      </div>
    </div>
  );
}