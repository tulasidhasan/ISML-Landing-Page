import { useRef } from "react";
import AnimatedNumber from "./AnimatedNumber";
import useSectionActive from "../hooks/useSectionActive";

export default function Stats() {
  const sectionRef = useRef(null);
  useSectionActive(sectionRef);

  const items = [
    { value: 10000, label: "Learners", suffix: "+" },
    { value: 100, label: "Beginner Friendly", suffix: "%" },
    { value: 50, label: "Hands-On Learning", suffix: "+" },
    { value: 95, label: "Satisfaction", suffix: "%" }
  ];

  return (
    <div 
      ref={sectionRef} 
      className="stats-container fade-up show"
    >
      <div className="stats-glass-strip">
        {items.map((item, index) => (
          <div key={item.label} className="stat-item">
            <div className="stat-number">
              <AnimatedNumber value={item.value} suffix={item.suffix} />
            </div>
            <div className="stat-label">{item.label}</div>
            
            {/* Show divider line for all items except the last one */}
            {index !== items.length - 1 && <div className="stat-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}