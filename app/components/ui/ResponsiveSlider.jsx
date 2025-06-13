'use client'

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ResponsiveSlider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1.1,
    slidesToScroll: 1,
  };

  return isMobile ? (
    <div className="overflow-hidden px-2">
      <Slider {...settings}>
        {Array.isArray(children)
          ? children.map((child, idx) => (
              <div key={idx} className="px-2">
                {child}
              </div>
            ))
          : children}
      </Slider>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
  );
};

export default ResponsiveSlider;
