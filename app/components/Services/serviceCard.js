import React from 'react'
import { FaUser, FaAsterisk, FaClock } from "react-icons/fa";

export default function serviceCard() {
    return (
        <div>
            <div className="px-6 md:px-0 pb-10 max-w-7xl mx-auto my-10">
                <img
                    src="images/Care.webp"
                    alt="Home Care"
                    className="w-full object-cover h-full rounded-2xl mb-20"
                />
                {/* Heading Section */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Continuous Support for Your Loved Ones, Day and Night
                    </h2>
                    <p className="text-gray-700 ">
                        YTC Healthcare ensures uninterrupted assistance through reliable overnight caregiver support and
                        daytime coverage. Our focus remains on safety, comfort, and compassionate care for individuals who
                        require ongoing supervision or specialized attention. Whether managing medication schedules, assisting
                        with mobility, or offering a calming presence during the night, our caregivers are committed to improving
                        daily life and protecting dignity around the clock.
                    </p>
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card
                        icon={<FaUser className="text-2xl text-white" />}
                        title="Round-the-Clock Support"
                        bg="bg-blue-100"
                        iconBg="bg-blue-900"
                        text="Professional caregivers remain actively present to maintain safety, stability, and emotional reassurance. Our "
                        highlight="live-in home care providers"
                        tail=" deliver consistent assistance through both day and night—ensuring clients never experience gaps in care."
                    />
                    <Card
                        icon={<FaAsterisk className="text-2xl text-white" />}
                        title="Personalized Care Plans"
                        bg="bg-rose-100"
                        iconBg="bg-blue-900"
                        text="Each care plan is developed with attention to medical needs, physical limitations, and the rhythm of the home environment. Our approach to continuous home health care allows individuals to receive personalized support that adapts as their needs evolve."
                    />
                    <Card
                        icon={<FaClock className="text-2xl text-white" />}
                        title="Skilled, Proactive Caregivers"
                        bg="bg-yellow-200"
                        iconBg="bg-blue-900"
                        text="Our team brings experience, empathy, and readiness to every placement. Through full-time elderly care at home, we help older adults navigate challenges, manage conditions, and maintain dignity—all from the comfort of home."
                    />
                </div>
            </div>
        </div>
    )
}


function Card({ icon, title, bg, iconBg, text, highlight, tail }) {
    return (
        <div className={`${bg} rounded-2xl p-6 text-center shadow-sm`}>
            <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${iconBg}`}>
                {icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {text}
                {highlight && (
                    <span className="text-teal-600 font-medium">{highlight}</span>
                )}
                {tail}
            </p>
        </div>
    );
}