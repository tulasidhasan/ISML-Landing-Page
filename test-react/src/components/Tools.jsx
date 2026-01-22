export default function Tools() {
  const items = [
    "French Language",
    "German Language",
    "Japanese Language",
    "Speaking & Pronunciation",
    "Listening & Comprehension",
    "Reading & Writing",
    "Grammar Fundamentals",
    "Cultural Awareness"
  ];

  return (
    <section id="languages">
      <h2 style={{ textAlign: "center" }}>
        Languages & Skills You Will Learn
      </h2>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))"
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            className="card fade-up show"
            style={{ textAlign: "center" }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
