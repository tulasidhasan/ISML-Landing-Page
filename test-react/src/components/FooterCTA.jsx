import React from "react";

export default function FooterCTA({ onEnroll }) {
  return (
    <section className="footer-cta-section fade-up show">
      <div className="footer-cta-content">
        <h2>Book Your Spot Now</h2>
        <p>
          Don't wait for the "perfect time." The best time to start building your career foundation is today.
        </p>
        
        <div className="footer-actions">
          <button className="footer-btn pulse-btn" onClick={onEnroll}>
            Register for ₹1299 <span className="strike-price">₹2000</span>
          </button>
          <p className="guarantee-text">🔒 Secure Payment • Instant Access</p>
        </div>
      </div>
    </section>
  );
}