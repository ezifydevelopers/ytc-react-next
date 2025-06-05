"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";

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
        <section className="py-16 px-6 md:px-20 bg-white">
            <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-18">
                {/* Left Content */}
                <div className="md:col-span-2 flex flex-col mb-10 lg:mb-0 md:flex-row bg-gray-100 md:p-24 rounded-2xl shadow-md gap-8 p-8">
                    <div className="md:w-[50%] w-[100%] flex flex-col gap-[23px] ">
                        <p className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                            <span className="text-teal-600 text-xl"><Image src="/images/ic2.png" width={20} height={20} alt="YTC Healthcare" /></span> Welcome to YTC Healthcare
                        </p>
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
                            Filling Healthcare Staffing Shortages<br />
                            With Extensive Talent Pool
                        </h2>

                        <Link href="/about-us/">
                            <button className="bg-teal-600 cursor-pointer text-white px-6 py-4 rounded-2xl hover:bg-teal-700 transition w-fit">
                                View More About Us
                            </button>
                        </Link>
                    </div>
                    <div className="md:w-[50%] w-[100%] flex items-center justify-center">
                        <p className="text-gray-600 text-justify">
                            We provide healthcare professionals who are skilled and ready to work. As a healthcare recruiting partner, we are meticulous about the candidates we choose to send to your facility. From locum tenens nurse practitioners to <a href="https://ytchealthcare.com/service/nurses/" ><u>skilled travel nurses</u></a>, we supply professionals who are smart, efficient, and focused on delivering patient-centered care, especially in underserved communities.
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-teal-600 text-white pt-20 md:pb-30 pb-16 px-5 lg:px-20 rounded-2xl relative overflow-hidden flex flex-col gap-[23px] transition-opacity duration-300 ease-in-out">
                    <p className="text-lg font-semibold flex items-center gap-2 mb-4 text-black">
                        <span className="text-xl"><Image src="/images/ic1-golden.png" width={20} height={20} alt="YTC Healthcare" /></span> Our Mission
                    </p>
                    <p className="leading-9 font-[600] text-lg lg:min-h-[252px]">
                        {paragraphs[current]}
                    </p>

                    {/* Arrows */}
                    <div className="flex gap-4 justify-end relative top-5">
                        <button onClick={handlePrev} className="w-17 h-17 border border-[#4EA89D] rounded-full flex items-center justify-center hover:bg-white hover:text-teal-600 transition">
                            <FaArrowLeft />
                        </button>
                        <button onClick={handleNext} className="w-17 h-17 border border-[#4EA89D] rounded-full flex items-center justify-center hover:bg-white hover:text-teal-600 transition">
                            <FaArrowRight />
                        </button>
                    </div>

                    {/* Decorative background (optional) */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
