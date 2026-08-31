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
  FaDollarSign
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

const AboutScript = () => {
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
  const [whyRef, whyInView] = useInView(0.1);
  const [valuesRef, valuesInView] = useInView(0.1);

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

  const whyChooseUs = [
    {
      icon: <FaTruck className="text-2xl" />,
      title: "RELIABLE & TRUSTED",
      desc: "Consistent service you can count on, every time."
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "24/7 SUPPORT",
      desc: "Our team is always here to keep your business moving."
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "GROWTH FOCUSED",
      desc: "Solutions designed to help you scale and succeed."
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "EXPERIENCED TEAM",
      desc: "Skilled professionals with years of industry expertise."
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "NATIONWIDE COVERAGE",
      desc: "Freight and logistics support across the United States."
    },
    {
      icon: <FaDollarSign className="text-2xl" />,
      title: "COST EFFECTIVE",
      desc: "Maximizing efficiency and reducing your operating costs."
    }
  ];

  const values = [
    {
      icon: <FaRocket className="text-xl" />,
      title: "Innovation First",
      desc: "We continuously evolve our solutions to meet changing business needs."
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Uncompromising Integrity",
      desc: "We operate with transparency, honesty, and ethical practices."
    },
    {
      icon: <FaAward className="text-xl" />,
      title: "Excellence in Everything",
      desc: "We strive for the highest quality in every service we deliver."
    },
    {
      icon: <FaHandshake className="text-xl" />,
      title: "Client-Centric Partnership",
      desc: "We work hand-in-hand with clients to achieve shared success."
    },
  ];

  return (
    <main className="bg-[#FAF9F6] font-manrope text-[#111111] overflow-hidden">

      {/* ==========================================
          LOCAL ANIMATION STYLES
         ========================================== */}
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
      `}</style>

      {/* ==========================================
          HERO / WHO WE ARE
         ========================================== */}
      <section
        ref={heroRef}
        className="relative pt-20 pb-16 lg:pt-28 lg:pb-24"
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-start">
            
            {/* Left Content */}
            <div className={`space-y-6 reveal-up ${heroInView ? "in-view" : ""}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#EDEAE4]">
                <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
                <span className="text-[#FF6B35] font-bold text-[11px] tracking-[2.5px] uppercase">
                  About Trans Nova
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-[-1px]">
                Trans <span className="text-[#FF6B35]">NOVA</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111]/80 block mt-2">
                  One Company. <span className="text-[#FF6B35]">Endless Solutions.</span>
                </span>
              </h1>

              <div className="space-y-4 max-w-xl">
                <p className="text-base text-[#5F5D59] leading-7">
                  <FaQuoteLeft className="inline text-[#FF6B35] text-sm mr-2 opacity-60" />
                  Trans Nova Solutions is a diversified business solutions company
                  built around one simple idea: businesses grow faster when the right
                  people, technology, and opportunities are connected.
                </p>

                <p className="text-base text-[#5F5D59] leading-7 pl-4 border-l-2 border-[#FF6B35]">
                  From customer operations and telecommunications to logistics and
                  digital services, we help organizations simplify complexity and
                  create new opportunities for growth.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-[#111111] text-white px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-[#FF6B35] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/25 active:scale-95"
                >
                  Let's Connect
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 border-2 border-[#111111] text-[#111111] px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-[#111111] hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right - Image with stats below */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="float-hero-img relative w-full max-w-2xl">
                <img
                  src="/about.png"
                  alt="Trans Nova Solutions"
                  className="w-full h-auto max-h-[500px] rounded-3xl object-cover"
                />
                <div className="absolute -z-10 inset-0 rounded-3xl bg-[#FF6B35]/10 blur-[60px]" />
              </div>
              
              {/* Unified Stats Card Below Image */}
              <div ref={statsRef} className="mt-6 w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl border border-[#EDEAE4] p-4 shadow-md">
                <div className="grid grid-cols-5">
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-[#FF6B35]">{counts.experience}+</p>
                    <p className="mt-1 text-[8px] font-medium text-[#77736D] uppercase tracking-wide">
                      Years Experience
                    </p>
                  </div>
                  <div className="text-center border-l border-[#EDEAE4]">
                    <p className="text-xl font-extrabold text-[#FF6B35]">{counts.clients}+</p>
                    <p className="mt-1 text-[8px] font-medium text-[#77736D] uppercase tracking-wide">
                      Happy Clients
                    </p>
                  </div>
                  <div className="text-center border-l border-[#EDEAE4]">
                    <p className="text-xl font-extrabold text-[#FF6B35]">{counts.loads.toLocaleString()}+</p>
                    <p className="mt-1 text-[8px] font-medium text-[#77736D] uppercase tracking-wide">
                      Total Loads Dispatched
                    </p>
                  </div>
                  <div className="text-center border-l border-[#EDEAE4]">
                    <p className="text-xl font-extrabold text-[#FF6B35]">{counts.dailyLoads}+</p>
                    <p className="mt-1 text-[8px] font-medium text-[#77736D] uppercase tracking-wide">
                      Daily Loads Dispatch
                    </p>
                  </div>
                  <div className="text-center border-l border-[#EDEAE4]">
                    <p className="text-xl font-extrabold text-[#FF6B35]">{counts.satisfaction}%</p>
                    <p className="mt-1 text-[8px] font-medium text-[#77736D] uppercase tracking-wide">
                      Satisfaction
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
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF6B35] tracking-wide">
            WHY CHOOSE US
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto mt-2"></div>
        </div>

        {/* Sub-heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Driven by Reliability.
            <br />
            <span className="text-[#FF6B35]">Committed to Your Success.</span>
          </h3>
          <p className="text-gray-700 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            At TransNova Solutions, we go beyond transportation. We build strong
            partnerships, provide dependable support, and deliver results that
            move your business forward.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-100">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#FF6B35]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900">RELIABLE & TRUSTED</h4>
            <p className="text-gray-600 text-sm mt-2">
              Consistent service you can count on, every time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-100">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#FF6B35]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900">24/7 SUPPORT</h4>
            <p className="text-gray-600 text-sm mt-2">
              Our team is always here to keep your business moving.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-100">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#FF6B35]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900">GROWTH FOCUSED</h4>
            <p className="text-gray-600 text-sm mt-2">
              Solutions designed to help you scale and succeed.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-100">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#FF6B35]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900">EXPERIENCED TEAM</h4>
            <p className="text-gray-600 text-sm mt-2">
              Skilled professionals with years of industry expertise.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-100">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#FF6B35]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900">NATIONWIDE COVERAGE</h4>
            <p className="text-gray-600 text-sm mt-2">
              Freight and logistics support across the United States.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-100">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#FF6B35]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900">COST EFFECTIVE</h4>
            <p className="text-gray-600 text-sm mt-2">
              Maximizing efficiency and reducing your operating costs.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutScript;