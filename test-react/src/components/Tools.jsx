import React, { useMemo, useState } from 'react';

export default function Tools() {
  const [isSpinning, setIsSpinning] = useState(false);

  // Center Hub: ISML Academy
  const centerItem = { name: "ISML", icon: "🏛️", desc: "Academy" };

  // Ring Items
  const tools = [
    { name: "French", icon: "🇫🇷", desc: "DELF Prep" },
    { name: "German", icon: "🇩🇪", desc: "Goethe Prep" },
    { name: "Speaking", icon: "🗣️", desc: "Fluency" },
    { name: "Reading", icon: "📖", desc: "Comprehension" },
    { name: "Writing", icon: "✍️", desc: "Grammar" },
    { name: "Listening", icon: "🎧", desc: "Audio Training" },
    { name: "Culture", icon: "🌏", desc: "Etiquette" },
    { name: "CEFR", icon: "🇪🇺", desc: "EU Standards" }
  ];

  const radius = 250; 

  const toolsWithPosition = useMemo(() => {
    return tools.map((tool, index) => {
      const total = tools.length;
      const angle = (index / total) * 360 - 90; 
      const radians = angle * (Math.PI / 180);
      
      return {
        ...tool,
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
      };
    });
  }, [tools]);

  // Trigger Spin on Click
  const handleHubClick = () => {
    // If already spinning, do nothing (or reset)
    if (isSpinning) return;

    setIsSpinning(true);
    // Remove the class after animation completes (1s) so we can click again later
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <section id="languages" className="wheel-section">
      <div className="section-header center">
        <h2>Curriculum & Skills</h2>
        <p className="subtitle">Interactive Learning Path</p>
      </div>

      <div className="wheel-container">
        {/* CENTER HUB: Click to Spin */}
        <div className="wheel-hub" onClick={handleHubClick}>
            <span className="hub-icon">{centerItem.icon}</span>
            <span className="hub-title">{centerItem.name}</span>
            <span className="click-hint">Click Me</span>
        </div>

        {/* SPINNING ORBIT: Adds 'spin-active' class when state is true */}
        <div className={`wheel-orbit ${isSpinning ? 'spin-active' : ''}`}>
            {toolsWithPosition.map((item, index) => (
            <div 
                key={item.name} 
                className="orbit-item"
                style={{ '--x': `${item.x}px`, '--y': `${item.y}px` }}
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