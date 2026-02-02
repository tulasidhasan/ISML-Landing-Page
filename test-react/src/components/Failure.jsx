import React from "react";
import "./../index.css";

export default function Failure() {
  return (
    <div className="status-page failure">
      <div className="status-card">
        <h1>❌ Payment Failed</h1>
        <p>Your payment could not be completed.</p>
        <p>Please try again or contact support.</p>

        <a href="/" className="status-btn">
          Try Again
        </a>
      </div>
    </div>
  );
}
