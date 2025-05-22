import React from 'react';

const PageHeader = ({ img, title, description }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md mx-5">
            {/* Header Section */}
            <div className="relative h-[300px] w-full">
                <div
                    // src={img}
                    alt="Home Care"
                    className="w-full object-cover h-full"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(44, 62, 80, 0.9)), url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',  
                    }}
                />
                <div className='container'>
                    <div className="absolute md:bottom-4 bottom-20 left-5 md:left-40 text-white">
                        <h1 className="text-3xl md:text-5xl text-white font-semibold">
                            {title}
                        </h1>
                    </div>

                    <div className="absolute md:bottom-4 bottom-10 left-5 md:left-300 text-white text-sm md:text-base flex items-center space-x-2">
                        <span className="hover:underline cursor-pointer">Home</span>
                        <span>→</span>
                        <span className="text-green-300">{title}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            {description && <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="md:w-2/4 text-gray-800 text-base md:text-lg leading-relaxed ">
                    <p className="md:ml-30">
                        {description}
                    </p>
                </div>

                {/* Call Section */}
                <div className="flex items-center gap-4 md:mr-30">
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
            </div>}
        </div>
    );
};

export default PageHeader;