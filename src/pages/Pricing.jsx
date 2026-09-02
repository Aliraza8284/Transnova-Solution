import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  FaTruck,
  FaPhoneAlt,
  FaArrowRight,
  FaSnowflake,
  FaRulerVertical,
  FaTrailer,
  FaBoxes,
  FaBolt,
  FaCheckCircle,
  FaCalculator,
} from "react-icons/fa";

/* =========================================================
   TRANS NOVA COMPANY INFORMATION
========================================================= */

const COMPANY_NAME = "Trans Nova Solutions";
const COMPANY_PHONE = "+1 (407) 205-9059";
const COMPANY_EMAIL = "business@transnova.solutions";
const COMPANY_ADDRESS =
  "1209 Mountain Road PL NE STE 12783, Albuquerque, NM 87110, USA";

/* =========================================================
   DESIGN TOKENS
========================================================= */

const INK = "#15181D";
const PAPER = "#FAF9F7";
const STEEL = "#5B5F66";
const STEEL_LINE = "#E2E1DC";
const SIGNAL = "#D9480F";
const SIGNAL_DARK = "#B33D0C";
const SIGNAL_TINT = "#FBE7DB";

/* =========================================================
   TRAILER TYPES
   ---------------------------------------------------------
   IMPORTANT:
   Every truck has its OWN price for:
   1-3 Month
   3-6 Month
   6+ Month

   And inside every authority period:
   Local
   Regional
   OTR
   OTR Team
========================================================= */

const trailerTypes = [
  {
    id: "dry-van",
    name: "Dry Van",
    icon: <FaTruck />,
    weeklyMiles: 2500,
    fee: 6,
    description: "Enclosed trailer for general freight",

    prices: {
      "1-3": {
        local: 1.85,
        regional: 2.10,
        otr: 2.25,
        "otr-team": 2.55,
      },
      "3-6": {
        local: 1.95,
        regional: 2.20,
        otr: 2.35,
        "otr-team": 2.70,
      },
      "6-plus": {
        local: 2.05,
        regional: 2.25,
        otr: 2.45,
        "otr-team": 2.85,
      },
    },
  },

  {
    id: "flatbed",
    name: "Flatbed",
    icon: <FaTrailer />,
    weeklyMiles: 2300,
    fee: 7,
    description: "Open deck for oversized loads",

    prices: {
      "1-3": {
        local: 2.05,
        regional: 2.30,
        otr: 2.50,
        "otr-team": 2.80,
      },
      "3-6": {
        local: 2.15,
        regional: 2.40,
        otr: 2.65,
        "otr-team": 2.95,
      },
      "6-plus": {
        local: 2.25,
        regional: 2.50,
        otr: 2.80,
        "otr-team": 3.15,
      },
    },
  },

  {
    id: "reefer",
    name: "Reefer",
    icon: <FaSnowflake />,
    weeklyMiles: 2400,
    fee: 7,
    description: "Temperature controlled freight",

    prices: {
      "1-3": {
        local: 2.10,
        regional: 2.35,
        otr: 2.55,
        "otr-team": 2.90,
      },
      "3-6": {
        local: 2.20,
        regional: 2.45,
        otr: 2.70,
        "otr-team": 3.05,
      },
      "6-plus": {
        local: 2.30,
        regional: 2.55,
        otr: 2.85,
        "otr-team": 3.20,
      },
    },
  },

  {
    id: "step-deck",
    name: "Step Deck",
    icon: <FaRulerVertical />,
    weeklyMiles: 2200,
    fee: 7,
    description: "Low profile for tall cargo",

    prices: {
      "1-3": {
        local: 2.15,
        regional: 2.40,
        otr: 2.60,
        "otr-team": 2.95,
      },
      "3-6": {
        local: 2.25,
        regional: 2.50,
        otr: 2.75,
        "otr-team": 3.10,
      },
      "6-plus": {
        local: 2.35,
        regional: 2.60,
        otr: 2.90,
        "otr-team": 3.25,
      },
    },
  },

  {
    id: "power-only",
    name: "Power Only",
    icon: <FaBolt />,
    weeklyMiles: 2500,
    fee: 6,
    description: "Tractor only service",

    prices: {
      "1-3": {
        local: 1.75,
        regional: 2.00,
        otr: 2.15,
        "otr-team": 2.45,
      },
      "3-6": {
        local: 1.85,
        regional: 2.10,
        otr: 2.25,
        "otr-team": 2.60,
      },
      "6-plus": {
        local: 1.95,
        regional: 2.20,
        otr: 2.35,
        "otr-team": 2.75,
      },
    },
  },

  {
    id: "box-truck",
    name: "Box Truck",
    icon: <FaBoxes />,
    weeklyMiles: 1800,
    fee: 7,
    description: "Local and regional deliveries",

    prices: {
      "1-3": {
        local: 1.55,
        regional: 1.75,
        otr: 1.90,
        "otr-team": 2.15,
      },
      "3-6": {
        local: 1.65,
        regional: 1.85,
        otr: 2.00,
        "otr-team": 2.30,
      },
      "6-plus": {
        local: 1.75,
        regional: 1.95,
        otr: 2.10,
        "otr-team": 2.45,
      },
    },
  },

  {
    id: "hotshot",
    name: "Hotshot",
    icon: <FaBolt />,
    weeklyMiles: 2100,
    fee: 7,
    description: "Expedited freight service",

    prices: {
      "1-3": {
        local: 1.90,
        regional: 2.15,
        otr: 2.35,
        "otr-team": 2.65,
      },
      "3-6": {
        local: 2.00,
        regional: 2.25,
        otr: 2.50,
        "otr-team": 2.80,
      },
      "6-plus": {
        local: 2.10,
        regional: 2.35,
        otr: 2.65,
        "otr-team": 2.95,
      },
    },
  },
];

/* =========================================================
   AUTHORITY OPTIONS
========================================================= */

const authorityOptions = [
  {
    id: "1-3",
    label: "1–3 Month",
  },
  {
    id: "3-6",
    label: "3–6 Month",
  },
  {
    id: "6-plus",
    label: "6+ Month",
  },
];

/* =========================================================
   OPERATION OPTIONS
========================================================= */

const operationOptions = [
  {
    id: "local",
    label: "Local",
  },
  {
    id: "regional",
    label: "Regional",
  },
  {
    id: "otr",
    label: "OTR",
  },
  {
    id: "otr-team",
    label: "OTR Team",
  },
];

/* =========================================================
   ANIMATED COUNTER
========================================================= */

const AnimatedCounter = ({
  value,
  prefix = "$",
  suffix = "",
  duration = 900,
  color = INK,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = null;
          const startValue = 0;
          const endValue = value;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min(
              (timestamp - startTime) / duration,
              1
            );

            const easedProgress =
              1 - Math.pow(1 - progress, 3);

            const currentValue =
              startValue +
              (endValue - startValue) * easedProgress;

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, hasAnimated]);

  // Reset animation when selected price changes
  useEffect(() => {
    setHasAnimated(false);
    setCount(0);
  }, [value]);

  const formatValue = (val) => {
    return Number(val).toFixed(2);
  };

  return (
    <span
      ref={countRef}
      className="tn-display text-[32px] font-bold"
      style={{
        color,
      }}
    >
      {prefix}
      {formatValue(count)}
      {suffix}
    </span>
  );
};

/* =========================================================
   CONTROL BUTTON
========================================================= */

const ControlButton = ({
  active,
  onClick,
  children,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="relative rounded-[6px] px-3 py-3 text-[12px] font-semibold tracking-[0.1px] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    style={{
      backgroundColor: active ? INK : "#FFFFFF",
      color: active ? "#FFFFFF" : STEEL,
      border: `1px solid ${
        active ? INK : STEEL_LINE
      }`,
      "--tw-ring-color": SIGNAL,
    }}
    onMouseEnter={(e) => {
      if (!active) {
        e.currentTarget.style.borderColor = SIGNAL;
      }
    }}
    onMouseLeave={(e) => {
      if (!active) {
        e.currentTarget.style.borderColor =
          STEEL_LINE;
      }
    }}
  >
    {children}

    {active && (
      <span
        className="absolute left-0 bottom-0 h-[3px] w-full rounded-b-[6px]"
        style={{
          backgroundColor: SIGNAL,
        }}
      />
    )}
  </button>
);

/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = ({
  label,
  hint,
}) => (
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-2">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: SIGNAL,
        }}
      />

      <h3
        className="text-[13px] font-bold"
        style={{
          color: INK,
        }}
      >
        {label}
      </h3>
    </div>

    <span
      className="text-[10.5px]"
      style={{
        color: "#9B9B94",
      }}
    >
      {hint}
    </span>
  </div>
);

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Pricing = () => {
  const [authorityAge, setAuthorityAge] =
    useState("6-plus");

  const [trailerType, setTrailerType] =
    useState("dry-van");

  const [operationType, setOperationType] =
    useState("otr");

  /* =======================================================
     CALCULATE PRICE
     -------------------------------------------------------
     NO MULTIPLIERS NOW.

     We directly pick:

     truck
       ↓
     authority
       ↓
     operation
       ↓
     exact price
  ======================================================= */

  const calculations = useMemo(() => {
    const trailer =
      trailerTypes.find(
        (t) => t.id === trailerType
      ) || trailerTypes[0];

    const authority =
      authorityOptions.find(
        (a) => a.id === authorityAge
      ) || authorityOptions[2];

    const operation =
      operationOptions.find(
        (o) => o.id === operationType
      ) || operationOptions[2];

    // Get exact price from trailer.prices[authorityAge][operationType]
    const exactRate =
      trailer?.prices?.[authorityAge]?.[
        operationType
      ] ?? 0;

    const weeklyGross =
      exactRate * trailer.weeklyMiles;

    const dispatchFee =
      weeklyGross * (trailer.fee / 100);

    const netWeekly =
      weeklyGross - dispatchFee;

    return {
      feePercentage: trailer.fee,
      averageRate: exactRate,
      weeklyGross,
      dispatchFee,
      netWeekly,
      selectedTrailer: trailer,
      authority,
      operation,
    };
  }, [
    authorityAge,
    trailerType,
    operationType,
  ]);

  /* =======================================================
     SELECTED LABELS
  ======================================================= */

  const getSelectedLabels = () => {
    const trailer =
      trailerTypes.find(
        (t) => t.id === trailerType
      );

    const authority =
      authorityOptions.find(
        (a) => a.id === authorityAge
      );

    const operation =
      operationOptions.find(
        (o) => o.id === operationType
      );

    return {
      trailerName:
        trailer?.name || "Dry Van",
      authorityLabel:
        authority?.label || "6+ Month",
      operationLabel:
        operation?.label || "OTR",
    };
  };

  const selected =
    getSelectedLabels();

  return (
    <div
      className="min-h-screen pt-[72px]"
      style={{
        backgroundColor: PAPER,
        color: INK,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap');

        .tn-display {
          font-family: 'Roboto', Arial, sans-serif;
        }

        .tn-body {
          font-family: 'Roboto', Arial, sans-serif;
        }
      `}</style>

      <div className="tn-body">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="bg-white"
          style={{
            borderBottom:
              `1px solid ${STEEL_LINE}`,
          }}
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">

            <div className="pt-8 sm:pt-10">
              <div className="flex items-center gap-2 text-[12px]">

                <a
                  href="/"
                  className="transition-colors"
                  style={{
                    color: STEEL,
                  }}
                >
                  Home
                </a>

                <span
                  style={{
                    color: "#C9C8C1",
                  }}
                >
                  /
                </span>

                <span
                  style={{
                    color: SIGNAL,
                  }}
                  className="font-medium"
                >
                  Pricing
                </span>

              </div>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end pt-12 sm:pt-16 pb-12 sm:pb-14">

              <div>

                <div className="flex items-center gap-2 mb-4">

                  <span
                    className="w-6 h-[3px]"
                    style={{
                      backgroundColor:
                        SIGNAL,
                    }}
                  />

                  <span
                    className="text-[12px] font-semibold"
                    style={{
                      color: STEEL,
                    }}
                  >
                    Rates, fees, and what you take home
                  </span>

                </div>

                <h1 className="tn-display text-[44px] sm:text-[58px] md:text-[66px] font-bold leading-[0.98] tracking-tight">
                  Pricing built for
                  <br />
                  the driver's seat.
                </h1>

                <p
                  className="text-[14.5px] sm:text-[15px] leading-7 mt-6 max-w-[520px]"
                  style={{
                    color: STEEL,
                  }}
                >
                  No hidden fees, no fine print that
                  changes after you sign. Pick your
                  equipment, authority age and operation
                  below to see your estimated weekly
                  earnings.
                </p>

              </div>

              <div
                className="grid grid-cols-3 gap-px overflow-hidden rounded-[10px]"
                style={{
                  backgroundColor:
                    STEEL_LINE,
                  border:
                    `1px solid ${STEEL_LINE}`,
                }}
              >

                {[
                  {
                    label: "Equipment types",
                    value: "7",
                  },
                  {
                    label: "Avg. dispatch fee",
                    value: "6–7%",
                  },
                  {
                    label: "Contracts",
                    value: "0",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white px-4 py-5 text-center"
                  >

                    <div
                      className="tn-display text-[30px] font-bold"
                      style={{
                        color: INK,
                      }}
                    >
                      {stat.value}
                    </div>

                    <div
                      className="text-[10.5px] mt-1"
                      style={{
                        color: STEEL,
                      }}
                    >
                      {stat.label}
                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            CALCULATOR
        ================================================= */}

        <section className="py-10 sm:py-14 lg:py-16">

          <div className="max-w-[1050px] mx-auto px-5 sm:px-6">

            <div
              className="rounded-[14px] overflow-hidden bg-white"
              style={{
                border:
                  `1px solid ${STEEL_LINE}`,
                boxShadow:
                  "0 1px 2px rgba(21,24,29,0.04)",
              }}
            >

              {/* CALCULATOR HEADER */}

              <div
                className="px-6 sm:px-8 lg:px-10 py-7 sm:py-8"
                style={{
                  backgroundColor: INK,
                }}
              >

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                  <div>

                    <p
                      className="text-[11px] font-semibold mb-2"
                      style={{
                        color: SIGNAL,
                      }}
                    >
                      Earnings estimator
                    </p>

                    <h2 className="tn-display text-[30px] sm:text-[36px] font-bold text-white leading-none">
                      Dispatch calculator
                    </h2>

                    <p
                      className="text-[12.5px] sm:text-[13px] mt-2 max-w-[420px]"
                      style={{
                        color: "#9CA0A8",
                      }}
                    >
                      Select your equipment, authority
                      age and operation type. The exact
                      rate will update automatically.
                    </p>

                  </div>

                  <div
                    className="w-12 h-12 shrink-0 flex items-center justify-center rounded-[8px]"
                    style={{
                      border:
                        `1.5px solid ${SIGNAL}`,
                      color: SIGNAL,
                    }}
                  >
                    <FaCalculator className="text-lg" />
                  </div>

                </div>

              </div>

              <div className="p-5 sm:p-7 lg:p-10">

                {/* =================================================
                    AUTHORITY AGE
                ================================================= */}

                <div className="mb-8">

                  <SectionHeading
                    label="Authority age"
                    hint="Select one"
                  />

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">

                    {authorityOptions.map(
                      (option) => {

                        const active =
                          authorityAge ===
                          option.id;

                        return (
                          <ControlButton
                            key={option.id}
                            active={active}
                            onClick={() =>
                              setAuthorityAge(
                                option.id
                              )
                            }
                          >
                            <div className="flex flex-col items-center">
                              <span>
                                {option.label}
                              </span>

                              <span
                                className="text-[9px] font-normal mt-0.5"
                                style={{
                                  color: active
                                    ? "#FFFFFF"
                                    : STEEL,
                                }}
                              >
                                Custom rate
                              </span>
                            </div>
                          </ControlButton>
                        );
                      }
                    )}

                  </div>

                </div>

                {/* =================================================
                    TRAILER TYPE
                ================================================= */}

                <div className="mb-8">

                  <SectionHeading
                    label="Trailer type"
                    hint="Select equipment"
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">

                    {trailerTypes.map(
                      (trailer) => {

                        const active =
                          trailerType ===
                          trailer.id;

                        // Show currently selected rate on the truck card
                        const currentRate =
                          trailer?.prices?.[
                            authorityAge
                          ]?.[operationType] ??
                          0;

                        return (
                          <button
                            key={trailer.id}
                            type="button"
                            onClick={() =>
                              setTrailerType(
                                trailer.id
                              )
                            }
                            className="group relative rounded-[8px] px-2 py-3 min-h-[100px] flex flex-col items-center justify-center gap-2 transition-all duration-150 focus:outline-none"
                            style={{
                              backgroundColor:
                                active
                                  ? SIGNAL_TINT
                                  : "#FFFFFF",
                              border:
                                `1px solid ${
                                  active
                                    ? SIGNAL
                                    : STEEL_LINE
                                }`,
                            }}
                            onMouseEnter={(e) => {
                              if (!active) {
                                e.currentTarget.style.borderColor =
                                  SIGNAL;
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!active) {
                                e.currentTarget.style.borderColor =
                                  STEEL_LINE;
                              }
                            }}
                          >

                            <span
                              className="text-lg"
                              style={{
                                color: active
                                  ? SIGNAL
                                  : "#B7B6AE",
                              }}
                            >
                              {trailer.icon}
                            </span>

                            <span
                              className="text-[10.5px] font-bold text-center leading-tight"
                              style={{
                                color: active
                                  ? SIGNAL_DARK
                                  : STEEL,
                              }}
                            >
                              {trailer.name}
                            </span>

                            <span
                              className="text-[8.5px] font-bold"
                              style={{
                                color: active
                                  ? SIGNAL
                                  : "#B7B6AE",
                              }}
                            >
                              ${currentRate.toFixed(2)}
                              /mi
                            </span>

                          </button>
                        );
                      }
                    )}

                  </div>

                </div>

                {/* =================================================
                    OPERATION TYPE
                ================================================= */}

                <div className="mb-9">

                  <SectionHeading
                    label="Operation type"
                    hint="Select operation"
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">

                    {operationOptions.map(
                      (option) => {

                        const active =
                          operationType ===
                          option.id;

                        return (
                          <ControlButton
                            key={option.id}
                            active={active}
                            onClick={() =>
                              setOperationType(
                                option.id
                              )
                            }
                          >

                            <div className="flex flex-col items-center">

                              <span>
                                {option.label}
                              </span>

                              <span
                                className="text-[9px] font-normal mt-0.5"
                                style={{
                                  color: active
                                    ? "#FFFFFF"
                                    : STEEL,
                                }}
                              >
                                Custom rate
                              </span>

                            </div>

                          </ControlButton>
                        );
                      }
                    )}

                  </div>

                </div>

                {/* =================================================
                    SELECTED CONFIGURATION
                ================================================= */}

                <div
                  className="mb-6 p-4 rounded-[10px]"
                  style={{
                    backgroundColor: PAPER,
                    border:
                      `1px solid ${STEEL_LINE}`,
                  }}
                >

                  <div className="flex flex-wrap items-center gap-3">

                    <span
                      className="text-[11px] font-semibold"
                      style={{
                        color: STEEL,
                      }}
                    >
                      Selected:
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{
                        backgroundColor:
                          SIGNAL_TINT,
                        color: SIGNAL,
                      }}
                    >
                      {selected.trailerName}
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{
                        backgroundColor:
                          SIGNAL_TINT,
                        color: SIGNAL,
                      }}
                    >
                      {selected.authorityLabel}
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{
                        backgroundColor:
                          SIGNAL_TINT,
                        color: SIGNAL,
                      }}
                    >
                      {selected.operationLabel}
                    </span>

                  </div>

                </div>

                {/* =================================================
                    CURRENT RATE DISPLAY
                ================================================= */}

                <div
                  className="mb-6 rounded-[10px] px-5 py-4"
                  style={{
                    backgroundColor: "#FFF8F4",
                    border:
                      `1px solid ${SIGNAL_TINT}`,
                  }}
                >

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

                    <div>

                      <p
                        className="text-[10px] uppercase tracking-[0.08em] font-bold"
                        style={{
                          color: SIGNAL,
                        }}
                      >
                        Current selected rate
                      </p>

                      <p
                        className="text-[11px] mt-1"
                        style={{
                          color: STEEL,
                        }}
                      >
                        {selected.trailerName} •{" "}
                        {selected.authorityLabel} •{" "}
                        {selected.operationLabel}
                      </p>

                    </div>

                    <div
                      className="tn-display text-[30px] font-bold"
                      style={{
                        color: SIGNAL,
                      }}
                    >
                      $
                      {calculations.averageRate.toFixed(
                        2
                      )}
                      <span className="text-[13px] ml-1">
                        / mile
                      </span>
                    </div>

                  </div>

                </div>

                {/* =================================================
                    RESULTS
                ================================================= */}

                <div
                  style={{
                    borderTop:
                      `1px solid ${STEEL_LINE}`,
                  }}
                  className="pt-7"
                >

                  <SectionHeading
                    label="Your estimated earnings"
                    hint={`For ${
                      calculations
                        .selectedTrailer
                        ?.name ||
                      "Dry Van"
                    }`}
                  />

                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 rounded-[10px] overflow-hidden"
                    style={{
                      border:
                        `1px solid ${STEEL_LINE}`,
                    }}
                  >

                    {/* RATE */}

                    <div
                      className="px-5 py-5"
                      style={{
                        borderRight:
                          `1px solid ${STEEL_LINE}`,
                      }}
                    >

                      <p
                        className="text-[11px] font-semibold"
                        style={{
                          color: STEEL,
                        }}
                      >
                        Rate per mile
                      </p>

                      <AnimatedCounter
                        value={
                          calculations.averageRate
                        }
                        prefix="$"
                        duration={900}
                      />

                      <p
                        className="text-[10.5px] mt-1"
                        style={{
                          color: "#9B9B94",
                        }}
                      >
                        Based on your selections
                      </p>

                    </div>

                    {/* DISPATCH FEE */}

                    <div
                      className="px-5 py-5"
                      style={{
                        borderRight:
                          `1px solid ${STEEL_LINE}`,
                      }}
                    >

                      <p
                        className="text-[11px] font-semibold"
                        style={{
                          color: STEEL,
                        }}
                      >
                        Dispatch fee (
                        {
                          calculations.feePercentage
                        }
                        %)
                      </p>

                      <AnimatedCounter
                        value={
                          calculations.dispatchFee
                        }
                        prefix="$"
                        duration={900}
                      />

                      <p
                        className="text-[10.5px] mt-1"
                        style={{
                          color: "#9B9B94",
                        }}
                      >
                        Estimated weekly fee
                      </p>

                    </div>

                    {/* WEEKLY GROSS */}

                    <div
                      className="px-5 py-5"
                      style={{
                        backgroundColor:
                          SIGNAL_TINT,
                      }}
                    >

                      <p
                        className="text-[11px] font-semibold"
                        style={{
                          color: SIGNAL_DARK,
                        }}
                      >
                        Weekly gross
                      </p>

                      <AnimatedCounter
                        value={
                          calculations.weeklyGross
                        }
                        prefix="$"
                        duration={900}
                      />

                      <p
                        className="text-[10.5px] mt-1"
                        style={{
                          color: "#B87A55",
                        }}
                      >
                        Before operating expenses
                      </p>

                    </div>

                  </div>

                  {/* NET WEEKLY */}

                  <div
                    className="mt-4 rounded-[10px] px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    style={{
                      backgroundColor: INK,
                    }}
                  >

                    <div className="flex items-center gap-2">

                      <FaCheckCircle
                        className="text-sm"
                        style={{
                          color: SIGNAL,
                        }}
                      />

                      <span className="text-[12px] font-semibold text-white">
                        Net weekly, after dispatch fee
                      </span>

                    </div>

                    <div className="text-white">

                      <AnimatedCounter
                        value={
                          calculations.netWeekly
                        }
                        prefix="$"
                        duration={900}
                      />

                    </div>

                  </div>

                </div>

                {/* =================================================
                    GET STARTED
                ================================================= */}

                <div className="mt-7">

                  <a
                    href="/Outlet"
                    className="w-full flex items-center justify-center gap-2 rounded-[8px] px-6 py-4 text-[13px] font-bold text-white transition-colors duration-150"
                    style={{
                      backgroundColor: SIGNAL,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        SIGNAL_DARK)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        SIGNAL)
                    }
                  >
                    Get started

                    <FaArrowRight className="text-[11px]" />

                  </a>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            CONTACT CTA
        ================================================= */}

        <section className="px-5 sm:px-6 pb-12 sm:pb-16">

          <div
            className="max-w-[1050px] mx-auto rounded-[14px] px-6 sm:px-10 lg:px-14 py-9 sm:py-11 relative overflow-hidden"
            style={{
              backgroundColor: INK,
            }}
          >

            <div
              className="absolute right-0 top-0 h-full w-[6px]"
              style={{
                backgroundColor: SIGNAL,
              }}
            />

            <div className="relative z-10">

              <div className="grid lg:grid-cols-[1fr_auto] items-center gap-7">

                <div>

                  <div className="flex items-center gap-2 mb-3">

                    <FaTruck
                      className="text-[13px]"
                      style={{
                        color: SIGNAL,
                      }}
                    />

                    <span
                      className="text-[11.5px] font-semibold"
                      style={{
                        color: SIGNAL,
                      }}
                    >
                      Need assistance?
                    </span>

                  </div>

                  <h2 className="tn-display text-[28px] sm:text-[34px] font-bold text-white leading-tight">
                    Ready to get started?
                  </h2>

                  <p
                    className="text-[12.5px] sm:text-[13px] leading-6 mt-3 max-w-[600px]"
                    style={{
                      color: "#9CA0A8",
                    }}
                  >
                    Have questions about our pricing or
                    services? Reach out and we'll walk you
                    through everything and help you choose
                    the right solution for your operation.
                  </p>

                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-2">

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-[11.5px] font-bold text-white transition-colors duration-150"
                    style={{
                      backgroundColor: SIGNAL,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        SIGNAL_DARK)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        SIGNAL)
                    }
                  >
                    Contact us
                    <FaArrowRight className="text-[9px]" />
                  </a>

                  <a
                    href={`tel:${COMPANY_PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-[11.5px] font-bold text-white transition-colors duration-150"
                    style={{
                      border:
                        "1px solid rgba(255,255,255,0.18)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor =
                        SIGNAL)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.18)")
                    }
                  >

                    <FaPhoneAlt className="text-[9px]" />

                    {COMPANY_PHONE}

                  </a>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            TRANSPARENT PRICING
        ================================================= */}

        <section className="pb-14 sm:pb-16">

          <div className="max-w-[900px] mx-auto px-5 text-center">

            <div
              className="w-11 h-11 rounded-[8px] flex items-center justify-center mx-auto mb-5"
              style={{
                border:
                  `1.5px solid ${SIGNAL}`,
                color: SIGNAL,
              }}
            >
              <FaCheckCircle />
            </div>

            <h2
              className="tn-display text-[26px] sm:text-[32px] font-bold"
              style={{
                color: INK,
              }}
            >
              Transparent pricing. No hidden fees.
            </h2>

            <p
              className="text-[12.5px] sm:text-[13px] leading-6 max-w-[720px] mx-auto mt-4"
              style={{
                color: STEEL,
              }}
            >
              At Trans Nova Solutions, we believe our              pricing should be simple and transparent.
              There are no hidden fees or surprise
              charges. The calculator above provides an
              estimate based on your selected equipment,
              authority age and operation type.
            </p>

            <p
              className="text-[12.5px] sm:text-[13px] leading-6 max-w-[720px] mx-auto mt-3"
              style={{
                color: STEEL,
              }}
            >
              Actual rates and dispatch fees may vary
              depending on your individual operation,
              freight market conditions, lanes, equipment
              and service agreement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-[12px] font-bold text-white transition-colors duration-150"
                style={{
                  backgroundColor: SIGNAL,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    SIGNAL_DARK)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    SIGNAL)
                }
              >
                Contact us today

                <FaArrowRight className="text-[10px]" />

              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-[12px] font-bold transition-colors duration-150"
                style={{
                  border:
                    `1px solid ${STEEL_LINE}`,
                  color: INK,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    SIGNAL)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    STEEL_LINE)
                }
              >
                All services
              </a>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default Pricing;