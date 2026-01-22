export default function Bonuses() {
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Bonuses Included</h2>

      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        <div className="card">Foundation Roadmap (FREE)</div>
        <div className="card">Certificate of Participation (FREE)</div>
        <div className="card">Career Guidance Session (FREE)</div>
      </div>
    </section>
  );
}
