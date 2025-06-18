'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


export default function FaqAccordion({ data }) {
  console.log(data, 'data........');

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      <h2 className="text-3xl font-bold mb-4">{data?.title}</h2>
      <h2 className="text-3xl font-bold mb-4">{data?.section}</h2>
      <p className="text-gray-600 mb-6">
        {data?.description}
      </p>

      {data?.faqs && <div className="space-y-4">
        {data?.faqs?.map((faq, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-300 rounded-xl transition-all duration-300 ${openIndex === index ? 'shadow-md' : ''
              }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-6 py-5 text-left md:text-lg font-semibold"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div
                className="px-6 pb-5 pt-0 text-gray-600 text-sm"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}

      </div>}
    </div>
  );
}
