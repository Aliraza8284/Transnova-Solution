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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">Our Services</h2>
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-3 mb-6 rounded-full"></div>
            <p className="text-[#666666] text-base leading-relaxed">Comprehensive solutions designed to optimize operations, improve efficiency.</p>
          </div>
          <div className="w-full lg:w-[45%] h-64 lg:h-40 relative overflow-hidden lg:rounded-l-none">
            <div className="h-full w-full origin-bottom-right bg-cover bg-center lg:skew-x-[-15deg] lg:rounded-l-[50px]" style={{ backgroundImage: "url('/Earth.png')", filter: "brightness(0.75)" }}>
              <div className="absolute inset-0 origin-bottom-right bg-gradient-to-l from-[#FF6B35]/80 via-[#FF6B35]/30 to-transparent lg:skew-x-[-15deg]" />
            </div>
            <div className="absolute inset-0 block lg:hidden">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Tech Services" className="h-full w-full rounded-xl object-cover brightness-75" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-l from-[#FF6B35]/80 via-[#FF6B35]/30 to-transparent" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div key={index} className="group rounded-xl border border-[#EDEAE4] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF9F6] transition-colors duration-300 group-hover:bg-[#FF6B35]/10">{service.icon}</div>
              <h3 className="mb-2 text-[17px] font-bold text-[#111111]">{service.title}</h3>
              <p className="mb-4 text-[13px] leading-relaxed text-[#777777]">{service.desc}</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#FF6B35] transition-all duration-300 hover:gap-3">Learn More <FaArrowRight className="text-[10px]" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;