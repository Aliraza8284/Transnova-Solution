import React from 'react';
import AboutStrip from '../components/home/AboutStrip'; // 👈 YAHAN CHANGE KAREN

const About = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope pt-16">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-2">
        <p className="text-[#9B9B8A] text-sm">Home / About Us</p>
      </div>
      <AboutStrip /> {/* Isko use karen */}
    </div>
  );
};

export default About;