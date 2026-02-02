import React from "react";

export default function Hero({ onEnroll }) {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* LEFT: Content & CTA */}
        <div className="hero-content fade-up show">
          {/* Date from Circular [cite: 71] */}
          <div className="badge-pill">🚀 New Batch Starts From This Week</div>
          
          <h1>
            Your Premier Destination for <br />
            <span className="highlight-text">LEARNING LANGUAGES</span>
          </h1>

          <p className="hero-subtext">
            Join the <strong>INDIAN SCHOOL FOR MODERN LANGUAGES Foundation Program</strong>. A structured 3-month certificate course 
            aligned with international standards (DELF, Goethe, CERF). 
            Bridge cultures and build a global career.
          </p>

          <div className="hero-actions">
            {/* Price from Circular  */}
            <button onClick={onEnroll} className="btn-primary pulse-btn">
              Join Foundation Program – ₹1299
            </button>
            <div className="trust-mini">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="trust-text">Rated 4.9 by 20,000+ Learners</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Video */}
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