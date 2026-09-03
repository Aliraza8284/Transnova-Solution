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
   TRAILER TYPES WITH RANGE-BASED PRICING
   ---------------------------------------------------------
   Every truck has RANGES for:
   - Rate per mile (min - max)
   - Weekly gross (min - max)
   - Dispatch fee percentage
   
   Based on Authority Age:
   1-3 Month: Local
   3-6 Month: Regional  
   6+ Month: OTR / OTR Team
========================================================= */

const trailerTypes = [
  {
    id: "dry-van",
    name: "Dry Van",
    icon: <FaTruck />,
    description: "Enclosed trailer for general freight",
    pricing: {
      "1-3": {
        fee: 5.5,
        rateMin: 2.00,
        rateMax: 3.00,
        weeklyMin: 3000,
        weeklyMax: 5000,
      },
      "3-6": {
        fee: 4.5,
        rateMin: 2.00,
        rateMax: 3.00,
        weeklyMin: 5000,
        weeklyMax: 7000,
      },
      "6-plus": {
        fee: 3.5,
        rateMin: 2.00,
        rateMax: 3.00,
        weeklyMin: 8000,
        weeklyMax: 10000,
      },
    },
  },

  {
    id: "flatbed",
    name: "Flatbed",
    icon: <FaTrailer />,
    description: "Open deck for oversized loads",
    pricing: {
      "1-3": {
        fee: 5.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 3000,
        weeklyMax: 5000,
      },
      "3-6": {
        fee: 4.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 5000,
        weeklyMax: 7000,
      },
      "6-plus": {
        fee: 3.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 8000,
        weeklyMax: 10000,
      },
    },
  },

  {
    id: "reefer",
    name: "Reefer",
    icon: <FaSnowflake />,
    description: "Temperature controlled freight",
    pricing: {
      "1-3": {
        fee: 5.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 4000,
        weeklyMax: 6000,
      },
      "3-6": {
        fee: 4.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 6000,
        weeklyMax: 7000,
      },
      "6-plus": {
        fee: 3.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 9000,
        weeklyMax: 11000,
      },
    },
  },

  {
    id: "step-deck",
    name: "Step Deck",
    icon: <FaRulerVertical />,
    description: "Low profile for tall cargo",
    pricing: {
      "1-3": {
        fee: 5.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 4000,
        weeklyMax: 6000,
      },
      "3-6": {
        fee: 4.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 6000,
        weeklyMax: 7000,
      },
      "6-plus": {
        fee: 3.5,
        rateMin: 2.50,
        rateMax: 3.50,
        weeklyMin: 9000,
        weeklyMax: 11000,
      },
    },
  },

  {
    id: "power-only",
    name: "Power Only",
    icon: <FaBolt />,
    description: "Tractor only service",
    pricing: {
      "1-3": {
        fee: 5.5,
        rateMin: 2.00,
        rateMax: 3.00,
        weeklyMin: 3000,
        weeklyMax: 5000,
      },
      "3-6": {
        fee: 4.5,
        rateMin: 2.00,
        rateMax: 3.00,
        weeklyMin: 5000,
        weeklyMax: 7000,
      },
      "6-plus": {
        fee: 3.5,
        rateMin: 2.00,
        rateMax: 3.00,
        weeklyMin: 8000,
        weeklyMax: 10000,
      },
    },
  },

  {
    id: "box-truck",
    name: "Box Truck",
    icon: <FaBoxes />,
    description: "Local and regional deliveries",
    pricing: {
      "1-3": {
        fee: 5.5,
        rateMin: 1.80,
        rateMax: 2.50,
        weeklyMin: 3000,
        weeklyMax: 5000,
      },
      "3-6": {
        fee: 4.5,
        rateMin: 1.80,
        rateMax: 2.50,
        weeklyMin: 4000,
        weeklyMax: 6000,
      },
      "6-plus": {
        fee: 3.5,
        rateMin: 1.80,
        rateMax: 2.50,
        weeklyMin: 5000,
        weeklyMax: 8000,
      },
    },
  },

  {
    id: "hotshot",
    name: "Hotshot",
    icon: <FaBolt />,
    description: "Expedited freight service",
    pricing: {
      "1-3": {
        fee: 5.5,
        rateMin: 1.80,
        rateMax: 2.50,
        weeklyMin: 3000,
        weeklyMax: 5000,
      },
      "3-6": {
        fee: 4.5,
        rateMin: 1.80,
        rateMax: 2.50,
        weeklyMin: 4000,
        weeklyMax: 6000,
      },
      "6-plus": {
        fee: 3.5,
        rateMin: 1.80,
        rateMax: 2.50,
        weeklyMin: 5000,
        weeklyMax: 8000,
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
    subLabel: "Local",
  },
  {
    id: "3-6",
    label: "3–6 Month",
    subLabel: "Regional",
  },
  {
    id: "6-plus",
    label: "6+ Month",
    subLabel: "OTR",
  },
];

/* =========================================================
   OPERATION OPTIONS (For display only - ranges already include operation type)
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
  isRange = false,
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
    if (isRange) {
      // For range values, format as k (e.g., 6342 -> 6.3k)
      if (val >= 1000) {
        return (val / 1000).toFixed(1) + "k";
      }
      return Number(val).toFixed(0);
    }
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
   RANGE DISPLAY COMPONENT
========================================================= */

const RangeDisplay = ({ min, max, prefix = "$", suffix = "", color = INK }) => {
  const [displayMin, setDisplayMin] = useState(0);
  const [displayMax, setDisplayMax] = useState(0);
  const rangeRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setDisplayMin(min);
          setDisplayMax(max);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (rangeRef.current) {
      observer.observe(rangeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [min, max, hasAnimated]);

  useEffect(() => {
    setHasAnimated(false);
    setDisplayMin(0);
    setDisplayMax(0);
  }, [min, max]);

  const formatValue = (val) => {
    if (val >= 1000) {
      return (val / 1000).toFixed(1) + "k";
    }
    return Number(val).toFixed(2);
  };

  return (
    <span
      ref={rangeRef}
      className="tn-display text-[32px] font-bold"
      style={{
        color,
      }}
    >
      {prefix}
      {formatValue(displayMin || min)}
      {suffix} – {prefix}
      {formatValue(displayMax || max)}
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
      border: `1px solid ${active ? INK : STEEL_LINE}`,
      "--tw-ring-color": SIGNAL,
    }}
    onMouseEnter={(e) => {
      if (!active) {
        e.currentTarget.style.borderColor = SIGNAL;
      }
    }}
    onMouseLeave={(e) => {
      if (!active) {
        e.currentTarget.style.borderColor = STEEL_LINE;
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
  const [authorityAge, setAuthorityAge] = useState("6-plus");
  const [trailerType, setTrailerType] = useState("dry-van");
  const [operationType, setOperationType] = useState("otr");

  /* =======================================================
     CALCULATE PRICING FROM RANGES
  ======================================================= */

  const calculations = useMemo(() => {
    const trailer =
      trailerTypes.find((t) => t.id === trailerType) || trailerTypes[0];

    const pricing = trailer?.pricing?.[authorityAge] || {
      fee: 3.5,
      rateMin: 2.00,
      rateMax: 3.00,
      weeklyMin: 8000,
      weeklyMax: 10000,
    };

    // Calculate average rate for display
    const avgRate = (pricing.rateMin + pricing.rateMax) / 2;
    
    // Calculate average weekly gross
    const avgWeekly = (pricing.weeklyMin + pricing.weeklyMax) / 2;
    
    // Calculate dispatch fee based on average
    const dispatchFee = avgWeekly * (pricing.fee / 100);
    
    // Calculate net weekly
    const netWeekly = avgWeekly - dispatchFee;

    return {
      feePercentage: pricing.fee,
      averageRate: avgRate,
      rateMin: pricing.rateMin,
      rateMax: pricing.rateMax,
      weeklyMin: pricing.weeklyMin,
      weeklyMax: pricing.weeklyMax,
      avgWeekly: avgWeekly,
      dispatchFee: dispatchFee,
      netWeekly: netWeekly,
      selectedTrailer: trailer,
      operation: operationOptions.find((o) => o.id === operationType),
    };
  }, [authorityAge, trailerType, operationType]);

  /* =======================================================
     SELECTED LABELS
  ======================================================= */

  const getSelectedLabels = () => {
    const trailer = trailerTypes.find((t) => t.id === trailerType);
    const authority = authorityOptions.find((a) => a.id === authorityAge);
    const operation = operationOptions.find((o) => o.id === operationType);

    return {
      trailerName: trailer?.name || "Dry Van",
      authorityLabel: authority?.label || "6+ Month",
      authoritySubLabel: authority?.subLabel || "OTR",
      operationLabel: operation?.label || "OTR",
    };
  };

  const selected = getSelectedLabels();

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
    borderBottom: `1px solid ${STEEL_LINE}`,
  }}
>
  <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
    <div className="pt-8 sm:pt-10">
      <div className="flex items-center gap-2 text-[12px]">
        <a href="/" className="transition-colors" style={{ color: STEEL }}>
          Home
        </a>
        <span style={{ color: "#C9C8C1" }}>/</span>
        <span style={{ color: SIGNAL }} className="font-medium">
          Pricing
        </span>
      </div>
    </div>

    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center pt-12 sm:pt-16 pb-12 sm:pb-14">
      {/* Left Side - Text Content */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span
            className="w-6 h-[3px]"
            style={{
              backgroundColor: SIGNAL,
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
          No hidden fees, no fine print that changes after you sign. Pick your
          equipment, authority age and operation below to see your estimated weekly
          earnings.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="relative rounded-[12px] overflow-hidden shadow-lg">
        <img
          src="/truck.png"
          alt="Trans Nova Solutions - Professional trucking services"
          className="w-full h-auto object-cover"
          style={{
            minHeight: "220px",
            maxHeight: "340px",
          }}
          loading="lazy"
        />
        
        {/* Optional: Overlay Badge */}
        <div
          className="absolute bottom-3 left-3 px-3 py-1.5 rounded-[6px] text-[10px] font-bold uppercase tracking-wider"
          style={{
            backgroundColor: INK,
            color: PAPER,
            opacity: 0.85,
          }}
        >
          🚛 Trans Nova Solutions
        </div>
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
                border: `1px solid ${STEEL_LINE}`,
                boxShadow: "0 1px 2px rgba(21,24,29,0.04)",
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
                      Select your equipment and authority age. The estimated range will
                      update automatically.
                    </p>
                  </div>

                  <div
                    className="w-12 h-12 shrink-0 flex items-center justify-center rounded-[8px]"
                    style={{
                      border: `1.5px solid ${SIGNAL}`,
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
                  <SectionHeading label="Authority age" hint="Select one" />

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {authorityOptions.map((option) => {
                      const active = authorityAge === option.id;

                      return (
                        <ControlButton
                          key={option.id}
                          active={active}
                          onClick={() => setAuthorityAge(option.id)}
                        >
                          <div className="flex flex-col items-center">
                            <span>{option.label}</span>
                            <span
                              className="text-[9px] font-normal mt-0.5"
                              style={{
                                color: active ? "#FFFFFF" : STEEL,
                              }}
                            >
                              {option.subLabel}
                            </span>
                          </div>
                        </ControlButton>
                      );
                    })}
                  </div>
                </div>

                {/* =================================================
                    TRAILER TYPE
                ================================================= */}

                <div className="mb-8">
                  <SectionHeading label="Trailer type" hint="Select equipment" />

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                    {trailerTypes.map((trailer) => {
                      const active = trailerType === trailer.id;
                      const pricing = trailer?.pricing?.[authorityAge] || {
                        rateMin: 2.00,
                        rateMax: 3.00,
                      };
                      const avgRate = (pricing.rateMin + pricing.rateMax) / 2;

                      return (
                        <button
                          key={trailer.id}
                          type="button"
                          onClick={() => setTrailerType(trailer.id)}
                          className="group relative rounded-[8px] px-2 py-3 min-h-[100px] flex flex-col items-center justify-center gap-2 transition-all duration-150 focus:outline-none"
                          style={{
                            backgroundColor: active ? SIGNAL_TINT : "#FFFFFF",
                            border: `1px solid ${active ? SIGNAL : STEEL_LINE}`,
                          }}
                          onMouseEnter={(e) => {
                            if (!active) {
                              e.currentTarget.style.borderColor = SIGNAL;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!active) {
                              e.currentTarget.style.borderColor = STEEL_LINE;
                            }
                          }}
                        >
                          <span
                            className="text-lg"
                            style={{
                              color: active ? SIGNAL : "#B7B6AE",
                            }}
                          >
                            {trailer.icon}
                          </span>

                          <span
                            className="text-[10.5px] font-bold text-center leading-tight"
                            style={{
                              color: active ? SIGNAL_DARK : STEEL,
                            }}
                          >
                            {trailer.name}
                          </span>

                          <span
                            className="text-[8.5px] font-bold"
                            style={{
                              color: active ? SIGNAL : "#B7B6AE",
                            }}
                          >
                            ${pricing.rateMin.toFixed(2)}–$
                            {pricing.rateMax.toFixed(2)}/mi
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* =================================================
                    OPERATION TYPE
                ================================================= */}

                <div className="mb-9">
                  <SectionHeading label="Operation type" hint="Select operation" />

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {operationOptions.map((option) => {
                      const active = operationType === option.id;

                      return (
                        <ControlButton
                          key={option.id}
                          active={active}
                          onClick={() => setOperationType(option.id)}
                        >
                          <div className="flex flex-col items-center">
                            <span>{option.label}</span>
                            <span
                              className="text-[9px] font-normal mt-0.5"
                              style={{
                                color: active ? "#FFFFFF" : STEEL,
                              }}
                            >
                              Operation
                            </span>
                          </div>
                        </ControlButton>
                      );
                    })}
                  </div>
                </div>

                {/* =================================================
                    SELECTED CONFIGURATION
                ================================================= */}

                <div
                  className="mb-6 p-4 rounded-[10px]"
                  style={{
                    backgroundColor: PAPER,
                    border: `1px solid ${STEEL_LINE}`,
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
                        backgroundColor: SIGNAL_TINT,
                        color: SIGNAL,
                      }}
                    >
                      {selected.trailerName}
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{
                        backgroundColor: SIGNAL_TINT,
                        color: SIGNAL,
                      }}
                    >
                      {selected.authorityLabel}
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{
                        backgroundColor: SIGNAL_TINT,
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
                    border: `1px solid ${SIGNAL_TINT}`,
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
                        Current rate range
                      </p>

                      <p
                        className="text-[11px] mt-1"
                        style={{
                          color: STEEL,
                        }}
                      >
                        {selected.trailerName} • {selected.authorityLabel} •{" "}
                        {selected.operationLabel}
                      </p>
                    </div>

                    <div
                      className="tn-display text-[30px] font-bold"
                      style={{
                        color: SIGNAL,
                      }}
                    >
                      ${calculations.rateMin.toFixed(2)}–$
                      {calculations.rateMax.toFixed(2)}
                      <span className="text-[13px] ml-1">/ mile</span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    RESULTS
                ================================================= */}

                <div
                  style={{
                    borderTop: `1px solid ${STEEL_LINE}`,
                  }}
                  className="pt-7"
                >
                  <SectionHeading
                    label="Your estimated earnings"
                    hint={`For ${calculations.selectedTrailer?.name || "Dry Van"}`}
                  />

                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 rounded-[10px] overflow-hidden"
                    style={{
                      border: `1px solid ${STEEL_LINE}`,
                    }}
                  >
                    {/* RATE RANGE */}

                    <div
                      className="px-5 py-5"
                      style={{
                        borderRight: `1px solid ${STEEL_LINE}`,
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

                      <RangeDisplay
                        min={calculations.rateMin}
                        max={calculations.rateMax}
                        prefix="$"
                        color={INK}
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
                        borderRight: `1px solid ${STEEL_LINE}`,
                      }}
                    >
                      <p
                        className="text-[11px] font-semibold"
                        style={{
                          color: STEEL,
                        }}
                      >
                        Dispatch fee ({calculations.feePercentage}%)
                      </p>

                      <AnimatedCounter
                        value={calculations.dispatchFee}
                        prefix="$"
                        duration={900}
                        isRange={true}
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

                    {/* WEEKLY GROSS RANGE */}

                    <div
                      className="px-5 py-5"
                      style={{
                        backgroundColor: SIGNAL_TINT,
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

                      <RangeDisplay
                        min={calculations.weeklyMin}
                        max={calculations.weeklyMax}
                        prefix="$"
                        color={SIGNAL_DARK}
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
                        value={calculations.netWeekly}
                        prefix="$"
                        duration={900}
                        isRange={true}
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
                      (e.currentTarget.style.backgroundColor = SIGNAL_DARK)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = SIGNAL)
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

     {/* =================================================
    CONTACT & TRANSPARENT PRICING (Combined)
================================================= */}

{/* =================================================
    TRANSPARENT PRICING
================================================= */}

<section className="pb-14 sm:pb-16">
  <div className="max-w-[900px] mx-auto px-5 text-center">
    <div
      className="w-11 h-11 rounded-[8px] flex items-center justify-center mx-auto mb-5"
      style={{
        border: `1.5px solid ${SIGNAL}`,
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
      At Trans Nova Solutions, we believe our pricing should be simple and transparent.
      There are no hidden fees or surprise charges. The calculator above provides an
      estimate based on your selected equipment, authority age and operation type.
    </p>

    <p
      className="text-[12.5px] sm:text-[13px] leading-6 max-w-[720px] mx-auto mt-3"
      style={{
        color: STEEL,
      }}
    >
      Actual rates and dispatch fees may vary depending on your individual operation,
      freight market conditions, lanes, equipment and service agreement.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
      <a
        href="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-[12px] font-bold text-white transition-colors duration-150"
        style={{
          backgroundColor: SIGNAL,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = SIGNAL_DARK)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = SIGNAL)
        }
      >
        Contact us today
        <FaArrowRight className="text-[10px]" />
      </a>

      <a
        href="/services"
        className="inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-[12px] font-bold transition-colors duration-150"
        style={{
          border: `1px solid ${STEEL_LINE}`,
          color: INK,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = SIGNAL)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = STEEL_LINE)
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