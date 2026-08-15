// ==========================================
// 1. IMPORTS
// ==========================================
import React from 'react';
import { FaAward, FaGlobe, FaUsers, FaChartLine, FaBullseye, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope">
      
      {/* ==========================================
          SECTION 1: TOP (Text + Office Image)
         ========================================== */}
      <section className="pt-16 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Breadcrumb */}
            <p className="text-[#9B9B8A] text-sm">Home / About Us</p>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              About Us
            </h2>
            {/* Orange line */}
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-2 mb-4 rounded-full"></div>
            
            <p className="text-[#555555] text-base leading-relaxed">
              TransNova Solutions LLC is a global business solutions provider, committed to delivering exceptional value through innovation, technology, and our people.
            </p>
            <p className="text-[#555555] text-base leading-relaxed">
              We believe in building long-term partnerships by understanding our clients' needs and delivering solutions that drive measurable results.
            </p>
          </div>

          {/* Right: Office Image (Bada rounded corner) */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-black/10">
              <img 
                src="/office.png" 
                alt="TransNova Office" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              {/* Agar image ke upar company ka logo overlay karna ho toh yahan add karein */}
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 2: STATS (Black Background Strip)
         ========================================== */}
      <section className="bg-[#111111] text-white py-10 lg:py-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 lg:gap-4">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4">
            <FaAward className="text-[#FF6B35] text-4xl lg:text-5xl" />
            <div>
              <div className="text-2xl lg:text-3xl font-bold">10+</div>
              <p className="text-[#9B9B8A] text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4">
            <FaGlobe className="text-[#FF6B35] text-4xl lg:text-5xl" />
            <div>
              <div className="text-2xl lg:text-3xl font-bold">100+</div>
              <p className="text-[#9B9B8A] text-sm">Global Clients</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4">
            <FaUsers className="text-[#FF6B35] text-4xl lg:text-5xl" />
            <div>
              <div className="text-2xl lg:text-3xl font-bold">500+</div>
              <p className="text-[#9B9B8A] text-sm">Skilled Professionals</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4">
            <FaChartLine className="text-[#FF6B35] text-4xl lg:text-5xl" />
            <div>
              <div className="text-2xl lg:text-3xl font-bold">98%</div>
              <p className="text-[#9B9B8A] text-sm">Client Satisfaction</p>
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 3: MISSION & VISION (2 Cards)
         ========================================== */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] flex items-center justify-center">
                <FaBullseye className="text-[#FF6B35] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">Our Mission</h3>
            </div>
            {/* Orange line under title */}
            <div className="w-8 h-[2px] bg-[#FF6B35] mb-4"></div>
            <p className="text-[#666666] text-base leading-relaxed">
              To empower businesses with innovative and scalable solutions that drive growth and create lasting impact.
            </p>
          </div>

          {/* Card 2: Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] flex items-center justify-center">
                <FaEye className="text-[#FF6B35] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">Our Vision</h3>
            </div>
            {/* Orange line under title */}
            <div className="w-8 h-[2px] bg-[#FF6B35] mb-4"></div>
            <p className="text-[#666666] text-base leading-relaxed">
              To be a global leader in business solutions, recognized for our integrity, innovation, and customer success.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;