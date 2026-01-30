import { useEffect, useState } from "react";

const OFFER_DURATION = 5 * 60; // 5 minutes in seconds

export default function StickyCTA({ onEnroll }) {
  const [show, setShow] = useState(false);
  const [timeLeft, setTimeLeft] = useState(OFFER_DURATION);

  // Show sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;

      // Show after scrolling past hero (600px), hide near footer
      if (scrollTop > 600 && !nearBottom) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!show) return null;

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const isOfferActive = timeLeft > 0;
  const currentPrice = isOfferActive ? 1200 : 2000;

  return (
    <div className="sticky-cta-bar slide-up">
      {/* Left section: Hidden on small mobiles via CSS */}
      <div className="sticky-left">
        <strong>Unlock Your Global Career</strong>
        <span className="subtext">Join 20K+ Successful Students</span>
      </div>

      {/* Right section: Price & Action */}
      <div className="sticky-right">
        {isOfferActive && (
          <span className="timer">
            Offer ends in <span className="timer-red">{minutes}:{seconds}</span>
          </span>
        )}

        <div className="price-box">
           <del>₹2000</del>
           <span className="final-price">₹{currentPrice}</span>
        </div>

        <button className="sticky-cta-button" onClick={onEnroll}>
          Register Now
        </button>
      </div>
    </div>
  );
}