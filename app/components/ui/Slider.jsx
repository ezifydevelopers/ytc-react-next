"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import useWindowSize from '../../hooks/useWindowSize';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileSlider = ({ children, settings }) => {
  const { width } = useWindowSize();
  const isMobile = width < 640;

  // Custom arrow components
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -bottom-12 right-1/2 transform translate-x-2 w-10 h-10 rounded-full border border-[#4EA89D] flex items-center justify-center hover:bg-white hover:text-teal-600 transition"
      >
        <ChevronRight className="w-5 h-5 text-[#4EA89D]" />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -bottom-12 right-1/2 transform -translate-x-12 w-10 h-10 rounded-full border border-[#4EA89D] flex items-center justify-center hover:bg-white hover:text-teal-600 transition"
      >
        <ChevronLeft className="w-5 h-5 text-[#4EA89D]" />
      </button>
    );
  };

  const defaultSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      }
    ],
    ...settings, // allow overriding via props
  };

  if (isMobile) {
    return (
      <div className="overflow-hidden pb-16">
        <Slider {...defaultSettings}>{children}</Slider>
      </div>
    );
  }

  // return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>;
};

export default MobileSlider;
