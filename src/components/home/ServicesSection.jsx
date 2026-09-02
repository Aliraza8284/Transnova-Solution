import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTruck,
  FaShieldAlt,
  FaHeartbeat,
  FaCalculator,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* ===== HEADER ===== */}
      <div className="w-full text-center mb-10 sm:mb-12">
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
      <div className="w-full max-w-[1400px] mx-auto space-y-5 sm:space-y-6">

        {/* ============================== */}
        {/* 1. TRUCKING & LOGISTICS */}
        {/* ============================== */}
        <div className="w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
          {/* Content - 50% (Left) */}
          <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-5">
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

            {/* Read More Button */}
            <Link
              to="/Outlet"
              className="inline-flex items-center gap-2 text-[#FF5A1F] font-semibold text-sm hover:gap-3 transition-all duration-300 group"
            >
             Get a Quote
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Image - 50% (Right) */}
          <div className="w-full md:w-1/2 aspect-[16/10] md:aspect-auto">
            <img
              src="/img (4).jpg"
              alt="Trucking and Logistics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ============================== */}
        {/* 2 + 3: AUTO + HEALTH INSURANCE */}
        {/* ============================== */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {/* --- Commercial Auto Insurance --- */}
          <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="w-full h-48 sm:h-56 overflow-hidden">
              <img
                src="/img (1).jpg"
                alt="Commercial Auto Insurance"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full bg-white p-4 sm:p-5 flex flex-col justify-center flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#FF5A1F] text-white flex items-center justify-center text-base sm:text-lg mb-3">
                <FaShieldAlt />
              </div>

              <h3 className="text-sm sm:text-base font-extrabold text-black uppercase leading-tight">
                Commercial Auto Insurance
              </h3>

              <div className="w-6 h-[2px] bg-[#FF5A1F] my-2.5" />

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                We work with licensed insurance agents to find
                the right coverage for your truck and business.
              </p>

              {/* Read More Button */}
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-[#FF5A1F] font-semibold text-sm hover:gap-3 transition-all duration-300 group mt-auto"
              >
                Read More
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* --- Health Care Insurance --- */}
          <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="w-full h-48 sm:h-56 overflow-hidden">
              <img
                src="/img (2).jpg"
                alt="Health Care Insurance"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full bg-white p-4 sm:p-5 flex flex-col justify-center flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#FF5A1F] text-white flex items-center justify-center text-base sm:text-lg mb-3">
                <FaHeartbeat />
              </div>

              <h3 className="text-sm sm:text-base font-extrabold text-black uppercase leading-tight">
                Health Care Insurance
              </h3>

              <div className="w-6 h-[2px] bg-[#FF5A1F] my-2.5" />

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                Access quality health coverage through our trusted
                licensed insurance agents.
              </p>

              {/* Read More Button */}
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-[#FF5A1F] font-semibold text-sm hover:gap-3 transition-all duration-300 group mt-auto"
              >
                Read More
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* ============================== */}
        {/* 4. BOOKKEEPING & ACCOUNTING */}
        {/* ============================== */}
        <div className="w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row-reverse">
          {/* Image */}
          <div className="w-full md:w-[35%] lg:w-[30%] aspect-[16/10] md:aspect-auto">
            <img
              src="/img (3).jpg"
              alt="Bookkeeping and Accounting Services"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-[65%] lg:w-[70%] bg-white p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
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
            <div className="hidden lg:block w-px h-28 bg-gray-200 self-stretch" />

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

        {/* Read More Button for Bookkeeping */}
        <div className="flex justify-end mt-2">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-[#FF5A1F] font-semibold text-sm hover:gap-3 transition-all duration-300 group"
          >
            Read More
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>

      {/* ========================================== */}
      {/* FLOATING ANIMATION STYLES */}
      {/* ========================================== */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @media (min-width: 640px) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default ServicesSection;