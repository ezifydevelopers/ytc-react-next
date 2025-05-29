"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="block pt-4 sm:pt-8 md:pt-[50px] pb-4 sm:pb-6 md:pb-[30px] px-3 sm:px-6 md:px-[10px]">
            <section className="hero-section bg-teal-700 text-white py-8 sm:py-12 md:py-[85px] pb-6 sm:pb-8 md:pb-[30px] px-4 sm:px-6 md:px-[35px] relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center justify-between z-[1]">
                {/* Background Pattern - Optional decorative element */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_75%,transparent_75%,transparent)] bg-[length:350px_350px] opacity-10 z-0"></div>

                <div className="relative sm:max-w-lg md:max-w-2xl z-10 md:text-left">
                    <p className="text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4 tracking-wide text-teal-100">
                        Short on staff? 
                        <span className="hidden sm:inline"> We&apos;ve got you covered in minutes!</span>
                        <span className="sm:hidden block mt-1">We&apos;ve got you covered!</span>
                    </p>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                        YTC HealthCare: 
                        <span className="block mt-2">Your Healthcare 
                            <span className="text-white font-bold"> Staffing Provider</span>
                        </span>
                    </h1>
                    
                    <p className="text-sm sm:text-base md:text-lg text-teal-50/90 mb-6 sm:mb-8 max-w-prose">
                        Don&apos;t let staffing shortages impact your patient&apos;s well-being. YTC Healthcare delivers certified healthcare professionals ready to step in immediately. From locum nurse practitioners to long-term medical oncology nurses, we provide every healthcare professional to fill your staffing shortages.
                    </p>
                    
                    <button className="bg-[#071b2f] mt-6 sm:mt-8 md:mt-[55px] text-white font-bold py-3 px-6 sm:px-8 rounded-md hover:bg-[#0b223c] transition-colors duration-200 transform hover:scale-105 active:scale-95">
                        Fill Staffing Shortage Now
                    </button>
                </div>

                {/* Optional: Add a decorative element for larger screens */}
                <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-teal-600/20 to-transparent"></div>
            </section>
        </div>
    );
}