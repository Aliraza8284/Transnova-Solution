// ==========================================
// 1. IMPORTS
// ==========================================
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTruck, FaNetworkWired, FaHeartbeat, FaUniversity } from 'react-icons/fa';

const Industries = () => {
  // ==========================================
  // 2. INDUSTRIES DATA (Sirf 4 Cards)
  // ==========================================
  const industriesList = [
    { 
      icon: <FaTruck className="text-[#FF6B35] text-2xl" />, 
      title: 'Logistics & Transportation', 
      desc: 'Streamlined logistics and transportation solutions.' 
    },
    { 
      icon: <FaNetworkWired className="text-[#FF6B35] text-2xl" />, 
      title: 'Telecom & Communication', 
      desc: 'Reliable communication solutions for a connected world.' 
    },
    { 
      icon: <FaHeartbeat className="text-[#FF6B35] text-2xl" />, 
      title: 'Healthcare', 
      desc: 'HIPAA-compliant support and management solutions.' 
    },
    { 
      icon: <FaUniversity className="text-[#FF6B35] text-2xl" />, 
      title: 'Finance & Banking', 
      desc: 'Secure and efficient financial support.' 
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope">
      
      {/* ==========================================
          SECTION: INDUSTRIES WE SERVE PAGE
         ========================================== */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* --- 1. TOP HEADER (Text + Subtle Map Background) --- */}
        <div className="flex flex-col justify-start items-start gap-4 mb-10">
          
          <div className="max-w-3xl relative z-10">
            {/* Breadcrumb */}
            <p className="text-[#9B9B8A] text-sm mb-4">Home / Industries</p>
            
            {/* 👇 HEADING: 'Industries' WHITE, 'We Serve' ORANGE */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-dark">Industries</span>{' '}
              <span className="text-[#FF6B35]">We Serve</span>
            </h2>
            
            {/* Orange line */}
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-3 mb-6 rounded-full"></div>
            
            <p className="text-[#666666] text-base leading-relaxed max-w-xl">
              We deliver tailored solutions for a wide range of industries, helping businesses overcome challenges and achieve growth.
            </p>
          </div>

          {/* Background World Map Effect (Subtle) */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center"></div>
        </div>

        {/* --- 2. GRID: 4 Industry Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesList.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 group border border-[#EDEAE4] hover:border-transparent"
            >
              {/* Icon Box */}
              <div className="mb-4 bg-[#FAF9F6] w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35]/10 transition-colors">
                {industry.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-[17px] font-bold text-[#111111] mb-2">
                {industry.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#777777] text-[14px] leading-relaxed mb-4">
                {industry.desc}
              </p>
              
              {/* Link */}
              <Link 
                to="/industries" 
                className="inline-flex items-center gap-2 text-[#FF6B35] text-[13px] font-medium hover:gap-3 transition-all duration-300"
              >
                Learn More <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Industries;