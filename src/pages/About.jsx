import React from 'react';
import useCopyProtection from '../Hooks/useCopyProtection';
import AboutStrip from '../components/home/AboutStrip';
// ❌ REMOVED: import SuccessStories from '../components/home/SuccessStories';

const About = () => {
  // ==========================================
  // COPY PROTECTION
  // ==========================================
  useCopyProtection();

  return (
    <div 
      className="bg-[#FAF9F6] min-h-screen font-manrope pt-16"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }}
    >
      <AboutStrip />
      {/* ❌ REMOVED: <SuccessStories /> */}
    </div>
  );
};

export default About;