'use client'
import React from 'react';
import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import Footer from '../components/footer';
import { ArrowRight } from "lucide-react";
import { FaStarOfLife } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const HealthcareStaffing = () => {

    const cards = [
        {
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,210.76,42c-28,24.23-51.72,12.49-79.21-1.12C103.07,26.76,70.78,10.79,34.76,42ZM208,164.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path></svg>,
            "title": "Our Commitment",
            "bg": "bg-[#f1f2f2]",
            "text": "Our commitment goes beyond recruitment—we do not simply fill positions. We stay actively involved to ensure performance, satisfaction, and alignment between staff and facilities. Every assignment is part of a larger mission: connecting qualified frontline staff, including developmental support workers, with the communities that rely on consistent, skilled care. Our goal is to help healthcare organizations maintain dependable, meaningful healthcare delivery—one trusted professional at a time."
        },
        {
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path></svg>,
            "title": "Why Choose Us?",
            "bg": "bg-[#cfe6ef]",
            "text": "We prioritize reliable healthcare support over quick fixes. Every professional we place is chosen not just for credentials, but for their ability to take full responsibility for patient care. Our screening and hiring process is transparent, built to create mutual trust between medical staff and employers. Whether an organization needs social service workers, support staff, or clinical specialists, we make it easier to rely on our healthcare staffing solutions without the guesswork."
        },
        {
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path></svg>,
            "title": "Working Together for a Healthy Life",
            "bg": "bg-[#fcd884]",
            "text": "We support patients throughout their care journeys, with a 99% satisfaction rate across our home-based and clinical staffing services. Through our work in hospitals, clinics, and underserved communities, YTC Healthcare reaches thousands of lives every day. As a trusted healthcare workforce solution, we match the right professionals, such as child care workers, with the right environments, ensuring care is not delayed and no one is left behind."
        }
    ]

    const HealthcareCards = [
        {
            title: 'Social Service Worker',
            description: 'Social service workers are the heart of community support, helping individuals and families navigate life’s challenges.',
            img: '/images/02-Social-Service-Worker.jpg',
            linkHref: "/service/social-service-workers/",
        },
        {
            title: 'Personal Support Worker Staffing',
            description: 'Personal Support Workers provide hands-on assistance to individuals who need help with daily living.',
            img: '/images/03-Personal-Support-Worker.jpg',
            linkHref: "/service/personal-support-workers/",
        },
        {
            title: 'Hire Qualified Doctors & Specialists',
            description: 'Physicians are the superheroes in the healthcare industry, diagnosing diseases that are often taken lightly.',
            img: '/images/04-Physicians.jpg',
            linkHref: "/service/physician/",
        },
        {
            title: 'Child Care Staffing Services',
            description: 'Your Talent Consultancy Healthcare doesn’t overlook child care; we have certified childcare workers in our talent pool.',
            img: '/images/06-Child-Care-Worker.jpg',
            linkHref: "/service/child-care-solutions/",
        },
        {
            title: 'Developmental Support Worker Staffing',
            description: 'Development support workers play a critical role in improving the quality of life for individuals with developmental disabilities.',
            img: '/images/07-Development-Support-Workers.jpg',
            linkHref: "/service/developmental-support-workers/",
        },
        {
            title: 'Nurse Staffing Solutions',
            description: 'Nurses are the backbone of the healthcare system—bringing their skills, care, and heart to every patient, every time.',
            img: '/images/05-Nurses.jpg',
            linkHref: "/service/nurses/",
        },
    ];

    const steps = [
        {
            id: 1,
            title: "Share Your Staffing Needs",
            desc: `Contact us and explore the certified talent pool. Numerous professionals are ready and waiting to join your team in no time,`,
            linkText: "get in touch with our team",
            linkHref: "/contact",
            suffix: " to start the conversation today.",
            image: "/images/sv10.webp",
        },
        {
            id: 2,
            title: "Transparent Screening Process",
            desc: `We ensure you are along the way with us in finding you the perfect fit for your healthcare facility or personal need. We remain by your side 24/7 to make the process seamless.`,
            image: "/images/sv12.webp",
        },
        {
            id: 3,
            title: "Clear Terms With No Hidden Fee",
            desc: `We have clear terms and conditions with no hidden charges. We aim to build stronger and longer relationships with our clients in their care journey.`,
            image: "/images/sv14.webp",
        },
        {
            id: 4,
            title: "Low Turnover Rates",
            desc: `Your Talent Consultancy ensures to maintain low turnover rates by providing the perfect match everytime. Our healthcare workforce is skilled and passionate enough to make a real difference in your healthcare facility`,
            image: "/images/sv16.webp",
        },
    ];

    return (
        <div>
            <Head>
                <link rel="canonical" href="https://ytchealthcare.com/healthcare-staffing/" />
            </Head>
            <Header />
            <div className=' mx-3 sm:mx-4 md:mx-6'>
                <PageHeader
                    img={'/images/01-HealthCare-Workers-1.webp'}
                    title={'Healthcare Staffing Services'}
                    description={'YTC Healthcare connects hospitals, clinics, and families with certified medical professionals—nurses, physicians, personal support workers, and more. These services are rooted in real-world healthcare challenges, not checklists, built on clinical awareness and operational reliability. By maintaining a rigorous selection process and focusing on quality care, we help organizations strengthen their healthcare delivery without delay or compromise.'}
                />
            </div>
            <section className="staffing-solution my-5 mx-3 sm:mx-4 md:mx-6 bg-white text-gray-900 rounded-tr-[20px] sm:rounded-tr-[25px] md:rounded-tr-[30px] rounded-br-[20px] sm:rounded-br-[25px] md:rounded-br-[30px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-[55px]">
                    {/* Header Section */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <p className="text-xs sm:text-sm font-semibold text-gray-600 flex items-center gap-2">
                            <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-sm"></span>
                            <span>Seamless Medical Staffing Support for Every Healthcare Facility</span>
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                            Connecting Healthcare
                            <br className="hidden sm:block" />
                            Facilities with Exceptional
                            <br className="hidden sm:block" />
                            Talent
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
                                    We touch millions of souls through the dedication of our healthcare professionals—every shift, every call, every placement matters. YTC Healthcare offers healthcare staffing solutions to support facilities that are often stretched thin or underserved. Whether it’s an urgent placement or a long-term role, our nurses, support workers, and clinical staff bring both compassion and capability to every assignment. Backed by a trusted medical staffing agency, we make sure organizations receive reliable healthcare support when and where it matters most.
                                </p>
                                <button className="w-full sm:w-auto mt-4 bg-[#2ea79c] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:bg-[#249486] flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200" onClick={() => window.location.href = "/contact"}>
                                    <span>Get Your Medical Expert Now</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-6 md:px-0 pb-10 max-w-7xl mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                bg={card.bg}
                                iconBg={card.iconBg}
                                text={card.text}
                                highlight={card.highlight}
                                tail={card.tail}
                            />
                        )
                    })}
                </div>
            </div>
            <section className=" mx-auto px-4 py-10 mx-3 sm:mx-4 md:mx-5 md:pb-16 md:pt-4 rounded-[20px]" style={{ background: "linear-gradient(to bottom, #e2f0f7, rgba(227, 241, 248, 0));" }}>
                <div className="px-4 pb-10 md:pb-16 pt-20 text-center">
                    <div className="flex justify-center mb-4">
                        <Image src="/images/ic2.png" width={20} height={20} alt="Health Care" />
                    </div>

                    <p className="text-sm md:text-base text-gray-500 mb-3">
                        We Are Proud to Highlight Our Healthcare Workers In Our Talent Pool
                    </p>

                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B2338] leading-tight mb-4">
                        Our Healthcare Workers
                    </h2>

                    <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
                        Behind every successful placement is a healthcare professional who shows up, skilled, dependable, and committed. YTC Healthcare’s talent pool is built on depth and diversity. From certified physicians and nurses to pharmacists, behavioral therapists, and social service workers, each professional plays a vital role in delivering quality care. Whether serving in clinics, hospitals, or home environments, our workforce stands behind every shift with experience and purpose. Together, they form the core of our healthcare recruitment mission—keeping families and facilities supported, without interruption.
                    </p>
                </div>
                <div className="bg-gradient-to-br py-10 px-4 sm:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {HealthcareCards.map((card, index) => (
                            <Link key={index} href={`${card.linkHref}`}>
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl border border-[#dadee2] px-5 py-5 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-2 duration-300 `}
                                >
                                    <div className="relative h-60 w-full ">
                                        <Image
                                            src={card.img}
                                            alt={card.title}
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-6 px-5">
                                        <h3 className="text-xl font-semibold mb-2 text-[#051b2e]">{card.title}</h3>
                                        <p className="text-[#68747a] text-[15px]">{card.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-white py-30 rounded-xl px-4 mb-10 mx-5" style={{ backgroundImage: 'url(/images/sv17.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                    {steps.map((step) => (
                        <div key={step.id}>
                            <div className="w-45 h-45 mx-auto mb-4 rounded-full overflow-hidden">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={150}
                                    height={150}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="flex items-center justify-center mb-2">
                                <span className="w-px h-[1px] bg-[#359c8f] flex-1 mx-2"></span>
                                <div className="w-12 h-12 flex items-center justify-center bg-[#4BA08D] rounded-full text-black text-lg">
                                    {step.id}
                                </div>
                                <span className="w-px h-[1px] bg-[#359c8f] flex-1 mx-2"></span>
                            </div>

                            <h3 className=" font-semibold mb-2 text-lg mt-8">{step.title}</h3>
                            <p className="text-md text-[#B3C0CE]">
                                {step.desc}{" "}
                                {step.linkText && (
                                    <a href={step.linkHref} className="text-[#4BA08D] underline">
                                        {step.linkText}
                                    </a>
                                )}
                                {step.suffix}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HealthcareStaffing;


function Card({ icon, title, bg, iconBg, text, highlight, tail }) {
    return (
        <div className={`${bg} rounded-2xl p-10 text-center shadow-sm`}>
            <div className={`w-17 h-17 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#08243c]`}>
                {icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {text}
            </p>
        </div>
    );
}