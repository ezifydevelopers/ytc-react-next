import React from 'react'
import { FaStethoscope, FaClipboardList, FaUserMd, FaDollarSign } from "react-icons/fa";

export default function serviceAvalibality() {
    return (
        <div>
            <div className="bg-blue-50 rounded-2xl px-6 md:px-12 py-10 max-w-7xl mx-auto my-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    {/* Left Content */}
                    <div className="md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Round-the-Clock Home Care Assistance That Never Stops
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            YTC Healthcare delivers round-the-clock home care assistance with a focus on physical comfort,
                            emotional support, and medical stability for individuals in fragile health. Care is provided by a
                            rotating team of qualified professionals, ensuring that someone is always present to respond to
                            changing needs. From bathing and dressing to companionship and chronic condition management,
                            our caregivers remain attentive, giving families the peace of mind that their loved ones are never left alone.
                        </p>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex flex-col space-y-4 w-full md:w-[300px]">
                        <Button icon={<FaStethoscope />} label="24/7 Home Care Services" />
                        <Button icon={<FaClipboardList />} label="Personalized Care Plans" />
                        <Button icon={<FaUserMd />} label="Skilled & Certified Caregivers" />
                        <Button icon={<FaDollarSign />} label="Get a Quote" />
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