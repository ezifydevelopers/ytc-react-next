import React from 'react'

export default function serviceWhychoose() {
    const features = [
        "Skilled Caring Staff",
        "Personalized Care Plans",
        "Rapid and Reliable Support",
        "24/7 Availability",
        "Low Turnover, High Stability",
        "Clear Communication, No Surprises",
        "Specialized Expertise at Your Fingertips",
        "Proactive Client Engagement"
    ];

    return (
        <div>
            <section className="max-w-7xl mx-auto my-13 ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Why Choose Our 24-hour Home Care Services
                </h2>
                <p className="text-gray-500 mb-10">
                    Selecting a care provider for a loved one requires more than credentials—it demands
                    consistent, thoughtful, and compassionate support. YTC Healthcare offers around-the-clock
                    senior care designed to respect each client’s unique health, emotional, and daily living
                    needs. Our caregivers are experienced, dependable, and focused on delivering the kind of
                    care that brings peace of mind to families and comfort to those receiving it.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg px-6 py-4 text-sm text-gray-800 font-medium shadow-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>
              <div className="bg-gray-200 z-0 max-w-7xl mx-auto" style={{height:'1px'}}/>
        </div>
    )
}
