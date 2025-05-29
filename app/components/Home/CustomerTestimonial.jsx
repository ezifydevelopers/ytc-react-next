'use client';

import Image from 'next/image';
import { Card } from '../ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CustomerTestimonial() {
  const testimonials = [
    {
      text: `They&apos;ve got amazing people with amazing work ethics, I talked to one of their people, she&apos;s called Simran... she has a very nice personality that should be what makes them deserve my 5 stars. Excellent customer service.`,
      name: 'Victor Kyeremateng',
      image: '/images/testimonial-google.png'
    },
    {
      text: `The team was amazing and attentive throughout. They made sure every step was clear and smooth. Great experience!`,
      name: 'Sarah Thompson',
      image: '/images/testimonial-google.png'
    },
    {
      text: `From the very beginning, the communication and professionalism were outstanding. Highly recommend their service.`,
      name: 'Michael Lee',
      image: '/images/testimonial-google.png'
    }
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Card className="flex flex-col md:flex-row items-center justify-between p-6 md:py-10 md:pl-[250px] md:pr-10 rounded-2xl healthcarebox mx-12 border-[#DADEE2] mb-[102px]">
      {/* Left side - Text Content */}
      <div className="md:w-2/3 space-y-4 py-10">
        <p className="text-sm text-gray-500 font-medium">Customer Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say?</h2>
        <div className="flex items-center gap-2 mb-12">
          <div className="text-yellow-500 text-lg">★★★★★</div>
          <p className="text-sm text-gray-600">Overall Rating 4.7 / 3285 reviews on Zocdoc {'>'}</p>
        </div>

        {/* Dynamic Quote */}
        <div className="mr-20 space-y-4 min-h-[180px] transition-all duration-300 ease-in-out">
          <blockquote className="text-gray-700 text-base leading-relaxed italic text-[20px] font-medium border-b border-[#DFE3E6] min-h-[150px]">
            "{testimonials[current].text}"
          </blockquote>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 pt-2">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <p className="text-sm font-semibold text-emerald-600">{testimonials[current].name}</p>
            </div>

            {/* Arrows */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handlePrev}
                className="w-16 h-16 rounded-full border border-[#dadee2] flex items-center justify-center hover:bg-gray-100 transition"
              >
                <ArrowLeft className="w-5 h-5 text-[#359c8f]" />
              </button>
              <button
                onClick={handleNext}
                className="w-16 h-16 rounded-full border border-[#dadee2] flex items-center justify-center hover:bg-gray-100 transition"
              >
                <ArrowRight className="w-5 h-5 text-[#359c8f]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Static Image */}
      <div className="relative mt-8 md:mt-0 md:w-1/3">
        <div className="w-full h-120 rounded-xl overflow-hidden relative">
          <Image
            src="/images/testimonial.webp"
            alt="Testimonial"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <Image
          src="/images/review-commas.webp"
          alt="Quotes"
          width={300}
          height={300}
          className="rounded-xl absolute bottom-0 right-0"
        />
      </div>
    </Card>
  );
}
