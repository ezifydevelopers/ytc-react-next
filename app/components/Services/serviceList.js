import React from 'react'

export default function serviceList() {
    return (
        <div>
            <div className=" shadow-md rounded-2xl p-6 max-w-7xl mx-auto mb-15 border border-gray-300">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Our 24-hour Home Care Services Include
                </h2>
                <p className="text-gray-700 mb-6">
                    YTC Healthcare provides its 24-hour home care services to offer comfort,
                    security, and quality of life within their homes while remaining as
                    independent as possible. Our 24/7 Home Care Services Include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span> Personal Care Assistance
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span> Medication Management
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span> Nutritional Support and Meal Preparation
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span> Mobility Assistance and Transportation
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span> Companionship and Emotional Support
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span> Light Housekeeping
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span> Cultural and Lifestyle-Specific Care
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span> Health Monitoring and Reporting
                        </li>
                    </ul>
                </div>
            </div>
             <div className="bg-gray-200 z-0 max-w-7xl mx-auto" style={{height:'1px'}}/>

        </div>
    )
}
