'use client';
import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQCard() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            "question": "Is YTC Healthcare licensed to operate in Canada and the USA?",
            "answer": "Yes, we are a licensed and compliant healthcare staffing agency in both countries."
        },
        {
            "question": "How fast can YTC Healthcare fill urgent care shifts?",
            "answer": "We offer 24/7 support and rapid staffing, including same-day placements."
        },
        {
            "question": "Does YTC Healthcare serve hospitals and care homes?",
            "answer": "Yes, we staff hospitals, long-term care homes, and private healthcare facilities."
        },
        {
            "question": "How do I contact YTC Healthcare’s local offices?",
            "answer": "Reach us via our website, or call our Mississauga or Philadelphia office directly."
        }
    ]

    const faqs = [
        {
            "question": "How can I apply for a healthcare job with YTC Healthcare?",
            "answer": "Job seekers can apply online or contact our local offices in Mississauga or Philadelphia."
        },
        {
            "question": "Can YTC Healthcare provide temporary or permanent staff?",
            "answer": "Yes, we offer both temporary and permanent healthcare staffing solutions based on your needs."
        },
        {
            "question": "What sets YTC Healthcare apart from other agencies?",
            "answer": "Our commitment to reliability, compliance, and personalized service makes us a trusted staffing partner."
        },
        {
            "question": "How does YTC ensure quality in healthcare staffing?",
            "answer": "We use a rigorous selection process and continuous performance monitoring to maintain high standards."
        }
    ]

    return (
        <div className="flex flex-col items-center items-inherit lg:flex-row gap-8 px-5 md:px-12  md:pb-20 pb-10 lg:pb-0">
            <div className="bg-gradient-to-b from-[#359C8FA6] py-10 md:px-15 to-[#359C8F] text-gray-900 rounded-2xl p-8 w-full max-w-md md:max-w-xl lg:max-w-2xl relative overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently<br />Asked Questions.</h2>
                {/* <p className="text-sm md:text-base text-black mb-6">
                    Explore the most frequently asked questions by many healthcare Facilities
                </p> */}
                <div className="h-px bg-white mb-5"></div>
                <div className="space-y-4">
                    {data?.map((faq, index) => (
                        <div
                            key={index}
                            className={` border border-gray-300 rounded-xl transition-all duration-300 ${openIndex === index ? 'shadow-md' : ''
                                }`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full px-3 py-2 text-left text-[14px] cursor-pointer"
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
                                    className="px-3 pb-5 pt-0 text-gray-600 text-sm"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="pt-5">
                    <div className="bg-[#0b2239] p-5 rounded-2xl inline-flex items-center justify-center">
                        <span className="text-white text-2xl">
                            <Image src="/icons/faq-1.svg" width={50} height={50} alt="Ytc healthcare" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-[#06273D] text-white rounded-2xl  p-8 w-full max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col justify-center gap-5 ">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                    Connect With Our <br /> Support Team
                </h2>

                <p className="text-[#B3C0CE] text-sm md:text-base mb-6">
                    Contact us to get faster solutions to your healthcare staffing needs;
                </p>

                <ul className="space-y-4">
                    <li className="flex items-start gap-3 border-b border-white/10 pb-3">
                        <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                        <span className="font-medium">
                            Get Unmatched healthcare professionals in no time
                        </span>
                    </li>
                    <li className="flex items-start gap-3 border-b border-white/10 pb-3">
                        <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                        <span className="font-medium">
                            Reduce your turnover to the maximum
                        </span>
                    </li>
                    <li className="flex items-start gap-3 border-b border-white/10 pb-3">
                        <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                        <span className="font-medium">
                            Quotes that are exactly designed for facility owners
                        </span>
                    </li>
                </ul>
            </div>

            <div className="bg-gradient-to-b from-[#359C8FA6] to-[#359C8F] py-10 md:px-15 text-gray-900 rounded-2xl p-8 w-full max-w-md md:max-w-xl lg:max-w-2xl relative overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently<br />Asked Questions.</h2>
                {/* <p className="text-sm md:text-base text-black mb-6">
                    Explore the most frequently asked questions by many healthcare Facilities
                </p> */}
                <div className="h-px bg-white mb-5"></div>
                <div className="space-y-4">
                    {faqs?.map((faq, index) => (
                        <div
                            key={index}
                            className={` border border-gray-300 rounded-xl transition-all duration-300 ${openIndex === index ? 'shadow-md' : ''
                                }`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full px-3 py-2 text-left text-[14px] cursor-pointer"
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
                                    className="px-3 pb-5 pt-0 text-gray-600 text-sm"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="pt-5">
                    <div className="bg-[#0b2239] p-5 rounded-2xl inline-flex items-center justify-center">
                        <span className="text-white text-2xl">
                            <Image src="/icons/faq-2.svg" width={50} height={50} alt="Ytc healthcare" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
