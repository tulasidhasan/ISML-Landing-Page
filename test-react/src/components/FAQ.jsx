import { useState } from "react";

const faqs = [
  {
    question: "What are languages and why should I learn a new language?",
    answer:
      "Languages are systems of communication that help express ideas and emotions. Learning a new language improves cognitive skills, cultural understanding, and career opportunities."
  },
  {
    question: "How did human languages evolve?",
    answer:
      "Languages evolved gradually as humans needed better communication for survival, cooperation, and social interaction."
  },
  {
    question: "What are modern languages?",
    answer:
      "Modern languages are actively spoken languages used today in education, business, and technology."
  },
  {
    question: "What are the advantages of learning French?",
    answer:
      "French opens opportunities in global communication, international careers, and cultural exploration."
  },
  {
    question: "What are the advantages of learning German?",
    answer:
      "German is valuable for engineering, science, and higher education, especially in Europe."
  },
  {
    question: "What are the advantages of learning Japanese?",
    answer:
      "Japanese connects you to technology-driven industries and Japan’s rich cultural heritage."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq">
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>
        Frequently Asked Questions
      </h2>

      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`faq-item ${isOpen ? "open" : ""}`}
            onClick={() =>
              setOpenIndex(isOpen ? null : index)
            }
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
            </div>

            {/* Animated container */}
            <div className="faq-content">
              <p className="faq-answer">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
