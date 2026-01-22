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

    <section id="mentor" className="mentor-section fade-up show">
      {/* LEFT */}
      <div className="mentor-left">
        <div className="mentor-avatar">
          <img src="/mentor.png" alt="Mentor" />
        </div>

        <p className="mentor-exp">10+ Years of Experience</p>
        <h3>Premanand Sethurajan</h3>
        <p className="mentor-role">Founder – ISML Academy</p>
      </div>

      {/* RIGHT */}
      <div className="mentor-right">
        <div className="mentor-cards">
          <div className="info-card">
            <strong>Sunday, 25 Jan 2026</strong>
            <span>10:00 AM IST</span>
          </div>

          <div className="info-card">
            <strong>Mode</strong>
            <span>Online</span>
          </div>

          <div className="info-card">
            <strong>Language</strong>
            <span>Japanese</span>
            <span>German</span>
            <span>French</span>
          </div>
        </div>

        <button className="mentor-cta" onClick={onEnroll}>
          Register Now <del>₹2000</del> ₹1200
        </button>

        <p className="mentor-timer">
          Offer ends in {minutes}:{seconds}
        </p>
      </div>
    </section>
  );
}
