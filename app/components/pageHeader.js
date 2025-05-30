import React from 'react';

const PageHeader = ({ img, title, description, className }) => {
    return (
        <div className={`${className} bg-white rounded-xl overflow-hidden shadow-md`}>
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
                    <div className="absolute md:bottom-4 bottom-20 left-5 md:left-40 text-white md:w-3xl">
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
            {description && <div className="p-6 md:p-10 flex flex-col xl:flex-row gap-6 xl:items-center xl:justify-between">
                <div className="xl:w-2/4 text-gray-800 text-base md:text-lg leading-relaxed ">
                    <p className="xl:ml-30">
                        {description}
                    </p>
                </div>

                {/* Call Section */}
                <div className="flex items-center gap-4 lg:mr-40">
                    <div className="p-4 bg-gray-900 text-white rounded-full">
                        <div className="pxl-item--icon">
                            <a href="tel:+1 365 737 4000" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M152,96V56a8,8,0,0,1,16,0V76.69l34.34-34.35a8,8,0,0,1,11.32,11.32L179.32,88H200a8,8,0,0,1,0,16H160A8,8,0,0,1,152,96Zm79.88,79.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.24,56.24,0,0,1,80.92,24.13a16,16,0,0,1,16.62,9.51l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a6.84,6.84,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z"></path></svg>                                        </a>
                        </div>
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