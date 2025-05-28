'use client';

import { useEffect, useState } from 'react';
import { CalendarCheck, ChevronDown, ChevronUp } from 'lucide-react';
import jobopenings from "@/app/components/jobopenings.json"

export default function JobDetailCard() {
  const [openSection, setOpenSection] = useState('requirements');
  const [data, setData] = useState([])

  useEffect(() => {
    let jobData = Object.values(jobopenings)
    setData(jobData)
  }, [])

  console.log("Job Data:", data)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className=''>
      {
        data.map((item, index) => {
          return (
            <div key={index} className="max-w-[1320px] healthcarebox mx-auto my-15 p-10 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2  font-medium mb-4">
                <CalendarCheck className="w-7 h-7 mt-[-5px]" />
                <p>Job Posted, Due Date: {item.dueDate}</p>
              </div>

              <h1 className="text-[37px] font-bold text-teal-700 mb-4">{item.title}</h1>

              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>

              <div className="space-y-4">

                <div className="border border-[#D5D8DC] rounded-md">
                  <button
                    onClick={() => toggleSection('responsibilities')}
                    className="w-full flex justify-between items-center border-b border-[#D5D8DC] px-4 py-3 text-left font-medium text-gray-800 cursor-pointer hover:bg-gray-50"
                  >
                    <span>Responsibilities</span>
                    {openSection === 'responsibilities' ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {openSection === 'responsibilities' && (
                    <div className="p-6 text-gray-700 text-sm">
                      <div>{item.responsibilities}</div>
                    </div>
                  )}
                </div>

                <div className="border border-[#D5D8DC] rounded-md">
                  <button
                    onClick={() => toggleSection('requirements')}
                    className="w-full flex justify-between items-center border-b border-[#D5D8DC] px-4 py-3 text-left font-medium text-gray-800 cursor-pointer hover:bg-gray-50"
                  >
                    <span>Requirements</span>
                    {openSection === 'requirements' ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {openSection === 'requirements' && (
                    <div className="p-6 text-gray-700 text-sm">
                      <p>{item.requirements}</p>
                    </div>
                  )}
                </div>

                <div className="border border-[#D5D8DC] rounded-md">
                  <button
                    onClick={() => toggleSection('pay')}
                    className="w-full flex justify-between items-center px-4 py-3 border-b border-[#D5D8DC] text-left font-medium text-gray-800 cursor-pointer hover:bg-gray-50"
                  >
                    <span>Job Types & Pay</span>
                    {openSection === 'pay' ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {openSection === 'pay' && (
                    <div className="p-6 text-gray-700 text-sm">
                      <p>{item.jobTypeAndPay}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Apply Now Button */}
              <div className="mt-6">
                <button className="bg-[#359C8F] hover:bg-teal-700 text-white px-7 py-4 cursor-pointer rounded-xl shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
