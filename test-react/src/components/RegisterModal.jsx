export default function RegisterModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>×</button>

        <h3>Secure your spot now!</h3>

        <form className="register-form">
          <label>Name</label>
          <input type="text" placeholder="Enter the Name" />

          <label>Email</label>
          <input type="email" placeholder="Enter the Email" />

          <label>Mobile Number</label>
          <div className="phone-input">
            <span>🇮🇳 +91</span>
            <input type="tel" placeholder="Enter the Mobile Number" />
          </div>

          <label>Profession</label>
          <select>
            <option>Choose the Profile</option>
            <option>Student</option>
            <option>Working Professional</option>
            <option>Career Switcher</option>
          </select>

          <label>State</label>
          <select>
            <option>Select State</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Others</option>
          </select>

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
