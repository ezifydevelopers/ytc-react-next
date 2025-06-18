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

const HomecareStaffing = () => {

    const cards = [
        {
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,210.76,42c-28,24.23-51.72,12.49-79.21-1.12C103.07,26.76,70.78,10.79,34.76,42ZM208,164.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path></svg>,
            "title": "Our Commitment",
            "bg": "bg-[#f1f2f2]",
            "text": "YTC Healthcare stands by every placement. From 24-hour and <a href=\"https://ytchealthcare.com/service/in-home-nursing-care/\" ><u>overnight homecare staffing</u></a> to pediatric support, we offer professional help that meets specific home-based medical needs. Every match is handled with attention and care, bringing certified caregivers directly to your home, ready to serve, support, and uphold clinical excellence."
        },
        {
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path></svg>,
            "title": "Why Choose Us?",
            "bg": "bg-[#cfe6ef]",
            "text": "Our focus remains on dependable outcomes, not volume. YTC Healthcare places qualified homecare professionals who prioritize patient safety, emotional well-being, and continuity of care. We also offer services such as companion care professionals and <a href=\"https://ytchealthcare.com/service/personal-care/\" ><u>affordable in-home staffing</u></a>, ensuring families receive meaningful support. Transparent hiring standards and performance monitoring ensure ongoing collaboration between families and care teams."
        },
        {
            "icon": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path></svg>,
            "title": "Working Together for a Healthy Life",
            "bg": "bg-[#fcd884]",
            "text": "Families trust us to support their most personal care moments. Our commitment to <a href=\"https://ytchealthcare.com/service/senior-care-staffing/\" ><u>senior care staffing services</u></a> has helped underserved communities and families receive consistent, skilled care where they need it most. With a 99% satisfaction rate, we take pride in being a PSW staffing agency that delivers stability, compassion, and results without compromise."
        }
    ]

    const HealthcareCards = [
        {
            title: 'In-Home Nursing Care Services',
            description: 'YTC Healthcare is all about making life easier for the elderly, disabled, or anyone dealing with health challenges.',
            img: '/images/sv8-736x596.webp',
            linkHref: "/service/in-home-nursing-care/",
        },
        {
            title: 'Personal Care Services',
            description: 'YTC Healthcare believes that grooming and personal hygiene are important to everyone including the elderly.',
            img: '/images/sv8-736x596.webp',
            linkHref: "/service/personal-care/",
        },
        {
            title: 'Senior Care Staffing Solutions',
            description: 'Growing older comes with its challenges, but it doesn’t mean giving up on independence or joy.',
            img: '/images/sv8-736x596.webp',
            linkHref: "/service/senior-care-staffing/",
        },
        {
            title: 'Staff For 24 Hour Home Care',
            description: 'YTC Healthcare is dedicated to supporting the elderly and those with special needs, who require dependable, sensitive, and accessible care…',
            img: '/images/sv8-736x596.webp',
            linkHref: "/service/24-hour-home-care/",
        },
    ];

    const steps = [
        {
            id: 1,
            title: "Define Your Healthcare Staffing Needs",
            desc: `Share your staffing requirements and we will match you with certified medical professionals who are trained, available, and ready to deliver care. Our healthcare talent pool includes `,
            linkText: "personal healthcare workers",
            linkHref: "/service/personal-care/",
            suffix: ", nurses, and specialists who can step in with minimal onboarding.",
            image: "/images/sv10.webp",
        },
        {
            id: 2,
            title: "Structured Screening and Credentialing",
            desc: `We guide you through a transparent screening process, ensuring each candidate is qualified and properly vetted. From personal care roles to clinical placements, our 24/7 support ensures that your homecare staffing decisions are informed and reliable.`,
            image: "/images/sv12.webp",
        },
        {
            id: 3,
            title: "Straightforward Terms, Zero Guesswork",
            desc: `Our agreements are clear, with no hidden fees or unclear conditions. You receive upfront details about costs, timelines, and availability—so you can plan with confidence. We deliver reliable healthcare staffing services that respect both your budget and your timeline.`,
            image: "/images/sv14.webp",
        },
        {
            id: 4,
            title: "Committed Professionals, Long-Term Fit",
            desc: `Our priority is consistency. We focus on placing skilled professionals who stay, helping reduce turnover and protect continuity of care. From in-home care to facility roles, our talent brings both expertise and commitment to every placement.`,
            image: "/images/sv16.webp",
        },
    ];

    return (
        <div>
            <Head>
                <link rel="canonical" href="https://ytchealthcare.com/homecare-staffing-services/" />
            </Head>
            <Header />
            <div className=' mx-3 sm:mx-4 md:mx-6'>
                <PageHeader
                    img={'/images/banner-final-1-1.webp'}
                    title={'Homecare Staffing Services'}
                    description={'YTC Healthcare connects families with <a href=\"https://ytchealthcare.com/service/physician/\"><u>certified caregivers</u></a> and personal support workers who bring compassion and clinical experience directly into the home. Every match is intentionally designed to support those recovering from surgery, managing chronic conditions, or needing daily help with activities of daily living (ADLs). Our team specializes in homecare staffing services and provides dependable support for seniors who need care without leaving the comfort of their homes. With the growing demand for senior care staffing, we ensure no family has to compromise on quality.'}
                />
            </div>
            <section className="staffing-solution my-5 mx-3 sm:mx-4 md:mx-6 bg-white text-gray-900 rounded-tr-[20px] sm:rounded-tr-[25px] md:rounded-tr-[30px] rounded-br-[20px] sm:rounded-br-[25px] md:rounded-br-[30px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-[55px]">
                    {/* Header Section */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <p className="text-xs sm:text-sm font-semibold text-gray-600 flex items-center gap-2">
                            <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-sm"></span>
                            <span>Exceptional Home Care Solutions with Certified Medical Staff</span>
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                            Caring Hands, Right at
                            <br className="hidden sm:block" />
                            Home
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
                                    Hospital discharge is not the end of care—it is the beginning of a new chapter that demands trusted support at home. YTC Healthcare provides home healthcare staffing designed to ensure comfort, safety, and stability for individuals who require continued attention. From <a href="https://ytchealthcare.com/service/developmental-support-workers/" ><u>emotional support and medication</u></a> oversight to mobility help and recovery-focused care, our nurses and personal support workers are trained to handle both medical and non-medical responsibilities. As a private homecare staffing agency, we match every household with professionals equipped to adapt to their unique needs.
                                </p>
                                <button
                                    className="w-full sm:w-auto mt-4 bg-[#2ea79c] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:bg-[#249486] flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200"
                                    onClick={() => window.location.href = "/contact"}
                                >
                                    <span>Get Your Medical Expert Now</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

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
                        Dedicated Home Care Specialists You Can Count On
                    </p>

                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B2338] leading-tight mb-4">
                        Our Home Care Services
                    </h2>

                    <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
                        YTC Healthcare delivers specialized home care designed for real-life needs—whether it is managing recovery after surgery, providing emotional support in palliative moments, or offering continuous help for seniors and families. We offer <a href='https://ytchealthcare.com/service/24-hour-home-care/'><u>24-hour homecare staffing</u></a>, home nursing care from registered professionals, and compassionate assistance from respite care workers. Every service is coordinated to reduce stress, improve outcomes, and provide dependable care in the place that matters most—your home. Our goal is to ensure that every client experiences dignity, safety, and professional support through qualified, in-home caregiver staffing.
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
                                        <h2 className="text-xl font-semibold mb-2 text-[#051b2e]">{card.title}</h2>
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
        </div >
    );
};

export default HomecareStaffing;


function Card({ icon, title, bg, iconBg, text, highlight, tail }) {
    return (
        <div className={`${bg} rounded-2xl p-10 text-center shadow-sm`}>
            <div className={`w-17 h-17 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#08243c]`}>
                {icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}