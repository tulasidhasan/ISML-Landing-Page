import { useEffect, useState } from "react";

export default function Mentor({ onEnroll }) {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <section id="mentor" className="mentor-section">
      <div className="mentor-grid">
        {/* LEFT: Photo & Badge */}
        <div className="mentor-profile-card fade-up show">
          <div className="mentor-image-wrapper">
            <img src="/mentor.png" alt="Pradeep Kumar M" />
          </div>
          <div className="mentor-badges">
            <span className="badge-exp">🏆 10+ Years Exp</span>
            <span className="badge-role">Founder, ISML</span>
          </div>
        </div>

        {/* RIGHT: Content & Session Details */}
        <div className="mentor-content fade-up show">
          <h2 className="mentor-title">Meet Your Instructor</h2>
          <h3 className="mentor-name">Pradeep Kumar M</h3>
          <p className="mentor-bio">
            Language learning isn't about memorizing dictionaries. It's about logic and confidence. 
            I have trained <strong>10,000+ students</strong> to master French, German, and Japanese 
            using my unique "Logic-First" method.
          </p>

          {/* Session Info Box */}
          <div className="session-info-box">
            <div className="session-row">
              <div className="session-detail">
                <span className="icon">📅</span>
                <div>
                  <strong>Next Batch:</strong>
                  <span>Sunday, 25 Jan 2026</span>
                </div>
              </div>
              <div className="session-detail">
                <span className="icon">⏰</span>
                <div>
                  <strong>Time:</strong>
                  <span>10:00 AM IST</span>
                </div>
              </div>
            </div>
            
            <div className="mentor-actions">
               <button className="mentor-cta-btn pulse-btn" onClick={onEnroll}>
                  Reserve Seat – ₹1200 <span className="old-price">₹2000</span>
               </button>
               <p className="offer-timer">⚡ Offer expires in {minutes}:{seconds}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}