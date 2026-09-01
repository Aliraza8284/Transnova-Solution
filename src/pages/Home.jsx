// ==========================================
// 1. IMPORTS
// ==========================================
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

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
      `}</style>

      {/* ==========================================
          SECTION 1: HERO
         ========================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#050505] font-manrope flex items-center justify-center">

        {/* ==========================================
            BACKGROUND IMAGE
           ========================================== */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Main.jpeg')",
          }}
        />

        {/* ==========================================
            DARK OVERLAY - REMOVED
           ========================================== */}

        {/* ==========================================
            ANIMATED DECORATIVE DIVS (glow orbs)
           ========================================== */}

        <div className="pointer-events-none absolute -top-24 -right-24 z-10 h-96 w-96 rounded-full bg-[#FF6B35]/20 blur-[100px] float-blob-1" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 z-10 h-80 w-80 rounded-full bg-[#FF6B35]/10 blur-[110px] float-blob-2" />

        <div className="pointer-events-none absolute top-1/3 left-1/2 z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-[90px] float-blob-1" />


        {/* ==========================================
            HERO CONTENT
           ========================================== */}

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-12">

          <div className="max-w-2xl text-center md:text-left">

            {/* ==========================================
                WELCOME BADGE
               ========================================== */}

            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[2px] text-[#FF6B35] justify-center md:justify-start fade-up fade-up-1">

              <span className="h-[1px] w-6 bg-[#FF6B35] badge-line" />

              WELCOME TO TRANS NOVA

              <span className="h-[1px] w-6 bg-[#FF6B35] badge-line" />

            </div>


            {/* ==========================================
                MAIN HEADING - BLACK COLOR
               ========================================== */}

            <h1 className="text-4xl font-bold leading-[1.15] text-black md:text-5xl lg:text-6xl fade-up fade-up-2">

              TRUCKING{" "}

              <span className="text-[#FF6B35]">
                & LOGISTICS
              </span>

            </h1>


            {/* ==========================================
                SUB HEADING - BLACK COLOR
               ========================================== */}

            <h2 className="mt-3 text-2xl font-semibold text-black md:text-3xl lg:text-4xl fade-up fade-up-3">

              FREIGHT MOVES.

              <span className="text-[#FF6B35]">
                {" "}BUSINESS GROWS
              </span>

            </h2>


            {/* ==========================================
                TAGLINE / DESCRIPTION LINE - BLACK COLOR
               ========================================== */}

        


            {/* ==========================================
                DESCRIPTION - BLACK COLOR
               ========================================== */}

            <p className="mt-5 max-w-xl text-sm leading-7 text-black md:text-base mx-auto md:mx-0 fade-up fade-up-4">

              Reliable trucking and logistics solutions for

              <br />

              carriers, owner-operators, and fleets

              <br />

              across the United States

            </p>


            {/* ==========================================
                BUTTONS
               ========================================== */}

            <div className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start fade-up fade-up-5">

              {/* GET A QUOTE BUTTON - LINKED TO CAREERS */}

              <Link
                to="/careers"
                className="
                  glow-btn
                  flex
                  items-center
                  gap-2
                  rounded-[4px]
                  bg-[#FF6B35]
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E85C2D]
                  hover:gap-3
                "
              >
                Get a Quote
                <FaArrowRight className="text-xs" />
              </Link>

              {/* EXPLORE SERVICES BUTTON */}

              <Link
                to="/services"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-[4px]
                  border
                  border-black/40
                  bg-transparent
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:border-black
                  hover:bg-black/10
                  hover:gap-3
                "
              >
                Explore Services
                <FaArrowRight className="text-xs" />
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