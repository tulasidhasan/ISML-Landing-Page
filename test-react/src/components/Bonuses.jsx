import React from "react";

export default function Bonuses() {
  const bonuses = [
    { title: "Foundation Roadmap", value: "₹999", desc: "Step-by-step career guide" },
    { title: "Certificate of Participation", value: "Priceless", desc: "Official ISML validation" },
    { title: "Career Guidance Session", value: "₹2000", desc: "1-on-1 expert advice" }
  ];

  return (
    <section className="bonuses-section">
      <div className="bonuses-container">
        <div className="bonuses-header">
          <h2>🎁 Exclusive Free Bonuses</h2>
          <p>Everything you need to succeed, included for free.</p>
        </div>

        <div className="bonuses-grid">
          {bonuses.map((item, index) => (
            <div key={index} className="bonus-card fade-up show">
              <div className="bonus-tag">FREE (Worth {item.value})</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="check-icon">✔</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}