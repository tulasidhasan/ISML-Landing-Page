import React from "react";

export default function RegisterModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-header">
          <h3>Secure Your Spot</h3>
          <p>Complete your registration for the upcoming batch.</p>
        </div>

        <form className="register-form">
          <label>Full Name</label>
          <input type="text" placeholder="Ex: Rahul Sharma" />

          <label>Email Address</label>
          <input type="email" placeholder="rahul@example.com" />

          <label>Mobile Number</label>
          <div className="phone-input">
            <span>🇮🇳 +91</span>
            <input type="tel" placeholder="98765 43210" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Profession</label>
              <select>
                <option value="" disabled selected>Select...</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Career Switcher</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>State</label>
              <select>
                 <option value="" disabled selected>Select...</option>
                 <option>Tamil Nadu</option>
                 <option>Karnataka</option>
                 <option>Kerala</option>
                 <option>Others</option>
              </select>
            </div>
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