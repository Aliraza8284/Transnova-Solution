// src/components/home/ContactSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket, FaChartLine, FaUsers, FaHandshake } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-[#FF6B35]/[0.08] blur-[120px]" />
        
        {/* Side Glows */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#FF6B35]/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FF6B35]/[0.03] blur-[100px]" />
        
        {/* Top & Bottom Borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative max-w-7xl mx-auto">
        
        <div className="relative overflow-hidden rounded-3xl border border-[#EDEAE4] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
          
          {/* Decorative Lines */}
          <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-[#FF6B35] to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-[#FF6B35] to-transparent" />
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/[0.02] to-transparent pointer-events-none" />

          <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

              {/* ================= LEFT CONTENT ================= */}
              <div className="max-w-2xl text-center lg:text-left">
                
                {/* Badge - Updated with FaHandshake */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/[0.07] mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B35]" />
                  </span>
                  <FaHandshake className="text-[#FF6B35] text-[10px]" />
                  <span className="text-[#FF6B35] text-[9px] font-bold tracking-[2.5px] uppercase">
                    Let's Work Together
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#111111]">
                  Ready to Transform
                  <span className="block text-[#FF6B35] relative">
                    Your Business?
                    <span className="absolute -bottom-1 left-0 w-20 h-1 bg-[#FF6B35]/40 rounded-full lg:left-0 mx-auto lg:mx-0" />
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-4 max-w-xl text-sm sm:text-base text-[#666666] leading-relaxed">
                  Let's discuss how Trans Nova Solutions can help you build
                  smarter, scale faster, and achieve your business goals with
                  cutting-edge technology and expert guidance.
                </p>

                {/* Stats - Updated with better icons */}
                <div className="flex flex-wrap items-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                      <FaRocket className="text-[#FF6B35] text-xs" />
                    </div>
                    <span className="text-[#555555] text-xs font-medium">Fast Execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                      <FaChartLine className="text-[#FF6B35] text-xs" />
                    </div>
                    <span className="text-[#555555] text-xs font-medium">Scalable Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                      <FaUsers className="text-[#FF6B35] text-xs" />
                    </div>
                    <span className="text-[#555555] text-xs font-medium">Expert Team</span>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT BUTTONS ================= */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shrink-0 w-full sm:w-auto">
                
                {/* Primary Button - Navigates to Careers (First Button) */}
                <Link
                  to="/careers"
                  className="group relative inline-flex items-center justify-center gap-3 w-full sm:min-w-[200px] px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E85C2D] text-white text-xs font-bold uppercase tracking-[1.5px] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B35]/30 hover:-translate-y-1 active:scale-95 overflow-hidden"
                >
                  {/* Button Glow Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/0 via-white/15 to-[#FF6B35]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <FaUsers className="text-[10px]" />
                    Join Our Team
                    <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  
                  <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Secondary Button - Navigates to Services (Second Button) */}
                <Link
                  to="/services"
                  className="group relative inline-flex items-center justify-center gap-3 w-full sm:min-w-[180px] px-8 py-3.5 rounded-full border border-[#EDEAE4] bg-white text-[#111111] text-xs font-bold uppercase tracking-[1.5px] transition-all duration-300 hover:border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white hover:-translate-y-1 active:scale-95 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <FaRocket className="text-[10px]" />
                    Explore Services
                    <span className="text-[#999999] transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;