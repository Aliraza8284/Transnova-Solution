import React from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaHeartbeat,
  FaCalculator,
  FaCheck,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* ===== HEADER ===== */}
      <div className="w-full text-center mb-8 sm:mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 sm:w-9 h-[2px] bg-[#FF5A1F]" />
          <span className="text-[#FF5A1F] font-bold text-xs sm:text-sm uppercase tracking-wider">
            Our Services
          </span>
          <span className="w-8 sm:w-9 h-[2px] bg-[#FF5A1F]" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
          Complete Solutions.{" "}
          <span className="text-[#FF5A1F]">Built for Drivers.</span>
        </h2>

        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We provide everything drivers and fleet owners need to
          stay on the road, protected, and profitable.
        </p>
      </div>

      {/* ===== SERVICES LIST ===== */}
      <div className="w-full max-w-[1400px] mx-auto space-y-4">

        {/* ============================== */}
        {/* 1. TRUCKING & LOGISTICS */}
        {/* ============================== */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
          {/* Mobile Image */}
          <div className="block md:hidden w-full h-[200px] sm:h-[250px]">
            <img
              src="/imga.png"
              alt="Trucking and Logistics"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Background Image with Overlay */}
          <div className="hidden md:block absolute inset-0 w-full h-full">
            <img
              src="/imga.png"
              alt="Trucking and Logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full md:w-[55%] lg:w-[42%] bg-white/90 md:backdrop-blur-[2px] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#FF5A1F] text-white flex items-center justify-center text-2xl sm:text-3xl mb-6">
              <FaTruck />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black uppercase leading-tight">
              Trucking &<br />Logistics
            </h3>

            <div className="w-8 h-[2px] bg-[#FF5A1F] my-5" />

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md mb-5">
              Reliable dispatching, load management, and logistics
              solutions designed to keep your trucks moving and
              your business growing.
            </p>

            <div className="space-y-2.5">
              {[
                "Freight Dispatching",
                "Load Planning & Optimization",
                "Carrier & Broker Network",
                "Dedicated Support 24/7",
                "On-Time, Every Time",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm sm:text-base text-gray-700">
                  <FaCheck className="text-[#FF5A1F] text-xs sm:text-sm flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================== */}
        {/* 2 + 3: AUTO + HEALTH INSURANCE */}
        {/* ============================== */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* --- Commercial Auto Insurance --- */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
            {/* Mobile Image */}
            <div className="block md:hidden w-full h-[180px] sm:h-[200px]">
              <img
                src="/img (1).jpg"
                alt="Commercial Auto Insurance"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop Image - Right Side */}
            <div className="hidden md:block absolute top-0 right-0 w-[80%] h-full">
              <img
                src="/img (1).jpg"
                alt="Commercial Auto Insurance"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-white/70 to-transparent" />
            </div>

            {/* Text */}
            <div className="relative z-10 w-full md:w-[35%] lg:w-[32%] bg-white p-4 sm:p-5 flex flex-col justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FF5A1F] text-white flex items-center justify-center text-lg sm:text-xl mb-4">
                <FaShieldAlt />
              </div>

              <h3 className="text-lg sm:text-xl lg:text-[22px] font-extrabold text-black uppercase leading-tight">
                Commercial<br />Auto Insurance
              </h3>

              <div className="w-7 h-[2px] bg-[#FF5A1F] my-3" />

              <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed">
                We work with licensed insurance agents to find
                the right coverage for your truck and business.
              </p>
            </div>
          </div>

          {/* --- Health Care Insurance --- */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
            {/* Mobile Image */}
            <div className="block md:hidden w-full h-[180px] sm:h-[200px]">
              <img
                src="/img (2).jpg"
                alt="Health Care Insurance"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop Image - Right Side */}
            <div className="hidden md:block absolute top-0 right-0 w-[80%] h-full">
              <img
                src="/img (2).jpg"
                alt="Health Care Insurance"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-white/70 to-transparent" />
            </div>

            {/* Text */}
            <div className="relative z-10 w-full md:w-[35%] lg:w-[32%] bg-white p-4 sm:p-5 flex flex-col justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FF5A1F] text-white flex items-center justify-center text-lg sm:text-xl mb-4">
                <FaHeartbeat />
              </div>

              <h3 className="text-lg sm:text-xl lg:text-[22px] font-extrabold text-black uppercase leading-tight">
                Health Care<br />Insurance
              </h3>

              <div className="w-7 h-[2px] bg-[#FF5A1F] my-3" />

              <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed">
                Access quality health coverage through our trusted
                licensed insurance agents.
              </p>
            </div>
          </div>
        </div>

        {/* ============================== */}
        {/* 4. BOOKKEEPING & ACCOUNTING */}
        {/* ============================== */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
          {/* Mobile Image */}
          <div className="block md:hidden w-full h-[180px] sm:h-[200px]">
            <img
              src="/img (3).jpg"
              alt="Bookkeeping and Accounting Services"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Background Image */}
          <div className="hidden md:block absolute inset-0 w-full h-full">
            <img
              src="/img (3).jpg"
              alt="Bookkeeping and Accounting Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full lg:w-[80%] xl:w-[75%] bg-white/90 md:backdrop-blur-[2px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            {/* Left */}
            <div className="w-full lg:w-[40%] xl:w-[38%]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FF5A1F] text-white flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  <FaCalculator />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-black uppercase leading-tight">
                  Bookkeeping &<br />Accounting Services
                </h3>
              </div>

              <div className="w-8 h-[2px] bg-[#FF5A1F] mt-3 mb-3" />

              <p className="text-sm text-gray-700 leading-relaxed">
                Professional bookkeeping and accounting services
                to help you stay organized and tax-ready.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-28 bg-gray-200" />

            {/* Right - Features */}
            <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Bookkeeping & Record Keeping",
                "Financial Reports",
                "Income & Expense Tracking",
                "Payroll Support",
                "Tax Preparation Support",
                "1099 Reporting",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheck className="text-[#FF5A1F] text-xs flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;