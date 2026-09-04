import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useCopyProtection from "../Hooks/useCopyProtection";
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
   TRUCK TYPES WITH CORRECT IMAGE PATHS
========================================================= */

const truckTypes = [
  {
    name: "Dry Van",
    category: "Enclosed Freight",
    badge: "Most Popular",
    icon: <FaTruck />,
    image: "/dry.webp",
    description:
      "A dependable enclosed trailer solution for general freight that needs protection from weather and road conditions. Ideal for retail goods, electronics, and packaged products.",
    freight: [
      "General Merchandise",
      "Retail & Consumer Goods",
      "Electronics",
      "Packaged Foods",
      "Building Supplies",
      "Auto Parts",
    ],
  },

  {
    name: "Flatbed",
    category: "Open Deck Freight",
    badge: "Heavy Haul",
    icon: <FaTrailer />,
    image: "/flat.webp",
    description:
      "Open-deck transportation for oversized, heavy and irregular freight that requires flexible loading access. Perfect for construction materials and industrial equipment.",
    freight: [
      "Steel & Lumber",
      "Construction Equipment",
      "Heavy Machinery",
      "Wind Energy Components",
      "Pipes & Coils",
      "Industrial Equipment",
    ],
  },

  {
    name: "Reefer",
    category: "Refrigerated Freight",
    badge: "Temperature Control",
    icon: <FaSnowflake />,
    image: "/reefer.webp",
    description:
      "Temperature-controlled transportation designed to keep sensitive and perishable freight within the required range. Essential for food, pharmaceuticals, and floral products.",
    freight: [
      "Fresh Produce",
      "Frozen Foods",
      "Dairy & Meat",
      "Pharmaceuticals",
      "Floral Products",
      "Beverages",
    ],
  },

  {
    name: "Step Deck",
    category: "Low-Profile Deck",
    badge: "Tall Cargo",
    icon: <FaRulerVertical />,
    image: "/Alis.jpg",
    description:
      "A lower deck configuration that provides additional clearance for taller machinery and oversized cargo. Ideal for agricultural equipment and modular buildings.",
    freight: [
      "Tall Machinery",
      "Agricultural Equipment",
      "Modular Buildings",
      "Large Vehicles",
      "Industrial Equipment",
      "Cranes & Booms",
    ],
  },

  {
    name: "Power Only",
    category: "Tractor-Only Service",
    badge: "Drop & Hook",
    icon: <FaBolt />,
    image: "/power.webp",
    description:
      "Flexible tractor-only transportation for customers and carriers who already have trailers or pre-loaded freight. Efficient for drop trailer programs and intermodal operations.",
    freight: [
      "Drop Trailer Programs",
      "Trailer Pool Operations",
      "Intermodal Containers",
      "Pre-Loaded Freight",
      "Dedicated Lane Runs",
      "Cross-Docking",
    ],
  },

  {
    name: "Box Truck",
    category: "Light & Local Loads",
    badge: "City Freight",
    icon: <FaBoxes />,
    image: "/Box truck.jpg",
    description:
      "A practical option for lighter freight, local deliveries and regional transportation in metropolitan areas. Perfect for retail deliveries and palletized goods.",
    freight: [
      "Local Deliveries",
      "Regional Freight",
      "Retail Deliveries",
      "Palletized Goods",
      "Liftgate Freight",
      "Small Commercial Loads",
    ],
  },

  {
    name: "Hotshot",
    category: "Expedited Freight",
    badge: "Fast Turnaround",
    icon: <FaBolt />,
    image: "/All.jpg",
    description:
      "Fast transportation for urgent and partial loads where speed, flexibility and regional coverage matter. Ideal for time-critical shipments and construction materials.",
    freight: [
      "Expedited Freight",
      "Time-Critical Loads",
      "Partial Loads",
      "Regional Freight",
      "Construction Materials",
      "Equipment Transport",
    ],
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const TruckTypes = () => {
  // ==========================================
  // COPY PROTECTION - ONE LINE
  // ==========================================
  useCopyProtection();

  return (
    <div
      className="min-h-screen bg-[#f8f9fa] text-[#171717] pt-[72px]"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        WebkitTouchCallout: "none",
      }}
    >
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
        <div className="pt-8 sm:pt-10">
  <div className="flex items-center gap-2 text-[12px]">
    <Link
      to="/"
      className="text-gray-500 hover:text-[#f15a24] transition"
    >
      Home
    </Link>

    <span className="text-gray-300">/</span>

    <span className="text-[#f15a24] font-medium">Truck Types</span>
  </div>
</div>

          {/* Hero Content */}
          <div className="max-w-[820px] mx-auto text-center pt-12 sm:pt-16 pb-12 sm:pb-14">
            <div className="inline-flex items-center gap-2 bg-[#fff3ee] text-[#f15a24] px-4 py-2 rounded-full text-[11px] sm:text-[12px] font-semibold mb-5">
              <FaTruck className="text-sm" />
              Comprehensive Fleet Solutions
            </div>

            <h1 className="text-[36px] sm:text-[46px] md:text-[54px] font-extrabold tracking-tight leading-[1.08]">
              Choose the Right Truck
              <br />
              <span className="text-[#f15a24]">for Every Shipment</span>
            </h1>

            <div className="w-14 h-[3px] bg-[#f15a24] mx-auto mt-6 mb-6 rounded-full"></div>

            <p className="text-[14px] sm:text-[15px] leading-7 text-gray-600 max-w-[720px] mx-auto">
              Trans Nova Solutions provides access to a diverse fleet of
              equipment designed to match your specific freight requirements.
              From standard dry vans to specialized temperature-controlled
              units, we ensure your cargo reaches its destination efficiently
              and safely.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUCK CARDS
          95% WIDTH
          EVEN: IMAGE LEFT / TEXT RIGHT
          ODD: TEXT LEFT / IMAGE RIGHT
          HEIGHT INCREASED
      ====================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#1A1A1A]">
              Our <span className="text-[#f15a24]">Equipment</span> Types
            </h2>

            <p className="text-gray-500 text-[13px] sm:text-[14px] mt-2">
              Select the right truck for your freight needs
            </p>
          </div>

          {/* =================================================
              95% WIDTH CONTAINER
          ================================================== */}

          <div className="w-[100%] mx-auto">
            <div className="space-y-8 lg:space-y-9">
              {truckTypes.map((truck, index) => {
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={index}
                    className="
                      group
                      bg-white
                      rounded-2xl
                      border
                      border-gray-200
                      overflow-hidden
                      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                      hover:shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    {/* =================================================
                        CARD MAIN ROW - HEIGHT INCREASED
                    ================================================== */}

                    <div
                      className={`
                        flex
                        flex-col
                        lg:flex-row
                        ${!isEven ? "lg:flex-row-reverse" : ""}
                        h-auto
                        lg:h-[500px]
                      `}
                    >
                      {/* =================================================
                          IMAGE - HEIGHT INCREASED WITH PROTECTION
                      ================================================== */}

                      <div
                        className="
                          relative
                          w-full
                          lg:w-[50%]
                          h-[240px]
                          sm:h-[260px]
                          lg:h-full
                          overflow-hidden
                          shrink-0
                          image-protected
                        "
                        style={{
                          pointerEvents: "none",
                          WebkitUserDrag: "none",
                        }}
                      >
                        <img
                          src={truck.image}
                          alt={truck.name}
                          className="
                            w-full
                            h-full
                            object-cover
                            group-hover:scale-105
                            transition-transform
                            duration-700
                          "
                          draggable="false"
                          style={{
                            pointerEvents: "none",
                            WebkitUserDrag: "none",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none";
                            const parent = e.target.parentElement;
                            const fallback = document.createElement("div");
                            fallback.className =
                              "w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm font-semibold";
                            fallback.textContent = truck.name;
                            parent.appendChild(fallback);
                          }}
                        />

                        {/* Watermark Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <span
                            className="text-white/5 text-4xl font-bold tracking-widest rotate-[-25deg] select-none pointer-events-none"
                            style={{
                              userSelect: "none",
                              WebkitUserSelect: "none",
                              pointerEvents: "none",
                            }}
                          >
                            {COMPANY_NAME}
                          </span>
                        </div>

                        {/* Bottom Watermark Text */}
                        <div
                          className="absolute bottom-3 right-4 pointer-events-none z-10"
                          style={{
                            userSelect: "none",
                            WebkitUserSelect: "none",
                          }}
                        >
                          <span
                            className="text-white/20 text-[8px] font-bold tracking-wider"
                            style={{
                              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                            }}
                          >
                            © {COMPANY_NAME}
                          </span>
                        </div>

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                        {/* Mobile Badge */}
                        <div className="absolute left-4 top-4 lg:hidden">
                          <div className="inline-flex items-center gap-1.5 bg-white/95 text-[#f15a24] px-3 py-1.5 rounded-full text-[10px] font-bold shadow-md backdrop-blur-sm">
                            {truck.icon}
                            <span>{truck.badge}</span>
                          </div>
                        </div>
                      </div>

                      {/* =================================================
                          TEXT CONTENT
                      ================================================== */}

                      <div
                        className="
                          w-full
                          lg:w-[55%]
                          p-5
                          sm:p-6
                          lg:px-8
                          lg:py-6
                          flex
                          flex-col
                          justify-center
                        "
                        style={{
                          userSelect: "none",
                          WebkitUserSelect: "none",
                        }}
                      >
                        {/* Desktop Badge */}
                        <div className="hidden lg:inline-flex items-center gap-2 bg-[#fff3ee] text-[#f15a24] px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-2">
                          {truck.icon}
                          <span>{truck.badge}</span>
                        </div>

                        {/* Category */}
                        <p
                          className="
                            text-[10px]
                            sm:text-[11px]
                            text-gray-500
                            uppercase
                            tracking-[1.5px]
                            font-semibold
                            mb-1
                          "
                        >
                          {truck.category}
                        </p>

                        {/* Truck Name */}
                        <h2
                          className="
                            text-[25px]
                            sm:text-[29px]
                            lg:text-[32px]
                            font-extrabold
                            text-[#f15a24]
                            tracking-tight
                            mb-2
                          "
                        >
                          {truck.name}
                        </h2>

                        {/* Description */}
                        <p
                          className="
                            text-[12px]
                            sm:text-[13px]
                            lg:text-[14px]
                            leading-5
                            sm:leading-6
                            text-gray-600
                            mb-3
                          "
                        >
                          {truck.description}
                        </p>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-gray-200 to-transparent my-2"></div>

                        {/* Freight Heading */}
                        <h3
                          className="
                            text-[9px]
                            sm:text-[10px]
                            font-bold
                            uppercase
                            tracking-[1.5px]
                            text-gray-700
                            mb-2
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f15a24]"></span>
                          Common Freight Types
                        </h3>

                        {/* Freight List */}
                        <div
                          className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-y-1.5
                            gap-x-4
                            mb-3
                          "
                        >
                          {truck.freight.map((item, freightIndex) => (
                            <div
                              key={freightIndex}
                              className="
                                flex
                                items-center
                                gap-2
                                text-[11px]
                                sm:text-[12px]
                                text-gray-600
                              "
                            >
                              <FaCheckCircle
                                className="
                                  text-[#f15a24]
                                  text-[9px]
                                  shrink-0
                                "
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* =================================================
                            BUTTONS - FIXED with React Router Link
                        ================================================== */}

                        <div className="flex flex-col sm:flex-row gap-2 mt-1">
                          {/* ✅ Get Quote - FIXED with Link */}
                          <Link
                            to="/outlet"
                            className="
                              flex
                              items-center
                              justify-center
                              gap-2
                              bg-[#f15a24]
                              hover:bg-[#dc4e1b]
                              text-white
                              rounded-lg
                              px-4
                              py-2
                              text-[11px]
                              font-bold
                              transition
                              shadow-md
                              hover:shadow-lg
                            "
                          >
                            Get a Quote
                            <FaArrowRight className="text-[9px]" />
                          </Link>

                          {/* Call */}
                          <a
                            href={`tel:${COMPANY_PHONE}`}
                            className="
                              flex
                              items-center
                              justify-center
                              gap-2
                              border-2
                              border-gray-200
                              hover:border-[#f15a24]
                              hover:text-[#f15a24]
                              text-gray-700
                              rounded-lg
                              px-4
                              py-2
                              text-[11px]
                              font-bold
                              transition
                            "
                          >
                            <FaPhoneAlt className="text-[9px]" />
                            Call Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION - NO CONTACT, ONLY SERVICES
      ====================================================== */}

      <section className="px-5 sm:px-6 pb-14 sm:pb-20">
        <div
          className="
            max-w-[1140px]
            mx-auto
            relative
            overflow-hidden
            rounded-2xl
            bg-[#151515]
            px-6
            sm:px-10
            lg:px-16
            py-12
            sm:py-14
            lg:py-16
            shadow-2xl
          "
        >
          {/* Decorative Elements */}
          <div
            className="
              absolute
              -right-20
              -top-20
              w-64
              h-64
              rounded-full
              border-[40px]
              border-[#f15a24]/20
            "
          />

          <div
            className="
              absolute
              -left-16
              -bottom-24
              w-52
              h-52
              rounded-full
              bg-[#f15a24]/10
            "
          />

          <div
            className="
              absolute
              right-10
              bottom-10
              w-32
              h-32
              rounded-full
              bg-[#f15a24]/5
              blur-2xl
            "
          />

          {/* CTA Content */}
          <div className="relative z-10 max-w-[720px]">
            <div
              className="
                inline-flex
                items-center
                gap-2
                text-[#f15a24]
                text-[11px]
                font-bold
                uppercase
                tracking-[1.5px]
                mb-4
              "
            >
              <FaTruck />
              Ready to Move Your Freight?
            </div>

            <h2
              className="
                text-[28px]
                sm:text-[36px]
                lg:text-[42px]
                font-extrabold
                text-white
                leading-tight
              "
            >
              Need Help Choosing the
              <br className="hidden sm:block" />
              Right Equipment?
            </h2>

            <p
              className="
                text-gray-400
                text-[13px]
                sm:text-[14px]
                leading-6
                mt-5
                max-w-[620px]
              "
            >
              Our experienced logistics team will assess your freight
              requirements and recommend the most efficient equipment solution
              for your specific needs and route.
            </p>

            {/* ✅ CTA Buttons - FIXED with Link */}
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <Link
                to="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#f15a24]
                  hover:bg-[#e85a1f]
                  text-white
                  px-6
                  py-3.5
                  rounded-lg
                  text-[13px]
                  font-bold
                  transition
                  shadow-lg
                  hover:shadow-xl
                "
              >
                Explore All Services
                <FaArrowRight className="text-[11px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default TruckTypes;