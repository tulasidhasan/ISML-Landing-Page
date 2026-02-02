import React from "react";
import "./../index.css";

export default function Success() {
  return (
    <div className="status-page success">
      <div className="status-card">
        <h1>✅ Payment Successful</h1>
        <p>Your registration for the ISML Foundation Program is confirmed.</p>
        <p>We’ll contact you shortly with further details.</p>

        <a href="/" className="status-btn">
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
