// ==========================================
// 1. IMPORTS
// ==========================================
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// 👇 YAHAN IMPORT CHANGE KIYA HAI (AboutScript ki jagah AboutStrip)
import AboutStrip from "../components/home/AboutStrip"; 
import ServicesSection from "../components/home/ServicesSection";

const Home = () => {
  return (
    <>
      {/* ==========================================
          SECTION 1: HERO
         ========================================== */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#050505] font-manrope text-white flex items-center">
        <div className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-40 lg:left-[45%] lg:opacity-60" style={{ backgroundImage: "url('/Earth.png')", backgroundPosition: "center 30%" }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[2px] text-[#FF6B35]">
                <span className="h-[1px] w-6 bg-[#FF6B35]" /> WELCOME TO TRANSNOVA
              </div>
              <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">
                One Company. <br /> Endless <span className="text-[#FF6B35]">Solutions.</span>
              </h1>
              <p className="max-w-md text-base leading-relaxed text-[#9B9B8A] md:text-lg">
                TransNova Solutions LLC delivers innovative business solutions across BPO, Telecom, Logistics, and Digital Services.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/services" className="flex items-center gap-2 rounded-[4px] bg-[#FF6B35] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#E85C2D]">
                  Explore Services <FaArrowRight className="text-xs" />
                </Link>
                <Link to="/about" className="flex items-center gap-2 rounded-[4px] border border-white/30 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10">
                  About TransNova <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
            <div className="hidden h-full min-h-[400px] w-full lg:block" />
          </div>
        </div>
      </section>

     
      

      {/* ==========================================
          SECTION 3: SERVICES SECTION (About ke neeche)
         ========================================== */}
      <ServicesSection />

       {/* ==========================================
          SECTION 2: ABOUT STRIP (Hero ke neeche)
         ========================================== */}
      {/* 👇 YAHAN RENDER KARTE WAQT BHI NAAM CHANGE KIYA HAI */}
      <AboutStrip />
    </>
  );
};

export default Home;