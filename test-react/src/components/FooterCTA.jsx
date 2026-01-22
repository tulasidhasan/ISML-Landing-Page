export default function FooterCTA({ onEnroll }) {
  return (
    <section style={{ textAlign: "center" }}>
      <h2>Book Your Spot Now</h2>
      <button onClick={onEnroll}>
        Register for ₹1299
      </button>
    </section>
  );
}
