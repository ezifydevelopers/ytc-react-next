import React from 'react'
import Image from "next/image";

export default function serviceCareProcess() {
    const steps = [
        {
            number: 1,
            title: "Initial Consultation",
            description:
                "We begin with an in-depth conversation to understand the needs, preferences, and routines of your loved one — so that care starts on the right foundation.",
        },
        {
            number: 2,
            title: "Care Plan Development",
            description:
                "The YTC Healthcare team builds a personalized plan outlining the required services, scheduling preferences, and any specific health-related goals.",
        },
        {
            number: 3,
            title: "Caregiver Matching",
            description:
                "A qualified caregiver is carefully selected based on experience, compatibility, and care type. Throughout this process, you remain informed and involved to ensure comfort and trust.",
        },
        {
            number: 4,
            title: "Ongoing Support",
            description:
                "We continue to monitor care delivery, check in regularly, and adjust plans as needs change. Our 24/7 home caregiver services are backed by real-time support and open communication to ensure continuity and peace of mind.",
        },
    ];

    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Process for Accessing 24-Hour Home Care
                </h2>
                <p className="text-gray-600 max-w-4xl mb-10">
                    Choosing the right provider for long-term care is a major decision. That is why we have created a process that is simple, transparent, and centered on your needs.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left image */}
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <img
                            src={'images/careImage.jpg'}
                            alt="Care Process"
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>

                    {/* Right steps */}
                    <div className="relative flex flex-col space-y-10 mt-4">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-5 bottom-5 bg-gray-300 z-0" style={{width:'1px'}}/>

                        {steps.map((step) => (
                            <div key={step.number} className="relative flex gap-4 items-center z-10">
                                <div className="min-w-[50px] h-[50px] flex items-center justify-center text-white bg-[#359c8f] rounded-full text-lg font-semibold">
                                    {step.number}
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold mb-1">
                                        {step.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 leading-relaxed mt-3" style={{fontSize:'15px',lineHeight:'25px'}}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-gray-200 z-0 max-w-7xl mx-auto" style={{height:'1px'}}/>
        </div>
    )
}
