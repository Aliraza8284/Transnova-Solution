// ==========================================
// 1. IMPORTS
// ==========================================
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import AboutStrip from "../components/home/AboutStrip";
import ServicesSection from "../components/home/ServicesSection";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  // Service names with their corresponding background images
  const services = [
    {
      name: "BPO Solutions",
      image: "home.png"
    },
    {
      name: "VoIP & Telecom",
      image: "people.jpg"
    },
    {
      name: "Invoicing Solutions",
      image: "home4.jfif"
    },
    {
      name: "Logistics Solutions",
      image: "home3.jfif"
    },
    {
      name: "Trucking Services",
      image: "home5.png"
    },
    {
      name: "Outsourcing Services",
      image: "home6.png"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Typing effect for text
  useEffect(() => {
    const currentService = services[currentIndex].name;
    
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDelay = 1500;

    const textTimer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentService.length) {
          setDisplayText(currentService.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDelay);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentService.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          // Move to next service
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
            setIsTransitioning(false);
          }, 500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(textTimer);
  }, [charIndex, isDeleting, currentIndex, services]);

  // Reset charIndex when service changes
  useEffect(() => {
    setCharIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [currentIndex]);

  return (
    <>
      {/* ==========================================
          SECTION 1: HERO
         ========================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#050505] font-manrope text-white flex items-center justify-center">
        {/* Background Image Slider Container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Current Image */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isTransitioning 
                ? "opacity-0 scale-105" 
                : "opacity-100 scale-100"
            }`}
            style={{
              backgroundImage: `url('${services[currentIndex].image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
        
        {/* 
          ==========================================
          SUBTLE OVERLAY - 30% opacity
          ==========================================
        */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/30 z-10" />
        
        {/* Content */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-12 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Welcome Badge */}
            <div className="flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[2px] text-[#FF6B35]">
              <span className="h-[1px] w-6 bg-[#FF6B35]" /> 
              WELCOME TO TRANS NOVA
              <span className="h-[1px] w-6 bg-[#FF6B35]" />
            </div>

            {/* Main Heading - Trans Nova Solutions with NOVA in orange */}
            <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">
              Trans <span className="text-[#FF6B35]">NOVA</span> Solutions
            </h1>

            {/* Sub Heading - One Company. Endless Solutions. */}
            <h2 className="text-2xl font-semibold text-white/90 md:text-3xl lg:text-4xl">
              One Company. <span className="text-[#FF6B35]">Endless Solutions.</span>
            </h2>

            {/* Animated Service Name with "Providing" prefix */}
            <div className="h-12 md:h-14 lg:h-16 flex items-center justify-center">
              <p className="text-xl font-medium text-white/80 md:text-2xl lg:text-3xl">
                Providing{" "}
                <span className="text-[#FF6B35] font-semibold">
                  {displayText}
                </span>
                <span className="animate-pulse text-[#FF6B35]">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-white  md:text-lg">
              Trans Nova Solutions delivers innovative business solutions 
              across BPO, Telecom, Logistics, and Digital Services.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/services"
                className="flex items-center gap-2 rounded-[4px] bg-[#FF6B35] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#E85C2D]"
              >
                Explore Services <FaArrowRight className="text-xs" />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 rounded-[4px] border border-white/30 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                About Trans Nova <FaArrowRight className="text-xs" />
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

export default Home;