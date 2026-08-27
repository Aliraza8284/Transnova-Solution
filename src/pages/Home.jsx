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
          SECTION 1: HERO
          TRUCKING ONLY
         ========================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#050505] font-manrope text-white flex items-center justify-center">

        {/* ==========================================
            TRUCKING BACKGROUND IMAGE
           ========================================== */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/truck.png')",
          }}
        />

        {/* ==========================================
            DARK OVERLAY
           ========================================== */}

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/35 to-black/20" />


        {/* ==========================================
            HERO CONTENT
           ========================================== */}

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-12">

          <div className="max-w-2xl">


            {/* ==========================================
                WELCOME BADGE
               ========================================== */}

            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[2px] text-[#FF6B35]">

              <span className="h-[1px] w-6 bg-[#FF6B35]" />

              WELCOME TO TRANS NOVA

              <span className="h-[1px] w-6 bg-[#FF6B35]" />

            </div>


            {/* ==========================================
                MAIN HEADING
               ========================================== */}

            <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">

              Trans{" "}

              <span className="text-[#FF6B35]">
                NOVA
              </span>{" "}

              Solutions

            </h1>


            {/* ==========================================
                SUB HEADING
               ========================================== */}

            <h2 className="mt-3 text-2xl font-semibold text-white/90 md:text-3xl lg:text-4xl">

              One Company.

              <span className="text-[#FF6B35]">
                {" "}Endless Solutions.
              </span>

            </h2>


            {/* ==========================================
                TRUCKING SERVICE TITLE
               ========================================== */}

            <div className="mt-5">

              <p className="text-xl font-medium text-white/90 md:text-2xl lg:text-3xl">

                Providing{" "}

                <span className="font-semibold text-[#FF6B35]">
                  Trucking Services
                </span>

                <span className="ml-1 animate-pulse text-[#FF6B35]">
                  |
                </span>

              </p>

            </div>


            {/* ==========================================
                DESCRIPTION
               ========================================== */}

            <p className="mt-5 max-w-xl text-sm leading-7 text-white md:text-base">

              Trans Nova Solutions provides professional trucking
              solutions for carriers, owner-operators, and fleets.
              We help keep your trucks moving, find better freight,
              reduce downtime, and grow your business.

            </p>


            {/* ==========================================
                BUTTONS
               ========================================== */}

            <div className="mt-7 flex flex-wrap gap-3">


              {/* TRUCKING SERVICES BUTTON */}

             <Link
  to="/services"
  className="
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
  Explore Trucking Services
  <FaArrowRight className="text-xs" />
</Link>


              {/* ABOUT BUTTON */}

              <Link
                to="/about"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-[4px]
                  border
                  border-white/40
                  bg-transparent
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white/10
                  hover:gap-3
                "
              >

                About Trans Nova

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