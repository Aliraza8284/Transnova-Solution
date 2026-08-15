// ==========================================
// 1. IMPORTS
// ==========================================

import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaHeadphones,
  FaPhoneAlt,
  FaFileInvoice,
  FaTruck,
  FaUsers,
} from "react-icons/fa";

// ==========================================
// 2. SERVICES COMPONENT
// ==========================================

const Services = () => {
  // ==========================================
  // SERVICES DATA
  // 6 Service Cards
  // ==========================================

  const servicesList = [
    {
      icon: (
        <FaHeadphones className="text-xl text-[#FF6B35]" />
      ),
      title: "BPO Solutions",
      desc: "Delivering exceptional customer experiences with tailored support.",
    },

    {
      icon: (
        <FaPhoneAlt className="text-xl text-[#FF6B35]" />
      ),
      title: "VoIP & Telecom",
      desc: "Connecting businesses with reliable communication solutions.",
    },

    {
      icon: (
        <FaFileInvoice className="text-xl text-[#FF6B35]" />
      ),
      title: "Invoicing Solutions",
      desc: "Automated invoicing for better cash flow.",
    },

    {
      icon: (
        <FaTruck className="text-xl text-[#FF6B35]" />
      ),
      title: "Logistics Solutions",
      desc: "End-to-end logistics management that ensures timely delivery.",
    },

    {
      icon: (
        <FaTruck className="text-xl text-[#FF6B35]" />
      ),
      title: "Trucking Services",
      desc: "Safe and reliable trucking services across North America.",
    },

    {
      icon: (
        <FaUsers className="text-xl text-[#FF6B35]" />
      ),
      title: "Outsourcing Services",
      desc: "Scalable outsourcing solutions to improve business performance.",
    },
  ];

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-manrope">

      {/* ==========================================
          OUR SERVICES SECTION
         ========================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">

        {/* ==========================================
            TOP HEADER
            Left Text + Right Image
           ========================================== */}

        <div className="mb-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          {/* ==========================================
              LEFT SIDE
             ========================================== */}

          <div className="max-w-xl lg:max-w-lg">

            {/* Breadcrumb */}
            <p className="mb-4 text-sm text-[#9B9B8A]">
              Home / Our Services
            </p>

            {/* Page Title */}
            <h2 className="text-4xl font-bold leading-tight text-[#111111] lg:text-5xl">
              Our Services
            </h2>

            {/* Orange Underline */}
            <div className="mb-6 mt-3 h-[3px] w-10 rounded-full bg-[#FF6B35]" />

            {/* Description */}
            <p className="text-base leading-relaxed text-[#666666]">
              Comprehensive solutions designed to optimize operations,
              improve efficiency.
            </p>
          </div>

          {/* ==========================================
              RIGHT SIDE IMAGE
             ========================================== */}

          <div className="relative w-full overflow-hidden lg:w-[45%] lg:rounded-l-none">

            {/* Desktop Image */}
            <div
              className="
                h-64
                w-full
                origin-bottom-right
                bg-cover
                bg-center
                lg:skew-x-[-15deg]
                lg:rounded-l-[50px]
              "
              style={{
                backgroundImage: "url('/Earth.png')",
                filter: "brightness(0.75)",
              }}
            >
              {/* Orange Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  origin-bottom-right
                  bg-gradient-to-l
                  from-[#FF6B35]/80
                  via-[#FF6B35]/30
                  to-transparent
                  lg:skew-x-[-15deg]
                "
              />
            </div>

            {/* ==========================================
                MOBILE IMAGE
               ========================================== */}

            <div className="absolute inset-0 block lg:hidden">

              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                alt="Tech Services"
                className="
                  h-full
                  w-full
                  rounded-xl
                  object-cover
                  brightness-75
                "
              />

              {/* Mobile Orange Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-gradient-to-l
                  from-[#FF6B35]/80
                  via-[#FF6B35]/30
                  to-transparent
                "
              />
            </div>
          </div>
        </div>

        {/* ==========================================
            SERVICES GRID
            6 SERVICE CARDS
           ========================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {servicesList.map((service, index) => (
            <div
              key={index}
              className="
                group
                rounded-xl
                border
                border-[#EDEAE4]
                bg-white
                p-5
                shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:border-transparent
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
              "
            >

              {/* ==========================================
                  ICON BOX
                 ========================================== */}

              <div
                className="
                  mb-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#FAF9F6]
                  transition-colors
                  duration-300
                  group-hover:bg-[#FF6B35]/10
                "
              >
                {service.icon}
              </div>

              {/* ==========================================
                  SERVICE TITLE
                 ========================================== */}

              <h3 className="mb-2 text-[17px] font-bold text-[#111111]">
                {service.title}
              </h3>

              {/* ==========================================
                  SERVICE DESCRIPTION
                 ========================================== */}

              <p className="mb-4 text-[13px] leading-relaxed text-[#777777]">
                {service.desc}
              </p>

              {/* ==========================================
                  LEARN MORE
                 ========================================== */}

              <Link
                to="/services"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[13px]
                  font-medium
                  text-[#FF6B35]
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                Learn More

                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;