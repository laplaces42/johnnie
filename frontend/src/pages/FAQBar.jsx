import React, { useState } from "react";
import "../stylesheets/FAQBar.css";

export function FAQBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "How do I get started?", answer: "To get started, simply sign up and choose the plan that fits your needs." },
    { question: "What types of departments do you support?", answer: "We support a variety of departments, including finance, HR, IT, and more." },
    { question: "How much is it?", answer: "Our plans start at $29/month. Contact us for custom pricing." },
  ];

  return (
    <div className="faq-bar">
<h2>Frequently Asked Questions</h2>
                <p>
                    Our prices varies on depending on the funding opportunity. To get an accurate estimate for our pricing, complete this quick quote estimator!
                </p>

      <div className="faq-items">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              <h3>{item.question}</h3>
            </div>
            {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
      <p>
            Question didn't get answered? Feel free to contact us at team@johnniegrants.com!
        </p>
    </div>
  );
}

export default FAQBar;
