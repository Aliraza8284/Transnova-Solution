import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTruck,
  FaBroadcastTower,
  FaHeartbeat,
  FaUniversity,
  FaArrowRight,
  FaGlobe,
  FaUsers,
  FaBoxOpen,
  FaHeadset,
} from "react-icons/fa";

const industries = [
  {
    title: (
      <>
        Logistics &<br />
        Transportation
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    icon: <FaTruck />,
    description:
      "Streamlined logistics and transportation solutions that ensure timely delivery and operational efficiency.",
  },

  {
    title: (
      <>
        Telecom &<br />
        Communication
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    icon: <FaBroadcastTower />,
    description:
      "Reliable communication solutions for a connected world, keeping your business always ahead.",
  },

  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85",
    icon: <FaHeartbeat />,
    description:
      "Comprehensive support and management solutions designed for the healthcare industry.",
  },

  {
    title: (
      <>
        Finance &<br />
        Banking
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    icon: <FaUniversity />,
    description:
      "Secure and efficient financial support solutions to help you manage, grow, and succeed.",
  },
];

const stats = [
  {
    icon: <FaUsers />,
    number: "500+",
    label: "Happy Clients",
  },
  {
    icon: <FaBoxOpen />,
    number: "10K+",
    label: "Projects Completed",
  },
  {
    icon: <FaGlobe />,
    number: "50+",
    label: "Countries Served",
  },
  {
    icon: <FaHeadset />,
    number: "24/7",
    label: "Support",
  },
];

const Industries = () => {
  const navigate = useNavigate();

  // Function to handle navigation to Contact page
  const handleLearnMore = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full bg-[#fafafa] text-[#171717] overflow-hidden">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div
            className="
              relative
              min-h-[330px]
              sm:min-h-[380px]
              md:min-h-[400px]
              lg:min-h-[420px]
              flex
              items-center
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}
            <div
              className="
                relative
                z-30
                w-full
                lg:w-[47%]
                py-10
                sm:py-14
                lg:py-20
              "
            >
              {/* Breadcrumb */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[11px]
                  sm:text-[13px]
                  lg:text-sm
                  mb-4
                  sm:mb-6
                "
              >
                <span className="text-[#444]">Home</span>
                <span className="text-[#999]">/</span>
                <span className="text-[#f15a24] font-medium">Industries</span>
              </div>

              {/* Heading */}
              <h1
                className="
                  font-extrabold
                  uppercase
                  tracking-tight
                  leading-[0.98]
                "
              >
                <span
                  className="
                    block
                    text-[34px]
                    xs:text-[38px]
                    sm:text-[45px]
                    md:text-[50px]
                    lg:text-[53px]
                    xl:text-[58px]
                  "
                >
                  Industries
                </span>

                <span
                  className="
                    block
                    text-[34px]
                    xs:text-[38px]
                    sm:text-[45px]
                    md:text-[50px]
                    lg:text-[53px]
                    xl:text-[58px]
                    text-[#f15a24]
                  "
                >
                  We Serve
                </span>
              </h1>

              {/* Orange Line */}
              <div
                className="
                  w-[35px]
                  sm:w-[43px]
                  h-[3px]
                  bg-[#f15a24]
                  mt-4
                  sm:mt-6
                  mb-3
                  sm:mb-5
                "
              />

              {/* Description */}
              <p
                className="
                  max-w-[450px]
                  text-[12px]
                  sm:text-[13px]
                  md:text-[14px]
                  lg:text-[15px]
                  leading-5
                  sm:leading-6
                  text-[#555]
                "
              >
                We deliver tailored solutions for a wide range of
                industries, helping businesses overcome challenges and
                achieve growth.
              </p>
            </div>

            {/* =================================================
                HERO IMAGE
            ================================================= */}
            <div
              className="
                absolute
                top-0
                right-[-80px]
                sm:right-[-80px]
                md:right-[-70px]
                lg:right-[-60px]
                w-[76%]
                sm:w-[70%]
                md:w-[67%]
                lg:w-[64%]
                h-full
                overflow-hidden
              "
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=90"
                alt="Logistics and transportation"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />

              {/* Left White Fade */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-white
                  via-white/50
                  to-transparent
                "
              />

              {/* Bottom White Fade */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-[40%]
                  sm:h-[45%]
                  bg-gradient-to-t
                  from-white
                  via-white/20
                  to-transparent
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES CARDS
      ====================================================== */}
      <section
        className="
          relative
          z-40
          mt-4
          sm:mt-5
          md:mt-6
          pb-7
          px-4
          sm:px-5
          lg:px-6
        "
      >
        <div className="max-w-[1140px] mx-auto">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
              sm:gap-5
            "
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-white
                  rounded-xl
                  border
                  border-[#e9e9e9]
                  shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  flex
                  flex-col
                  overflow-visible
                  min-h-[340px]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}
                <div
                  className="
                    relative
                    h-[115px]
                    sm:h-[122px]
                    rounded-t-xl
                    overflow-hidden
                  "
                >
                  <img
                    src={industry.image}
                    alt="Industry"
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/[0.03]
                    "
                  />
                </div>

                {/* =================================================
                    ICON
                ================================================= */}
                <div
                  className="
                    absolute
                    left-4
                    top-[91px]
                    sm:top-[98px]
                    z-50
                    w-[48px]
                    h-[48px]
                    rounded-full
                    bg-[#f15a24]
                    border-[4px]
                    border-white
                    shadow-[0_3px_10px_rgba(0,0,0,0.16)]
                    flex
                    items-center
                    justify-center
                    text-white
                    text-[18px]
                  "
                >
                  {industry.icon}
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}
                <div
                  className="
                    flex
                    flex-col
                    flex-1
                    px-4
                    pt-7
                    pb-4
                  "
                >
                  {/* Title */}
                  <h2
                    className="
                      text-[16px]
                      sm:text-[17px]
                      lg:text-[18px]
                      font-extrabold
                      leading-[1.08]
                      text-[#161616]
                      min-h-[38px]
                    "
                  >
                    {industry.title}
                  </h2>

                  {/* Orange Line */}
                  <div
                    className="
                      w-[27px]
                      h-[2px]
                      bg-[#f15a24]
                      mt-3
                      mb-3
                    "
                  />

                  {/* Description */}
                  <p
                    className="
                      text-[12px]
                      sm:text-[13px]
                      lg:text-[13.5px]
                      leading-[1.55]
                      text-[#666]
                      flex-1
                    "
                  >
                    {industry.description}
                  </p>

                  {/* Learn More - Now Clickable */}
                  <div className="mt-4 pt-3">
                    <button
                      type="button"
                      onClick={handleLearnMore}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[#f15a24]
                        text-[11px]
                        sm:text-[12px]
                        font-bold
                        hover:gap-3
                        transition-all
                        duration-200
                        cursor-pointer
                        group/btn
                      "
                    >
                      <span>Learn More</span>
                      <FaArrowRight
                        className="
                          text-[10px]
                          transition-transform
                          duration-200
                          group-hover/btn:translate-x-1
                        "
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM STATS
      ====================================================== */}
      <section
        className="
          px-4
          sm:px-5
          lg:px-6
          pb-8
        "
      >
        <div
          className="
            max-w-[1140px]
            mx-auto
            bg-white
            border
            border-[#e9e9e9]
            rounded-[18px]
            sm:rounded-[22px]
            shadow-[0_2px_10px_rgba(0,0,0,0.03)]
            overflow-hidden
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.35fr_3fr]
            "
          >
            {/* =================================================
                LEFT TEXT
            ================================================= */}
            <div
              className="
                flex
                items-center
                gap-3
                sm:gap-4
                px-4
                sm:px-6
                lg:px-8
                py-5
                sm:py-6
                lg:py-5
                border-b
                lg:border-b-0
                lg:border-r
                border-[#eeeeee]
              "
            >
              {/* Globe */}
              <div
                className="
                  shrink-0
                  w-[42px]
                  h-[42px]
                  sm:w-[50px]
                  sm:h-[50px]
                  rounded-full
                  bg-[#f15a24]
                  flex
                  items-center
                  justify-center
                  text-white
                  text-[19px]
                  sm:text-[23px]
                "
              >
                <FaGlobe />
              </div>

              {/* Text */}
              <div>
                <h3
                  className="
                    text-[14px]
                    sm:text-[16px]
                    font-extrabold
                    leading-[1.15]
                  "
                >
                  Powering Industries.
                  <br />
                  Delivering{" "}
                  <span className="text-[#f15a24]">Success.</span>
                </h3>

                <p
                  className="
                    text-[9px]
                    sm:text-[11px]
                    text-[#666]
                    mt-1
                  "
                >
                  Trusted by businesses across the globe.
                </p>
              </div>
            </div>

            {/* =================================================
                STATS
            ================================================= */}
            <div
              className="
                grid
                grid-cols-2
                lg:grid-cols-4
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                    px-3
                    sm:px-4
                    lg:px-5
                    py-4
                    sm:py-5
                    border-b
                    lg:border-b-0
                    border-[#eeeeee]
                    lg:border-r
                    lg:last:border-r-0
                  "
                >
                  {/* Stat Icon */}
                  <div
                    className="
                      shrink-0
                      text-[#f15a24]
                      text-[21px]
                      sm:text-[25px]
                    "
                  >
                    {stat.icon}
                  </div>

                  {/* Number + Label */}
                  <div>
                    <div
                      className="
                        text-[#f15a24]
                        font-extrabold
                        text-[18px]
                        sm:text-[21px]
                        leading-none
                      "
                    >
                      {stat.number}
                    </div>

                    <div
                      className="
                        text-[9px]
                        sm:text-[10px]
                        text-[#555]
                        mt-1
                        whitespace-nowrap
                      "
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;