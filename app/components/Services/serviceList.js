import React from 'react'

export default function serviceList({data}) {
    return ( 
        <div className='mx-3 sm:mx-4 md:mx-5'>
            <div className=" shadow-md rounded-2xl p-6 max-w-7xl mx-auto mb-15 border border-gray-300">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {data?.title}
                </h2>
                <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: data?.description }}/>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
                    <ul className="space-y-2">
                        {data?.columns[0]?.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-blue-600 mr-2">✓</span> {item}
                            </li>
                        ))}
                        
                    </ul>
                    <ul className="space-y-2">
                       {data?.columns[1]?.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-blue-600 mr-2">✓</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
             <div className="bg-gray-200 z-0 max-w-7xl mx-auto" style={{height:'1px'}}/>

        </div>
    )
}
