import React from 'react';
import AboutStrip from '../components/home/AboutStrip'; // 👈 YAHAN CHANGE KAREN

const About = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope pt-16">
      
      <AboutStrip /> {/* Isko use karen */}
    </div>
  );
};

export default About;