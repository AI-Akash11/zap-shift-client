import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How does this posture connector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. It helps reduce pain and keeps your body in natural alignment effortlessly.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes! Our product adjusts easily to different body shapes and sizes. It’s safe for adults, teens, and even older users seeking posture support.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Consistent usage helps train your muscles to maintain proper posture. Many users report noticeable improvement within just a few weeks of use.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Some models include vibration sensors that gently alert you when you slouch for too long, helping you maintain healthy posture habits.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can subscribe to our waiting list, and we’ll notify you instantly through email and SMS as soon as it becomes available again.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-11/12 md:w-5/6 mx-auto py-16">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-600 mt-2 md:w-2/3 mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve
          proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`collapse bg-white border rounded-xl shadow-sm ${
              openIndex === index ? "border-secondary bg-[#eaf8f0]" : ""
            }`}
          >
            {/* Required hidden checkbox */}
            <input
              type="checkbox"
              className="peer"
              checked={openIndex === index}
              onChange={() => toggle(index)}
              readOnly
            />

            <div
              className="collapse-title text-lg font-medium flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              {item.question}
              {openIndex === index ? (
                <FaChevronUp className="text-secondary" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>

            <div className="collapse-content peer-checked:block hidden text-gray-700 leading-relaxed">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <Link to={'/about-us'} className="btn bg-secondary text-white px-8 rounded-full hover:bg-secondary/80">
          See More About us <span className="ml-2">➜</span>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
