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
        // 200px before bottom

        if (scrollTop > 600 && !nearBottom) {
        setShow(true);
        } else {
        setShow(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  // Countdown timer (resets on refresh)
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
    <div className="sticky-cta-bar">
      {/* Left section */}
      <div className="sticky-left">
        <strong>Still confused? You're not alone — Let's fix it together</strong>
        <span className="subtext">20K+ Students Enrolled</span>
      </div>

      {/* Right section */}
      <div className="sticky-right">
        {isOfferActive && (
          <span className="timer">
            Offer ends in {minutes}:{seconds}
          </span>
        )}

        <button className="sticky-cta-button" onClick={onEnroll}>
          Register Now for <del>₹2000</del> ₹{currentPrice}
        </button>
      </div>
    </div>
  );
}
