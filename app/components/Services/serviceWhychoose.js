import React from 'react'

export default function serviceWhychoose({data}) {

    return (
        <div>
            <section className="md:max-w-7xl mx-auto my-13 ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                   {data.title}
                </h2>
                <div className="text-gray-500 mb-10"
                 dangerouslySetInnerHTML={{ __html: data.description }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.features.map((item, index) => (
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
