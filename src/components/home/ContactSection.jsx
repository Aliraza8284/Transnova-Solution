// src/components/home/ContactSection.jsx

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket, FaChartLine, FaUsers } from "react-icons/fa";

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

const stats = [
  { icon: FaRocket, label: "Fast execution" },
  { icon: FaChartLine, label: "Scalable growth" },
  { icon: FaUsers, label: "Expert team" },
];

const ContactSection = () => {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <section className="relative w-full bg-[#FAF9F6] py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .reveal-up.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-1 { transition-delay: 0.05s; }
        .stagger-2 { transition-delay: 0.18s; }
        @media (prefers-reduced-motion: reduce) {
          .reveal-up { transition: none; opacity: 1; transform: none; }
        }
      `}</style>

      {/* Main container with 90% width */}
      <div className="relative max-w-[98%] mx-auto" ref={sectionRef}>
        <div className="relative overflow-hidden rounded-2xl bg-[#0E1521] border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">

          {/* Corner bracket — the one structural accent, referencing a schematic / build-plan mark */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#C68A3D]/40 m-6 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#C68A3D]/40 m-6 pointer-events-none" />

          <div className="relative px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14">

              {/* ===== Left: message ===== */}
              <div
                className={`max-w-xl reveal-up stagger-1 ${inView ? "in-view" : ""}`}
              >
                <div className="w-8 h-px bg-[#C68A3D] mb-5" />

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[#F5F4F0]">
                  Let's build what's next for your business
                </h2>

                <p className="mt-5 max-w-md text-[15px] sm:text-base text-[#9AA5B1] leading-relaxed">
                  Trans Nova Solutions partners with your team to design,
                  build, and scale software that holds up under real
                  demand — from first prototype to production.
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 pt-7 border-t border-white/10">
                  {stats.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5">
                      <Icon className="text-[#C68A3D] text-[13px]" />
                      <span className="text-[#D7DBE0] text-sm font-medium">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ===== Right: actions ===== */}
              <div
                className={`flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0 reveal-up stagger-2 ${
                  inView ? "in-view" : ""
                }`}
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 w-full lg:w-[220px] px-6 py-3 rounded-lg bg-[#C68A3D] text-[#101820] text-sm font-semibold transition-colors duration-200 hover:bg-[#D89A4C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68A3D]"
                >
                  Explore services
                  <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-2 w-full lg:w-[220px] px-6 py-3 rounded-lg border border-white/15 text-[#F5F4F0] text-sm font-semibold transition-colors duration-200 hover:border-white/30 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                >
                  Join our team
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