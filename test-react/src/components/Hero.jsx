export default function Hero({ onEnroll }) {
  return (
    <section style={{ textAlign: "center" }}>
      <h1>
        Build a Strong Tech Career Foundation with <br />
        <span style={{ color: "var(--primary)" }}>
          ISML FOUNDATION PROGRAM
        </span>
      </h1>

      <p style={{ color: "var(--text-muted)", marginBottom: 30 }}>
        Beginner-friendly structured program designed to build clarity and confidence
      </p>

      {/* 🎥 VIDEO SECTION */}
      <div className="video-wrapper">
        <video
          controls
          poster="/video-thumbnail.jpg"   // optional thumbnail
          className="hero-video"
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* CTA CARD */}
      <div className="card" style={{ maxWidth: 420, margin: "40px auto 0" }}>
        <p style={{ marginBottom: 12 }}>Live • Beginner • Online</p>
        <button onClick={onEnroll}>Join Now – ₹1299</button>
      </div>
    </section>
  );
}
