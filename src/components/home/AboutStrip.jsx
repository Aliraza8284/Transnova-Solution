import React, { useEffect, useState, useRef } from "react";
import {
  FaConnectdevelop,
  FaChartLine,
  FaUsers,
  FaHandshake,
  FaArrowRight,
  FaAward,
  FaGlobe,
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaShieldAlt,
  FaSync,
  FaQuoteLeft,
  FaStar,
  FaStarHalfAlt,
  FaTruck,
  FaClock,
  FaThumbsUp,
  FaBriefcase,
  FaHeadset,
  FaMapMarkerAlt,
  FaDollarSign,
  FaArrowLeft,
  FaArrowRight as FaArrowRightIcon,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// ==========================================
// REUSABLE SCROLL-REVEAL HOOK
// ==========================================
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

// ==========================================
// TESTIMONIALS DATA - Updated with Trans Nova Solutions
// ==========================================
const testimonials = [
  {
    initials: "TK",
    name: "Trevor Korf",
    role: "HOTSHOT | TEXAS",
    text: `"The Hotshot market is competitive but Trans Nova Solutions got me connected with the right brokers. My utilization went from 60% to 85% in just two weeks. Game changer for my business."`,
  },
  {
    initials: "AH",
    name: "Albert Hernandez",
    role: "FLATBED | CALIFORNIA",
    text: `"As a flatbed operator, finding reliable loads is tough. Trans Nova Solutions has a network that actually understands flatbed freight. They've kept me moving consistently and profitably."`,
  },
  {
    initials: "EC",
    name: "Evian Carbajal",
    role: "HOTSHOT | FLORIDA",
    text: `"Trans Nova Solutions handles everything from load matching to paperwork. I just focus on driving. They've helped me double my weekly revenue in just a few months. Absolutely incredible."`,
  },
  {
    initials: "RA",
    name: "Rogerio Alexander",
    role: "DRY VAN | TEXAS",
    text: `"I've been in the trucking industry for over 15 years and Trans Nova Solutions is the best dispatch service I've ever worked with. They always find me the best paying loads and handle all the paperwork."`,
  },
  {
    initials: "SL",
    name: "Shabaka Lands",
    role: "BOX TRUCK | FLORIDA",
    text: `"Running a box truck in the local market is challenging, but Trans Nova Solutions got me connected with consistent freight that keeps me moving. Their team is always available when I need them."`,
  },
];

// ==========================================
// SUCCESS STORIES COMPONENT - FIXED MOBILE TAP
// ==========================================
const SuccessStories = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [lastTapTime, setLastTapTime] = useState(0);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Toggle pause on click/tap - FIXED to work on single tap
  const handleTogglePause = (e) => {
    // Don't toggle if clicking on a link or button inside
    if (e.target.closest('a') || e.target.closest('button')) return;
    
    const now = Date.now();
    const timeSinceLastTap = now - lastTapTime;
    
    // Toggle on every tap, but prevent double-tap issues
    if (timeSinceLastTap > 300) {
      setIsPaused(prev => !prev);
      setLastTapTime(now);
    }
  };

  // Smooth auto-scroll using requestAnimationFrame
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollSpeed = 0.6;
    let lastTimestamp = 0;

    const smoothScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      
      if (timestamp - lastTimestamp >= 16) {
        if (!isPaused) {
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          
          if (container.scrollLeft >= maxScrollLeft - 1) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += scrollSpeed;
          }
        }
        lastTimestamp = timestamp;
      }
      
      animationRef.current = requestAnimationFrame(smoothScroll);
    };

    animationRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Pause on hover (desktop only)
  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsPaused(false);
    }
  };

  return (
    <section className="w-full bg-[#FAF9F6] px-4 py-8 sm:py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
  <div className="flex items-center justify-center gap-4 mb-3">
    <span className="w-8 sm:w-10 h-[2px] bg-[#FF6B35]" />
    <span className="text-[#FF6B35] font-bold text-xs sm:text-sm uppercase tracking-wider">
      Success Stories
    </span>
    <span className="w-8 sm:w-10 h-[2px] bg-[#FF6B35]" />
  </div>

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A0A0A] leading-tight">
    Trusted by Fleet Owners{" "}
    <span className="text-[#FF6B35]">Nationwide</span>
  </h2>

  <p className="mt-3 text-[#5F5D59] text-sm sm:text-base max-w-2xl mx-auto">
    See what our clients have to say about partnering with Trans Nova Solutions.
  </p>
  
  {/* Tap instruction for mobile - FIXED */}
  {isTouchDevice && (
    <p className="mt-2 text-xs text-[#FF6B35] font-medium animate-pulse">
      👆 Tap to pause/resume scrolling
    </p>
  )}
</div>

      {/* Scrollable Cards Container - SMOOTH AUTO SCROLL */}
      <div 
        ref={scrollContainerRef}
        className="max-w-[1800px] mx-auto overflow-x-hidden overflow-y-hidden"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          cursor: isPaused ? 'pointer' : 'default',
          touchAction: 'manipulation'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleTogglePause}
      >
        <style>{`
          .overflow-x-hidden::-webkit-scrollbar {
            display: none;
          }
          .overflow-x-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          /* Prevent text selection during tap */
          .no-select {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }
        `}</style>
        
        <div className="flex gap-4 sm:gap-5 px-1 py-2 w-max no-select">
          {/* Duplicate for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px]
                flex flex-col items-center
                rounded-[17px]
                border border-[#EDEAE4]
                bg-white
                px-5 sm:px-6
                py-6 sm:py-8
                text-center
                shadow-[0_1px_4px_rgba(0,0,0,0.06)]
                transition-all duration-300
                hover:shadow-[0_8px_30px_rgba(255,107,53,0.12)]
                hover:-translate-y-1
                min-h-[420px] sm:min-h-[440px]
                hover:border-[#FF6B35]
                select-none
                pointer-events-none
              "
            >
              {/* Initials Circle */}
              <div
                className="
                  flex h-[70px] w-[70px] sm:h-[80px] sm:w-[80px]
                  shrink-0 items-center justify-center
                  rounded-full
                  border border-[#FF6B35]
                  bg-[#0A0A0A]
                  shadow-[0_0_0_4px_#fff,0_0_0_5px_#FF6B35]
                "
              >
                <span className="text-[22px] sm:text-[26px] font-semibold tracking-wide text-[#FF6B35]">
                  {testimonial.initials}
                </span>
              </div>

              {/* Name */}
              <h3
                className="
                  mt-5 sm:mt-6
                  text-[20px] sm:text-[22px] font-bold leading-tight
                  tracking-[-0.5px]
                  text-[#0A0A0A]
                "
              >
                {testimonial.name}
              </h3>

              {/* Role */}
              <p
                className="
                  mt-1.5
                  text-[13px] sm:text-[14px] font-bold
                  uppercase
                  leading-[1.3]
                  tracking-[0.5px]
                  text-[#FF6B35]
                "
              >
                {testimonial.role}
              </p>

              {/* Stars - Orange */}
              <div className="mt-4 flex items-center justify-center gap-[2px] text-[#FF6B35]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                className="
                  mt-4 sm:mt-5
                  max-w-[380px]
                  text-[15px] sm:text-[16px]
                  font-normal
                  italic
                  leading-[1.6]
                  tracking-[-0.1px]
                  text-[#5F5D59]
                  line-clamp-5
                  overflow-hidden
                "
              >
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
     
      {/* Pause/Resume indicator for mobile */}
      {isTouchDevice && (
        <div className="text-center mt-2">
          <span className={`text-xs font-medium transition-colors duration-300 ${isPaused ? 'text-[#FF6B35]' : 'text-[#77736D]'}`}>
            {isPaused ? '⏸️ Scrolling paused' : '▶️ Auto-scrolling'}
          </span>
        </div>
      )}
    </section>
  );
};

// ==========================================
// MAIN ABOUT STRIP COMPONENT
// ==========================================
const AboutStrip = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    clients: 0,
    loads: 0,
    dailyLoads: 0,
    satisfaction: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const [heroRef, heroInView] = useInView(0.1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      experience: 5,
      clients: 1000,
      loads: 100000,
      dailyLoads: 25,
      satisfaction: 98
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts({
        experience: Math.min(Math.round(targets.experience * eased), targets.experience),
        clients: Math.min(Math.round(targets.clients * eased), targets.clients),
        loads: Math.min(Math.round(targets.loads * eased), targets.loads),
        dailyLoads: Math.min(Math.round(targets.dailyLoads * eased), targets.dailyLoads),
        satisfaction: Math.min(Math.round(targets.satisfaction * eased), targets.satisfaction)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <main 
      className="bg-[#FAF9F6] font-manrope text-[#0A0A0A] overflow-hidden"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }}
    >

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(-2deg); }
          75% { transform: translateY(-4px) rotate(2deg); }
        }

        @keyframes float3D {
          0%, 100% {
            transform: translateY(0px) rotateX(2deg) rotateY(-2deg);
          }
          50% {
            transform: translateY(-20px) rotateX(-2deg) rotateY(2deg);
          }
        }

        .reveal { opacity: 0; }
        .reveal-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .reveal-up.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-scale {
          opacity: 0;
          transform: scale(0.94);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .reveal-scale.in-view {
          opacity: 1;
          transform: scale(1);
        }

        .stagger-1 { transition-delay: 0.05s; }
        .stagger-2 { transition-delay: 0.15s; }
        .stagger-3 { transition-delay: 0.25s; }
        .stagger-4 { transition-delay: 0.35s; }
        .stagger-5 { transition-delay: 0.45s; }
        .stagger-6 { transition-delay: 0.55s; }

        .float-hero-img {
          animation: float3D 5s ease-in-out infinite;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .card-lift {
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease;
        }
        .card-lift:hover {
          transform: translateY(-6px);
        }

        @media (max-width: 480px) {
          .xs\\:block {
            display: block !important;
          }
        }

        @media (max-width: 420px) {
          .stat-item p:first-child {
            font-size: 10px !important;
          }
          .stat-item p:last-child {
            font-size: 5px !important;
          }
        }

        .text-dark-black {
          color: #0A0A0A !important;
        }
        .bg-dark-black {
          background-color: #0A0A0A !important;
        }
        .border-dark-black {
          border-color: #0A0A0A !important;
        }
      `}</style>

      {/* ==========================================
          HERO / WHO WE ARE
         ========================================== */}
      <section
        ref={heroRef}
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 xl:gap-20 items-start">

            {/* Left Content */}
            <div className={`space-y-5 sm:space-y-6 reveal-up ${heroInView ? "in-view" : ""}`}>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-[#EDEAE4]">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF6B35] rounded-full animate-pulse" />
                <span className="text-[#FF6B35] font-bold text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] uppercase">
                  About Trans Nova
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-[-0.5px] sm:tracking-[-1px]">
                Trans <span className="text-[#FF6B35]">NOVA</span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0A0A0A]/80 block mt-1 sm:mt-2">
                  One Company. <span className="text-[#FF6B35]">Endless Solutions.</span>
                </span>
              </h1>

              <div className="space-y-3 sm:space-y-4 max-w-xl">
                <p className="text-sm sm:text-base text-[#5F5D59] leading-6 sm:leading-7">
                  <FaQuoteLeft className="inline text-[#FF6B35] text-xs sm:text-sm mr-1 sm:mr-2 opacity-60" />
                  Trans Nova Solutions is a diversified business solutions company
                  built around one simple idea: businesses grow faster when the right
                  people, technology, and opportunities are connected.
                </p>

                <p className="text-sm sm:text-base text-[#5F5D59] leading-6 sm:leading-7 pl-3 sm:pl-4 border-l-2 border-[#FF6B35]">
                  From customer operations and telecommunications to logistics and
                  digital services, we help organizations simplify complexity and
                  create new opportunities for growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide hover:bg-[#FF6B35] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/25 active:scale-95"
                >
                  Let's Connect
                  <FaArrowRight className="text-[10px] sm:text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 border-2 border-[#0A0A0A] text-[#0A0A0A] px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right - Image with stats below */}
          <div className="relative flex flex-col items-center justify-center mt-6 lg:mt-0">
  <div className="float-hero-img relative w-full max-w-2xl">
    <img
      src="/Above.png"
      alt="Trans Nova Solutions"
      className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] rounded-2xl sm:rounded-3xl object-cover"
      draggable="false"
      style={{
        pointerEvents: 'none',
        WebkitUserDrag: 'none',
        userSelect: 'none'
      }}
      onContextMenu={(e) => e.preventDefault()}
    />
    
    {/* Trans Nova Solutions Name - Bottom Left Corner */}
    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
      <div className="bg-black/70 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/10">
        <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide">
          <span className="text-[#FF6B35]">TRANS</span>
          <span className="text-white"> NOVA</span>
          <span className="text-[#FF6B35]"> SOLUTIONS</span>
        </span>
      </div>
    </div>
    
    <div className="absolute -z-10 inset-0 rounded-2xl sm:rounded-3xl bg-[#FF6B35]/10 blur-[40px] sm:blur-[60px]" />
  </div>

  <div ref={statsRef} className="mt-4 sm:mt-5 md:mt-6 w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#EDEAE4] p-1.5 sm:p-3 shadow-md">
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-0">
      <div className="stat-item text-center px-0.5 sm:px-1.5 md:px-2 py-0.5 sm:py-1.5 flex flex-col items-center justify-center">
        <p className="text-sm sm:text-base md:text-lg font-extrabold text-[#FF6B35] whitespace-nowrap">{counts.experience}+</p>
        <p className="mt-0.5 text-[8px] sm:text-[8px] md:text-[9px] font-medium text-[#77736D] uppercase tracking-wide leading-tight">
          Years <span className="hidden sm:inline">of</span> Exp.
        </p>
      </div>
      
      <div className="stat-item text-center px-0.5 sm:px-1.5 md:px-2 py-0.5 sm:py-1.5 flex flex-col items-center justify-center border-l border-[#EDEAE4]">
        <p className="text-sm sm:text-base md:text-lg font-extrabold text-[#FF6B35] whitespace-nowrap">{counts.clients.toLocaleString()}+</p>
        <p className="mt-0.5 text-[8px] sm:text-[8px] md:text-[9px] font-medium text-[#77736D] uppercase tracking-wide leading-tight">
          Happy <span className="hidden sm:inline">Clients</span>
        </p>
      </div>
      
      <div className="stat-item text-center px-0.5 sm:px-1.5 md:px-2 py-0.5 sm:py-1.5 flex flex-col items-center justify-center border-l border-[#EDEAE4] hidden sm:flex">
        <p className="text-sm sm:text-base md:text-lg font-extrabold text-[#FF6B35] whitespace-nowrap">{counts.loads.toLocaleString()}+</p>
        <p className="mt-0.5 text-[8px] sm:text-[8px] md:text-[9px] font-medium text-[#77736D] uppercase tracking-wide leading-tight">
          Total <span className="hidden sm:inline">Loads</span>
        </p>
      </div>
      
      <div className="stat-item text-center px-0.5 sm:px-1.5 md:px-2 py-0.5 sm:py-1.5 flex flex-col items-center justify-center border-l border-[#EDEAE4]">
        <p className="text-sm sm:text-base md:text-lg font-extrabold text-[#FF6B35] whitespace-nowrap">{counts.dailyLoads}+</p>
        <p className="mt-0.5 text-[8px] sm:text-[8px] md:text-[9px] font-medium text-[#77736D] uppercase tracking-wide leading-tight">
          Daily <span className="hidden sm:inline">Loads</span>
        </p>
      </div>
      
      <div className="stat-item text-center px-0.5 sm:px-1.5 md:px-2 py-0.5 sm:py-1.5 flex flex-col items-center justify-center border-l border-[#EDEAE4]">
        <p className="text-sm sm:text-base md:text-lg font-extrabold text-[#FF6B35] whitespace-nowrap">{counts.satisfaction}%</p>
        <p className="mt-0.5 text-[8px] sm:text-[8px] md:text-[9px] font-medium text-[#77736D] uppercase tracking-wide leading-tight">
          Satis<span className="hidden sm:inline">faction</span>
        </p>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* ==========================================
          WHY CHOOSE US SECTION
         ========================================== */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF6B35] tracking-wide">
            WHY CHOOSE US
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#FF6B35] mx-auto mt-2 sm:mt-3" />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight">
            Driven by Reliability.
            <br />
            <span className="text-[#FF6B35]">Committed to Your Success.</span>
          </h3>
          <p className="text-[#0A0A0A] text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
            At TransNova Solutions, we go beyond transportation. We build strong
            partnerships, provide dependable support, and deliver results that
            move your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {[
            { title: "RELIABLE & TRUSTED", desc: "Consistent service you can count on, every time." },
            { title: "24/7 SUPPORT", desc: "Our team is always here to keep your business moving." },
            { title: "GROWTH FOCUSED", desc: "Solutions designed to help you scale and succeed." },
            { title: "EXPERIENCED TEAM", desc: "Skilled professionals with years of industry expertise." },
            { title: "NATIONWIDE COVERAGE", desc: "Freight and logistics support across the United States." },
            { title: "COST EFFECTIVE", desc: "Maximizing efficiency and reducing your operating costs." }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-100 card-lift">
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B35]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0A0A0A]">{item.title}</h4>
              <p className="text-[#0A0A0A] text-xs sm:text-sm mt-1.5 sm:mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SUCCESS STORIES SECTION
      ========================================== */}
      <SuccessStories />

     
      

    </main>
  );
};

export default AboutStrip;