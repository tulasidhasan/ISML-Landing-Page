export default function Tools() {
  const tools = [
    { name: "French", icon: "🇫🇷", desc: "DELF A1 - C2 Prep" },
    { name: "German", icon: "🇩🇪", desc: "Goethe-Zertifikat A1" },
    { name: "Japanese", icon: "🇯🇵", desc: "JLPT N5 - N1 Prep" },
    { name: "Speaking", icon: "🗣️", desc: "Guided Practice" }, // 
    { name: "Reading", icon: "📖", desc: "Comprehension Skills" },
    { name: "Writing", icon: "✍️", desc: "Grammar & Clarity" },
    { name: "Listening", icon: "🎧", desc: "Native Audio Training" },
    { name: "Culture", icon: "🌏", desc: "Global Etiquette" }
  ];

  return (
    <section id="languages" className="tools-section">
      <div className="section-header center">
        <h2>Curriculum & Skills</h2>
        <p className="subtitle"> aligned with CEFR & JLPT Standards</p>
      </div>

      <div className="tools-grid">
        {tools.map((item) => (
          <div key={item.name} className="tool-card fade-up show">
            <div className="tool-icon">{item.icon}</div>
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}