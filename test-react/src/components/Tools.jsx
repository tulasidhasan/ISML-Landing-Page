import React, { useMemo } from 'react';

export default function Tools() {
  // Center Hub: ISML Academy
  const centerItem = { name: "ISML", icon: "🏛️", desc: "Academy" };

  // Ring Items: Includes specific flags for French, German, and CEFR
  const tools = [
    { name: "French", icon: "🇫🇷", desc: "DELF Prep" },       // French Flag
    { name: "German", icon: "🇩🇪", desc: "Goethe Prep" },     // German Flag
    { name: "Speaking", icon: "🗣️", desc: "Fluency" },
    { name: "Reading", icon: "📖", desc: "Comprehension" },
    { name: "Writing", icon: "✍️", desc: "Grammar" },
    { name: "Listening", icon: "🎧", desc: "Audio Training" },
    { name: "Culture", icon: "🌏", desc: "Etiquette" },
    { name: "CEFR", icon: "🇪🇺", desc: "EU Standards" }       // EU Flag
  ];

  // Wheel Layout Configuration
  const radius = 250; // Radius of the circle in pixels

  const toolsWithPosition = useMemo(() => {
    return tools.map((tool, index) => {
      const total = tools.length;
      // Calculate angle (starting from top -90deg)
      const angle = (index / total) * 360 - 90; 
      const radians = angle * (Math.PI / 180);
      
      return {
        ...tool,
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
      };
    });
  }, [tools]);

  return (
    <section id="languages" className="wheel-section">
      <div className="section-header center">
        <h2>Curriculum & Skills</h2>
        <p className="subtitle">Interactive Learning Path</p>
      </div>

      <div className="wheel-container">
        {/* CENTER HUB: ISML */}
        <div className="wheel-hub">
            <span className="hub-icon">{centerItem.icon}</span>
            <span className="hub-title">{centerItem.name}</span>
        </div>

        {/* SPINNING ORBIT */}
        <div className="wheel-orbit">
            {toolsWithPosition.map((item, index) => (
            <div 
                key={item.name} 
                className="orbit-item"
                style={{
                    '--x': `${item.x}px`,
                    '--y': `${item.y}px`,
                }}
            >
                <div className="tool-content">
                    <div className="tool-icon">{item.icon}</div>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}