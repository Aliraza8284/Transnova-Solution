import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useCopyProtection from "../Hooks/useCopyProtection";

import {
  FaTruck,
  FaSnowflake,
  FaRulerVertical,
  FaTrailer,
  FaBoxes,
  FaBolt,
  FaArrowRight,
  FaRoute,
  FaGasPump,
  FaCheckCircle,
  FaPhoneAlt,
  FaCalculator,
  FaChartLine,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

/* =========================================================
   COMPANY INFORMATION
========================================================= */

const COMPANY_NAME = "Trans Nova Solutions";
const COMPANY_PHONE = "+1 (407) 205-9059";
const COMPANY_EMAIL = "business@transnova.solutions";
const COMPANY_ADDRESS =
  "1209 Mountain Road PL NE STE 12783, Albuquerque, NM 87110, USA";

/* =========================================================
   DESIGN TOKENS
========================================================= */

const COLORS = {
  navy: "#101820",
  navyLight: "#182631",
  orange: "#E85D04",
  orangeDark: "#C2410C",
  orangeSoft: "#FFF1E8",
  cream: "#F8FAFC",
  white: "#FFFFFF",
  text: "#17202A",
  muted: "#64748B",
  border: "#E2E8F0",
  green: "#15803D",
};

/* =========================================================
   HELPER - Format numbers to k format
========================================================= */

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};

/* =========================================================
   TRAILER TYPES WITH UPDATED VALUES
   ---------------------------------------------------------
   Box Truck: 8% fee, $5k-8k weekly gross
   Hotshot: 8% fee, $6k-8k weekly gross
   All other equipment: 5% fee, $10k-12k weekly gross
========================================================= */

const trailerTypes = [
  {
    id: "dry-van",
    name: "Dry Van",
    code: "DV",
    icon: <FaTruck />,
    description: "General freight",
    fee: 5,
    weeklyMin: 10000,
    weeklyMax: 12000,
    rateMin: 2.0,
    rateMax: 3.0,
  },
  {
    id: "flatbed",
    name: "Flatbed",
    code: "FB",
    icon: <FaTrailer />,
    description: "Oversized loads",
    fee: 5,
    weeklyMin: 10000,
    weeklyMax: 12000,
    rateMin: 2.5,
    rateMax: 3.5,
  },
  {
    id: "reefer",
    name: "Reefer",
    code: "RF",
    icon: <FaSnowflake />,
    description: "Temp controlled",
    fee: 5,
    weeklyMin: 10000,
    weeklyMax: 12000,
    rateMin: 2.5,
    rateMax: 3.5,
  },
  {
    id: "step-deck",
    name: "Step Deck",
    code: "SD",
    icon: <FaRulerVertical />,
    description: "Tall cargo",
    fee: 5,
    weeklyMin: 10000,
    weeklyMax: 12000,
    rateMin: 2.5,
    rateMax: 3.5,
  },
  {
    id: "power-only",
    name: "Power Only",
    code: "PO",
    icon: <FaBolt />,
    description: "Tractor only",
    fee: 5,
    weeklyMin: 10000,
    weeklyMax: 12000,
    rateMin: 2.0,
    rateMax: 3.0,
  },
  {
    id: "box-truck",
    name: "Box Truck",
    code: "BX",
    icon: <FaBoxes />,
    description: "Local deliveries",
    fee: 8,
    weeklyMin: 5000,
    weeklyMax: 8000,
    rateMin: 1.8,
    rateMax: 2.5,
  },
  {
    id: "hotshot",
    name: "Hotshot",
    code: "HS",
    icon: <FaGasPump />,
    description: "Expedited freight",
    fee: 8,
    weeklyMin: 6000,
    weeklyMax: 8000,
    rateMin: 1.8,
    rateMax: 2.5,
  },
];

/* =========================================================
   OPTIONS
========================================================= */

const authorityOptions = [
  { id: "1-3", label: "1-3 Month", short: "1-3 mo", subLabel: "Local" },
  { id: "3-6", label: "3-6 Month", short: "3-6 mo", subLabel: "Regional" },
  { id: "6-plus", label: "6+ Month", short: "6+ mo", subLabel: "OTR" },
];

const operationOptions = [
  { id: "local", label: "Local" },
  { id: "regional", label: "Regional" },
  { id: "otr", label: "OTR" },
  { id: "otr-team", label: "OTR Team" },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

const SectionLabel = ({ number, title }) => (
  <div className="flex items-start gap-2 mb-2">
    <span
      className="flex items-center justify-center w-5 h-5 rounded text-[9px] font-bold shrink-0"
      style={{
        backgroundColor: COLORS.orangeSoft,
        color: COLORS.orange,
      }}
    >
      {number}
    </span>

    <div>
      <h3
        className="text-xs font-bold"
        style={{ color: COLORS.text }}
      >
        {title}
      </h3>
    </div>
  </div>
);

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Pricing = () => {
  useCopyProtection();

  const [authorityAge, setAuthorityAge] = useState("6-plus");
  const [trailerType, setTrailerType] = useState("dry-van");
  const [operationType, setOperationType] = useState("otr");

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const selectedTrailer = useMemo(
    () => trailerTypes.find((item) => item.id === trailerType) || trailerTypes[0],
    [trailerType]
  );

  const selectedAuthority = authorityOptions.find(
    (item) => item.id === authorityAge
  );

  const selectedOperation = operationOptions.find(
    (item) => item.id === operationType
  );

  const calculations = useMemo(() => {
    const { fee, weeklyMin, weeklyMax, rateMin, rateMax } = selectedTrailer;
    const avgWeekly = (weeklyMin + weeklyMax) / 2;
    const dispatchFee = avgWeekly * (fee / 100);

    return {
      feePercentage: fee,
      rateMin,
      rateMax,
      weeklyMin,
      weeklyMax,
      netMin: weeklyMin * (1 - fee / 100),
      netMax: weeklyMax * (1 - fee / 100),
      dispatchFee,
    };
  }, [selectedTrailer]);

  return (
    <div
      className="min-h-screen pt-[72px]"
      style={{
        backgroundColor: COLORS.cream,
        color: COLORS.text,
        userSelect: "none",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        .tn-body {
          font-family: 'DM Sans', sans-serif;
        }

        .tn-heading {
          font-family: 'Space Grotesk', sans-serif;
        }

        .tn-card {
          transition: all 0.2s ease;
        }

        .tn-card:hover {
          transform: translateY(-2px);
        }

        .tn-select-card {
          transition: all 0.2s ease;
        }

        .tn-select-card:hover {
          transform: translateY(-1px);
        }

        .tn-equipment-card {
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .tn-equipment-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>

      <div className="tn-body">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: COLORS.navy }}
        >
          <div
            className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${COLORS.orange}, transparent 65%)`,
            }}
          />

          <div
            className="absolute -bottom-40 -left-40 w-[380px] h-[380px] rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${COLORS.orange}, transparent 65%)`,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] mb-4">
              <Link
                to="/"
                className="hover:text-white transition-colors"
                style={{ color: "#94A3B8" }}
              >
                Home
              </Link>
              <span style={{ color: "#475569" }}>/</span>
              <span style={{ color: COLORS.orange }}>Pricing</span>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center">

              {/* Hero Content */}
              <div>
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3 text-[9px] font-semibold"
                  style={{
                    backgroundColor: "rgba(232,93,4,0.12)",
                    color: "#FDBA74",
                    border: "1px solid rgba(232,93,4,0.25)",
                  }}
                >
                  <FaCalculator className="text-[8px]" />
                  Transparent Pricing
                </div>

                <h1
                  className="tn-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.08] text-white"
                >
                  Know your numbers.
                  <br />
                  <span style={{ color: COLORS.orange }}>
                    Plan your growth.
                  </span>
                </h1>

                <p
                  className="mt-3 max-w-xl text-xs leading-5"
                  style={{ color: "#CBD5E1" }}
                >
                  Estimate your average weekly gross based on your equipment 
                  and operation type.
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    { icon: <FaCheckCircle className="text-[9px]" />, text: "Transparent fees" },
                    { icon: <FaCheckCircle className="text-[9px]" />, text: "Flexible options" },
                    { icon: <FaCheckCircle className="text-[9px]" />, text: "Driver focused" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-1 text-[9px] font-medium"
                      style={{ color: "#CBD5E1" }}
                    >
                      <span style={{ color: COLORS.orange }}>
                        {item.icon}
                      </span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Stats Card */}
              <div
                className="rounded-lg p-3.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p
                      className="text-[9px] font-semibold uppercase tracking-wider"
                      style={{ color: "#94A3B8" }}
                    >
                      Estimate
                    </p>
                    <h2 className="tn-heading text-sm font-bold text-white mt-0.5">
                      Overview
                    </h2>
                  </div>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(232,93,4,0.15)",
                      color: "#FDBA74",
                    }}
                  >
                    <FaChartLine className="text-xs" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="rounded-lg p-2.5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-[9px]" style={{ color: "#94A3B8" }}>
                      Fee
                    </p>
                    <p className="text-lg font-bold text-white mt-0.5">5-8%</p>
                  </div>

                  <div
                    className="rounded-lg p-2.5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-[9px]" style={{ color: "#94A3B8" }}>
                      Equipment
                    </p>
                    <p className="text-lg font-bold text-white mt-0.5">7</p>
                  </div>

                  <div
                    className="col-span-2 rounded-lg p-2.5 flex items-center justify-between"
                    style={{
                      backgroundColor: COLORS.orange,
                    }}
                  >
                    <div>
                      <p className="text-[8px] text-orange-100">
                        Weekly gross
                      </p>
                      <p className="text-base font-bold text-white mt-0.5">
                        $5k - $12k
                      </p>
                    </div>
                    <FaTruck className="text-xl text-white/70" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            CALCULATOR
        ================================================= */}

        <section className="py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-4 lg:gap-5 items-start">

              {/* LEFT: FORM */}
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 2px 8px rgba(15,23,42,0.04)",
                }}
              >

                {/* Card Header */}
                <div
                  className="px-3 sm:px-4 py-2.5 flex items-center justify-between"
                  style={{ borderBottom: `1px solid ${COLORS.border}` }}
                >
                  <div>
                    <p
                      className="text-[9px] font-semibold uppercase tracking-wider"
                      style={{ color: COLORS.orange }}
                    >
                      Pricing builder
                    </p>
                    <h2
                      className="tn-heading text-sm font-bold mt-0.5"
                      style={{ color: COLORS.text }}
                    >
                      Build your estimate
                    </h2>
                  </div>
                  <div
                    className="hidden sm:flex items-center gap-1 text-[9px] font-medium"
                    style={{ color: COLORS.muted }}
                  >
                    <FaClock className="text-[8px]" />
                    {today}
                  </div>
                </div>

                <div className="p-3 sm:p-4 lg:p-5">

                  {/* AUTHORITY */}
                  <div className="mb-4">
                    <SectionLabel
                      number="01"
                      title="CHOOSE AUTHORITY AGE"
                    />

                    <div className="grid grid-cols-3 gap-1.5">
                      {authorityOptions.map((option) => {
                        const active = authorityAge === option.id;

                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setAuthorityAge(option.id)}
                            className="tn-select-card text-center rounded-lg py-2 px-2"
                            style={{
                              backgroundColor: active
                                ? COLORS.navy
                                : COLORS.white,
                              border: `1.5px solid ${
                                active ? COLORS.orange : COLORS.border
                              }`,
                            }}
                          >
                            <p
                              className="text-[9px] font-bold"
                              style={{
                                color: active
                                  ? COLORS.white
                                  : COLORS.text,
                              }}
                            >
                              {option.label}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* EQUIPMENT */}
                  <div className="mb-4">
                    <SectionLabel
                      number="02"
                      title="CHOOSE EQUIPMENT TYPE"
                    />

                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
                      {trailerTypes.map((trailer) => {
                        const active = trailerType === trailer.id;
                        const isBoxTruck = trailer.id === "box-truck";
                        const isHotshot = trailer.id === "hotshot";
                        const feeDisplay = isBoxTruck || isHotshot ? "8%" : "5%";

                        return (
                          <button
                            key={trailer.id}
                            type="button"
                            onClick={() => setTrailerType(trailer.id)}
                            className="tn-equipment-card text-center rounded-lg py-2 px-1.5 relative"
                            style={{
                              backgroundColor: active
                                ? COLORS.orangeSoft
                                : COLORS.white,
                              border: `1.5px solid ${
                                active ? COLORS.orange : COLORS.border
                              }`,
                            }}
                          >
                            <div className="flex flex-col items-center gap-0.5">
                              <span
                                className="text-sm"
                                style={{
                                  color: active
                                    ? COLORS.orange
                                    : COLORS.muted,
                                }}
                              >
                                {trailer.icon}
                              </span>
                              <span
                                className="text-[8px] font-bold"
                                style={{ color: COLORS.text }}
                              >
                                {trailer.name}
                              </span>
                              <span
                                className="text-[7px]"
                                style={{ color: COLORS.muted }}
                              >
                                {trailer.code}
                              </span>
                              <span
                                className="text-[7px] font-bold mt-0.5 px-1.5 py-0.5 rounded"
                                style={{
                                  backgroundColor: (isBoxTruck || isHotshot) 
                                    ? "#FEF3C7" 
                                    : "#D1FAE5",
                                  color: (isBoxTruck || isHotshot) 
                                    ? "#D97706" 
                                    : "#059669",
                                }}
                              >
                                {feeDisplay}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* OPERATION */}
                  <div className="mb-4">
                    <SectionLabel
                      number="03"
                      title="CHOOSE OPERATION TYPE"
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {operationOptions.map((option) => {
                        const active = operationType === option.id;

                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setOperationType(option.id)}
                            className="tn-select-card text-center rounded-lg py-2 px-2"
                            style={{
                              backgroundColor: active
                                ? COLORS.navy
                                : COLORS.white,
                              border: `1.5px solid ${
                                active ? COLORS.orange : COLORS.border
                              }`,
                            }}
                          >
                            <p
                              className="text-[9px] font-bold"
                              style={{
                                color: active
                                  ? COLORS.white
                                  : COLORS.text,
                              }}
                            >
                              {option.label}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* MOBILE SUMMARY */}
                  <div
                    className="lg:hidden rounded-lg p-2.5 mb-3"
                    style={{
                      backgroundColor: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[8px] font-bold uppercase tracking-wider">
                        Selection
                      </p>
                      <FaCheckCircle
                        className="text-[9px]"
                        style={{ color: COLORS.green }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {[selectedTrailer.name, selectedAuthority?.short, selectedOperation?.label].map(
                        (item) => (
                          <span
                            key={item}
                            className="px-1.5 py-0.5 rounded text-[8px] font-semibold"
                            style={{
                              backgroundColor: COLORS.white,
                              color: COLORS.text,
                              border: `1px solid ${COLORS.border}`,
                            }}
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* RESULT */}
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <div
                      className="px-3 py-2 flex items-center justify-between"
                      style={{
                        backgroundColor: COLORS.navy,
                      }}
                    >
                      <div>
                        <p
                          className="text-[7px] uppercase tracking-wider font-semibold"
                          style={{ color: "#94A3B8" }}
                        >
                          Estimate
                        </p>
                        <p className="text-[9px] font-bold text-white mt-0.5">
                          {selectedTrailer.name} · {selectedAuthority?.short}
                        </p>
                      </div>
                      <FaChartLine
                        className="text-sm"
                        style={{ color: "#FDBA74" }}
                      />
                    </div>

                    <div
                      className="p-3"
                      style={{ backgroundColor: COLORS.white }}
                    >
                      <div className="grid grid-cols-2 gap-2">

                        <div
                          className="rounded-lg p-2"
                          style={{
                            backgroundColor: COLORS.cream,
                            border: `1px solid ${COLORS.border}`,
                          }}
                        >
                          <p
                            className="text-[8px]"
                            style={{ color: COLORS.muted }}
                          >
                            Rate / mile
                          </p>
                          <p className="mt-0.5 text-xs font-bold">
                            ${selectedTrailer.rateMin.toFixed(1)} - ${selectedTrailer.rateMax.toFixed(1)}
                          </p>
                        </div>

                        <div
                          className="rounded-lg p-2"
                          style={{
                            backgroundColor: COLORS.cream,
                            border: `1px solid ${COLORS.border}`,
                          }}
                        >
                          <p
                            className="text-[8px]"
                            style={{ color: COLORS.muted }}
                          >
                            Weekly gross
                          </p>
                          <p className="mt-0.5 text-xs font-bold">
                            ${formatNumber(selectedTrailer.weeklyMin)} - ${formatNumber(selectedTrailer.weeklyMax)}
                          </p>
                        </div>

                      </div>

                      <div
                        className="flex items-center justify-between py-2 mt-2"
                        style={{
                          borderTop: `1px solid ${COLORS.border}`,
                        }}
                      >
                        <div>
                          <p
                            className="text-[8px]"
                            style={{ color: COLORS.muted }}
                          >
                            Dispatch fee
                          </p>
                          <p
                            className="text-[9px] font-semibold mt-0.5"
                            style={{ color: COLORS.text }}
                          >
                            {selectedTrailer.fee}%
                          </p>
                        </div>
                        <p
                          className="text-sm font-bold"
                          style={{ color: COLORS.orange }}
                        >
                          -${formatNumber(calculations.dispatchFee)}
                        </p>
                      </div>

                      <div
                        className="rounded-lg p-2.5 mt-2 flex items-center justify-between"
                        style={{
                          backgroundColor: COLORS.orangeSoft,
                        }}
                      >
                        <div>
                          <p
                            className="text-[8px] font-semibold"
                            style={{ color: COLORS.orangeDark }}
                          >
                            Net weekly
                          </p>
                          <p
                            className="text-[7px] mt-0.5"
                            style={{ color: COLORS.muted }}
                          >
                            After fee
                          </p>
                        </div>
                        <span className="text-sm font-bold" style={{ color: COLORS.orangeDark }}>
                          ${formatNumber(calculations.netMin)} - ${formatNumber(calculations.netMax)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/Outlet"
                    className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[10px] font-bold text-white transition-all duration-200"
                    style={{
                      backgroundColor: COLORS.orange,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = COLORS.orangeDark;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = COLORS.orange;
                    }}
                  >
                    Start application
                    <FaArrowRight className="text-[8px]" />
                  </Link>

                 

                </div>
              </div>

              {/* RIGHT: SUMMARY SIDEBAR */}
              <div className="hidden lg:block space-y-3">

                <div
                  className="rounded-lg p-3.5"
                  style={{
                    backgroundColor: COLORS.white,
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 2px 8px rgba(15,23,42,0.04)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: COLORS.orangeSoft,
                        color: COLORS.orange,
                      }}
                    >
                      <FaRoute className="text-[10px]" />
                    </div>
                    <div>
                      <p
                        className="text-[8px] font-semibold uppercase tracking-wider"
                        style={{ color: COLORS.orange }}
                      >
                        Selection
                      </p>
                      <h3
                        className="tn-heading text-xs font-bold"
                        style={{ color: COLORS.text }}
                      >
                        Your setup
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div
                      className="flex items-center justify-between pb-1.5"
                      style={{ borderBottom: `1px solid ${COLORS.border}` }}
                    >
                      <span className="text-[8px]" style={{ color: COLORS.muted }}>
                        Equipment
                      </span>
                      <span className="text-[9px] font-bold" style={{ color: COLORS.text }}>
                        {selectedTrailer.name}
                      </span>
                    </div>

                    <div
                      className="flex items-center justify-between pb-1.5"
                      style={{ borderBottom: `1px solid ${COLORS.border}` }}
                    >
                      <span className="text-[8px]" style={{ color: COLORS.muted }}>
                        Authority
                      </span>
                      <span className="text-[9px] font-bold" style={{ color: COLORS.text }}>
                        {selectedAuthority?.short}
                      </span>
                    </div>

                    <div
                      className="flex items-center justify-between pb-1.5"
                      style={{ borderBottom: `1px solid ${COLORS.border}` }}
                    >
                      <span className="text-[8px]" style={{ color: COLORS.muted }}>
                        Operation
                      </span>
                      <span className="text-[9px] font-bold" style={{ color: COLORS.text }}>
                        {selectedOperation?.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[8px]" style={{ color: COLORS.muted }}>
                        Fee
                      </span>
                      <span className="text-[9px] font-bold" style={{ color: COLORS.orange }}>
                        {selectedTrailer.fee}%
                      </span>
                    </div>

                    <div
                      className="flex items-center justify-between pt-1.5 mt-1.5"
                      style={{ borderTop: `2px solid ${COLORS.border}` }}
                    >
                      <span className="text-[8px]" style={{ color: COLORS.muted }}>
                        Weekly gross
                      </span>
                      <span className="text-[9px] font-bold" style={{ color: COLORS.text }}>
                        {formatNumber(selectedTrailer.weeklyMin)} - {formatNumber(selectedTrailer.weeklyMax)}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-lg p-3.5"
                  style={{
                    backgroundColor: COLORS.navy,
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center mb-2.5"
                    style={{
                      backgroundColor: "rgba(232,93,4,0.15)",
                      color: "#FDBA74",
                    }}
                  >
                    <FaShieldAlt className="text-xs" />
                  </div>

                  <h3 className="tn-heading text-sm font-bold text-white">
                    Clear pricing.
                    <br />
                    No hidden fees.
                  </h3>

                  <p
                    className="text-[9px] leading-4 mt-1.5"
                    style={{ color: "#94A3B8" }}
                  >
                    Fee is a percentage of your gross revenue.
                  </p>

                  <div
                    className="flex items-center gap-1 mt-2 text-[8px] font-semibold"
                    style={{ color: "#FDBA74" }}
                  >
                    <FaCheckCircle className="text-[8px]" />
                    Driver-first
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            CONTACT CTA
        ================================================= */}

        <section className="py-4 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div
              className="relative overflow-hidden rounded-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5"
              style={{ backgroundColor: COLORS.navy }}
            >
              <div
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20"
                style={{
                  background: `radial-gradient(circle, ${COLORS.orange}, transparent 65%)`,
                }}
              />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">

                <div>
                  <p
                    className="text-[8px] font-bold uppercase tracking-wider"
                    style={{ color: "#FDBA74" }}
                  >
                    Ready to start?
                  </p>
                  <h2 className="tn-heading text-base sm:text-lg font-bold text-white mt-0.5">
                    Build your profitable route
                  </h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-1.5 shrink-0">
                  <a
                    href={`tel:${COMPANY_PHONE}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-[9px] font-bold transition-all duration-200"
                    style={{
                      backgroundColor: COLORS.orange,
                      color: COLORS.white,
                    }}
                  >
                    <FaPhoneAlt className="text-[8px]" />
                    Call dispatch
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-[9px] font-bold transition-all duration-200"
                    style={{
                      border: "1px solid #334155",
                      color: COLORS.white,
                    }}
                  >
                    Contact us
                    <FaArrowRight className="text-[8px]" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =================================================
            FOOTER NOTE
        ================================================= */}

      

      </div>
    </div>
  );
};

export default Pricing;