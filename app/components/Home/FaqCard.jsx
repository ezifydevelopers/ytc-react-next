import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function FAQCard() {
    return (
        <div className="flex flex-col md:flex-row gap-8 px-5 md:px-12 md:py-10">
            <div className="bg-gradient-to-b from-[#359C8FA6] py-30 px-15 to-[#359C8F] text-gray-900 rounded-2xl p-8 w-full max-w-md md:max-w-xl lg:max-w-2xl relative overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently<br />Asked Questions.</h2>
                <p className="text-sm md:text-base text-black mb-6">
                    Explore the most frequently asked questions by many healthcare Facilities
                </p>
                <div className="h-px bg-white mb-25"></div>

                <div className="">
                    <div className="bg-[#0b2239] p-7 rounded-2xl inline-flex items-center justify-center">
                        <span className="text-white text-2xl">
                            <Image src="/icons/faq-1.svg" width={50} height={50} alt="Ytc healthcare" />
                        </span>
                    </div>
                </div>

          
            </div>

            <div className="bg-[#06273D] text-white rounded-2xl  p-8 w-full max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col justify-center gap-5">
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

            <div className="bg-gradient-to-b from-[#359C8FA6] to-[#359C8F] py-30 px-15 text-gray-900 rounded-2xl p-8 w-full max-w-md md:max-w-xl lg:max-w-2xl relative overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently<br />Asked Questions.</h2>
                <p className="text-sm md:text-base text-black mb-6">
                    Explore the most frequently asked questions by many healthcare Facilities
                </p>
                <div className="h-px bg-white mb-25"></div>

                <div className="">
                    <div className="bg-[#0b2239] p-7 rounded-2xl inline-flex items-center justify-center">
                        <span className="text-white text-2xl">
                            <Image src="/icons/faq-2.svg" width={50} height={50} alt="Ytc healthcare" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
