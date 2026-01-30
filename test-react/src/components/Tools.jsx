export default function Tools() {
  const tools = [
    { name: "French", icon: "🇫🇷", desc: "A1 & A2 Levels" },
    { name: "German", icon: "🇩🇪", desc: "Goethe Certified Prep" },
    { name: "Japanese", icon: "🇯🇵", desc: "JLPT N5 & N4" },
    { name: "Speaking", icon: "🗣️", desc: "Fluency Drills" },
    { name: "Listening", icon: "🎧", desc: "Native Audio Training" },
    { name: "Reading", icon: "📖", desc: "Comprehension Skills" },
    { name: "Grammar", icon: "🧩", desc: "Logic-Based Rules" },
    { name: "Culture", icon: "🌏", desc: "Global Etiquette" }
  ];

  return (
    <section id="languages" className="tools-section">
      <div className="section-header center">
        <h2>What You Will Master</h2>
        <p className="subtitle">A complete ecosystem for language success</p>
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