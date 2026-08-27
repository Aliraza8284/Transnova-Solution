// ==========================================
// SERVICES PAGE
// TRUCKING COMPANY FOCUSED
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
  FaRoute,
  FaHandshake,
  FaClock,
  FaChartLine,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaClipboardCheck,
} from "react-icons/fa";


// ==========================================
// SERVICES COMPONENT
// ==========================================

const Services = () => {

  // ==========================================
  // MAIN SERVICES
  // ==========================================

  const servicesList = [

    // ==========================================
    // 01 - TRUCKING SERVICES
    // MAIN FEATURED SERVICE
    // ==========================================

    {
      number: "01",
      icon: <FaTruck />,
      title: "Trucking Services",
      shortTitle: "Trucking & Transportation",
      desc:
        "Complete trucking support built for carriers, owner-operators, and trucking companies looking to increase revenue, reduce downtime, and keep their trucks moving.",
      highlighted: true,
    },

    // ==========================================
    // 02 - BPO
    // ==========================================

    {
      number: "02",
      icon: <FaHeadphones />,
      title: "BPO Solutions",
      shortTitle: "BPO Solutions",
      desc:
        "Professional business process outsourcing solutions designed to reduce operational workload and improve business efficiency.",
      highlighted: false,
    },

    // ==========================================
    // 03 - VOIP
    // ==========================================

    {
      number: "03",
      icon: <FaPhoneAlt />,
      title: "VoIP & Telecom",
      shortTitle: "VoIP & Telecom",
      desc:
        "Reliable communication solutions that help businesses stay connected with customers, drivers, teams, and partners.",
      highlighted: false,
    },

    // ==========================================
    // 04 - INVOICING
    // ==========================================

    {
      number: "04",
      icon: <FaFileInvoice />,
      title: "Invoicing Solutions",
      shortTitle: "Invoicing Solutions",
      desc:
        "Streamlined invoicing support designed to organize billing, improve cash flow visibility, and simplify administrative work.",
      highlighted: false,
    },

    // ==========================================
    // 05 - LOGISTICS
    // ==========================================

    {
      number: "05",
      icon: <FaRoute />,
      title: "Logistics Solutions",
      shortTitle: "Logistics Solutions",
      desc:
        "End-to-end logistics support that helps businesses coordinate transportation, operations, and delivery efficiently.",
      highlighted: false,
    },

    // ==========================================
    // 06 - OUTSOURCING
    // ==========================================

    {
      number: "06",
      icon: <FaUsers />,
      title: "Outsourcing Services",
      shortTitle: "Outsourcing Services",
      desc:
        "Scalable outsourcing solutions that allow businesses to focus on growth while we handle essential operational tasks.",
      highlighted: false,
    },
  ];


  // ==========================================
  // TRUCKING FEATURES
  // ==========================================

  const truckingFeatures = [
    {
      icon: <FaRoute />,
      title: "Load Booking",
      desc:
        "Find and secure suitable freight opportunities for your equipment and lanes.",
    },

    {
      icon: <FaHandshake />,
      title: "Broker Communication",
      desc:
        "Professional communication with brokers to keep your loads moving smoothly.",
    },

    {
      icon: <FaChartLine />,
      title: "Rate Negotiation",
      desc:
        "Work toward better freight rates and stronger revenue opportunities.",
    },

    {
      icon: <FaClock />,
      title: "24/7 Dispatch Support",
      desc:
        "Continuous dispatch support to help reduce downtime and keep operations moving.",
    },

    {
      icon: <FaMapMarkedAlt />,
      title: "Route & Lane Planning",
      desc:
        "Strategic planning around routes and lanes to improve operational efficiency.",
    },

    {
      icon: <FaClipboardCheck />,
      title: "Carrier Support",
      desc:
        "Administrative and operational assistance for carriers and owner-operators.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Vetted Brokers",
      desc:
        "Focus on reliable freight opportunities and professional broker relationships.",
    },

    {
      icon: <FaTruck />,
      title: "Fleet Support",
      desc:
        "Scalable support for individual owner-operators and growing trucking fleets.",
    },
  ];


  // ==========================================
  // EQUIPMENT TYPES
  // ==========================================

  const equipmentTypes = [
    "Dry Van",
    "Reefer",
    "Flatbed",
    "Step Deck",
    "Conestoga",
    "Power Only",
    "Box Truck",
    "Hotshot",
    "Cargo Van",
    "Lowboy",
  ];


  return (

    <div className="min-h-screen bg-[#FAF9F6] font-manrope pt-[70px]">


      {/* =====================================================
          HERO / HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#050505]">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#FF6B35] blur-[120px]" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#FF6B35] blur-[140px]" />
        </div>


        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-semibold tracking-wide text-[#FF6B35]">
              HOME / OUR SERVICES
            </p>


            <div className="mb-6 flex items-center gap-3">

              <div className="h-[3px] w-12 rounded-full bg-[#FF6B35]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B9B8A]">
                Transportation & Business Solutions
              </span>

            </div>


            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">

              <span className="block">
                Powering Businesses.
              </span>

              <span className="block text-[#FF6B35]">
                Moving Trucking Forward.
              </span>

            </h1>


            <p className="mt-6 max-w-2xl text-base leading-8 text-[#B5B5B0] md:text-lg">

              TransNova Solutions provides professional business and
              transportation solutions, with a strong focus on helping
              trucking companies keep their trucks moving, increase
              efficiency, and grow their operations.

            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/trucking-services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#FF6B35]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E85C2D]
                  hover:gap-4
                  hover:shadow-xl
                  hover:shadow-[#FF6B35]/20
                "
              >
                Explore Trucking Services
                <FaArrowRight className="text-xs" />
              </Link>


              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/20
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#FF6B35]
                  hover:text-[#FF6B35]
                "
              >
                Talk to Our Team
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          TRUCKING FEATURE SECTION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">


          {/* LEFT CONTENT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/20">
                <FaTruck />
              </span>

              <span className="text-sm font-bold uppercase tracking-wider text-[#FF6B35]">
                Our #1 Focus
              </span>

            </div>


            <h2 className="text-4xl font-bold leading-tight text-[#111111] md:text-5xl">

              Trucking Companies
              <span className="block text-[#FF6B35]">
                Come First.
              </span>

            </h2>


            <div className="mb-6 mt-4 h-[3px] w-14 rounded-full bg-[#FF6B35]" />


            <p className="text-base leading-8 text-[#666666]">

              We understand that a trucking company needs more than
              someone simply booking loads. Your business needs a
              dependable partner who understands dispatching,
              communication, freight, brokers, routes, rates, and
              day-to-day carrier operations.

            </p>


            <p className="mt-4 text-base leading-8 text-[#666666]">

              That's why our trucking solutions are designed around
              one goal:

              <span className="font-bold text-[#111111]">
                {" "}keeping your trucks productive while helping your
                business grow.
              </span>

            </p>


            <Link
              to="/trucking-services"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#111111]
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-[#FF6B35]
                hover:gap-3
              "
            >
              View Full Trucking Services
              <FaArrowRight className="text-xs" />
            </Link>

          </div>



          {/* RIGHT FEATURE CARD */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#111111]
              p-7
              shadow-2xl
              md:p-9
            "
          >

            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF6B35]/20 blur-[80px]" />

            <div className="relative">

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
                    Trucking Support
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Built for Carriers
                  </h3>

                </div>


                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B35] text-2xl text-white shadow-lg">
                  <FaTruck />
                </div>

              </div>


              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {[
                  "Load Booking",
                  "Rate Negotiation",
                  "Broker Communication",
                  "24/7 Dispatch",
                  "Carrier Setup",
                  "Route Planning",
                  "Driver Support",
                  "Fleet Support",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-4
                      py-3
                    "
                  >

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6B35]/15 text-xs text-[#FF6B35]">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-[#E7E7E2]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          TRUCKING FEATURES
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">


          {/* HEADER */}

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-[#FF6B35]">
              Trucking Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#111111] md:text-4xl">

              Everything Your Trucking
              <span className="text-[#FF6B35]">
                {" "}Business Needs
              </span>

            </h2>

            <p className="mt-4 text-sm leading-7 text-[#777777]">

              From finding freight to communicating with brokers,
              our team provides the operational support needed to
              keep your business moving.

            </p>

          </div>



          {/* FEATURES GRID */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {truckingFeatures.map((feature, index) => (

              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  border
                  border-[#EDEAE4]
                  bg-[#FAF9F6]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#FF6B35]/40
                  hover:bg-white
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#FF6B35]/10
                    text-xl
                    text-[#FF6B35]
                    transition-all
                    duration-300
                    group-hover:bg-[#FF6B35]
                    group-hover:text-white
                  "
                >
                  {feature.icon}
                </div>


                <h3 className="text-base font-bold text-[#111111]">
                  {feature.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-[#777777]">
                  {feature.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          EQUIPMENT SECTION
      ===================================================== */}

      <section className="bg-[#FAF9F6]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">


            {/* LEFT */}

            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-[#FF6B35]">
                Equipment We Support
              </p>


              <h2 className="mt-3 text-3xl font-bold text-[#111111] md:text-4xl">

                Dispatch Support
                <span className="block text-[#FF6B35]">
                  Across Equipment Types
                </span>

              </h2>


              <p className="mt-5 max-w-lg text-sm leading-7 text-[#777777]">

                Whether you're an owner-operator running one truck
                or managing a growing fleet, our team can support
                different equipment types and transportation needs.

              </p>

            </div>



            {/* EQUIPMENT */}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">

              {equipmentTypes.map((equipment, index) => (

                <div
                  key={index}
                  className="
                    flex
                    min-h-[80px]
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#EDEAE4]
                    bg-white
                    px-3
                    text-center
                    text-xs
                    font-bold
                    text-[#444444]
                    shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#FF6B35]
                    hover:text-[#FF6B35]
                  "
                >
                  {equipment}
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          ALL SERVICES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">

        <div className="mb-10">

          <p className="text-sm font-bold uppercase tracking-wider text-[#FF6B35]">
            More Solutions
          </p>


          <h2 className="mt-2 text-3xl font-bold text-[#111111] md:text-4xl">
            Business Services
          </h2>


          <div className="mb-4 mt-4 h-[3px] w-12 rounded-full bg-[#FF6B35]" />


          <p className="max-w-2xl text-sm leading-7 text-[#777777]">

            Beyond trucking, TransNova Solutions provides additional
            business services designed to support your company's
            communication, administration, and operational needs.

          </p>

        </div>



        {/* SERVICES GRID */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {servicesList.slice(1).map((service) => (

            <div
              key={service.number}
              className="
                group
                relative
                rounded-2xl
                border
                border-[#EDEAE4]
                bg-white
                p-6
                shadow-[0_3px_15px_rgba(0,0,0,0.03)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#FF6B35]/40
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]
              "
            >

              {/* NUMBER */}

              <div className="absolute right-5 top-5 text-3xl font-black text-[#F3F0EA]">
                {service.number}
              </div>


              {/* ICON */}

              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#FAF9F6]
                  text-xl
                  text-[#FF6B35]
                  transition-all
                  duration-300
                  group-hover:bg-[#FF6B35]
                  group-hover:text-white
                "
              >
                {service.icon}
              </div>


              {/* TITLE */}

              <h3 className="text-lg font-bold text-[#111111]">
                {service.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="mt-3 text-sm leading-6 text-[#777777]">
                {service.desc}
              </p>


              {/* LINK */}

              <Link
                to="/contact"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-[#FF6B35]
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                Get Started
                <FaArrowRight className="text-[10px]" />
              </Link>

            </div>

          ))}

        </div>

      </section>



      {/* =====================================================
          TRUCKING CTA
      ===================================================== */}

      <section className="px-6 pb-16 lg:px-12 lg:pb-24">

        <div className="mx-auto max-w-7xl">

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#111111]
              px-7
              py-12
              md:px-12
              lg:py-16
            "
          >

            {/* BACKGROUND GLOW */}

            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF6B35]/20 blur-[100px]" />

            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#FF6B35]/10 blur-[100px]" />


            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <p className="text-sm font-bold uppercase tracking-wider text-[#FF6B35]">
                  Ready to Move Forward?
                </p>


                <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">

                  Let's Keep Your
                  <span className="text-[#FF6B35]">
                    {" "}Trucks Moving.
                  </span>

                </h2>


                <p className="mt-4 text-sm leading-7 text-[#B5B5B0]">

                  Partner with TransNova Solutions for professional
                  trucking support designed around your business,
                  your equipment, and your growth goals.

                </p>

              </div>



              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

                <Link
                  to="/trucking-services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#FF6B35]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#E85C2D]
                    hover:gap-4
                  "
                >
                  Start With Trucking
                  <FaArrowRight className="text-xs" />
                </Link>


                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-white/20
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#FF6B35]
                    hover:text-[#FF6B35]
                  "
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};


// ==========================================
// DEFAULT EXPORT
// ==========================================

export default Services;