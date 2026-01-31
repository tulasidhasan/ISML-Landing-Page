import { useState } from "react";

const faqs = [
  {
    question: "Where are the classes conducted?",
    answer: "All classes are conducted LIVE online via Google Meet. You will receive the meeting link after registration." // From Circular
  },
  {
    question: "What is the duration of the program?",
    answer: "The Foundation Program runs for 12-14 weeks. Each session is 2 hours long (1.5 hrs teaching + 30 mins guided speaking practice)." // From Circular
  },
  {
    question: "Can I pay in installments?",
    answer: "No. As per the 2026 Academic Circular, the fee of ₹1,299 is a one-time payment with no installment options." // From Circular
  },
  {
    question: "What languages are available in this batch?",
    answer: "The 2026 Foundation Batch focuses on French (DELF A1) and German (Goethe A1). Japanese JLPT prep is available in select batches." // Clarifying Circular vs Profile
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes. Upon successful completion of the course and mock assessments, you will receive an official ISML Certificate." // From Circular
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