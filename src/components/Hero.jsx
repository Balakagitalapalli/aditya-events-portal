import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center pt-0"
      style={{
        backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#0047AB]/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to <span className="text-[#f06b0c]">ADITYA-EVENTS</span>
        </h2>

        <p className="text-gray-100 max-w-2xl mx-auto mb-8 text-lg">
          Your gateway to exciting tech competitions, hackathons, workshops,
          and cultural events. Join us and be part of something extraordinary.
        </p>
      </div>
    </section>
  );
};

export default Hero;