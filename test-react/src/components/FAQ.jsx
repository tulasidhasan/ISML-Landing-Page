import { useState } from "react";

const faqs = [
  {
    question: "Why should I learn a new language?",
    answer: "Learning a new language improves cognitive skills, cultural understanding, and opens up global career opportunities in tech and business."
  },
  {
    question: "Is this course suitable for absolute beginners?",
    answer: "Yes! This Foundation Program is designed specifically for students with zero prior knowledge. we start from the very basics."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, upon completing the workshops and exercises, you will receive a verifiable Certificate of Participation from ISML."
  },
  {
    question: "What languages are covered?",
    answer: "We cover the foundations of French, German, and Japanese, giving you a taste of each so you can decide which path to pursue."
  },
  {
    question: "Do I need to install any software?",
    answer: "No. All classes are online, and study materials are provided digitally. You just need a laptop/phone and internet."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="section-title center">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="faq-question">
                  <span>{item.question}</span>
                  <span className="arrow">▼</span>
                </div>
                <div className="faq-content">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}