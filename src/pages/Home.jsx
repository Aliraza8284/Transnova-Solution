// ==========================================
// 1. IMPORTS
// ==========================================
import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaGlobeAmericas,
  FaHeadset,
  FaTruck,
  FaBoxes,
  FaMapMarkedAlt
} from "react-icons/fa";

import AboutStrip from "../components/home/AboutStrip";
import ServicesSection from "../components/home/ServicesSection";
import ContactSection from "../components/home/ContactSection";

// ==========================================
// HOME COMPONENT
// ==========================================

const Home = () => {
  return (
    <>
      {/* ==========================================
          LOCAL ANIMATION STYLES
         ========================================== */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-20px); }
        }
        @keyframes growLine {
          0% { width: 0; }
          100% { width: 1.5rem; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0px rgba(255,107,53,0.5); }
          50% { box-shadow: 0 0 25px rgba(255,107,53,0.6); }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease-out forwards;
        }
        .fade-up-1 { animation-delay: 0.1s; }
        .fade-up-2 { animation-delay: 0.25s; }
        .fade-up-3 { animation-delay: 0.4s; }
        .fade-up-4 { animation-delay: 0.55s; }
        .fade-up-5 { animation-delay: 0.7s; }
        .fade-up-6 { animation-delay: 0.85s; }

        .float-blob-1 { animation: floatSlow 8s ease-in-out infinite; }
        .float-blob-2 { animation: floatSlower 10s ease-in-out infinite; }

        .badge-line {
          overflow: hidden;
          animation: growLine 0.8s ease-out forwards;
          animation-delay: 0.2s;
          width: 0;
        }

        .glow-btn:hover {
          animation: glowPulse 1.5s ease-in-out infinite;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .stat-icon {
          font-size: 12px;
          color: #FF6B35;
        }
        .stat-number {
          font-size: 14px;
          font-weight: 700;
          color: #FF6B35;
        }
        .stat-label {
          font-size: 10px;
          font-weight: 500;
          color: #ffffff;
        }

        /* Mobile specific styles */
        @media (max-width: 640px) {
          .stat-item {
            gap: 4px;
          }
          .stat-icon {
            font-size: 10px;
          }
          .stat-number {
            font-size: 12px;
          }
          .stat-label {
            font-size: 8px;
          }
          .stat-item.border {
            padding: 4px 8px !important;
          }
        }
      `}</style>

      {/* ==========================================
          SECTION 1: HERO
         ========================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#050505] font-manrope flex items-center justify-center">
        
        {/* BACKGROUND IMAGE WITH OPACITY REDUCED */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 md:opacity-90"
          style={{
            backgroundImage: "url('/Ali.jpeg')",
          }}
        />

        {/* DARK OVERLAY TO MAKE CONTENT MORE READABLE */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/10" />

        {/* ANIMATED DECORATIVE DIVS - Hidden on mobile for performance */}
        <div className="pointer-events-none absolute -top-24 -right-24 z-10 h-96 w-96 rounded-full bg-[#FF6B35]/20 blur-[100px] float-blob-1 hidden md:block" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 z-10 h-80 w-80 rounded-full bg-[#FF6B35]/10 blur-[110px] float-blob-2 hidden md:block" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-[90px] float-blob-1 hidden md:block" />

        {/* HERO CONTENT */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-8 sm:py-0">
          <div className="max-w-2xl text-center md:text-left">
            
            {/* WELCOME BADGE */}
            <div className="mb-4 md:mb-5 flex items-center gap-2 md:gap-3 text-[8px] md:text-[10px] font-medium uppercase tracking-[1.5px] md:tracking-[2px] text-[#FF6B35] justify-center md:justify-start fade-up fade-up-1">
              <span className="h-[1px] w-4 md:w-6 bg-[#FF6B35] badge-line" />
              WELCOME TO TRANS NOVA
              <span className="h-[1px] w-4 md:w-6 bg-[#FF6B35] badge-line" />
            </div>

            {/* MAIN HEADING */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white fade-up fade-up-2">
              TRUCKING{" "}
              <span className="text-[#FF6B35]">& LOGISTICS</span>
            </h1>

            {/* SUB HEADING */}
            <h2 className="mt-2 md:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white fade-up fade-up-3">
              FREIGHT MOVES.
              <span className="text-[#FF6B35]"> BUSINESS GROWS</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 md:mt-5 max-w-xl text-xs sm:text-sm md:text-base leading-6 md:leading-7 text-white/90 mx-auto md:mx-0 fade-up fade-up-4">
              Reliable trucking and logistics solutions for
              <br className="hidden sm:block" />
              carriers, owner-operators, and fleets
              <br className="hidden sm:block" />
              across the United States
            </p>

            {/* FEATURE STATS WITH ICONS - MOBILE OPTIMIZED */}
            <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 fade-up fade-up-5">
              <div className="stat-item">
                <FaClock className="stat-icon" />
                <span className="stat-label">On-Time Delivery</span>
              </div>
              <div className="stat-item">
                <FaGlobeAmericas className="stat-icon" />
                <span className="stat-label">Nationwide Coverage</span>
              </div>
              <div className="stat-item">
                <FaHeadset className="stat-icon" />
                <span className="stat-label">End-to-End Support</span>
              </div>
            </div>

            {/* STATS BAR - MOBILE OPTIMIZED */}
            <div className="mt-3 md:mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-5 fade-up fade-up-6">
              <div className="stat-item border border-[#FF6B35]/30 rounded-lg px-2 py-1 md:px-4 md:py-2">
                <FaTruck className="stat-icon" />
                <span className="stat-number">50+</span>
                <span className="stat-label">Carriers Served</span>
              </div>
              <div className="stat-item border border-[#FF6B35]/30 rounded-lg px-2 py-1 md:px-4 md:py-2">
                <FaBoxes className="stat-icon" />
                <span className="stat-number">10K+</span>
                <span className="stat-label">Loads Managed</span>
              </div>
              <div className="stat-item border border-[#FF6B35]/30 rounded-lg px-2 py-1 md:px-4 md:py-2">
                <FaMapMarkedAlt className="stat-icon" />
                <span className="stat-number">50</span>
                <span className="stat-label">States Covered</span>
              </div>
            </div>

            {/* BUTTONS - MOBILE OPTIMIZED */}
            <div className="mt-4 md:mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 fade-up fade-up-6">
              <Link
                to="/careers"
                className="
                  glow-btn
                  flex
                  items-center
                  justify-center
                  gap-1.5 md:gap-2
                  rounded-[4px]
                  bg-[#FF6B35]
                  px-4 md:px-6
                  py-2 md:py-3
                  text-xs md:text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  active:bg-[#E85C2D]
                  active:scale-95
                  hover:bg-[#E85C2D]
                  hover:gap-3
                  min-w-[130px] md:min-w-0
                "
              >
                Get a Quote
                <FaArrowRight className="text-[10px] md:text-xs" />
              </Link>

              <Link
                to="/services"
                className="
                  flex
                  items-center
                  justify-center
                  gap-1.5 md:gap-2
                  rounded-[4px]
                  border
                  border-white/30
                  bg-transparent
                  px-4 md:px-6
                  py-2 md:py-3
                  text-xs md:text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  active:bg-white/10
                  active:scale-95
                  hover:border-white
                  hover:bg-white/10
                  hover:gap-3
                  min-w-[130px] md:min-w-0
                "
              >
                Explore Services
                <FaArrowRight className="text-[10px] md:text-xs" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: ABOUT STRIP
         ========================================== */}
      <AboutStrip />

      {/* ==========================================
          SECTION 3: SERVICES SECTION
         ========================================== */}
      <ServicesSection />

      {/* ==========================================
          SECTION 4: CONTACT SECTION
         ========================================== */}
      <ContactSection />
    </>
  );
};

// ==========================================
// EXPORT
// ==========================================

export default Home;