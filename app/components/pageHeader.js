import React from 'react';

const PageHeader = () => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="relative h-[300px] md:h-[350px] w-full">
                <img
                    src="/homecare.jpg"
                    alt="Home Care"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl text-white font-semibold">
                        24 Hour Home Care Services
                    </h1>
                </div>

                <div className="absolute bottom-4 right-6 text-white text-sm md:text-base flex items-center space-x-2">
                    <span className="hover:underline cursor-pointer">Home</span>
                    <span>→</span>
                    <span className="text-green-300">Staff For 24 Hour Home Care</span>
                </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start justify-between">
                <div className="md:w-2/3 text-gray-800 text-base md:text-lg leading-relaxed">
                    <p>
                        YTC Healthcare supports seniors and individuals with complex needs who require
                        reliable, attentive care throughout the day and night. Our 24-hour{' '}
                        <span className="text-green-600">in-home care services</span> are designed to provide
                        continuous support, ensuring that every client receives supervision, assistance, and
                        comfort without interruption. Backed by a skilled team of caregivers, we deliver the
                        quality of a professional care facility in one place, which matters most, the home.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-4 bg-gray-900 text-white rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.05 5.05a7 7 0 011.414 1.414m3.536 3.536A7 7 0 0118.95 18.95m-3.536-3.536A7 7 0 015.05 5.05m13.9 0a9.969 9.969 0 01-3.414 7.778m0 0A9.969 9.969 0 015.05 18.95M12 4v1m0 14v1m8-8h1M4 12H3"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Call Us When You Need Help!</p>
                        <p className="text-lg font-semibold text-gray-800">
                            24/7 Support: <a href="tel:+13657374000">+1 365 737 4000</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;