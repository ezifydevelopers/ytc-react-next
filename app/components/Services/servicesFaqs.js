'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What Services Are Delivered Under 24 Hours Home Care?",
    answer:
      "Our services include but are not limited to, bathing, feeding, medication timely administration, and cleaning among other services.",
  },
  {
    question: "Are The Caregivers Qualified And Experienced?",
    answer:
      "Yes, all caregivers are carefully vetted, trained, and experienced to provide professional, compassionate care.",
  },
  {
    question: "How Does One Go About Arranging For A Caregiver To Take Up A Full-Time Position?",
    answer:
      "You can contact our team directly. We’ll guide you through a consultation and help you match with a suitable full-time caregiver.",
  },
  {
    question: "What Happens When I Have Concerns Or A Problem With The Caregiver?",
    answer:
      "You can reach out to our support team any time. We take concerns seriously and will work to resolve them promptly.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-15">
      <h2 className="text-3xl font-bold mb-4">FAQs About 24-Hours Home Care Services</h2>
      <p className="text-gray-600 mb-6">
        There are many questions about the service, we have selected frequently asked questions about this service. If you do not see your answer, please get in touch with us for more queries.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-300 rounded-xl transition-all duration-300 ${
              openIndex === index ? 'shadow-md' : ''
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 pt-0 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
