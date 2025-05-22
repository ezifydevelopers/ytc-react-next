import React from 'react'
import { FaStethoscope, FaClipboardList, FaUserMd, FaDollarSign } from "react-icons/fa";

export default function serviceAvalibality({ data }) {

    const icons = {
        FaStethoscope: FaStethoscope,
        FaClipboardList: FaClipboardList,
        FaUserMd: FaUserMd,
        FaDollarSign: FaDollarSign,
    };

    const IconButton = ({ icon: Icon, label }) => (
        <Button icon={<Icon />} label={label} />
    );
    return (
        <div>
            <div className="bg-blue-50 rounded-2xl px-6 md:px-12 py-10 max-w-7xl mx-auto my-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    {/* Left Content */}
                    <div className="md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {data.title}
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex flex-col space-y-4 w-full md:w-[300px]">
                        {data.buttons.map((button, index) => {
                            const IconComponent = icons[button.icon]; // Dynamically get icon
                            return <IconButton key={index} icon={IconComponent} label={button.label} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


function Button({ icon, label }) {
    return (
        <button className="flex items-center gap-3 bg-white text-sm md:text-base text-gray-900 font-medium px-5 py-3 rounded-xl shadow hover:shadow-md transition">
            <span className="text-xl">{icon}</span>
            {label}
        </button>
    );
}