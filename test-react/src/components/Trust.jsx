import React from "react";

export default function Trust() {
  return (
    <section id="programs" className="trust-section">
      <div className="trust-container">
        <h2 className="section-title">Is This Your Current Reality?</h2>
        <p className="section-subtitle">Most students get stuck in the "Tutorial Loop." We break that.</p>

        <div className="comparison-grid">
          
          {/* THE STRUGGLE (Left) */}
          <div className="compare-card struggle fade-up show">
            <div className="card-header">
              <span className="icon">🛑</span>
              <h3>The "Self-Learning" Trap</h3>
            </div>
            <ul>
              <li>Don't know where to start</li>
              <li>Grammar feels like math equations</li>
              <li>Fear of speaking in public</li>
              <li>Forgetting words during interviews</li>
              <li>Zero feedback on mistakes</li>
            </ul>
          </div>

          {/* THE CONNECTOR (Center Arrow) */}
          <div className="connector">
            <div className="arrow-circle">➔</div>
          </div>

          {/* THE SOLUTION (Right) */}
          <div className="compare-card success fade-up show">
            <div className="card-header">
              <span className="icon">🚀</span>
              <h3>The ISML Advantage</h3>
            </div>
            <ul>
              <li><strong>Structured</strong> Step-by-Step Roadmap</li>
              <li><strong>Live</strong> Speaking Practice</li>
              <li>Confidence to crack interviews</li>
              <li>Vocabulary that sticks naturally</li>
              <li>Personalized Mentor Feedback</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}