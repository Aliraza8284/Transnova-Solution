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
  FaStarHalfAlt
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
    years: 0,
    clients: 0,
    projects: 0,
    satisfaction: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const [heroRef, heroInView] = useInView(0.1);
  const [whyRef, whyInView] = useInView(0.1);
  const [valuesRef, valuesInView] = useInView(0.1);
  const [approachRef, approachInView] = useInView(0.1);

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
      years: 10,
      clients: 500,
      projects: 1200,
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
        years: Math.min(Math.round(targets.years * eased), targets.years),
        clients: Math.min(Math.round(targets.clients * eased), targets.clients),
        projects: Math.min(Math.round(targets.projects * eased), targets.projects),
        satisfaction: Math.min(Math.round(targets.satisfaction * eased), targets.satisfaction)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const benefits = [
    {
      Icon: FaConnectdevelop,
      number: "01",
      title: "Connected Thinking",
      desc: "We look beyond individual services to understand the bigger picture and deliver solutions that truly connect.",
    },
    {
      Icon: FaChartLine,
      number: "02",
      title: "Built to Scale",
      desc: "Our solutions are designed to adapt to your needs and scale as your business grows.",
    },
    {
      Icon: FaUsers,
      number: "03",
      title: "Technology + People",
      desc: "We combine human expertise with technology to deliver smarter, faster, and better outcomes.",
    },
    {
      Icon: FaHandshake,
      number: "04",
      title: "One Connected Partner",
      desc: "Multiple capabilities. One trusted partner. Less complexity, more opportunities.",
    },
  ];

  const steps = [
    {
      title: "Understand",
      desc: "We listen, analyze, and identify the real business challenge.",
      icon: <FaLightbulb />
    },
    {
      title: "Connect",
      desc: "We bring together the right people, capabilities, and technology.",
      icon: <FaConnectdevelop />
    },
    {
      title: "Deliver",
      desc: "We turn strategy into practical, measurable solutions.",
      icon: <FaRocket />
    },
    {
      title: "Evolve",
      desc: "We continuously improve as your business and market change.",
      icon: <FaSync />
    },
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
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

        .float-hero-img {
          animation: floatCard 6s ease-in-out infinite;
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
        className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 via-[#FAF9F6] to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF6B35]/10 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-center">
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

              {/* Stats Row */}
              <div className="mt-4 grid grid-cols-4 max-w-lg bg-white/90 backdrop-blur-sm rounded-2xl border border-[#EDEAE4] p-4 shadow-md">
                <div className="text-center">
                  <p className="text-xl font-extrabold text-[#FF6B35]">10+</p>
                  <p className="mt-1 text-[9px] font-medium text-[#77736D] uppercase tracking-wide">
                    Years Excellence
                  </p>
                </div>
                <div className="text-center border-l border-[#EDEAE4]">
                  <p className="text-xl font-extrabold text-[#FF6B35]">500+</p>
                  <p className="mt-1 text-[9px] font-medium text-[#77736D] uppercase tracking-wide">
                    Happy Clients
                  </p>
                </div>
                <div className="text-center border-l border-[#EDEAE4]">
                  <p className="text-xl font-extrabold text-[#FF6B35]">1200+</p>
                  <p className="mt-1 text-[9px] font-medium text-[#77736D] uppercase tracking-wide">
                    Projects Done
                  </p>
                </div>
                <div className="text-center border-l border-[#EDEAE4]">
                  <p className="text-xl font-extrabold text-[#FF6B35]">98%</p>
                  <p className="mt-1 text-[9px] font-medium text-[#77736D] uppercase tracking-wide">
                    Satisfaction
                  </p>
                </div>
              </div>

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

            {/* Right Content - Image */}
            <div className={`relative reveal-scale ${heroInView ? "in-view" : ""}`}>
              <div className="relative rounded-3xl overflow-hidden bg-white p-4 shadow-[0_25px_70px_rgba(0,0,0,0.10)] hover:shadow-[0_35px_90px_rgba(255,107,53,0.14)] transition-shadow duration-500 float-hero-img">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#111111] to-[#1a1a1a]">
                  <img
                    src="about.png"
                    alt="Trans Nova Solutions"
                    className="w-full h-auto object-contain block"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-3 sm:left-8 bg-white rounded-2xl px-6 py-4 shadow-2xl border border-[#EDEAE4]">
                <div className="flex items-center gap-4">
                  <div className="flex gap-0.5">
                    <FaStar className="text-[#FF6B35] text-sm" />
                    <FaStar className="text-[#FF6B35] text-sm" />
                    <FaStar className="text-[#FF6B35] text-sm" />
                    <FaStar className="text-[#FF6B35] text-sm" />
                    <FaStarHalfAlt className="text-[#FF6B35] text-sm" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[1.5px] font-semibold text-[#FF6B35]">
                      Our Focus
                    </p>
                    <p className="text-sm font-bold text-[#111111]">
                      People • Technology • Growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          WHY CHOOSE US
         ========================================== */}
      <section
        ref={whyRef}
        className="relative bg-[#070707] text-white py-16 lg:py-24 px-6 lg:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(circle_at_top_right,#FF6B35_0,transparent_35%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-12 reveal-up ${whyInView ? "in-view" : ""}`}>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-3.5 py-2 rounded-full border border-[#FF6B35]/20">
                <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-pulse" />
                <span className="text-[#FF6B35] font-bold text-[9px] tracking-[2.5px] uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight mt-3 leading-tight">
                Built Around Your
                <span className="text-[#FF6B35] block">Growth.</span>
              </h2>
            </div>

            <p className="max-w-sm text-[#99958E] text-sm leading-6 lg:text-right">
              One connected partner bringing people, technology, and capabilities together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ Icon, number, title, desc }, i) => (
              <div
                key={number}
                className={`card-lift group bg-gradient-to-br from-[#0f0f0f] to-[#070707] rounded-2xl p-6 border border-[#1a1a1a] hover:border-[#FF6B35]/30 hover:shadow-xl hover:shadow-[#FF6B35]/5 reveal-up stagger-${i + 1} ${whyInView ? "in-view" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300">
                    <Icon className="text-[#FF6B35] text-lg group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-bold text-[#4D4D4D] group-hover:text-[#FF6B35] transition-colors duration-300">
                    {number}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="w-7 h-[2px] bg-[#FF6B35] mb-3 transition-all duration-300 group-hover:w-12" />
                  <h3 className="text-base font-bold mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">{title}</h3>
                  <p className="text-[#96928B] text-sm leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CORE VALUES
         ========================================== */}
      <section ref={valuesRef} className="py-16 lg:py-24 bg-gradient-to-br from-white to-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`text-center max-w-2xl mx-auto mb-12 reveal-up ${valuesInView ? "in-view" : ""}`}>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#EDEAE4] mb-4">
              <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
              <span className="text-[#FF6B35] font-bold text-[9px] tracking-[2.5px] uppercase">
                Core Values
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight">
              What Drives Us
            </h2>
            <div className="w-14 h-0.5 bg-[#FF6B35] mx-auto mt-3 rounded-full" />
            <p className="text-[#9B948A] text-base mt-4 max-w-md mx-auto leading-7">
              Our values shape our culture and define how we deliver value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className={`card-lift group bg-white rounded-2xl p-6 text-center border border-[#EDEAE4] hover:border-[#FF6B35]/30 hover:shadow-xl reveal-up stagger-${index + 1} ${valuesInView ? "in-view" : ""}`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF6B35]/20">
                  <span className="text-[#FF6B35] text-xl group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#111111] mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-sm text-[#9B948A] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          OUR APPROACH
         ========================================== */}
      <section ref={approachRef} className="py-16 lg:py-24 bg-white px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center max-w-2xl mx-auto mb-12 reveal-up ${approachInView ? "in-view" : ""}`}>
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full border border-[#FF6B35]/20 mb-4">
              <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-pulse" />
              <span className="text-[#FF6B35] font-bold text-[9px] tracking-[2.5px] uppercase">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight">
              A Connected Approach
              <br />
              <span className="text-[#FF6B35]">to Every Solution.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group reveal-up stagger-${index + 1} ${approachInView ? "in-view" : ""}`}
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 border-2 border-[#FF6B35] flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-[#FF6B35]">
                    <span className="text-[#FF6B35] text-2xl group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </span>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="font-bold text-lg text-[#111111] group-hover:text-[#FF6B35] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-[#FF6B35] mx-auto my-3 rounded-full group-hover:w-12 transition-all duration-300" />
                  <p className="text-[#77736D] text-sm leading-6 max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutScript;