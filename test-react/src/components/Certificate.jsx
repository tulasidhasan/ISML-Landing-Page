export default function Certificate() {
  return (
    <section className="certificate-section">
      {/* Left Content */}
      <div className="certificate-text">
        <h2>Certification That Builds Credibility</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Receive a certificate on completion to showcase your learning journey.
          This certification reflects your foundational knowledge and commitment
          to continuous learning.
        </p>
      </div>

      {/* Right Certificate Image */}
      <div className="certificate-image">
        <img
          src="/certificate-sample.png"
          alt="ISML Certificate Sample"
        />
      </div>
    </section>
  );
}
