// src/components/home/AboutScript.jsx
import React from 'react';
import { FaConnectdevelop, FaChartLine, FaUsers, FaHandshake, FaSearch, FaCheck, FaSyncAlt } from 'react-icons/fa';

const AboutScript = () => {
  
  // Function to navigate to Contact Us
  const goToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="bg-[#FAF9F6] font-manrope pb-8 overflow-hidden">
      
      {/* ==========================================
          SECTION 0: BREADCRUMB
         ========================================== */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto pt-4 pb-1 relative z-20">
        <p className="text-[#9B9B8A] text-xs">Home / About Us</p>
      </div>

      {/* ==========================================
          SECTION 1: WHO WE ARE (Professional Image)
         ========================================== */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-6 pt-2 relative">
        
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden -z-10 opacity-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 100 L100 100 L50 0 Z" fill="none" stroke="#9B9B8A" strokeWidth="0.5" opacity="0.5"/>
            <path d="M0 50 L100 50 L100 0 Z" fill="none" stroke="#9B9B8A" strokeWidth="0.5" opacity="0.5"/>
            <path d="M0 0 L100 100 L0 100 Z" fill="none" stroke="#9B9B8A" strokeWidth="0.5" opacity="0.5"/>
          </svg>
        </div>

        {/* TOP-RIGHT ORANGE TRIANGLE */}
        <div 
          className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35] pointer-events-none"
          style={{ clipPath: 'polygon(100% 0, 0% 0%, 100% 100%)' }}
        ></div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT SIDE: Text */}
          <div className="w-full lg:w-1/2 space-y-3">
            <p className="text-[#FF6B35] font-bold text-xs tracking-[2px] uppercase">Who We Are</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight">
              We Connect<br />What Matters.
            </h2>
            <div className="w-8 h-[3px] bg-[#FF6B35] mt-1 mb-3 rounded-full"></div>
            
            <p className="text-[#555555] text-xs leading-relaxed max-w-lg">
              Trans Nova Solutions is a diversified business solutions company built around one simple idea: businesses grow faster when the right people, technology, and opportunities are connected.
            </p>
            <p className="text-[#555555] text-xs leading-relaxed max-w-lg">
              From customer operations and telecommunications to logistics and digital services, we help organizations simplify complexity, improve performance, and create new opportunities for growth.
            </p>
          </div>

          {/* RIGHT SIDE: Hexagonal Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[450px]">
              <div 
                className="w-full aspect-[4/3] bg-cover bg-center shadow-lg hover:scale-[1.02] transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`,
                  clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
                }}
              ></div>
              <div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#FF6B35] z-10"
                style={{ clipPath: 'polygon(0 0, 100% 100%, 0% 100%)' }}
              ></div>
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 2: BLACK BACKGROUND
         ========================================== */}
      <section className="bg-[#050505] text-white py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#FF6B35] font-semibold text-xs tracking-[3px] uppercase mb-6">
            Why Businesses Choose TNS
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 divide-y lg:divide-y-0 lg:divide-x divide-[#2a2a2a]">
            {[
              { Icon: FaConnectdevelop, title: 'Connected Thinking', desc: 'We look beyond individual services to understand the bigger picture and deliver solutions that truly connect.' },
              { Icon: FaChartLine, title: 'Built to Scale', desc: 'Our solutions are designed to adapt to your needs and scale as your business grows.' },
              { Icon: FaUsers, title: 'Technology + People', desc: 'We combine human expertise with technology to deliver smarter, faster, and better outcomes.' },
              { Icon: FaHandshake, title: 'One Connected Partner', desc: 'Multiple capabilities. One trusted partner. Less complexity, more opportunities.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-2 pt-4 lg:pt-0">
                <item.Icon className="text-[#FF6B35] text-3xl mb-2" />
                <h3 className="text-base font-bold mb-1">{item.title}</h3>
                <p className="text-[#9B9B8A] text-[10px] leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 3: OUR APPROACH (01 to 04 - Numbers Inside, Wavy Line)
         ========================================== */}
      <section className="bg-white py-10 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="text-[#FF6B35] font-bold text-xs tracking-[2px] uppercase mb-1">Our Approach</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#111111] mb-8">
            A Connected Approach to Every Solution.
          </h2>

          {/* 🔹 WAVY / ZIG-ZAG LINE (Bilkul image jaisi) */}
          <div className="absolute top-[55px] left-[5%] right-[5%] h-[2px] w-[90%] hidden lg:block -z-10">
            <svg className="w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path 
                d="M0 5 C 10 2, 15 2, 25 5 S 35 5, 50 5 S 70 3, 75 7 S 85 2, 100 5" 
                fill="none" 
                stroke="#FF6B35" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-2">
            
            {/* Step 01 */}
            <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-0 w-full lg:w-auto relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-white flex flex-col items-center justify-center text-[#FF6B35] z-10 shadow-sm">
                <span className="text-[10px] font-bold leading-none">01</span>
              </div>
              <div className="text-left lg:text-center mt-1 lg:mt-2">
                <div className="w-4 h-[2px] bg-[#FF6B35] mx-auto lg:mx-auto mb-1"></div>
                <h4 className="font-bold text-[#111111] text-sm">Understand</h4>
                <p className="text-[#777777] text-[10px] leading-relaxed mt-0.5 max-w-[140px]">
                  We listen, analyze, and identify the real business challenge.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-0 w-full lg:w-auto relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-white flex flex-col items-center justify-center text-[#FF6B35] z-10 shadow-sm">
                <span className="text-[10px] font-bold leading-none">02</span>
              </div>
              <div className="text-left lg:text-center mt-1 lg:mt-2">
                <div className="w-4 h-[2px] bg-[#FF6B35] mx-auto lg:mx-auto mb-1"></div>
                <h4 className="font-bold text-[#111111] text-sm">Connect</h4>
                <p className="text-[#777777] text-[10px] leading-relaxed mt-0.5 max-w-[140px]">
                  We bring together the right people, capabilities, and technology.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-0 w-full lg:w-auto relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-white flex flex-col items-center justify-center text-[#FF6B35] z-10 shadow-sm">
                <span className="text-[10px] font-bold leading-none">03</span>
              </div>
              <div className="text-left lg:text-center mt-1 lg:mt-2">
                <div className="w-4 h-[2px] bg-[#FF6B35] mx-auto lg:mx-auto mb-1"></div>
                <h4 className="font-bold text-[#111111] text-sm">Deliver</h4>
                <p className="text-[#777777] text-[10px] leading-relaxed mt-0.5 max-w-[140px]">
                  We turn strategy into practical, measurable solutions.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-0 w-full lg:w-auto relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-white flex flex-col items-center justify-center text-[#FF6B35] z-10 shadow-sm">
                <span className="text-[10px] font-bold leading-none">04</span>
              </div>
              <div className="text-left lg:text-center mt-1 lg:mt-2">
                <div className="w-4 h-[2px] bg-[#FF6B35] mx-auto lg:mx-auto mb-1"></div>
                <h4 className="font-bold text-[#111111] text-sm">Evolve</h4>
                <p className="text-[#777777] text-[10px] leading-relaxed mt-0.5 max-w-[140px]">
                  We continuously improve as your business and market change.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 4: BOTTOM CTA (Ready to Move Business Forward?)
         ========================================== */}
      <section className="bg-white px-6 lg:px-12 border-t border-[#EDEAE4] pt-6 pb-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#FAF9F6] p-6 lg:p-8 rounded-3xl shadow-sm">
          
          <div className="max-w-lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#111111] leading-tight">
              Ready to Move<br /><span className="text-[#FF6B35]">Business Forward?</span>
            </h2>
          </div>

          <div className="hidden lg:block w-[1px] h-10 bg-[#D1D1D1]"></div>

          <div className="max-w-sm text-center lg:text-left">
            <p className="text-[#777777] text-xs mb-3">
              Let's connect your challenges with smarter possibilities.
            </p>
            <button 
              onClick={goToContact}
              className="bg-[#FF6B35] text-white font-bold text-[10px] tracking-wide uppercase px-5 py-2.5 rounded-[4px] hover:bg-[#E85C2D] transition-all duration-300 shadow-md shadow-orange-200 flex items-center gap-1 mx-auto lg:mx-0"
            >
              Start a Conversation <span className="text-sm">›</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutScript;