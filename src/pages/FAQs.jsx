import React, { useState } from "react";
import {
  FaChevronDown,
  FaTruck,
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaRoute,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useCopyProtection from "../Hooks/useCopyProtection";

/* =========================================================
   COMPANY INFORMATION
========================================================= */

const COMPANY_PHONE = "+1 (407) 205-9059";
const COMPANY_EMAIL = "business@transnova.solutions";
const COMPANY_ADDRESS =
  "1209 Mountain Road PL NE STE 12783, Albuquerque, NM 87110, USA";

/* =========================================================
   FAQ DATA
========================================================= */

const FAQs = () => {
  // ==========================================
  // COPY PROTECTION
  // ==========================================
  useCopyProtection();

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of trucking operations does Trans Nova work with?",
      answer:
        "We work with owner-operators running a single truck as well as small and growing fleets. Whether you haul dry van, flatbed, reefer, step deck, power only, box truck, or hotshot freight, our dispatch team works to find reliable and profitable loads for your equipment type.",
      icon: <FaTruck />,
    },
    {
      question: "How does your dispatching service work?",
      answer:
        "Once you sign on with Trans Nova Solutions, we assign your operation to our dispatch team. We learn your preferred lanes, home base, equipment type, and schedule. Our team searches available loads, negotiates rates, communicates with brokers, confirms appointments, and manages the necessary paperwork so you can focus on driving.",
      icon: <FaHeadset />,
    },
    {
      question: "What does Trans Nova charge for dispatching services?",
      answer:
        "Our dispatching service is designed around a simple percentage-based model. The exact rate depends on the service and operation requirements. We believe in transparent pricing with no unnecessary hidden charges. Our goal is to build a long-term relationship where our success is connected to your success.",
      icon: <FaShieldAlt />,
    },
    {
      question: "Do you handle DOT and FMCSA compliance?",
      answer:
        "Yes. Trans Nova Solutions can provide compliance and administrative support to help carriers stay organized. Depending on your service package, support may include documentation, safety-related preparation, driver qualification files, and other operational compliance requirements.",
      icon: <FaShieldAlt />,
    },
    {
      question: "Are you available 24/7 for driver support?",
      answer:
        "Our logistics team is available to provide support when you need it. Trucking operations can face unexpected delays, breakdowns, appointment changes, and load issues at any time, so our team works to keep communication moving and help resolve operational problems quickly.",
      icon: <FaClock />,
    },
    {
      question: "How quickly can I get started with Trans Nova?",
      answer:
        "Getting started is simple. After contacting us, we review your operation and collect the required carrier information, such as your MC/DOT details, insurance information, and carrier documents. Once your onboarding is completed, our dispatch team can begin working on available freight opportunities.",
      icon: <FaTruck />,
    },
    {
      question: "Do you work with carriers outside of New Mexico?",
      answer:
        "Yes. Trans Nova Solutions provides trucking and logistics support for carriers operating across the United States. Our team can work with different equipment types and operating areas while helping carriers identify suitable freight opportunities for their lanes.",
      icon: <FaMapMarkerAlt />,
    },
    {
      question: "Can Trans Nova help me find better-paying freight lanes?",
      answer:
        "Yes. Finding better freight opportunities is one of our primary goals. Our dispatch team considers market conditions, lane demand, equipment type, pickup and delivery locations, and rate information when evaluating loads. We continuously look for opportunities that can help improve revenue and reduce unnecessary empty miles.",
      icon: <FaRoute />,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      className="min-h-screen bg-[#f8f9fa] text-[#151515] pt-[72px]"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }}
    >

      {/* ================= BREADCRUMB ================= */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-gray-500 hover:text-[#f15a24] transition"
            >
              Home
            </Link>

            <span className="text-gray-400">/</span>

            <span className="font-medium text-[#f15a24]">
              FAQ
            </span>
          </div>
        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#f15a24]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#f15a24]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 text-center">

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#f15a24]/10 text-[#f15a24] mb-6">
            <FaHeadset className="text-2xl" />
          </div>

          <p className="text-[#f15a24] font-semibold uppercase tracking-[0.18em] text-sm mb-3">
            Frequently Asked Questions
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#151515]">
            Frequently Asked
            <span className="text-[#f15a24]"> Questions</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-gray-600 leading-8">
            Everything you need to know about working with Trans Nova
            Solutions — answered clearly and honestly.
          </p>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="space-y-4">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#f15a24]/40 shadow-lg shadow-[#f15a24]/5"
                      : "border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >

                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center gap-4 text-left p-5 sm:p-6"
                    aria-expanded={isOpen}
                  >
                    {/* ICON */}
                    <div
                      className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#f15a24] text-white"
                          : "bg-[#f15a24]/10 text-[#f15a24]"
                      }`}
                    >
                      <span className="text-lg">
                        {faq.icon}
                      </span>
                    </div>

                    {/* QUESTION TEXT */}
                    <div className="flex-1 pr-2">
                      <h2
                        className={`text-base sm:text-lg font-semibold transition-colors ${
                          isOpen
                            ? "text-[#f15a24]"
                            : "text-[#151515]"
                        }`}
                      >
                        {faq.question}
                      </h2>
                    </div>

                    {/* CHEVRON */}
                    <div
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#f15a24] text-white rotate-180"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <FaChevronDown className="text-sm" />
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pl-[76px] sm:pl-[86px] pr-6 sm:pr-20">
                        <div className="h-px bg-gray-100 mb-5" />

                        <p className="text-gray-600 text-sm sm:text-base leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= STILL HAVE QUESTION ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="relative overflow-hidden rounded-3xl bg-[#151515] px-6 sm:px-10 lg:px-14 py-10 sm:py-12">

            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#f15a24]/20 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-56 h-56 bg-[#f15a24]/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div className="max-w-2xl">
                <p className="text-[#f15a24] font-semibold text-sm uppercase tracking-widest mb-3">
                  Still have a question?
                </p>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  We're Here to Help
                </h2>

                <p className="text-gray-300 mt-4 leading-7 text-sm sm:text-base">
                  Our team is ready to answer your questions and help you
                  find the right trucking and logistics solution for your
                  operation.
                </p>
              </div>

              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center justify-center gap-3 bg-[#f15a24] hover:bg-[#d94d1d] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#f15a24]/20"
              >
                Contact Us
                <FaPhoneAlt className="text-sm" />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center mb-10">
            <p className="text-[#f15a24] font-semibold uppercase tracking-widest text-sm mb-2">
              Talk to Us Directly
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#151515]">
              Get Your Questions Answered
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* PHONE */}
            <a
              href="tel:+14072059059"
              className="group bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5 hover:border-[#f15a24]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#f15a24]/10 text-[#f15a24] flex items-center justify-center group-hover:bg-[#f15a24] group-hover:text-white transition-all">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Call Anytime
                </p>

                <p className="font-semibold text-[#151515]">
                  {COMPANY_PHONE}
                </p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:business@transnova.solutions"
              className="group bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5 hover:border-[#f15a24]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#f15a24]/10 text-[#f15a24] flex items-center justify-center group-hover:bg-[#f15a24] group-hover:text-white transition-all">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500 mb-1">
                  Email Us
                </p>

                <p className="font-semibold text-[#151515] break-all">
                  {COMPANY_EMAIL}
                </p>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* ================= COMPANY INFO ================= */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-10">

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center sm:text-left">

            <div className="w-12 h-12 mx-auto sm:mx-0 rounded-xl bg-[#f15a24]/10 text-[#f15a24] flex items-center justify-center shrink-0">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Our Location
              </p>

              <p className="font-medium text-[#151515] mt-1">
                {COMPANY_ADDRESS}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          WATERMARK (Optional)
      ========================================== */}
      <div className="fixed bottom-4 right-4 pointer-events-none z-50 opacity-5">
        <span className="text-[#0A0A0A] text-xs font-bold tracking-widest select-none">
          © Trans Nova Solutions
        </span>
      </div>

    </div>
  );
};

export default FAQs;