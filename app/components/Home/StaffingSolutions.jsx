import { ArrowRight } from "lucide-react";

export default function StaffingSolutions() {
    return (
        <section className="staffing-solution mx-3 sm:mx-4 md:mx-6 bg-white text-gray-900 rounded-tr-[20px] sm:rounded-tr-[25px] md:rounded-tr-[30px] rounded-br-[20px] sm:rounded-br-[25px] md:rounded-br-[30px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-[55px]">
                {/* Header Section */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    <p className="text-xs sm:text-sm font-semibold text-gray-600 flex items-center gap-2">
                        <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-sm"></span>
                        <span>Professional and Reliable Healthcare Staffing Provider</span>
                    </p>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                        Comprehensive Healthcare
                        <br className="hidden sm:block" />
                        Staffing Solutions for All
                        <br className="hidden sm:block" />
                        Your Medical Needs
                    </h2>

                    {/* Stats and Content */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 mt-8 sm:mt-10">
                        {/* Satisfaction Stats */}
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#071b2f] flex items-center justify-center shrink-0">
                                <svg className="w-6 sm:w-7 md:w-[30px]" fill="#FFCC53" xmlns="http://www.w3.org/2000/svg" viewBox="0 -25 511.99997 511">
                                    <path d="m506.648438 115.785156c-8.527344-33.441406-26.703126-62.277344-52.5625-83.390625-25.191407-20.566406-56.050782-31.894531-86.894532-31.894531-23.648437 0-46.203125 6.367188-67.042968 18.921875-16.457032 9.917969-31.261719 23.40625-44.191407 40.242187-29.410156-38.332031-68.238281-59.164062-111.183593-59.164062-30.832032 0-61.679688 11.328125-86.867188 31.894531-25.851562 21.113281-44.023438 49.945313-52.550781 83.386719-6.253907 24.527344-9.101563 58.949219 3.238281 100.347656h77.488281l27.980469-55.964844c2.542969-5.082031 7.734375-8.292968 13.414062-8.292968 5.683594 0 10.875 3.210937 13.414063 8.292968l50.84375 101.683594 50.84375-101.683594c2.539063-5.082031 7.730469-8.292968 13.414063-8.292968 5.679687 0 10.871093 3.210937 13.414062 8.292968l27.980469 55.964844h104.472656c8.285156 0 14.996094 6.714844 14.996094 14.996094 0 8.285156-6.710938 15-14.996094 15h-113.742187c-5.679688 0-10.871094-3.210938-13.414063-8.292969l-18.710937-37.425781-50.84375 101.683594c-2.542969 5.082031-7.734376 8.289062-13.414063 8.289062-5.683594 0-10.875-3.207031-13.414063-8.289062l-50.839843-101.683594-18.714844 37.429688c-2.542969 5.078124-7.734375 8.289062-13.414063 8.289062h-75.523437c5.011719 11.117188 11.136719 22.625 18.574219 34.480469 40.828125 65.113281 111.609375 125.445312 210.367187 179.316406 2.238281 1.222656 4.710938 1.832031 7.183594 1.832031s4.941406-.609375 7.179687-1.828125c98.789063-53.878906 169.589844-114.207031 210.4375-179.316406 44.132813-70.351563 42.347657-128.460937 33.078126-164.824219zm0 0" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-4xl sm:text-5xl md:text-[75px] font-bold text-[#2ea79c]">
                                    99<span className="text-black">%</span>
                                </div>
                                <div className="text-xs sm:text-sm font-semibold text-gray-800">
                                    Customer Satisfaction
                                </div>
                            </div>
                        </div>

                        {/* Description and CTA */}
                        <div className="text-[#68747A] lg:w-[30%]">
                            <p className="text-sm sm:text-base mb-4 sm:mb-6">
                                We touch thousands of lives daily through our specialized healthcare staffing services. We provide targeted healthcare staffing solutions to help facilities stay fully equipped, even during shortages. As a nurse staffing agency, we specialize in placing certified professionals where they are needed most, whether for temporary, permanent, or bulk roles. With YTC Healthcare, you will never scramble to cover a shift again.
                            </p>
                            <button className="w-full sm:w-auto mt-4 bg-[#2ea79c] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:bg-[#249486] flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200">
                                <span>Get Expert Medical Staff</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}