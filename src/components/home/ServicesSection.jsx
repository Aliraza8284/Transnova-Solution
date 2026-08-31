import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeadphones, FaPhoneAlt, FaFileInvoice, FaTruck, FaUsers } from 'react-icons/fa';

const ServicesSection = () => {
  const servicesList = [
    { icon: <FaHeadphones className="text-xl text-[#FF6B35]" />, title: 'BPO Solutions', desc: 'Delivering exceptional customer experiences with tailored support.' },
    { icon: <FaPhoneAlt className="text-xl text-[#FF6B35]" />, title: 'VoIP & Telecom', desc: 'Connecting businesses with reliable communication solutions.' },
    { icon: <FaFileInvoice className="text-xl text-[#FF6B35]" />, title: 'Invoicing Solutions', desc: 'Automated invoicing for better cash flow.' },
    { icon: <FaTruck className="text-xl text-[#FF6B35]" />, title: 'Logistics Solutions', desc: 'End-to-end logistics management that ensures timely delivery.' },
    { icon: <FaTruck className="text-xl text-[#FF6B35]" />, title: 'Trucking Services', desc: 'Safe and reliable trucking services across North America.' },
    { icon: <FaUsers className="text-xl text-[#FF6B35]" />, title: 'Outsourcing Services', desc: 'Scalable outsourcing solutions to improve business performance.' },
  ];

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#FAF9F6] font-manrope">
      <div className="max-w-7xl mx-auto">
        
        {/* ==========================================
            HEADER WITH IMAGE ON RIGHT - Like Services page
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
          
          {/* Left - Text Content */}
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
            <div>
              <span className="inline-flex items-center gap-2 text-[#FF6B35] text-xs font-bold uppercase tracking-wider">
                <span className="w-8 h-[2px] bg-[#FF6B35]"></span>
                What We Offer
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              Our <span className="text-[#FF6B35]">Services</span>
            </h2>
            
            <div className="w-12 h-[3px] bg-[#FF6B35] rounded-full"></div>
            
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed max-w-lg">
              Comprehensive solutions designed to optimize operations, improve efficiency, and drive growth for your business across all sectors.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
                <span className="text-sm text-[#555]">Trusted Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
                <span className="text-sm text-[#555]">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
                <span className="text-sm text-[#555]">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right - Image with animation and glow */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="animate-float relative w-full max-w-2xl">
              <img
                src="/people.jpg"
                alt="Our Services"
                className="w-full h-auto max-h-[500px] rounded-3xl object-cover  "
              />
              {/* Glow behind image */}
              <div className="absolute -z-10 inset-0 rounded-3xl bg-[#FF6B35]/10 blur-[60px]" />
            </div>
          </div>

        </div>
        
        {/* ==========================================
            SERVICES GRID
        ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div key={index} className="group rounded-xl border border-[#EDEAE4] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF9F6] transition-colors duration-300 group-hover:bg-[#FF6B35]/10">{service.icon}</div>
              <h3 className="mb-2 text-[17px] font-bold text-[#111111]">{service.title}</h3>
              <p className="mb-4 text-[13px] leading-relaxed text-[#777777]">{service.desc}</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#FF6B35] transition-all duration-300 hover:gap-3">Learn More <FaArrowRight className="text-[10px]" /></Link>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          FLOATING ANIMATION STYLES
      ========================================== */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default ServicesSection;