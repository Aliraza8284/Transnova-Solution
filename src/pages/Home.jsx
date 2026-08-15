// ==========================================
// 1. IMPORTS
// ==========================================
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// ==========================================
// 2. HOME COMPONENT
// ==========================================
const Home = () => {
  return (
    <>
      {/* ==========================================
          HERO SECTION
          Black background + World Map
         ========================================== */}
      <section
        className="
          relative
          min-h-[650px]
          overflow-hidden
          bg-[#050505]
          font-manrope
          text-white
          flex
          items-center
        "
      >
        {/* ==========================================
            RIGHT SIDE WORLD MAP BACKGROUND
           ========================================== */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-cover
            bg-center
            opacity-40
            lg:left-[45%]
            lg:opacity-60
          "
          style={{
            backgroundImage: "url('/Earth.png')",
            backgroundPosition: "center 30%",
          }}
        />

        {/* ==========================================
            DARK OVERLAY
           ========================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-[#050505]
            via-[#050505]/90
            to-transparent
          "
        />

        {/* ==========================================
            MAIN CONTAINER
           ========================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-6
            lg:px-12
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-12
              lg:grid-cols-2
            "
          >
            {/* ==========================================
                LEFT COLUMN
                Text + Buttons
               ========================================== */}
            <div className="space-y-6">

              {/* Small line + welcome text */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[2px]
                  text-[#FF6B35]
                "
              >
                <span className="h-[1px] w-6 bg-[#FF6B35]" />

                WELCOME TO TRANSNOVA
              </div>

              {/* Main heading */}
              <h1
                className="
                  text-4xl
                  font-bold
                  leading-[1.15]
                  text-white
                  md:text-5xl
                  lg:text-6xl
                "
              >
                One Company.
                <br />
                Endless{" "}
                <span className="text-[#FF6B35]">
                  Solutions.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  max-w-md
                  text-base
                  leading-relaxed
                  text-[#9B9B8A]
                  md:text-lg
                "
              >
                TransNova Solutions LLC delivers innovative
                business solutions across BPO, Telecom,
                Logistics, and Digital Services — empowering
                growth, connecting opportunities.
              </p>

              {/* ==========================================
                  ACTION BUTTONS
                 ========================================== */}
              <div className="flex flex-wrap gap-4 pt-2">

                {/* Explore Services */}
                <Link
                  to="/services"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-[4px]
                    bg-[#FF6B35]
                    px-6
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#E85C2D]
                  "
                >
                  Explore Services

                  <FaArrowRight className="text-xs" />
                </Link>

                {/* About TransNova */}
                <Link
                  to="/about"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-[4px]
                    border
                    border-white/30
                    bg-transparent
                    px-6
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white/10
                  "
                >
                  About TransNova

                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* ==========================================
                RIGHT COLUMN
                World Map Space
               ========================================== */}
            <div
              className="
                hidden
                h-full
                min-h-[400px]
                w-full
                lg:block
              "
            >
              {/* 
                This empty area keeps the right side
                available for the world map background.
              */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;