"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from 'react';

export default function YtcHealthcareSection() {
    const [current, setCurrent] = useState(0);

    const paragraphs = [
        "YTC Healthcare is on a mission to enhance healthcare efficiency by connecting medical scientists and other experts to vital healthcare hubs like Toronto community centres. We aim to ensure innovative and community-focused healthcare solutions are available for everyone.",
        "Our services bridge the gap between healthcare talent and institutions, ensuring top-tier staffing solutions that support continuous care, research, and development within local communities.",
        "We believe in people-first partnerships, delivering customized staffing strategies that empower hospitals, clinics, and care centres to operate at peak performance with highly qualified professionals."
    ];

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? paragraphs.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === paragraphs.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Left Content */}
                <div className="lg:col-span-2">
                    <div className="flex flex-col md:flex-row bg-gray-100 p-6 sm:p-8 md:p-12 lg:p-24 rounded-xl sm:rounded-2xl shadow-md gap-6 md:gap-8">
                        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-[23px]">
                            <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2 mb-2 sm:mb-3">
                                <span className="text-teal-600">
                                    <Image 
                                        src="/images/ic2.png" 
                                        width={16}
                                        height={16}
                                        className="w-4 sm:w-5 h-4 sm:h-5"
                                        alt="Welcome icon"
                                    />
                                </span>
                                Welcome to YTC Healthcare
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
                                Filling Healthcare Staffing Shortages
                                <br className="hidden sm:block" />
                                With Extensive Talent Pool
                            </h2>

                            <button className="bg-teal-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-teal-700 transition w-full sm:w-fit text-sm sm:text-base">
                                View More About Us
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <p className="text-sm sm:text-base text-gray-600 text-left md:text-justify">
                                We provide healthcare professionals who are skilled and ready to work. As a healthcare recruiting partner, we are meticulous about the candidates we choose to send to your facility. From locum tenens nurse practitioners to skilled travel nurses, we supply professionals who are smart, efficient, and focused on delivering patient-centered care, especially in underserved communities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-teal-600 text-white p-6 sm:p-8 md:pt-20 md:pb-30 md:px-20 rounded-xl sm:rounded-2xl relative overflow-hidden flex flex-col gap-4 sm:gap-6 md:gap-[23px] transition-opacity duration-300 ease-in-out">
                    <p className="text-base sm:text-lg font-semibold flex items-center gap-2 mb-2 sm:mb-4 text-black">
                        <span>
                            <Image 
                                src="/images/ic1-golden.png" 
                                width={16}
                                height={16}
                                className="w-4 sm:w-5 h-4 sm:h-5"
                                alt="Mission icon"
                            />
                        </span>
                        Our Mission
                    </p>
                    <p className="leading-7 sm:leading-8 md:leading-9 font-[600] text-base sm:text-lg min-h-[200px] sm:min-h-[220px] md:min-h-[252px]">
                        {paragraphs[current]}
                    </p>

                    {/* Arrows */}
                    <div className="flex gap-3 sm:gap-4 justify-end relative top-2 sm:top-5">
                        <button 
                            onClick={handlePrev} 
                            className="w-10 h-10 sm:w-12 sm:h-12 border border-[#4EA89D] rounded-full flex items-center justify-center hover:bg-white hover:text-teal-600 transition"
                            aria-label="Previous slide"
                        >
                            <FaArrowLeft className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="w-10 h-10 sm:w-12 sm:h-12 border border-[#4EA89D] rounded-full flex items-center justify-center hover:bg-white hover:text-teal-600 transition"
                            aria-label="Next slide"
                        >
                            <FaArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Decorative background */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full transform translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}