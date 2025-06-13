import Image from "next/image";
import Link from "next/link";

export default function ClientSatisfactionSection() {

    const services = [
        {
            icon: '/icons/sat-1.svg',
            title: 'Strategic Staffing Expertise',
            description:
                'We bridge the gap between talent and opportunity by placing the right healthcare professionals, travel nurses, <a href=\"https://ytchealthcare.com/service/physician/\" ><u>physicians</u></a>, and other medical professionals, where they are needed most. From the beginning, your staffing challenges become our mission.',
        },
        {
            icon: '/icons/sat-2.svg',
            title: 'Exceptional Talent Pool',
            description:
                'Our professionals don\’t just meet qualifications, they always exceed clients\’ expectations. They are Certified and skilled professionals with extensive years of experience in the healthcare industry.',
        },
        {
            icon: '/icons/sat-3.svg',
            title: 'Clear and Honest Partnership',
            description:
                'Say goodbye to hidden fees and unclear commitments. YTC Healthcare offers transparent processes and works with the clients at every step of the process. You\’ll always be aware of the process and the outcomes. Our transparency is to develop trust every step of the way with you.',
        },
        {
            icon: '/icons/sat-4.svg',
            title: 'Impact-Driven Care',
            description:
                'YTC Healthcare goes beyond just filling up the staffing shortages, we ensure that every healthcare professional deployed is satisfied with their employers and vice versa. This is to empower healthcare networks and facilities to deliver quality healthcare where it matters the most.',
        }
    ];


    return (
        <section className="max-w-[1320px] mx-auto mb-10 lg:mb-0 lg:py-16 px-6 md:px-20 bg-white flex gap-10 md:gap-20 flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                {/* Text Section */}
                <div className="md:max-w-4xl md:pr-18">
                    <p className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                        <span className="text-teal-600 text-xl"><Image src="/images/ic2.png" width={20} height={20} alt="YTC Healthcare" /></span> Your Health is Our Top Goal
                    </p>
                    <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
                        Here&apos;s Why We Maintain 100% Client Satisfaction
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        YTC Healthcare understands your need for highly skilled and certified healthcare professionals.
                        We work side by side with the management to deliver the best healthcare professionals to enhance patient care and improve facility efficiency.
                        Last but not least, we fill critical healthcare staffing gaps that no one does.
                        Our support team is always here to provide you with the best staffing solutions that make a difference.
                    </p>
                </div>

                {/* Button */}
                <div className="flex-shrink-0">
                    <Link href="/about-us/">
                        <button className="bg-teal-600 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-teal-700 transition">
                            Why Choose Us
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-[4%]">
                {services.map((item, index) => {
                    return <div key={index} className="relative w-[100%] md:w-[48%] md:mb-[45px] bg-white border  border-[#dadee2] rounded-xl py-[50px] px-[35px] shadow-sm hover:shadow-md transition healthcarebox">
                        <div className="flex items-center gap-4 lg:gap-10">
                            <div className="flex-shrink-0">
                                <Image src={item.icon} width={100} height={100} alt="Icon" className="w-12 h-12" />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }}/>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    );
}
