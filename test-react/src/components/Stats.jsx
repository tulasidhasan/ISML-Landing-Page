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
    <section
      ref={sectionRef}
      style={{
        display: "grid",
        gap: 20,
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))"
      }}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="card fade-up show"
          style={{ textAlign: "center" }}
        >
          <AnimatedNumber value={item.value} suffix={item.suffix} />
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}
