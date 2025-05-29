import React from 'react';
import { FaStarOfLife } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const HealthcareProfessional = () => {

    const services = [
        {
            id: '01',
            icon: '/icons/heart-icon.svg',
            title: 'Social Service Worker',
            description:
                'Social service workers are the heart of community support, helping individuals and families navigate life challenges.',
        },
        {
            id: '02',
            icon: '/icons/support-icon.svg',
            title: 'Personal Support Worker Staffing',
            description:
                'Personal Support Workers provide hands-on assistance to individuals who need help with daily living.',
        },
        {
            id: '03',
            icon: '/icons/doctor-icon.svg',
            title: 'Hire Qualified Doctors & Specialists',
            description:
                'Physicians are the superheroes in the healthcare industry, diagnosing diseases that are often taken lightly.',
        },
        {
            id: '04',
            icon: '/icons/tooth-icon.svg',
            title: 'Nurse Staffing Solutions',
            description:
                'Nurses are the backbone of the healthcare system—bringing their skills, care, and heart to every patient, every time.',
        },
        {
            id: '05',
            icon: '/icons/childcare-icon.svg',
            title: 'Child Care Staffing Services',
            description:
                'Your Talent Consultancy Healthcare does not overlook child care; we have certified childcare workers in our talent pool.',
        },
    ];

    return (
        <section className="md:w-[75%] mx-auto px-4 py-10 md:pb-16 md:pt-4 bg-white">
            <div className="px-4 pb-10 md:pb-16 bg-white text-center">
                <div className="flex justify-center mb-4">
                    <Image src="/images/ic2.png" width={20} height={20} alt="Health Care" />
                </div>

                <p className="text-sm md:text-base text-gray-500 mb-3">
                    We deliver the healthcare staff you&apos;re short of
                </p>

                <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B2338] leading-tight mb-4">
                    Certified Healthcare Professionals from <br />
                    Our Diverse Talent Pool
                </h2>

                <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
                    Healthcare facilities cannot afford a shortage of staff because of patient well being, strict industry standards and regulations.
                </p>
            </div>

            <div className="px-4 py-10 md:px-12 lg:px-20 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link key={index} href={`/services/${service.id}`}>
                            <div
                                key={service.id}
                                className="group relative bg-white border border-[#dadee2] rounded-xl py-[50px] px-[35px] shadow-sm hover:shadow-md transition transform hover:-translate-y-2 duration-300 healthcarebox h-full flex flex-col"
                            >
                                <div className="flex gap-4 items-center justify-between">
                                    <div className="w-[82px] h-[82px] bg-teal-700 flex items-center justify-center rounded-[13px]">
                                        <img src={service.icon} alt={service.title} className="w-[48px] h-[48px]" />
                                    </div>
                                    <div className="w-[50px] h-[50px] border border-gray-300 rounded-full flex items-center justify-center text-sm text-gray-500 font-medium transition-colors duration-300 group-hover:bg-[#00786F] group-hover:text-white">
                                        {service.id}
                                    </div>
                                </div>
                                <h3 className="mt-14 mb-5 font-semibold text-2xl text-gray-900">{service.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 mb-[43px]">{service.description}</p>
                            </div>
                        </Link>
                    ))}

                    {/* Last Column CTA */}
                    <div className="rounded-xl overflow-hidden bg-gray-100 relative">
                        <img
                            src="/images/doctor-cta.webp"
                            alt="Doctor"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 p-6 flex flex-col justify-center">
                            <h3 className="text-[32px] font-semibold text-gray-800 mb-4">Looking for The Right Talent?</h3>
                            <button className="inline-flex h-[55px] w-[176.5px] items-center gap-2 bg-teal-700 text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-teal-800 transition">
                                Let&apos;s Discuss →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthcareProfessional;
