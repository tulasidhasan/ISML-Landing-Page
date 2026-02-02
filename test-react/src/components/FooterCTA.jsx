import React from "react";

export default function FooterCTA({ onEnroll }) {
  return (
    <section className="footer-cta-section fade-up show">
      <div className="footer-cta-content">
        <h2>Don't Miss the Feb 15th Batch!</h2>
        <p>
          Admissions are closing soon for the <strong>ISML Foundation Program 2026</strong>. 
          Secure your seat today and start your journey towards global opportunities.
        </p>
        
        <div className="footer-actions">
          <button className="footer-btn pulse-btn" onClick={onEnroll}>
            Register Now – ₹1299 <span className="strike-price">₹7794</span>
          </button>
          <p className="guarantee-text">🔒 Official ISML Certification • 100% Secure Payment
            with PayU
          </p>
          
        </div>
      </div>
    </section>
  );
}