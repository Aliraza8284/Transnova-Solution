// src/components/home/ContactSection.jsx

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket, FaChartLine, FaUsers, FaHandshake } from "react-icons/fa";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

const ContactSection = () => {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 px-4 sm:px-6 lg:px-12">

      {/* ==========================================
          LOCAL ANIMATION STYLES
         ========================================== */}
      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal-up.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal-scale.in-view {
          opacity: 1;
          transform: scale(1);
        }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.22s; }
        .card-float {
          animation: cardFloat 7s ease-in-out infinite;
        }
      `}</style>

      {/* ================= BACKGROUND EFFECTS (outer section) ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-[#FF6B35]/[0.08] blur-[120px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#FF6B35]/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FF6B35]/[0.03] blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative max-w-7xl mx-auto" ref={sectionRef}>

        <div className={`card-float relative overflow-hidden rounded-[28px] border border-[#EDEAE4] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] reveal-scale ${inView ? "in-view" : ""}`}>

          {/* Decorative Lines */}
          <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-[#FF6B35] to-transparent z-20" />
          <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-[#FF6B35] to-transparent z-20" />

          {/* ================= CONTENT DIV WITH SCOPED WAVE BACKGROUND ================= */}
          <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16 overflow-hidden">

            {/* ---- WAVE BACKGROUND (BLACK -> WHITE), scoped to this div only ---- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Black top portion */}
              <div className="absolute top-0 left-0 right-0 h-[55%] bg-[#050505]" />

              {/* Subtle glow + grid texture on the black portion */}
              <div className="absolute top-0 left-0 right-0 h-[55%] opacity-[0.06] bg-[radial-gradient(circle_at_top_right,#FF6B35_0,transparent_45%)]" />

              {/* Wave shape transitioning black -> white */}
              <svg
                className="absolute top-[38%] sm:top-[40%] lg:top-[42%] left-0 right-0 w-full h-[70px] sm:h-[90px] lg:h-[110px]"
                viewBox="0 0 1440 140"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,70 C240,140 480,0 720,40 C960,80 1200,140 1440,60 L1440,140 L0,140 Z"
                  fill="#FFFFFF"
                />
              </svg>

              {/* White bottom portion */}
              <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-white" />

              {/* Inner orange glow across whole div */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/[0.02] to-transparent" />
            </div>

            {/* ================= ACTUAL CONTENT (sits above the wave bg) ================= */}
            <div className="relative z-10">

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                {/* ================= LEFT CONTENT ================= */}
                <div className={`max-w-2xl text-center lg:text-left reveal-up stagger-1 ${inView ? "in-view" : ""}`}>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#FF6B35]/25 bg-[#FF6B35]/[0.1] mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-60 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B35]" />
                    </span>
                    <FaHandshake className="text-[#FF6B35] text-xs" />
                    <span className="text-[#FF6B35] text-[10px] font-bold tracking-[2.5px] uppercase">
                      Let's Work Together
                    </span>
                  </div>

                  {/* Heading — sits on black portion, so white text */}
                  <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-[-1px] text-white">
                    Ready to Transform
                    <span className="block text-[#FF6B35] relative mt-1">
                      Your Business?
                      <span className="absolute -bottom-1 left-0 w-24 h-1 bg-[#FF6B35]/40 rounded-full lg:left-0 mx-auto lg:mx-0" />
                    </span>
                  </h2>

                  {/* Description — sits on black portion, fixed to text-white/65 */}
                  <p className="mt-6 max-w-xl text-base sm:text-lg text-white/65 leading-relaxed">
                    Let's discuss how Trans Nova Solutions can help you build
                    smarter, scale faster, and achieve your business goals with
                    cutting-edge technology and expert guidance.
                  </p>

                  {/* Stats — sits on white portion, so dark text */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-8">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                        <FaRocket className="text-[#FF6B35] text-sm" />
                      </div>
                      <span className="text-[#444444] text-sm font-semibold">Fast Execution</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                        <FaChartLine className="text-[#FF6B35] text-sm" />
                      </div>
                      <span className="text-[#444444] text-sm font-semibold">Scalable Growth</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                        <FaUsers className="text-[#FF6B35] text-sm" />
                      </div>
                      <span className="text-[#444444] text-sm font-semibold">Expert Team</span>
                    </div>
                  </div>
                </div>

                {/* ================= RIGHT BUTTONS ================= */}
                <div className={`flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shrink-0 w-full sm:w-auto reveal-up stagger-2 ${inView ? "in-view" : ""}`}>

                  {/* Primary Button */}
                  <Link
                    to="/careers"
                    className="group relative inline-flex items-center justify-center gap-3 w-full sm:min-w-[210px] px-9 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E85C2D] text-white text-sm font-bold uppercase tracking-[1.5px] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B35]/30 hover:-translate-y-1 active:scale-95 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/0 via-white/15 to-[#FF6B35]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                    <span className="relative z-10 flex items-center gap-2">
                      <FaUsers className="text-xs" />
                      Join Our Team
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                    <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  {/* Secondary Button */}
                  <Link
                    to="/services"
                    className="group relative inline-flex items-center justify-center gap-3 w-full sm:min-w-[190px] px-9 py-4 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-[1.5px] transition-all duration-300 hover:border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white hover:-translate-y-1 active:scale-95 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="relative z-10 flex items-center gap-2">
                      <FaRocket className="text-xs" />
                      Explore Services
                      <span className="text-white/60 transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;