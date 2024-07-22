"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState();

  const faqs = [
    {
      question: "What is the cost of a mobile application?",
      answer:
        "The cost depends on various factors such as features, complexity, and development time. cost depends on various factors such as features, complexity, and development time.",
    },
    {
      question: "How long will development take?",
      answer:
        "Development time varies based on project requirements, but typically ranges from 3 to 6 months.",
    },
    {
      question: "Do you provide a guarantee for the mobile application?",
      answer:
        "Yes, we provide a guarantee to ensure the application meets your requirements and functions correctly.",
    },
    {
      question: "I will not tell my idea, do you guarantee confidentiality?",
      answer:
        "Absolutely, we guarantee full confidentiality for all projects and ideas shared with us.",
    },
  ];

  return (
    <div className="my-12 w-5/6 m-auto">
      <h2 className="text-4xl font-bold my-4">FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item border-b py-4"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer mt-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
