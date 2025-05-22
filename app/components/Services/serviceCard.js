import React from 'react'
import { FaUser, FaAsterisk, FaClock } from "react-icons/fa";

export default function serviceCard({ data }) {

    const iconMap = {
        FaUser: <FaUser className="text-2xl text-white" />,
        FaAsterisk: <FaAsterisk className="text-2xl text-white" />,
        FaClock: <FaClock className="text-2xl text-white" />
    }

    return (
        <div>
            <div className="px-6 md:px-0 pb-10 max-w-7xl mx-auto my-10">
                <img
                    src={data.image.src}
                    alt="Home Care"
                    className="w-full object-cover h-full rounded-2xl mb-20"
                />
                {/* Heading Section */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {data.headingSection.title}
                    </h2>
                    <p className="text-gray-500 "
                     dangerouslySetInnerHTML={{ __html: data.headingSection.description }}
                    >

                    </p>
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                icon={iconMap[card.icon]}
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
            </p>
        </div>
    );
}