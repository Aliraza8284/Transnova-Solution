// ==========================================
// SERVICES PAGE
// TRUCKING COMPANY FOCUSED
// ==========================================

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaHeadphones,
  FaPhoneAlt,
  FaFileInvoice,
  FaTruck,
  FaUsers,
  FaRoute,
  FaHandshake,
  FaClock,
  FaChartLine,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaClipboardCheck,
  FaQuoteRight,
} from "react-icons/fa";

// ==========================================
// ANIMATION HOOK
// ==========================================

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
};

// ==========================================
// SERVICES COMPONENT
// ==========================================

const Services = () => {
  // ==========================================
  // MAIN SERVICES
  // ==========================================

  const servicesList = [
    {
      number: "01",
      icon: <FaTruck />,
      title: "Trucking Services",
      shortTitle: "Trucking & Transportation",
      desc: "Complete trucking support built for carriers, owner-operators, and trucking companies looking to increase revenue, reduce downtime, and keep their trucks moving.",
      highlighted: true,
      features: ["Load Booking", "Rate Negotiation", "24/7 Dispatch"],
    },

    {
      number: "02",
      icon: <FaHeadphones />,
      title: "BPO Solutions",
      shortTitle: "BPO Solutions",
      desc: "Professional business process outsourcing solutions designed to reduce operational workload and improve business efficiency.",
      highlighted: false,
      features: ["Customer Support", "Data Entry", "Back Office"],
    },

    {
      number: "03",
      icon: <FaPhoneAlt />,
      title: "VoIP & Telecom",
      shortTitle: "VoIP & Telecom",
      desc: "Reliable communication solutions that help businesses stay connected with customers, drivers, teams, and partners.",
      highlighted: false,
      features: ["Cloud PBX", "Virtual Numbers", "Call Routing"],
    },

    {
      number: "04",
      icon: <FaFileInvoice />,
      title: "Invoicing Solutions",
      shortTitle: "Invoicing Solutions",
      desc: "Streamlined invoicing support designed to organize billing, improve cash flow visibility, and simplify administrative work.",
      highlighted: false,
      features: ["Invoice Generation", "Payment Tracking", "Reports"],
    },

    {
      number: "05",
      icon: <FaRoute />,
      title: "Logistics Solutions",
      shortTitle: "Logistics Solutions",
      desc: "End-to-end logistics support that helps businesses coordinate transportation, operations, and delivery efficiently.",
      highlighted: false,
      features: [
        "Route Optimization",
        "Fleet Tracking",
        "Delivery Management",
      ],
    },

    {
      number: "06",
      icon: <FaUsers />,
      title: "Outsourcing Services",
      shortTitle: "Outsourcing Services",
      desc: "Scalable outsourcing solutions that allow businesses to focus on growth while we handle essential operational tasks.",
      highlighted: false,
      features: [
        "Staff Augmentation",
        "Project Outsourcing",
        "Managed Services",
      ],
    },
  ];

  // ==========================================
  // TRUCKING FEATURES
  // ==========================================

  const truckingFeatures = [
    {
      icon: <FaRoute />,
      title: "Load Booking",
      desc: "Find and secure suitable freight opportunities for your equipment and lanes.",
    },

    {
      icon: <FaHandshake />,
      title: "Broker Communication",
      desc: "Professional communication with brokers to keep your loads moving smoothly.",
    },

    {
      icon: <FaChartLine />,
      title: "Rate Negotiation",
      desc: "Work toward better freight rates and stronger revenue opportunities.",
    },

    {
      icon: <FaClock />,
      title: "24/7 Dispatch Support",
      desc: "Continuous dispatch support to help reduce downtime and keep operations moving.",
    },

    {
      icon: <FaMapMarkedAlt />,
      title: "Route & Lane Planning",
      desc: "Strategic planning around routes and lanes to improve operational efficiency.",
    },

    {
      icon: <FaClipboardCheck />,
      title: "Carrier Support",
      desc: "Administrative and operational assistance for carriers and owner-operators.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Vetted Brokers",
      desc: "Focus on reliable freight opportunities and professional broker relationships.",
    },

    {
      icon: <FaTruck />,
      title: "Fleet Support",
      desc: "Scalable support for individual owner-operators and growing trucking fleets.",
    },
  ];

  // ==========================================
  // EQUIPMENT TYPES
  // ==========================================

  const equipmentTypes = [
    "Dry Van",
    "Reefer",
    "Flatbed",
    "Step Deck",
    "Conestoga",
    "Power Only",
    "Box Truck",
    "Hotshot",
    "Cargo Van",
    "Lowboy",
  ];

  // ==========================================
  // STATISTICS
  // ==========================================

  const stats = [
    {
      number: "500+",
      label: "Trucks Supported",
    },
    {
      number: "98%",
      label: "On-Time Delivery",
    },
    {
      number: "24/7",
      label: "Support Available",
    },
    {
      number: "50+",
      label: "Broker Partners",
    },
  ];

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-manrope pt-[70px] overflow-x-hidden">

      {/* =====================================================
          HERO / HEADER - WITH FLOATING IMAGE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#050505]">

        {/* Background Glow */}
        <div className="absolute inset-0 opacity-30">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#FF6B35] blur-[120px] animate-pulse" />

          <div
            className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#FF6B35] blur-[140px] animate-pulse"
            style={{ animationDelay: "2s" }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:px-8 lg:py-24">

          {/* ==========================================
              GRID: LEFT TEXT + RIGHT IMAGE
          ========================================== */}

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT - TEXT CONTENT */}
            <div className="max-w-4xl animate-fadeInUp">

              {/* Breadcrumb */}
              <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold tracking-wide text-[#FF6B35] md:text-xs">

                <span className="h-[2px] w-6 bg-[#FF6B35]" />

                HOME / OUR SERVICES

              </p>

              {/* Small Heading */}
              <div className="mb-4 flex items-center gap-3">

                <div className="h-[2px] w-8 rounded-full bg-[#FF6B35] md:w-10" />

                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#9B9B8A] md:text-[10px] md:tracking-[0.2em]">
                  Transportation & Business Solutions
                </span>

              </div>

              {/* Main Heading */}
              <h1 className="text-2xl font-bold leading-[1.1] text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">

                <span className="block">
                  Powering Businesses.
                </span>

                <span className="relative block text-[#FF6B35]">

                  Moving Trucking Forward.

                  <span className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-[#FF6B35] md:w-16" />

                </span>

              </h1>

              {/* Description */}
              <p className="mt-4 max-w-2xl text-xs leading-6 text-[#B5B5B0] sm:text-sm md:mt-5 md:text-sm md:leading-7 lg:text-base">

                TransNova Solutions provides professional business and
                transportation solutions, with a strong focus on helping
                trucking companies keep their trucks moving, increase
                efficiency, and grow their operations.

              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-3">

                <Link
                  to="/careers"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF6B35] px-4 py-2.5 text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:gap-3 hover:bg-[#E85C2D] hover:shadow-xl hover:shadow-[#FF6B35]/30 sm:px-6 sm:py-3 sm:text-xs"
                >

                  Explore Trucking Services

                  <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />

                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-[11px] font-bold text-white transition-all duration-300 hover:border-[#FF6B35] hover:bg-white/5 hover:text-[#FF6B35] sm:px-6 sm:py-3 sm:text-xs"
                >

                  Talk to Our Team

                </Link>

              </div>

            </div>

            {/* RIGHT - FLOATING IMAGE BOX - INCREASED SIZE */}
            <div className="relative flex items-center justify-center">
              <div className="animate-float relative w-full max-w-2xl">
                <img
                  src="/people.jpg"
                  alt="Trucking Services"
                  className="w-full h-auto max-h-[500px] rounded-3xl object-cover "
                />
                {/* Glow behind image */}
                <div className="absolute -z-10 inset-0 rounded-3xl bg-[#FF6B35]/20 blur-[60px]" />
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 animate-bounce md:flex">

          <span className="text-[8px] uppercase tracking-widest text-[#666]">
            Scroll
          </span>

          <div className="h-8 w-[1px] bg-gradient-to-b from-[#FF6B35] to-transparent" />

        </div>

      </section>

      {/* =====================================================
          STATISTICS BAR
      ===================================================== */}

      <section className="border-y border-[#2A2A2A] bg-[#111111]">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 lg:px-8">

          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">

            {stats.map((stat, index) => (

              <div
                key={index}
                className="group cursor-default text-center"
              >

                <p className="text-base sm:text-lg font-bold text-[#FF6B35] transition-all duration-300 group-hover:scale-110 md:text-xl lg:text-2xl">
                  {stat.number}
                </p>

                <p className="mt-1 text-[8px] sm:text-[9px] uppercase tracking-wider text-[#888] md:text-[10px]">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          TRUCKING FEATURE SECTION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 lg:px-8 lg:py-16">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left Content */}
          <div className="space-y-4">

            <div className="flex items-center gap-2">

              <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/30">

                <FaTruck className="text-sm sm:text-base" />

              </span>

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B35] md:text-xs">
                Our #1 Focus
              </span>

            </div>

            <h2 className="text-xl sm:text-2xl font-bold leading-tight text-[#111111] md:text-3xl lg:text-4xl">

              Trucking Companies

              <span className="relative block text-[#FF6B35]">

                Come First.

                <span className="absolute -bottom-2 left-0 h-1 w-10 sm:w-12 rounded-full bg-[#FF6B35] md:w-14" />

              </span>

            </h2>

            <p className="text-sm leading-7 text-[#666666] md:text-base md:leading-8">

              We understand that a trucking company needs more than
              someone simply booking loads. Your business needs a
              dependable partner who understands dispatching,
              communication, freight, brokers, routes, rates, and
              day-to-day carrier operations.

            </p>

            <div className="rounded-2xl border-l-4 border-[#FF6B35] bg-[#F0EDE8] p-4 text-sm leading-7 text-[#666666] md:p-5 md:text-base md:leading-8">

              <FaQuoteRight className="mb-2 text-lg text-[#FF6B35]" />

              That's why our trucking solutions are designed around one goal:

              <span className="mt-2 block font-bold text-[#111111]">
                keeping your trucks productive while helping your business grow.
              </span>

            </div>

            <Link
              to="/careers"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#111111] px-4 py-2.5 text-[11px] sm:text-xs font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:gap-3 hover:bg-[#FF6B35] hover:shadow-[#FF6B35]/20 sm:px-6 sm:py-3"
            >

              View Full Trucking Services

              <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />

            </Link>

          </div>

          {/* Right Feature Card */}
          <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#111111] p-5 sm:p-6 md:p-8 shadow-2xl transition-shadow duration-500 hover:shadow-[#FF6B35]/10">

            <div className="absolute -right-20 -top-20 h-56 sm:h-64 w-56 sm:w-64 rounded-full bg-[#FF6B35]/20 blur-[80px] transition-all duration-700 group-hover:bg-[#FF6B35]/30" />

            <div className="relative">

              <div className="mb-4 sm:mb-6 flex items-center justify-between">

                <div>

                  <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-[#FF6B35] md:text-[10px]">
                    Trucking Support
                  </p>

                  <h3 className="mt-1.5 text-base sm:text-lg font-bold text-white md:text-xl">
                    Built for Carriers
                  </h3>

                </div>

                <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-[#FF6B35] text-base sm:text-xl text-white shadow-lg shadow-[#FF6B35]/30 md:text-2xl">

                  <FaTruck />

                </div>

              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

                {[
                  "Load Booking",
                  "Rate Negotiation",
                  "Broker Communication",
                  "24/7 Dispatch",
                  "Carrier Setup",
                  "Route Planning",
                  "Driver Support",
                  "Fleet Support",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="group/item flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 sm:px-3 py-2 transition-all duration-300 hover:border-[#FF6B35]/30 hover:bg-white/[0.08]"
                  >

                    <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B35]/20 text-[8px] sm:text-[10px] text-[#FF6B35] transition-all group-hover/item:bg-[#FF6B35] group-hover/item:text-white">
                      ✓
                    </span>

                    <span className="text-[10px] sm:text-[11px] md:text-xs font-medium text-[#E7E7E2]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TRUCKING FEATURES GRID
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 lg:px-8 lg:py-16">

          <div className="mx-auto mb-8 sm:mb-10 max-w-2xl text-center">

            <div className="mb-3 inline-block rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-2.5 sm:px-3 py-1">

              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#FF6B35] md:text-[10px]">
                Trucking Solutions
              </span>

            </div>

            <h2 className="mt-2 text-lg sm:text-xl font-bold text-[#111111] md:text-2xl lg:text-3xl">

              Everything Your Trucking

              <span className="text-[#FF6B35]">
                {" "}Business Needs
              </span>

            </h2>

            <div className="mx-auto mt-2 sm:mt-3 h-1 w-10 sm:w-12 rounded-full bg-[#FF6B35] md:w-14" />

            <p className="mt-3 sm:mt-4 text-sm leading-7 text-[#777777] md:text-base">

              From finding freight to communicating with brokers,
              our team provides the operational support needed to
              keep your business moving.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {truckingFeatures.map((feature, index) => (

              <div
                key={index}
                className="group cursor-default rounded-2xl border border-[#EDEAE4] bg-[#FAF9F6] p-4 sm:p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B35]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(255,107,53,0.08)]"
              >

                <div className="mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-[#FF6B35]/10 text-base sm:text-lg text-[#FF6B35] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF6B35] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#FF6B35]/20">
                  {feature.icon}
                </div>

                <h3 className="text-sm font-bold text-[#111111] transition-colors group-hover:text-[#FF6B35] md:text-base">
                  {feature.title}
                </h3>

                <p className="mt-1.5 sm:mt-2 text-xs leading-6 text-[#777777] md:text-sm">
                  {feature.desc}
                </p>

                <div className="mt-2 sm:mt-3 h-[2px] w-4 sm:w-6 bg-[#FF6B35] transition-all duration-300 group-hover:w-8 sm:group-hover:w-10" />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          EQUIPMENT SECTION
      ===================================================== */}

      <section className="bg-[#FAF9F6]">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 lg:px-8 lg:py-16">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Left */}
            <div>

              <div className="mb-3 inline-block rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-2.5 sm:px-3 py-1">

                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#FF6B35] md:text-[10px]">
                  Equipment We Support
                </span>

              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#111111] md:text-2xl lg:text-3xl">

                Dispatch Support

                <span className="block text-[#FF6B35]">
                  Across Equipment Types
                </span>

              </h2>

              <div className="mt-2 sm:mt-3 h-1 w-10 sm:w-12 rounded-full bg-[#FF6B35] md:w-14" />

              <p className="mt-3 sm:mt-4 max-w-lg text-sm leading-7 text-[#777777] md:text-base">

                Whether you're an owner-operator running one truck
                or managing a growing fleet, our team can support
                different equipment types and transportation needs.

              </p>

            </div>

            {/* Equipment */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 lg:grid-cols-5">

              {equipmentTypes.map((equipment, index) => (

                <div
                  key={index}
                  className="group relative flex min-h-[65px] sm:min-h-[75px] md:min-h-[85px] items-center justify-center overflow-hidden rounded-xl border border-[#EDEAE4] bg-white px-2 text-center text-[9px] sm:text-[10px] font-bold text-[#444444] shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6B35] hover:text-[#FF6B35] hover:shadow-lg hover:shadow-[#FF6B35]/10 md:text-xs"
                >

                  <span className="relative z-10">
                    {equipment}
                  </span>

                  <span className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ALL SERVICES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 lg:px-8 lg:py-16">

        <div className="mb-6 sm:mb-8">

          <div className="mb-3 inline-block rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-2.5 sm:px-3 py-1">

            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#FF6B35] md:text-[10px]">
              More Solutions
            </span>

          </div>

          <h2 className="text-lg sm:text-xl font-bold text-[#111111] md:text-2xl lg:text-3xl">
            Business Services
          </h2>

          <div className="mt-2 sm:mt-3 h-1 w-10 sm:w-12 rounded-full bg-[#FF6B35] md:w-14" />

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#777777] md:text-base">

            Beyond trucking, TransNova Solutions provides additional
            business services designed to support your company's
            communication, administration, and operational needs.

          </p>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {servicesList.slice(1).map((service) => (

            <div
              key={service.number}
              className="group relative rounded-2xl border border-[#EDEAE4] bg-white p-4 sm:p-5 md:p-6 shadow-[0_3px_15px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B35]/40 hover:shadow-[0_20px_50px_rgba(255,107,53,0.08)]"
            >

              {/* Number */}
              <div className="absolute right-3 sm:right-4 top-3 sm:top-4 text-xl sm:text-2xl font-black text-[#F3F0EA] transition-all duration-500 group-hover:text-[#FF6B35]/10 md:text-3xl">
                {service.number}
              </div>

              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-[#FAF9F6] text-base sm:text-lg text-[#FF6B35] transition-all duration-500 group-hover:bg-[#FF6B35] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#FF6B35]/20 md:text-xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-[#111111] transition-colors group-hover:text-[#FF6B35] md:text-base">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-1.5 sm:mt-2 text-xs leading-6 text-[#777777] md:text-sm">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5">

                {service.features.map((feature, idx) => (

                  <span
                    key={idx}
                    className="rounded-full border border-[#EDEAE4] bg-[#FAF9F6] px-1.5 sm:px-2 py-0.5 text-[7px] sm:text-[8px] text-[#666] md:text-[9px]"
                  >
                    {feature}
                  </span>

                ))}

              </div>

              {/* Link - No dropdown, direct to careers */}
              <Link
                to="/careers"
                className="group/link mt-3 sm:mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-[#FF6B35] transition-all duration-300 hover:gap-3 group-hover:text-[#E85C2D] md:text-xs"
              >

                Get Started

                <FaArrowRight className="text-[8px] sm:text-[9px] transition-transform group-hover/link:translate-x-1" />

              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          TRUCKING CTA
      ===================================================== */}

      <section className="px-4 sm:px-6 pb-10 sm:pb-12 lg:px-8 lg:pb-16">

        <div className="mx-auto max-w-7xl">

          <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#111111] px-5 sm:px-6 py-8 sm:py-10 md:px-10 lg:py-14">

            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-80 sm:h-96 w-80 sm:w-96 rounded-full bg-[#FF6B35]/20 blur-[100px] transition-all duration-700 group-hover:bg-[#FF6B35]/30" />

            <div className="absolute -bottom-32 -left-24 h-80 sm:h-96 w-80 sm:w-96 rounded-full bg-[#FF6B35]/10 blur-[100px] transition-all duration-700 group-hover:bg-[#FF6B35]/20" />

            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

              {/* Content */}
              <div className="max-w-2xl">

                <div className="mb-3 inline-block rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/20 px-2.5 sm:px-3 py-1">

                  <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#FF6B35] md:text-[10px]">
                    Ready to Move Forward?
                  </span>

                </div>

                <h2 className="text-lg sm:text-xl font-bold leading-tight text-white md:text-2xl lg:text-3xl">

                  Let's Keep Your

                  <span className="block text-[#FF6B35]">
                    Trucks Moving.
                  </span>

                </h2>

                <div className="mt-2 sm:mt-3 h-1 w-10 sm:w-12 rounded-full bg-[#FF6B35] md:w-14" />

                <p className="mt-3 sm:mt-4 max-w-lg text-sm leading-7 text-[#B5B5B0] md:text-base">

                  Partner with TransNova Solutions for professional
                  trucking support designed around your business,
                  your equipment, and your growth goals.

                </p>

              </div>

              {/* Buttons */}
              <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">

                <Link
                  to="/careers"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF6B35] px-4 py-2.5 text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:gap-3 hover:bg-[#E85C2D] hover:shadow-xl hover:shadow-[#FF6B35]/30 sm:px-6 sm:py-3 sm:text-xs"
                >

                  Start With Trucking

                  <FaArrowRight className="text-[10px] transition-transform group-hover/btn:translate-x-1" />

                </Link>

                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-[11px] font-bold text-white transition-all duration-300 hover:border-[#FF6B35] hover:bg-white/5 hover:text-[#FF6B35] sm:px-6 sm:py-3 sm:text-xs"
                >

                  Contact Us

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ANIMATION STYLES
      ===================================================== */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }

        /* ==========================================
           FLOATING IMAGE ANIMATION
        ========================================== */

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
};

export default Services;