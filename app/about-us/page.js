'use client';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import PageHeader from '../components/pageHeader';
import Image from "next/image";
import { Play } from 'lucide-react';
import ContactSection from '../components/Home/ContactSection';
import CustomerTestimonial from '../components/Home/CustomerTestimonial';
import {
    Bookmark,
    Columns3,
    User,
    BadgeCheck,
    PiggyBank,
    Umbrella,
} from 'lucide-react';
import { FaMapMarkerAlt, FaHeartbeat, FaAward, FaUserMd } from 'react-icons/fa';
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import Head from 'next/head';

const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M192,24H96A16,16,0,0,0,80,40V56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V184.69l19.35,13.82A8,8,0,0,0,208,192V40A16,16,0,0,0,192,24ZM160,208.46l-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96Zm32-32L176,165V72a16,16,0,0,0-16-16H96V40h96Z"></path></svg>,
        title: 'Experience and Expertise',
        description:
            'Our healthcare staff are not newbies to the healthcare industry. They are professionals and have tons of experience in medical assistance.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-88-40V80a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v96a16,16,0,0,1-16,16H152A16,16,0,0,1,136,176Zm16,0h40V80H152ZM48,176V40A16,16,0,0,1,64,24h40a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H64A16,16,0,0,1,48,176Zm16,0h40V40H64Z"></path></svg>,
        title: 'Bulk Staffing Provider',
        description:
            'Your Talent Consultancy Healthcare also provides large-scale staffing solutions to healthcare facilities that are facing staffing shortages.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>,
        title: 'Customer Focused',
        description:
            'Our staffing services are customer-focused, providing healthcare staffing solutions according to the needs of our customers.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M243.84,76.19a12.08,12.08,0,0,0-13.34-1.7l-50.21,25L138.37,29.86a12.11,12.11,0,0,0-20.74,0L75.71,99.52l-50.19-25A12.11,12.11,0,0,0,8.62,89.12l37,113.36a8,8,0,0,0,11.68,4.4C57.55,206.73,83.12,192,128,192s70.45,14.73,70.68,14.87a8,8,0,0,0,11.71-4.39l37-113.33A12.06,12.06,0,0,0,243.84,76.19ZM198,188.83C186,183.74,162.08,176,128,176s-58,7.74-70,12.83L26.71,93l45.07,22.47a12.17,12.17,0,0,0,15.78-4.59L128,43.66l40.44,67.2a12.17,12.17,0,0,0,15.77,4.59L229.29,93Z"></path></svg>,
        title: 'Industry Certified',
        description:
            'We are a certified healthcare staffing provider operating in Canada and the US. All of our healthcare placements are qualified and background-checked.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M192,116a12,12,0,1,1-12-12A12,12,0,0,1,192,116ZM152,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm96,48v32a24,24,0,0,1-24,24h-2.36l-16.21,45.38A16,16,0,0,1,190.36,224H177.64a16,16,0,0,1-15.07-10.62L160.65,208h-57.3l-1.92,5.38A16,16,0,0,1,86.36,224H73.64a16,16,0,0,1-15.07-10.62L46,178.22a87.69,87.69,0,0,1-21.44-48.38A16,16,0,0,0,16,144a8,8,0,0,1-16,0,32,32,0,0,1,24.28-31A88.12,88.12,0,0,1,112,32H216a8,8,0,0,1,0,16H194.61a87.93,87.93,0,0,1,30.17,37c.43,1,.85,2,1.25,3A24,24,0,0,1,248,112Zm-16,0a8,8,0,0,0-8-8h-3.66a8,8,0,0,1-7.64-5.6A71.9,71.9,0,0,0,144,48H112A72,72,0,0,0,58.91,168.64a8,8,0,0,1,1.64,2.71L73.64,208H86.36l3.82-10.69A8,8,0,0,1,97.71,192h68.58a8,8,0,0,1,7.53,5.31L177.64,208h12.72l18.11-50.69A8,8,0,0,1,216,152h8a8,8,0,0,0,8-8Z"></path></svg>,
        title: 'Saving Costs',
        description:
            'We provide customizable plans according to the client&apos;s specific medical needs, which helps both save money and effort in sourcing medical staff individually.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0A96.43,96.43,0,0,1,193.4,65.52,95.32,95.32,0,0,1,224,128Z"></path></svg>,
        title: 'Honesty and Integrity',
        description:
            'We believe in transparency, building honesty, and integrity in our relationship with clients. If an employer is not satisfied, we offer free replacement options for staff.',
    },
];

const stats = [
    {
        icon: <FaMapMarkerAlt className="text-white text-3xl" />,
        value: '20+',
        description: 'Centers Across Canada\nAnd The United States',
    },
    {
        icon: <FaHeartbeat className="text-white text-3xl" />,
        value: '99%',
        description: 'Customer Satisfaction\nIs Our Success',
    },
    {
        icon: <FaAward className="text-white text-3xl" />,
        value: '16',
        description: 'Honorary Award\nFor Best Healthcare\nStaffing Provider',
    },
    {
        icon: <FaUserMd className="text-white text-3xl" />,
        value: '986',
        description: 'Highly Specialized\nStaff For Facilities\nOf All Sizes',
    },
];

const AboutUs = () => {
    const [current, setCurrent] = useState(0);

    const sectionTitle = [
        "Our Vision",
        "Our Mission"
    ]

    const paragraphs = [
        "YTC Healthcare supports healthcare facilities by having medical specialists on duty round the clock for seamless medical services. We are on a mission in the healthcare industry to provide reliable, caring staff who prioritize patient&apos;s well-being. We strive to enhance everyone&apos;s accessibility to basic healthcare and provide seamless staffing support to healthcare facilities.",
        "We are on a mission to fill the gaps in healthcare staffing by connecting skilled professionals with underserved facilities and individuals in need. We are committed to a transparent medical workplace where everyone collaborates to deliver high-quality care and promote healthier lives. We ensure no patient is deprived of the medical attention they deserve, whether in hospitals or their homes."
    ];

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? paragraphs.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === paragraphs.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <Head>
                <link rel="canonical" href="https://ytchealthcare.com/about-us/" />
            </Head>
            <Header />
            <div className='mx-3 sm:mx-4 md:mx-5'>
                <PageHeader title="About YTC Healthcare" img={'/images/01-About-US.jpg'} description={"Your Talent Consultancy Healthcare has been proudly providing healthcare staffing solutions in the healthcare industry across Canada and the US for over 10+ years. We have a large talent pool, including certified travel nurses, physiotherapists, and other medical specialists. Get our healthcare staffing services to cover your staffing shortages at your healthcare facilities. We don’t just provide exceptional staff—we do everything for you. From getting you the perfect match to retaining them at your workplace, we handle all the headaches."} />
            </div>
            <div className='pt-5 px-5 rounded'>
                <section className="w-full bg-gradient-to-b from-white to-[#f5fafd] pt-16  relative overflow-hidden" style={{ borderRadius: '20px' }}>
                    {/* Gradient overlay at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#cde6e5] z-0" />

                    <div className=" md:mx-5 md:px-6 grid xl:grid-cols-3 gap-10 items-center relative z-10">
                        {/* Left Content */}
                        <div className="col-span-1 space-y-15">
                            <div className=" rounded-full ">
                                <svg id="svg11425" height="47" viewBox="0 0 16.933333 16.933334" width="47"><g id="layer1" transform="translate(0 -280.067)" className="fill-current text-[#ffcc53]"><path id="path13638" d="m8.456844 280.59477c-.03822.002-.07559.0118-.109554.0295 0 0-3.1421915 1.56734-7.0605515 2.08979-.1316461.0182-.2293859.13118-.2284095.26407v5.55418c0 3.40254 1.8628359 5.42086 3.6995152 6.54327 1.8366718 1.12241 3.6695438 1.39268 3.6695438 1.39268.02603.004.05251.004.07855 0 0 0 1.832871-.27027 3.669542-1.39268 1.83668-1.12241 3.699516-3.14073 3.699516-6.54327v-5.55418c.0011-.13289-.09676-.24589-.22841-.26407-3.91836-.52245-7.060551-2.08979-7.060551-2.08979-.03987-.0206-.08432-.0308-.12919-.0295zm.0098 3.17604c2.627119 0 4.761465 2.13434 4.761465 4.76146s-2.134346 4.76405-4.761465 4.76405c-2.6271198 0-4.761466-2.13693-4.761466-4.76405s2.1343462-4.76146 4.761466-4.76146zm-1.05885 2.38073v1.32447h-1.321886c-.146119-.00053-.2650303.11743-.265615.26355v1.58801c.0005291.14612.119496.26411.265615.26355h1.321885v1.32447c.000529.14632.119814.26439.266134.26355h1.585431c.146119.00053.265033-.11743.265618-.26355v-1.32447h1.3224c.146119.00053.265033-.11743.265616-.26355v-1.58801c-.00053-.14612-.119497-.26411-.265616-.26355h-1.3224v-1.32447c-.00053-.14612-.119497-.26411-.265618-.26355h-1.599126c-.149244.0133-.252547.12735-.252439.26355z"></path></g></svg>
                            </div>
                            <div>
                                <p className="text-8xl text-gray-900 text-[#051b2e]">10<span className="text-5xl p-5 align-middle">+</span></p>
                                <p className="text[#0f2436] " style={{ fontSize: "17px", fontWeight: '500', fontFamily: "" }}>
                                    Years of Experience<br />
                                    In the Healthcare<br />
                                    Staffing Industry
                                </p>
                            </div>
                            <div>
                                <div className="flex gap-4 pb-4">
                                    <Image src="/images/ic2.png" width={20} height={20} alt='ic2.png' />
                                    <p className="text-md text-[#68747A]">
                                        Welcome to <span className="font-bold ">Your Talent Consultancy Healthcare</span>
                                    </p>
                                </div>

                                <h1 className="text-2xl md:text-3xl text-gray-900 leading-relaxed mt-2" >
                                    Bridging Healthcare Staffing Gaps,<br />
                                    From Facilities to Personal Care,<br />
                                    Together for Better Lives
                                </h1>
                            </div>
                        </div>

                        {/* Middle Image Layered */}
                        <div className="col-span-1 flex justify-center relative">
                            <Image
                                src="/images/ab2.png"
                                alt="Background Shape"
                                className="relative w-full z-0"
                                width={500}
                                height={500}
                            />
                            <Image
                                src="/images/ab3.png"
                                alt="Doctor"
                                className="absolute z-10 bottom-0 md:right-13"
                                width={500}
                                height={500}
                            />
                        </div>

                        {/* Right Content */}
                        <div className="col-span-1 text-gray-700 space-y-6 md:px-5 mx-3 pb-5">
                            <p className='text-[#68747A]'>
                                When we talk about premium healthcare, bridging healthcare
                                staffing gaps becomes more than just filling positions. YTC
                                Healthcare provides premium healthcare specialists to ensure
                                every patient receives the care they deserve. We connect
                                skilled medical professionals with healthcare facilities to
                                create a seamless healthcare network that works on quality of
                                care.
                            </p>
                            <p className='text-[#68747A]'>
                                This commitment to collaboration among healthcare specialists
                                and facilities ensures no medical need goes unmet. YTC
                                Healthcare, with its healthcare professionals, is not just
                                addressing staffing challenges but also shaping a more
                                compassionate healthcare system for all.
                            </p>
                            <ul className="list-none space-y-2 text-[#051B2E]" >
                                <li className="flex items-start space-x-2 ">
                                    <span className="text-[#051B2E] mt-1">✓</span>
                                    <span >Friendly medical specialists you can call friends</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#051B2E] mt-1">✓</span>
                                    <span>Routine follow-ups to ensure you receive the premium care overtime</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#051B2E] mt-1">✓</span>
                                    <span>Customizable care plans designed to the unique needs of each healthcare facility and individual</span>
                                </li>
                            </ul>
                            <Link href="/contact-us/">
                                <button className="mt-4 cursor-pointer bg-[#359C8F] text-white px-6 py-3 rounded text-sm font-medium shadow-md transition duration-200">
                                    Let&apos;s Cover Staffing Shortages →
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <div className="grid md:grid-cols-3 gap-4 items-center p-4 mb-5">
                {/* First Empty Section */}
                <div></div>

                {/* Second Section - Vision Card */}
                <div className="bg-[#08243c] text-white p-10 rounded-2xl relative overflow-hidden flex flex-col gap-[23px] transition-opacity duration-300 ease-in-out text-center">
                    <p className="text-lg font-semibold text-[#4EA89D]">
                        {sectionTitle[current]}
                    </p>
                    <p className="leading-9 font-[600] text-lg min-h-[252px]">
                        {paragraphs[current]}
                    </p>

                    {/* Arrows */}
                    <div className="flex gap-4 justify-center relative top-5">
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

                {/* Third Section - Image */}
                <div className="flex justify-center">
                    <Image
                        src="/images/ab5.jpg"
                        alt="Healthcare Professionals"
                        className="rounded-lg object-cover h-full"
                        style={{ height: '500px' }}
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <section className=" lg:px-60 px-5 py-12 ">
                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                    {/* Left - Image with play button */}
                    <div className="relative rounded-xl overflow-hidden max-w-xl mx-auto shadow-lg">
                        <Image
                            src="/images/ab6.jpg"
                            alt="Doctor and patient discussion"
                            className=" object-cover"
                            style={{ height: '500px' }}
                            width={500}
                            height={500}
                        />
                        {/* <button className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                            <Play className="text-black w-6 h-6" />
                        </div>
                    </button> */}
                    </div>

                    {/* Right - Text & Bars */}
                    <div className="grid max-w-xl py-10 gap-3">
                        <p className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                            <span className="text-teal-600 text-xl"><Image src="/images/ic2.png" width={20} height={20} alt='ic2.png' /></span> Working for Better Healthcare for Everyone
                        </p>
                        <h2 className="text-4xl font-bold mb-4 text-[#051b2e]">
                            A Patient-First Culture That&apos;s <br /> Safer, Smarter, and Simply Better
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm">
                            If you are looking for medical staffing solutions for your healthcare facilities, look no further than YTC Healthcare. We provide professionally certified staff for your facilities and loved ones who are passionate and always put patients first.
                        </p>

                        {/* Progress Bars */}
                        <div className="space-y-4 text-sm">
                            <ProgressBar label="Qualified Caring staff" value={100} />
                            <ProgressBar label="Low Turn-over" value={90} />
                            <ProgressBar label="Routine Follow-ups" value={95} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-gray-200 pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="border border-gray-300 flex items-center justify-center p-4 rounded-full">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl text-lg mb-1 text-[#051B2E]">{feature.title}</h4>
                                    <p className="text-[15px] text-[#68747A]">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <div
                className="mx-5 relative rounded-xl overflow-hidden text-white"
                style={{
                    backgroundImage: `url('images/cm5.webp')`, // Make sure this image exists in public/
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 z-0" />

                {/* Content */}
                <div className="relative z-10 px-6 py-12 md:px-10">
                    <div className="flex flex-wrap justify-between gap-8 ">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center space-x-4 w-full md:w-auto md:flex-1">
                                <div>{stat.icon}</div>
                                <div className="md:text-6xl text-4xl font-bold text-[#50bba1]">{stat.value}</div>
                                <div className="text-md whitespace-pre-line text-white font-medium">
                                    {stat.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
                <div className=" mx-auto flex flex-col md:flex-row  gap-6">

                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden md:w-6xl">
                        <div
                            className="relative text-white h-85"
                            style={{
                                backgroundImage: `url('/images/ab7.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <h2 className="absolute bottom-0 md:left-15 text-7xl font-extrabold text-white">Meet Medical Specialists</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-lg text-[#051B2E] mb-4">
                                Our healthcare staff are diverse, belonging to different walks of life and faiths, making it easier to choose the best medical professional according to your workplace requirements.
                            </p>
                            <hr className="border-gray-200 my-8" />
                            <button className="w-full sm:w-auto mt-4 bg-[#2ea79c] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:bg-[#249486] flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200">
                                <span>View Our Healthcare Services</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl shadow-md overflow-hidden flex flex-col justify-between md:w-3xl"
                        style={{
                            backgroundImage: `url('/images/ab8.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <div className="p-6 flex flex-col items-center justify-center gap-4">
                            <div className='mb-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-17 h-17 " fill='#09233c'>
                                    <path d="M488.5 119.5c-4.3-4.3-10.7-6.4-14.9-2.1l-110.9 78.9V106.7c0-12.8-8.5-21.3-21.3-21.3H42.7c-12.8 0-21.3 8.5-21.3 21.3v298.7c0 12.8 8.5 21.3 21.3 21.3h298.7c12.8 0 21.3-8.5 21.3-21.3v-89.6l110.9 76.8c2.1 2.1 4.3 2.1 6.4 2.1 6.4 0 10.7-4.3 10.7-10.7V128c0-2.1 0-4.3-2.2-8.5zM112.6 236.8c31.1-.2 56.2-25 56.1-55.3 0-1.1 0-2.3-.1-3.4l46.3-.2c0 1.1.1 2.3.1 3.4.3 55.9-45.4 101.5-102.1 101.8l-.3-46.3zM269.9 274.2c-31.1 0-56.3 24.7-56.3 55 0 1.1 0 2.3.1 3.4h-46.3c0-1.1-.1-2.3-.1-3.4 0-55.9 45.9-101.3 102.6-101.3v46.3z" />
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-md text-[#051B2E] mb-5">Virtual Consultation</p>
                                <h3 className="text-4xl font-semibold text-[#051B2E] mb-5">
                                    Medical Assistance at Your Finger-Tips
                                </h3>
                                <p className="text-md text-[#051B2E] py-3">
                                    Getting medical assistance from a certified professional was never that fast. You can get medical advice by using our Online Healthcare Consultation App without even leaving your cozy place at home.
                                </p>

                            </div>
                            <Link href="/contact-us/">
                                <button className="w-full cursor-pointer sm:w-auto mt-12 bg-[#2ea79c] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:bg-[#249486] flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200">
                                    <span>  Stay Tuned for More Updates</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </Link>
                        </div>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0a1c36] text-white rounded-xl shadow-md flex flex-col justify-between p-6 md:w-xl">
                        <div className="p-6 flex flex-col items-center justify-center ">
                            <div className='mb-7'>
                                <svg className="w-17 h-17 " fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="Layer_2" data-name="Layer 2"><path d="m20.38 4.9a5.52 5.52 0 0 0 -6.85-.77l2.22 2.26a1 1 0 0 1 -.08 1.42 1 1 0 0 1 -.67.25 1 1 0 0 1 -.75-.33l-2.82-2.83a5.42 5.42 0 0 0 -1.38-1 5.54 5.54 0 0 0 -6.43 1 6.66 6.66 0 0 0 0 8.68c1.86 2 6.38 6.63 8.41 6.63 1.58 0 4.68-2.81 6.83-5 .54-.54 1-1 1.4-1.45l.15-.16a6.66 6.66 0 0 0 -.03-8.7zm-6.38 8.6h-1v1a1 1 0 0 1 -2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"></path></g></svg>
                            </div>
                            <div className="text-center">
                                <p className="text-md text-white mb-5">Become a Part of YTC Healthcare</p>
                                <h3 className="text-4xl font-semibold text-white mb-5">
                                    Start Your Journey with YTC Healthcare
                                </h3>
                                <p className="text-md text-white">
                                    Join our team of sought-after healthcare professionals. We offer unrivaled job stability, attractive pay incentives,  and superior options compared to our competitors. With us, your search for a perfect employer and staffing provider ends here.
                                </p>

                            </div>
                            <button className="w-full sm:w-auto mt-4 bg-[#2ea79c] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:bg-[#249486] flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200">
                                <span>  Apply Now</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <CustomerTestimonial />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default AboutUs;

function ProgressBar({ label, value }) {
    return (
        <div>
            <div className="flex justify-between mb-1 text-gray-700">
                <span className='text-md'>{label}</span>
                <span className='text-[#359c8f]'>{value}%</span>
            </div>
            <div className="h-0.5 bg-gray-300">
                <div
                    className="h-0.5 bg-gray-900"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
}