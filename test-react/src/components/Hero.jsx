import React from "react";

export default function Hero({ onEnroll }) {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* LEFT: Content & CTA */}
        <div className="hero-content fade-up show">
          <div className="badge-pill">🚀 New Batch Starting Soon</div>
          
          <h1>
            Launch Your Tech Career with <br />
            <span className="highlight-text">ISML FOUNDATION</span>
          </h1>

          <p className="hero-subtext">
            Don't just learn syntax. Build the <strong>confidence, clarity, and logic</strong> required to crack top tech interviews. Perfect for beginners.
          </p>

          <div className="hero-actions">
            <button onClick={onEnroll} className="btn-primary pulse-btn">
              Join Now – ₹1299
            </button>
            <div className="trust-mini">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="trust-text">Rated 4.9 by 500+ Students</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Video with Decorative Backdrop */}
        <div className="hero-visual fade-up show">
          <div className="video-decoration"></div> 
          <div className="video-wrapper-hero">
            <video
              controls
              poster="/video-thumbnail.jpg"
              className="hero-video"
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}