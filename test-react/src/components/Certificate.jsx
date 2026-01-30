import React from "react";

export default function Certificate() {
  return (
    <section className="certificate-section">
      <div className="cert-grid">
        {/* Left: Benefits Checklist */}
        <div className="cert-content fade-up show">
          <h2>Certification That Opens Doors</h2>
          <p className="cert-subtext">
            Don't just learn. Prove it. Earn a verifiable certificate that validates your foundational knowledge.
          </p>
          
          <ul className="cert-benefits">
            <li>
              <span className="icon">💼</span>
              <div>
                <strong>Resume Boost</strong>
                <p>Stand out to recruiters with verified skills.</p>
              </div>
            </li>
            <li>
              <span className="icon">🔗</span>
              <div>
                <strong>LinkedIn Badge</strong>
                <p>Showcase your achievement to your professional network.</p>
              </div>
            </li>
            <li>
              <span className="icon">🌍</span>
              <div>
                <strong>Global Recognition</strong>
                <p>Accepted by top companies as proof of language basics.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: The Certificate Image with "Foil" effect */}
        <div className="cert-visual fade-up show">
          <div className="cert-glow"></div>
          <img
            src="/certificate-sample.png"
            alt="ISML Certificate Sample"
            className="cert-img"
          />
        </div>
      </div>
    </section>
  );
}