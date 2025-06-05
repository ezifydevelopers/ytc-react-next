import React from 'react';

export const HomeVideo = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Welcome to YTC Healthcare
        </h2>
        <p className="text-gray-600 mb-8">
          Watch our introduction video to learn more about our vision and services.
        </p>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video">
          <video
            controls
            className="w-full h-full object-cover"
          >
            <source src="/videos/VID-20250605-WA0000.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
