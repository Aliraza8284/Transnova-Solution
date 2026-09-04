import React, { useState, useRef } from "react";
import {
  FaTruck,
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaRoute,
  FaPhoneAlt,
  FaEnvelope,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useCopyProtection from "../Hooks/useCopyProtection";

/* =========================================================
   FONTS
   Add these once in public/index.html <head>:
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
========================================================= */

const HEAD = { fontFamily: "'Oswald', sans-serif" };
const BODY = { fontFamily: "'Inter', sans-serif" };

/* =========================================================
   COMPANY INFORMATION - TRANS NOVA SOLUTIONS
========================================================= */

const COMPANY_NAME = "Trans Nova Solutions";
const COMPANY_PHONE = "+1 (407) 205-9059";
const COMPANY_EMAIL = "business@transnova.solutions";
const COMPANY_ADDRESS =
  "1209 Mountain Road PL NE STE 12783, Albuquerque, NM 87110, USA";
const COMPANY_WEBSITE = "https://transnova.solutions";

// =========================================================
// GOOGLE MAPS LINK
// =========================================================

const MAP_LINK = "https://maps.app.goo.gl/9FcFMkRT6gteYF1T8?g_st=iw";

// =========================================================
// EMAIL FUNCTION - Opens Gmail Compose
// =========================================================

const openGmail = () => {
  const subject = "Complaint / Problem Report – Trans Nova Solutions";
  const body = `Hello Trans Nova Solutions Team,

I am contacting you regarding a problem/complaint related to Trans Nova Solutions.

Please describe your problem or complaint below:

[Write your problem here]

Additional Details:
[Add any additional information if needed]

Thank you,
Your Name`;

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_EMAIL}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, "_blank");
};

/* =========================================================
   FAQ DATA — grouped by category, not a flat list
   Updated with Trans Nova Solutions specific content
========================================================= */

const CATEGORIES = [
  {
    id: "start",
    label: "Getting Started",
    icon: <FaTruck />,
    items: [
      {
        q: "What types of trucking operations does Trans Nova Solutions work with?",
        a: "Trans Nova Solutions works with owner-operators running a single truck as well as small and growing fleets. Whether you haul dry van, flatbed, reefer, step deck, power only, box truck, or hotshot freight, our dispatch team works to find reliable and profitable loads for your equipment type across the United States.",
      },
      {
        q: "How quickly can I get started with Trans Nova Solutions?",
        a: "Getting started with Trans Nova Solutions is simple. After contacting us, we review your operation and collect the required carrier information, such as your MC/DOT details, insurance information, and carrier documents. Once your onboarding is completed, our dispatch team can begin working on available freight opportunities immediately.",
      },
      {
        q: "What makes Trans Nova Solutions different from other dispatch services?",
        a: "Trans Nova Solutions stands out because we treat every carrier as a partner, not just a number. We provide personalized dispatch support, transparent pricing with no hidden fees, and a dedicated team that understands the challenges of the trucking industry. Our goal is to build long-term relationships where our success is connected to your success.",
      },
    ],
  },
  {
    id: "dispatch",
    label: "Dispatching & Rates",
    icon: <FaRoute />,
    items: [
      {
        q: "How does Trans Nova Solutions dispatching service work?",
        a: "Once you sign on with Trans Nova Solutions, we assign your operation to our dispatch team. We learn your preferred lanes, home base, equipment type, and schedule. Our team searches available loads, negotiates rates, communicates with brokers, confirms appointments, and manages the necessary paperwork so you can focus on driving and earning.",
      },
      {
        q: "What does Trans Nova Solutions charge for dispatching services?",
        a: "Trans Nova Solutions dispatching service is designed around a simple percentage-based model. The exact rate depends on the service and operation requirements. We believe in transparent pricing with no unnecessary hidden charges. Our goal is to build a long-term relationship where our success is connected to your success. Contact us for a personalized rate quote.",
      },
      {
        q: "Can Trans Nova Solutions help me find better-paying freight lanes?",
        a: "Yes. Finding better freight opportunities is one of our primary goals at Trans Nova Solutions. Our dispatch team considers market conditions, lane demand, equipment type, pickup and delivery locations, and rate information when evaluating loads. We continuously look for opportunities that can help improve revenue and reduce unnecessary empty miles.",
      },
      {
        q: "Does Trans Nova Solutions handle both spot market and contract freight?",
        a: "Yes. Trans Nova Solutions works with both spot market and contract freight opportunities. We help carriers find the right balance between consistent contract freight and higher-paying spot market loads, depending on your operation's goals and preferences.",
      },
    ],
  },
  {
    id: "compliance",
    label: "Compliance & Support",
    icon: <FaShieldAlt />,
    items: [
      {
        q: "Does Trans Nova Solutions handle DOT and FMCSA compliance?",
        a: "Yes. Trans Nova Solutions provides compliance and administrative support to help carriers stay organized and compliant. Depending on your service package, support may include documentation, safety-related preparation, driver qualification files, and other operational compliance requirements. We help you stay on top of regulations so you can focus on driving.",
      },
      {
        q: "Is Trans Nova Solutions available 24/7 for driver support?",
        a: "Yes. Our logistics team at Trans Nova Solutions is available to provide support when you need it. Trucking operations can face unexpected delays, breakdowns, appointment changes, and load issues at any time, so our team works to keep communication moving and help resolve operational problems quickly, 24 hours a day, 7 days a week.",
      },
      {
        q: "What kind of insurance support does Trans Nova Solutions offer?",
        a: "Trans Nova Solutions works with licensed insurance agents to help carriers find the right coverage for their trucks and business operations. We can assist with commercial auto insurance, health care insurance, and other coverage options to protect your business and keep you on the road.",
      },
    ],
  },
  {
    id: "coverage",
    label: "Coverage Area",
    icon: <FaMapMarkerAlt />,
    items: [
      {
        q: "Does Trans Nova Solutions work with carriers outside of New Mexico?",
        a: "Yes. Trans Nova Solutions provides trucking and logistics support for carriers operating across the United States. Our team can work with different equipment types and operating areas while helping carriers identify suitable freight opportunities for their preferred lanes and routes.",
      },
      {
        q: "What regions does Trans Nova Solutions primarily operate in?",
        a: "Trans Nova Solutions operates nationwide, with strong coverage across the continental United States. We have established relationships with brokers and shippers in key freight markets, including the Midwest, Southeast, Northeast, West Coast, and Southwest regions. Our team can help you find loads in your preferred operating areas.",
      },
      {
        q: "Does Trans Nova Solutions offer cross-border services?",
        a: "Currently, Trans Nova Solutions primarily focuses on domestic freight within the United States. However, we can assist carriers with information and connections for cross-border freight when needed. Contact our dispatch team to discuss your specific needs.",
      },
    ],
  },
  {
    id: "fleet",
    label: "Fleet Services",
    icon: <FaHeadset />,
    items: [
      {
        q: "What types of equipment does Trans Nova Solutions support?",
        a: "Trans Nova Solutions supports a wide range of equipment types, including Dry Vans, Flatbeds, Reefers (Temperature-Controlled), Step Decks, Power Only, Box Trucks, and Hotshot units. We find freight that matches your specific equipment and operating preferences.",
      },
      {
        q: "Can Trans Nova Solutions handle multiple trucks in my fleet?",
        a: "Yes. Trans Nova Solutions works with carriers of all sizes, from single-truck owner-operators to growing fleets. Our dispatch team can scale with your operation and manage multiple trucks, drivers, and schedules while maintaining personalized attention and service quality.",
      },
      {
        q: "Does Trans Nova Solutions offer dedicated fleet management?",
        a: "Yes. Trans Nova Solutions provides dedicated fleet management services for carriers looking for comprehensive operational support. This includes load planning, dispatching, compliance support, and administrative assistance to keep your fleet running efficiently.",
      },
    ],
  },
];

/* =========================================================
   FAQ PAGE
========================================================= */

const FAQs = () => {
  useCopyProtection();

  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);
  const [openKey, setOpenKey] = useState(`${CATEGORIES[0].id}-0`);
  const sectionRefs = useRef({});

  const scrollToTab = (id) => {
    setActiveTab(id);
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  const totalQuestions = CATEGORIES.reduce((n, c) => n + c.items.length, 0);

  return (
    <div
      className="min-h-screen bg-[#f7f5f1] text-[#151515] pt-[72px]"
      style={{
        ...BODY,
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        WebkitTouchCallout: "none",
      }}
    >
      {/* ================= BREADCRUMB ================= */}
      <section className="border-b border-[#e2ddd4]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#6b6459] hover:text-[#f15a24] transition">
              Home
            </Link>
            <span className="text-[#c9c2b6]">/</span>
            <span className="font-medium text-[#f15a24]">FAQ</span>
          </div>
        </div>
      </section>

      {/* ================= HERO — route line connecting the categories ================= */}
      <section className="border-b border-[#e2ddd4]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <p
              className="text-[#f15a24] font-semibold uppercase tracking-[0.2em] text-xs mb-4"
              style={HEAD}
            >
              Answers, Mile by Mile
            </p>
            <h1
              className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] leading-[0.95] font-semibold text-[#151515]"
              style={HEAD}
            >
              Questions carriers
              <br />
              actually ask us
            </h1>
            <p className="max-w-md mt-6 text-[#4a453d] text-base leading-7">
              {totalQuestions} answers from Trans Nova Solutions on onboarding, 
              dispatch, rates, compliance, and fleet services — organized the 
              way our dispatch desk actually thinks about them.
            </p>
          </div>

          {/* Route line illustration */}
          <div className="hidden lg:block relative h-64">
            <svg
              viewBox="0 0 400 260"
              className="w-full h-full"
              fill="none"
            >
              <path
                d="M20 40 C 100 40, 80 130, 200 130 S 300 220, 380 220"
                stroke="#d9d2c4"
                strokeWidth="3"
                strokeDasharray="2 12"
                strokeLinecap="round"
              />
              {CATEGORIES.map((cat, i) => {
                const points = [
                  { x: 20, y: 40 },
                  { x: 120, y: 70 },
                  { x: 200, y: 130 },
                  { x: 290, y: 180 },
                  { x: 380, y: 220 },
                ];
                const p = points[i] || points[points.length - 1];
                return (
                  <g key={cat.id}>
                    <circle cx={p.x} cy={p.y} r="7" fill="#f15a24" />
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="13"
                      stroke="#f15a24"
                      strokeOpacity="0.3"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </svg>
            <div className="absolute inset-0">
              {[
                { top: "6%", left: "0%" },
                { top: "18%", left: "28%" },
                { top: "42%", left: "48%" },
                { top: "62%", left: "68%" },
                { top: "78%", left: "92%" },
              ].map((pos, i) => (
                <div
                  key={CATEGORIES[i]?.id || i}
                  className="absolute -translate-x-1/2 flex items-center gap-2 bg-[#151515] text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm"
                  style={{ top: pos.top, left: pos.left }}
                >
                  <span className="text-[#f15a24] text-[11px]">
                    {CATEGORIES[i]?.icon || <FaTruck />}
                  </span>
                  {CATEGORIES[i]?.label || "Fleet Services"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STICKY CATEGORY TABS ================= */}
      <div className="sticky top-[72px] z-30 bg-[#f7f5f1]/95 backdrop-blur border-b border-[#e2ddd4]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToTab(cat.id)}
                  className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "border-[#f15a24] text-[#f15a24]"
                      : "border-transparent text-[#6b6459] hover:text-[#151515]"
                  }`}
                >
                  <span className="text-xs">{cat.icon}</span>
                  {cat.label}
                  <span className="text-xs text-[#c9c2b6]">
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= FAQ SECTIONS ================= */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">
          {/* Left rail — visible on desktop, mirrors the tabs */}
          <div className="hidden lg:block">
            <div className="sticky top-[150px] space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToTab(cat.id)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeTab === cat.id
                      ? "bg-[#151515] text-white"
                      : "text-[#4a453d] hover:bg-[#efeae0]"
                  }`}
                >
                  <span
                    className={
                      activeTab === cat.id ? "text-[#f15a24]" : "text-[#a39c8c]"
                    }
                  >
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-[#e2ddd4]">
                <a
                  href="tel:+14072059059"
                  className="flex items-center gap-2 text-sm text-[#4a453d] hover:text-[#f15a24] px-3 py-2"
                >
                  <FaPhoneAlt className="text-xs" /> Call dispatch
                </a>
                {/* ===== EMAIL - Clickable ===== */}
                <button
                  onClick={openGmail}
                  className="flex items-center gap-2 text-sm text-[#4a453d] hover:text-[#f15a24] px-3 py-2 w-full text-left cursor-pointer"
                >
                  <FaEnvelope className="text-xs" /> Email us
                </button>
                {/* ===== LOCATION - Clickable (Google Maps) ===== */}
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#4a453d] hover:text-[#f15a24] px-3 py-2"
                >
                  <FaMapMarkerAlt className="text-xs" /> View on Map
                </a>
              </div>
            </div>
          </div>

          {/* Question sections */}
          <div className="space-y-16">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                ref={(el) => (sectionRefs.current[cat.id] = el)}
              >
                <h2
                  className="flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-[#151515] mb-6"
                  style={HEAD}
                >
                  <span className="text-[#f15a24]">{cat.icon}</span>
                  {cat.label}
                </h2>

                <div className="border-t border-[#e2ddd4]">
                  {cat.items.map((item, i) => {
                    const key = `${cat.id}-${i}`;
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={key}
                        className={`border-b border-[#e2ddd4] transition-colors ${
                          isOpen ? "bg-white" : ""
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          className={`w-full flex items-start gap-4 text-left py-5 pl-4 pr-4 sm:pl-5 border-l-2 transition-colors ${
                            isOpen
                              ? "border-l-[#f15a24]"
                              : "border-l-transparent"
                          }`}
                        >
                          <span
                            className={`flex-1 text-base sm:text-lg font-medium leading-snug transition-colors ${
                              isOpen ? "text-[#f15a24]" : "text-[#151515]"
                            }`}
                          >
                            {item.q}
                          </span>
                          <span
                            className={`shrink-0 mt-1 text-[#f15a24] transition-transform duration-300 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            <FaPlus className="text-xs" />
                          </span>
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[#4a453d] text-sm sm:text-base leading-7 pb-6 pl-4 pr-4 sm:pl-5 sm:pr-16 border-l-2 border-l-transparent">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DISPATCH TICKET CTA ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl bg-[#151515] border border-[#2b3542]">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-[#f15a24]" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-6 sm:px-10 lg:px-14 py-10 sm:py-12">
              <div className="max-w-2xl">
                <p
                  className="text-[#f15a24] font-semibold text-xs uppercase tracking-[0.2em] mb-3"
                  style={HEAD}
                >
                  Still Have a Question?
                </p>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white"
                  style={HEAD}
                >
                  Talk to the Trans Nova Solutions dispatch desk directly
                </h2>
                <p className="text-[#a8a29a] mt-4 leading-7 text-sm sm:text-base">
                  We'll walk through your equipment, lanes, and schedule and
                  tell you exactly how we'd run your operation with Trans Nova Solutions.
                </p>
              </div>

              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center justify-center gap-3 bg-[#f15a24] hover:bg-[#d94d1d] text-white font-semibold px-7 py-4 rounded-xl transition-colors duration-300"
              >
                Contact Us
                <FaPhoneAlt className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT STRIP ================= */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e2ddd4] border border-[#e2ddd4] rounded-2xl bg-white overflow-hidden">
            {/* ===== PHONE - Clickable ===== */}
            <a
              href="tel:+14072059059"
              className="group flex items-center gap-4 p-6 hover:bg-[#f7f5f1] transition-colors"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-[#f15a24]/10 text-[#f15a24] flex items-center justify-center group-hover:bg-[#f15a24] group-hover:text-white transition-colors">
                <FaPhoneAlt className="text-sm" />
              </div>
              <div>
                <p className="text-xs text-[#8a8377] mb-0.5">Call Anytime</p>
                <p className="font-medium text-[#151515] text-sm">
                  {COMPANY_PHONE}
                </p>
              </div>
            </a>

            {/* ===== EMAIL - Clickable (Gmail Compose) ===== */}
            <button
              onClick={openGmail}
              className="group flex items-center gap-4 p-6 hover:bg-[#f7f5f1] transition-colors w-full text-left cursor-pointer"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-[#f15a24]/10 text-[#f15a24] flex items-center justify-center group-hover:bg-[#f15a24] group-hover:text-white transition-colors">
                <FaEnvelope className="text-sm" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#8a8377] mb-0.5">Email Us</p>
                <p className="font-medium text-[#151515] text-sm break-all">
                  {COMPANY_EMAIL}
                </p>
              </div>
            </button>

            {/* ===== LOCATION - Clickable (Google Maps) ===== */}
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 hover:bg-[#f7f5f1] transition-colors"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-[#f15a24]/10 text-[#f15a24] flex items-center justify-center group-hover:bg-[#f15a24] group-hover:text-white transition-colors">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <div>
                <p className="text-xs text-[#8a8377] mb-0.5">Based In</p>
                <p className="font-medium text-[#151515] text-sm leading-snug">
                  {COMPANY_ADDRESS}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          WATERMARK (Optional)
      ========================================== */}
      <div className="fixed bottom-4 right-4 pointer-events-none z-50 opacity-5">
        <span className="text-[#0A0A0A] text-xs font-bold tracking-widest select-none">
          © {COMPANY_NAME}
        </span>
      </div>
    </div>
  );
};

export default FAQs;