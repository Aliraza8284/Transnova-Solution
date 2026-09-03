import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaGlobeAmericas,
  FaHeadset,
  FaTruck,
  FaBoxes,
  FaMapMarkedAlt,
} from "react-icons/fa";

import AboutStrip from "../components/home/AboutStrip";
import ServicesSection from "../components/home/ServicesSection";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  return (
    <>
      {/* ==========================================
          LOCAL STYLES
      ========================================== */}
      <style>{`

        /* ==========================================
           ANIMATIONS
        ========================================== */

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }

          50% {
            transform: translateY(-25px) translateX(15px);
          }
        }

        @keyframes floatSlower {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }

          50% {
            transform: translateY(20px) translateX(-20px);
          }
        }

        @keyframes growLine {
          0% {
            width: 0;
          }

          100% {
            width: 1.5rem;
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 0px rgba(232, 92, 45, 0.5);
          }

          50% {
            box-shadow: 0 0 25px rgba(232, 92, 45, 0.6);
          }
        }

        /* ==========================================
           FADE ANIMATION
        ========================================== */

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease-out forwards;
        }

        .fade-up-1 {
          animation-delay: 0.1s;
        }

        .fade-up-2 {
          animation-delay: 0.25s;
        }

        .fade-up-3 {
          animation-delay: 0.4s;
        }

        .fade-up-4 {
          animation-delay: 0.55s;
        }

        .fade-up-5 {
          animation-delay: 0.7s;
        }

        .fade-up-6 {
          animation-delay: 0.85s;
        }

        /* ==========================================
           FLOATING DECORATION
        ========================================== */

        .float-blob-1 {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .float-blob-2 {
          animation: floatSlower 10s ease-in-out infinite;
        }

        /* ==========================================
           BADGE LINE
        ========================================== */

        .badge-line {
          overflow: hidden;
          animation: growLine 0.8s ease-out forwards;
          animation-delay: 0.2s;
          width: 0;
        }

        /* ==========================================
           BUTTON GLOW
        ========================================== */

        .glow-btn:hover {
          animation: glowPulse 1.5s ease-in-out infinite;
        }

        /* ==========================================
           STATS
        ========================================== */

        .stat-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .stat-icon {
          font-size: 12px;
          color: #e85c2d;
          flex-shrink: 0;
        }

        .stat-number {
          font-size: 14px;
          font-weight: 700;
          color: #e85c2d;
        }

        .stat-label {
          font-size: 10px;
          font-weight: 600;
          color: #E1D9D1;
        }

        /* ==========================================
           ALL HERO TEXT - #E1D9D1 COLOR
        ========================================== */

        .hero-text-container h1,
        .hero-text-container h2,
        .hero-text-container p,
        .hero-text-container .stat-label {
          color: #E1D9D1 !important;
          text-shadow: 0 2px 20px rgba(0,0,0,0.8) !important;
        }

        /* ==========================================
           ORANGE TEXT
        ========================================== */

        .hero-text-container h1 span,
        .hero-text-container h2 span,
        .hero-text-container .stat-number,
        .hero-text-container .stat-icon {
          color: #e85c2d !important;
          text-shadow: 0 2px 20px rgba(0,0,0,0.8) !important;
        }

        /* ==========================================
           WELCOME BADGE
        ========================================== */

        .hero-text-container .welcome-badge {
          color: #e85c2d !important;
          text-shadow: 0 2px 20px rgba(0,0,0,0.8) !important;
        }

        /* ==========================================
           BUTTON TEXT
        ========================================== */

        .hero-btn {
          color: #E1D9D1 !important;
          text-shadow: none !important;
        }

        .hero-btn svg {
          color: #E1D9D1 !important;
        }

        /* ==========================================
           EXPLORE SERVICES BUTTON
        ========================================== */

        .hero-btn-outline {
          color: #E1D9D1 !important;
          border-color: #E1D9D1/40 !important;
        }

        .hero-btn-outline svg {
          color: #E1D9D1 !important;
        }

        /* ==========================================
           BACKGROUND IMAGE LAYERS
        ========================================== */

        /* Clear image - visible on right side */
        .hero-image-clear {
          mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%);
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%);
        }

        /* Blurred image - visible on left side (where text is) */
        .hero-image-blur {
          mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 65%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 65%, rgba(0,0,0,0) 100%);
          filter: blur(8px) brightness(0.7) saturate(0.5);
          transform: scale(1.02);
        }

        /* Dark overlay - left side only */
        .hero-overlay {
          background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 65%, rgba(0,0,0,0) 100%);
        }

        /* ==========================================
           MOBILE - NO BLUR, FULL IMAGE
        ========================================== */

        @media (max-width: 640px) {

          .stat-item {
            gap: 4px;
          }

          .stat-icon {
            font-size: 10px;
          }

          .stat-number {
            font-size: 12px;
          }

          .stat-label {
            font-size: 8px;
          }

          .stat-item.border {
            padding: 4px 8px !important;
          }

          /* Remove all masks on mobile */
          .hero-image-clear {
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }

          .hero-image-blur {
            display: none !important;
          }

          /* Mobile overlay - lighter */
          .hero-overlay {
            background: rgba(0,0,0,0.5) !important;
          }

          /* Text shadow for mobile readability */
          .hero-text-container h1,
          .hero-text-container h2,
          .hero-text-container p,
          .hero-text-container .stat-label {
            text-shadow: 0 2px 30px rgba(0,0,0,0.9) !important;
          }

          .hero-text-container h1 span,
          .hero-text-container h2 span {
            text-shadow: 0 2px 30px rgba(0,0,0,0.9) !important;
          }

          .hero-text-container .welcome-badge {
            text-shadow: 0 2px 30px rgba(0,0,0,0.9) !important;
          }

          .hero-btn {
            color: #E1D9D1 !important;
          }
        }

      `}</style>

      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#151515]
          font-manrope
          flex
          items-center
          justify-center
        "
      >

        {/* ==========================================
            LAYER 1: CLEAR IMAGE (RIGHT SIDE)
        ========================================== */}

        <div
          className="
            hero-image-clear
            absolute
            inset-0
            z-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/Ali.jpeg')",
          }}
        />

        {/* ==========================================
            LAYER 2: BLURRED IMAGE (LEFT SIDE - TEXT AREA)
        ========================================== */}

        <div
          className="
            hero-image-blur
            absolute
            inset-0
            z-[1]
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/Ali.jpeg')",
          }}
        />

        {/* ==========================================
            LAYER 3: DARK OVERLAY (LEFT SIDE)
        ========================================== */}

        <div
          className="
            hero-overlay
            absolute
            inset-0
            z-[2]
            pointer-events-none
          "
        />

        {/* ==========================================
            LAYER 4: SUBTLE ORANGE LIGHT (RIGHT SIDE)
        ========================================== */}

        <div
          className="
            absolute
            inset-0
            z-[3]
            pointer-events-none
          "
          style={{
            background:
              "radial-gradient(ellipse at 78% 50%, rgba(232,92,45,0.08) 0%, transparent 50%)",
          }}
        />

        {/* ==========================================
            DECORATIVE SHAPES
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -top-24
            -right-24
            z-10
            h-96
            w-96
            rounded-full
            bg-[#E85C2D]/5
            float-blob-1
            hidden
            md:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-20
            z-10
            h-80
            w-80
            rounded-full
            bg-[#E85C2D]/5
            float-blob-2
            hidden
            md:block
          "
        />

        {/* ==========================================
            HERO CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-20
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            lg:px-12
            py-8
            sm:py-0
          "
        >
          <div
            className="
              max-w-2xl
              text-center
              md:text-left
              hero-text-container
            "
          >

            {/* ==========================================
                WELCOME BADGE
            ========================================== */}

            <div
              className="
                welcome-badge
                mb-4
                md:mb-5
                flex
                items-center
                gap-2
                md:gap-3
                text-[8px]
                md:text-[10px]
                font-semibold
                uppercase
                tracking-[1.5px]
                md:tracking-[2px]
                justify-center
                md:justify-start
                fade-up
                fade-up-1
              "
            >
              <span
                className="
                  h-[1px]
                  w-4
                  md:w-6
                  bg-[#E85C2D]
                  badge-line
                "
              />

              WELCOME TO TRANS NOVA

              <span
                className="
                  h-[1px]
                  w-4
                  md:w-6
                  bg-[#E85C2D]
                  badge-line
                "
              />
            </div>

            {/* ==========================================
                MAIN HEADING
            ========================================== */}

            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-[1.15]
                fade-up
                fade-up-2
              "
            >
              TRUCKING{" "}
              <span className="text-[#E85C2D]">
                & LOGISTICS
              </span>
            </h1>

            {/* ==========================================
                SUB HEADING
            ========================================== */}

            <h2
              className="
                mt-2
                md:mt-3
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                font-semibold
                fade-up
                fade-up-3
              "
            >
              FREIGHT MOVES.
              <span className="text-[#E85C2D]">
                {" "}BUSINESS GROWS
              </span>
            </h2>

            {/* ==========================================
                DESCRIPTION
            ========================================== */}

            <p
              className="
                mt-4
                md:mt-5
                max-w-xl
                text-xs
                sm:text-sm
                md:text-base
                leading-6
                md:leading-7
                mx-auto
                md:mx-0
                font-medium
                fade-up
                fade-up-4
              "
            >
              Reliable trucking and logistics solutions for
              <br className="hidden sm:block" />

              carriers, owner-operators, and fleets
              <br className="hidden sm:block" />

              across the United States
            </p>

            {/* ==========================================
                FEATURE STATS
            ========================================== */}

            <div
              className="
                mt-3
                md:mt-4
                flex
                flex-wrap
                items-center
                justify-center
                md:justify-start
                gap-2
                md:gap-4
                fade-up
                fade-up-5
              "
            >

              {/* ON TIME DELIVERY */}
              <div className="stat-item">
                <FaClock className="stat-icon" />

                <span className="stat-label">
                  On-Time Delivery
                </span>
              </div>

              {/* NATIONWIDE COVERAGE */}
              <div className="stat-item">
                <FaGlobeAmericas className="stat-icon" />

                <span className="stat-label">
                  Nationwide Coverage
                </span>
              </div>

              {/* SUPPORT */}
              <div className="stat-item">
                <FaHeadset className="stat-icon" />

                <span className="stat-label">
                  End-to-End Support
                </span>
              </div>

            </div>

            {/* ==========================================
                STATS BAR
            ========================================== */}

            <div
              className="
                mt-3
                md:mt-5
                flex
                flex-wrap
                items-center
                justify-center
                md:justify-start
                gap-2
                md:gap-5
                fade-up
                fade-up-6
              "
            >

              {/* ==========================================
                  CARRIERS SERVED
              ========================================== */}

              <div
                className="
                  stat-item
                  border
                  border-[#E85C2D]/40
                  bg-[#151515]/60
                  rounded-lg
                  px-2
                  py-1
                  md:px-4
                  md:py-2
                "
              >
                <FaTruck className="stat-icon" />

                <span className="stat-number">
                  50+
                </span>

                <span className="stat-label">
                  Carriers Served
                </span>
              </div>

              {/* ==========================================
                  LOADS MANAGED
              ========================================== */}

              <div
                className="
                  stat-item
                  border
                  border-[#E85C2D]/40
                  bg-[#151515]/60
                  rounded-lg
                  px-2
                  py-1
                  md:px-4
                  md:py-2
                "
              >
                <FaBoxes className="stat-icon" />

                <span className="stat-number">
                  10K+
                </span>

                <span className="stat-label">
                  Loads Managed
                </span>
              </div>

              {/* ==========================================
                  STATES COVERED
              ========================================== */}

              <div
                className="
                  stat-item
                  border
                  border-[#E85C2D]/40
                  bg-[#151515]/60
                  rounded-lg
                  px-2
                  py-1
                  md:px-4
                  md:py-2
                "
              >
                <FaMapMarkedAlt className="stat-icon" />

                <span className="stat-number">
                  50
                </span>

                <span className="stat-label">
                  States Covered
                </span>
              </div>

            </div>

            {/* ==========================================
                BUTTONS
            ========================================== */}

            <div
              className="
                mt-4
                md:mt-6
                flex
                flex-wrap
                items-center
                justify-center
                md:justify-start
                gap-2
                md:gap-3
                fade-up
                fade-up-6
              "
            >

              {/* ==========================================
                  GET A QUOTE
              ========================================== */}

              <Link
                to="/Outlet"
                className="
                  hero-btn
                  glow-btn
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  md:gap-2
                  rounded-[4px]
                  bg-[#E85C2D]
                  px-4
                  md:px-6
                  py-2
                  md:py-3
                  text-xs
                  md:text-sm
                  font-medium
                  text-[#E1D9D1]
                  transition-all
                  duration-300
                  active:bg-[#D04D1F]
                  active:scale-95
                  hover:bg-[#D04D1F]
                  hover:gap-3
                  min-w-[130px]
                  md:min-w-0
                "
              >
                Get a Quote

                <FaArrowRight className="text-[10px] md:text-xs" />
              </Link>

              {/* ==========================================
                  EXPLORE SERVICES
              ========================================== */}

              <Link
                to="/services"
                className="
                  hero-btn-outline
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  md:gap-2
                  rounded-[4px]
                  border
                  border-[#E1D9D1]/40
                  bg-transparent
                  px-4
                  md:px-6
                  py-2
                  md:py-3
                  text-xs
                  md:text-sm
                  font-medium
                  text-[#E1D9D1]
                  transition-all
                  duration-300
                  active:bg-white/10
                  active:scale-95
                  hover:border-[#E1D9D1]
                  hover:bg-white/10
                  hover:gap-3
                  min-w-[130px]
                  md:min-w-0
                "
              >
                Explore Services

                <FaArrowRight className="text-[10px] md:text-xs" />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: ABOUT STRIP
      ========================================== */}

      <AboutStrip />

      {/* ==========================================
          SECTION 3: SERVICES
      ========================================== */}

      <ServicesSection />

      {/* ==========================================
          SECTION 4: CONTACT
      ========================================== */}

      <ContactSection />
    </>
  );
};

export default Home;