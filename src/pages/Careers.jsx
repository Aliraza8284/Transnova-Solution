// ==========================================
// Careers.jsx
// ==========================================

import React, { useState, useEffect } from "react";

import {
  FaArrowRight,
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaTrophy,
  FaTimes,
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaExternalLinkAlt,
  FaShieldAlt,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";


// ==========================================
// CAREERS COMPONENT
// ==========================================

const Careers = () => {

  // ==========================================
  // STATES
  // ==========================================

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedJob, setSelectedJob] = useState("");

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [countryCode, setCountryCode] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
    icon: "",
  });

  const [animatedJobs, setAnimatedJobs] = useState([]);

  const [animatedBenefits, setAnimatedBenefits] = useState([]);


  // ==========================================
  // SCROLL ANIMATION
  // ==========================================

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const target = entry.target;

            if (target.classList.contains("benefit-card")) {

              setAnimatedBenefits((prev) => {

                if (!prev.includes(target.dataset.index)) {
                  return [...prev, target.dataset.index];
                }

                return prev;
              });

            }

            if (target.classList.contains("job-card")) {

              setAnimatedJobs((prev) => {

                if (!prev.includes(target.dataset.index)) {
                  return [...prev, target.dataset.index];
                }

                return prev;
              });

            }

          }

        });

      },
      {
        threshold: 0.1,
      }
    );


    const elements = document.querySelectorAll(
      ".benefit-card, .job-card"
    );


    elements.forEach((element) => {
      observer.observe(element);
    });


    return () => {
      observer.disconnect();
    };

  }, []);


  // ==========================================
  // OPEN APPLICATION MODAL
  // ==========================================

  const openApplyModal = (jobTitle) => {

    setSelectedJob(jobTitle);

    setCountryCode("");

    setIsModalOpen(true);

    document.body.style.overflow = "hidden";
  };


  // ==========================================
  // CLOSE APPLICATION MODAL
  // ==========================================

  const closeModal = () => {

    setIsModalOpen(false);

    setCountryCode("");

    document.body.style.overflow = "auto";
  };


  // ==========================================
  // CLOSE SUCCESS POPUP
  // ==========================================

  const closeSuccess = () => {

    setIsSuccessOpen(false);

    setSelectedJob("");

    document.body.style.overflow = "auto";
  };


  // ==========================================
  // TOAST
  // ==========================================

  const showToast = (
    message,
    type = "success",
    icon = "✅"
  ) => {

    setToast({
      show: true,
      message,
      type,
      icon,
    });


    setTimeout(() => {

      setToast({
        show: false,
        message: "",
        type: "",
        icon: "",
      });

    }, 5000);

  };


  // ==========================================
  // HANDLE APPLICATION SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setIsSubmitting(true);


    try {

      const formData = new FormData(e.target);


      // ==========================================
      // FORM DATA
      // ==========================================

      const emailData = {

        to_email: "business@transnova.solutions",

        to_name: "HR Team",

        job_title: formData.get("selectedJob"),

        candidate_name: formData.get("name"),

        candidate_email: formData.get("email"),

        candidate_phone:
          countryCode + formData.get("phone"),

        candidate_city:
          formData.get("city"),

        experience:
          formData.get("experience"),

        language:
          formData.get("language"),

        expertise_level:
          formData.get("level"),

        expected_salary:
          formData.get("salary") +
          " " +
          formData.get("currency"),

        start_date:
          formData.get("start_date"),

        additional_details:
          formData.get("additional_info"),

        applied_date:
          new Date().toLocaleString(
            "en-US",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }
          ),
      };


      console.log(
        "📧 Application Data:",
        emailData
      );


      // ==========================================
      // EMAILJS CONFIG
      // ==========================================

      const EMAILJS_SERVICE_ID = "service_mwoqwbs";
      const EMAILJS_TEMPLATE_ID = "template_zb04utt";
      const EMAILJS_PUBLIC_KEY = "hkyeEuonkAKSiQj7d";


      // ==========================================
      // EMAILJS TEMPLATE PARAMETERS
      // ==========================================

      const templateParams = {

        to_email:
          emailData.to_email,

        to_name:
          emailData.to_name,

        job_title:
          emailData.job_title,

        candidate_name:
          emailData.candidate_name,

        candidate_email:
          emailData.candidate_email,

        candidate_phone:
          emailData.candidate_phone,

        candidate_city:
          emailData.candidate_city,

        experience:
          emailData.experience,

        language:
          emailData.language,

        expertise_level:
          emailData.expertise_level,

        expected_salary:
          emailData.expected_salary,

        start_date:
          emailData.start_date,

        additional_details:
          emailData.additional_details,

        applied_date:
          emailData.applied_date,
      };


      console.log(
        "📤 Sending EmailJS:",
        templateParams
      );


      // ==========================================
      // SEND EMAIL
      // ==========================================

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );


      console.log(
        "✅ EmailJS Response:",
        response
      );


      // ==========================================
      // SAVE APPLICATION TO BACKEND
      // ==========================================

      try {

        const backendResponse = await fetch(
          "http://localhost:5000/api/save-application",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              emailData
            ),
          }
        );


        if (!backendResponse.ok) {

          console.warn(
            "Backend returned an error."
          );

        }

      } catch (backendError) {

        console.warn(
          "Backend save skipped:",
          backendError
        );

      }


      // ==========================================
      // CLOSE FORM
      // ==========================================

      setIsModalOpen(false);

      document.body.style.overflow = "auto";


      // ==========================================
      // SUCCESS TOAST
      // ==========================================

      showToast(
        `Application submitted successfully for ${emailData.job_title}!`,
        "success",
        "✅"
      );


      // ==========================================
      // SUCCESS POPUP
      // ==========================================

      setTimeout(() => {

        setIsSuccessOpen(true);

        document.body.style.overflow = "hidden";

      }, 800);


    } catch (error) {

      console.error(
        "❌ Full Submission Error:",
        error
      );

      console.error(
        "❌ Error Message:",
        error?.text || error?.message
      );


      showToast(
        "Submission failed. Please try again.",
        "error",
        "❌"
      );

    } finally {

      setIsSubmitting(false);

    }

  };


  // ==========================================
  // COUNTRIES
  // ==========================================

  const countriesList = [

    {
      code: "+1",
      flag: "🇺🇸",
      name: "United States",
    },

    {
      code: "+1",
      flag: "🇨🇦",
      name: "Canada",
    },

    {
      code: "+44",
      flag: "🇬🇧",
      name: "United Kingdom",
    },

    {
      code: "+92",
      flag: "🇵🇰",
      name: "Pakistan",
    },

    {
      code: "+91",
      flag: "🇮🇳",
      name: "India",
    },

    {
      code: "+971",
      flag: "🇦🇪",
      name: "UAE",
    },

    {
      code: "+61",
      flag: "🇦🇺",
      name: "Australia",
    },

    {
      code: "+86",
      flag: "🇨🇳",
      name: "China",
    },

    {
      code: "+49",
      flag: "🇩🇪",
      name: "Germany",
    },

    {
      code: "+33",
      flag: "🇫🇷",
      name: "France",
    },

    {
      code: "+39",
      flag: "🇮🇹",
      name: "Italy",
    },

    {
      code: "+34",
      flag: "🇪🇸",
      name: "Spain",
    },

    {
      code: "+351",
      flag: "🇵🇹",
      name: "Portugal",
    },

    {
      code: "+31",
      flag: "🇳🇱",
      name: "Netherlands",
    },

    {
      code: "+32",
      flag: "🇧🇪",
      name: "Belgium",
    },

    {
      code: "+41",
      flag: "🇨🇭",
      name: "Switzerland",
    },

    {
      code: "+43",
      flag: "🇦🇹",
      name: "Austria",
    },

    {
      code: "+46",
      flag: "🇸🇪",
      name: "Sweden",
    },

    {
      code: "+47",
      flag: "🇳🇴",
      name: "Norway",
    },

    {
      code: "+45",
      flag: "🇩🇰",
      name: "Denmark",
    },

    {
      code: "+358",
      flag: "🇫🇮",
      name: "Finland",
    },

    {
      code: "+353",
      flag: "🇮🇪",
      name: "Ireland",
    },

    {
      code: "+81",
      flag: "🇯🇵",
      name: "Japan",
    },

    {
      code: "+82",
      flag: "🇰🇷",
      name: "South Korea",
    },

    {
      code: "+65",
      flag: "🇸🇬",
      name: "Singapore",
    },

    {
      code: "+60",
      flag: "🇲🇾",
      name: "Malaysia",
    },

    {
      code: "+62",
      flag: "🇮🇩",
      name: "Indonesia",
    },

    {
      code: "+63",
      flag: "🇵🇭",
      name: "Philippines",
    },

    {
      code: "+66",
      flag: "🇹🇭",
      name: "Thailand",
    },

    {
      code: "+84",
      flag: "🇻🇳",
      name: "Vietnam",
    },

    {
      code: "+880",
      flag: "🇧🇩",
      name: "Bangladesh",
    },

    {
      code: "+977",
      flag: "🇳🇵",
      name: "Nepal",
    },

    {
      code: "+94",
      flag: "🇱🇰",
      name: "Sri Lanka",
    },

    {
      code: "+852",
      flag: "🇭🇰",
      name: "Hong Kong",
    },

    {
      code: "+853",
      flag: "🇲🇴",
      name: "Macau",
    },

    {
      code: "+886",
      flag: "🇹🇼",
      name: "Taiwan",
    },

    {
      code: "+98",
      flag: "🇮🇷",
      name: "Iran",
    },

    {
      code: "+90",
      flag: "🇹🇷",
      name: "Turkey",
    },

    {
      code: "+972",
      flag: "🇮🇱",
      name: "Israel",
    },

    {
      code: "+961",
      flag: "🇱🇧",
      name: "Lebanon",
    },

    {
      code: "+20",
      flag: "🇪🇬",
      name: "Egypt",
    },

    {
      code: "+212",
      flag: "🇲🇦",
      name: "Morocco",
    },

    {
      code: "+216",
      flag: "🇹🇳",
      name: "Tunisia",
    },

    {
      code: "+213",
      flag: "🇩🇿",
      name: "Algeria",
    },

    {
      code: "+27",
      flag: "🇿🇦",
      name: "South Africa",
    },

    {
      code: "+234",
      flag: "🇳🇬",
      name: "Nigeria",
    },

    {
      code: "+233",
      flag: "🇬🇭",
      name: "Ghana",
    },

    {
      code: "+254",
      flag: "🇰🇪",
      name: "Kenya",
    },

    {
      code: "+52",
      flag: "🇲🇽",
      name: "Mexico",
    },

    {
      code: "+54",
      flag: "🇦🇷",
      name: "Argentina",
    },

    {
      code: "+55",
      flag: "🇧🇷",
      name: "Brazil",
    },

    {
      code: "+56",
      flag: "🇨🇱",
      name: "Chile",
    },

    {
      code: "+57",
      flag: "🇨🇴",
      name: "Colombia",
    },

    {
      code: "+58",
      flag: "🇻🇪",
      name: "Venezuela",
    },

    {
      code: "+51",
      flag: "🇵🇪",
      name: "Peru",
    },

    {
      code: "+593",
      flag: "🇪🇨",
      name: "Ecuador",
    },

    {
      code: "+7",
      flag: "🇷🇺",
      name: "Russia",
    },

    {
      code: "+380",
      flag: "🇺🇦",
      name: "Ukraine",
    },

    {
      code: "+48",
      flag: "🇵🇱",
      name: "Poland",
    },

    {
      code: "+420",
      flag: "🇨🇿",
      name: "Czech Republic",
    },

    {
      code: "+36",
      flag: "🇭🇺",
      name: "Hungary",
    },

    {
      code: "+40",
      flag: "🇷🇴",
      name: "Romania",
    },

    {
      code: "+30",
      flag: "🇬🇷",
      name: "Greece",
    },

    {
      code: "+64",
      flag: "🇳🇿",
      name: "New Zealand",
    },

  ];


  // ==========================================
  // JOBS
  // ==========================================

  const jobList = [

    {
      title: "Operation Executive",
      industry: "Trucking & Logistics",
      type: "Contract based",
      inhouse: "Remote",
      desc:
        "Manage daily fleet operations, route planning, and ensure timely delivery of goods.",
    },

    {
      title: "Sales Executive",
      industry: "Trucking & Logistics",
      type: "Contract based",
      inhouse: "Remote",
      desc:
        "Drive new sales opportunities, build client relationships, and expand logistics market share.",
    },

    {
      title: "VoIP / Telecom & Dialers Manager",
      industry: "Telecommunication",
      type: "Contract based",
      inhouse: "Remote",
      desc:
        "Oversee VoIP systems and dialer operations, ensuring high-quality call connectivity and performance.",
    },

    {
      title: "Accounts Lead",
      industry: "Finance & Banking",
      type: "Contract based",
      inhouse: "Inhouse (Pakistan)",
      desc:
        "Manage financial accounts, oversee auditing, and ensure compliance with banking regulations.",
    },

    {
      title: "License Agents",
      industry: "Medical & Healthcare",
      type: "Contract based",
      inhouse: "Remote",
      desc:
        "Handle medical licensing processes, verify credentials, and assist with compliance documentation.",
    },

    {
      title: "Verifiers & Closers",
      industry: "Medical & Healthcare",
      type: "Contract based",
      inhouse: "Remote",
      desc:
        "Verify patient and insurance information and efficiently close medical service cases.",
    },

  ];


  // ==========================================
  // BENEFITS
  // ==========================================

  const benefitsList = [

    {
      icon: (
        <FaTrophy className="text-[#FF6B35] text-2xl" />
      ),
      title: "Competitive Salary",
      desc:
        "We offer market-leading compensation packages.",
    },

    {
      icon: (
        <FaUsers className="text-[#FF6B35] text-2xl" />
      ),
      title: "Great Culture",
      desc:
        "Collaborative, innovative, and inclusive workplace.",
    },

    {
      icon: (
        <FaChartLine className="text-[#FF6B35] text-2xl" />
      ),
      title: "Growth Opportunities",
      desc:
        "Continuous learning and career advancement programs.",
    },

  ];


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <div className="bg-[#FAF9F6] min-h-screen font-manrope pb-16 overflow-x-hidden">


      {/* ==========================================
          TOAST
      ========================================== */}

      {toast.show && (

        <div
          className={`
            fixed top-5 left-1/2
            -translate-x-1/2
            z-[999999]
            w-[calc(100%-30px)]
            max-w-md
            px-5 py-4
            rounded-2xl
            shadow-2xl
            flex items-center gap-3
            animate-slideDown
            ${toast.type === "success"
              ? "bg-[#111111] border-2 border-[#FF6B35]"
              : "bg-[#111111] border-2 border-red-500"
            }
          `}
        >

          <span className="text-2xl">
            {toast.icon}
          </span>

          <span className="text-white font-medium text-sm flex-1">
            {toast.message}
          </span>

          <button
            onClick={() =>
              setToast({
                show: false,
                message: "",
                type: "",
                icon: "",
              })
            }
            className="text-white/50 hover:text-white transition-colors"
          >
            <FaTimes />
          </button>

        </div>

      )}


      {/* ==========================================
          HERO
      ========================================== */}

      <section className="pt-16 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto">

        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-10 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center shadow-xl">

          <div className="w-full lg:w-3/5 space-y-5">

            <p className="text-[#FF6B35] font-medium text-sm tracking-[3px] uppercase animate-slideInLeft">
              Join Our Team
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight animate-slideInLeft">
              Build Your Career With{" "}
              <span className="text-white">
                TRANS
              </span>
              <span className="text-[#FF6B35]">
                NOVA
              </span>
            </h1>

            <p className="text-[#9B9B8A] text-base leading-relaxed max-w-lg">
              We are looking for passionate, talented individuals
              to join our growing family. If you are ready to make
              an impact, we want to hear from you.
            </p>

            <div className="pt-2">

              <a
                href="#jobs"
                className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-full font-medium hover:bg-[#E85C2D] transition-all duration-300 hover:scale-105"
              >
                View Open Positions
                <FaArrowRight className="text-xs" />
              </a>

            </div>

          </div>


          <div className="w-full lg:w-2/5">

            <img
              src="/home6.png"
              alt="Team working"
              className="w-full h-56 lg:h-64 object-cover rounded-2xl shadow-lg"
            />

          </div>

        </div>

      </section>


      {/* ==========================================
          BENEFITS
      ========================================== */}

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">
            Why Join{" "}
            <span className="text-[#FF6B35]">
              Us?
            </span>
          </h2>

          <div className="w-12 h-[3px] bg-[#FF6B35] mx-auto mt-3 rounded-full"></div>

          <p className="text-[#666666] mt-4 max-w-xl mx-auto">
            We invest in our people, providing the tools and
            environment to thrive.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {benefitsList.map(
            (item, index) => (

              <div
                key={index}
                data-index={index}
                className={`
                  benefit-card
                  bg-white
                  p-8
                  rounded-2xl
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-500
                  text-center
                  border
                  border-[#EDEAE4]
                  hover:-translate-y-2
                  ${animatedBenefits.includes(
                  String(index)
                )
                    ? "animate-fadeInUp"
                    : "opacity-0"
                  }
                `}
                style={{
                  animationDelay:
                    `${index * 150}ms`,
                }}
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF9F6] flex items-center justify-center mb-4">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold text-[#111111] mb-2">
                  {item.title}
                </h3>

                <p className="text-[#777777] text-sm">
                  {item.desc}
                </p>

              </div>

            )
          )}

        </div>

      </section>


      {/* ==========================================
          JOBS
      ========================================== */}

      <section
        id="jobs"
        className="px-6 lg:px-12 max-w-7xl mx-auto"
      >

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

          <div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">
              Open Positions
            </h2>

            <div className="w-10 h-[3px] bg-[#FF6B35] mt-2 rounded-full"></div>

          </div>

          <p className="text-[#777777] text-sm bg-white px-4 py-2 rounded-full border border-[#EDEAE4] w-fit">
            {jobList.length} Jobs Available
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {jobList.map(
            (job, index) => (

              <div
                key={index}
                data-index={index}
                className={`
                  job-card
                  bg-white
                  p-6
                  rounded-2xl
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-500
                  border
                  border-[#EDEAE4]
                  group
                  hover:-translate-y-1
                  ${animatedJobs.includes(
                  String(index)
                )
                    ? "animate-fadeInUp"
                    : "opacity-0"
                  }
                `}
                style={{
                  animationDelay:
                    `${index * 100}ms`,
                }}
              >

                <div className="flex items-start gap-3 mb-3">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all">

                    <FaBriefcase />

                  </div>


                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#FF6B35] transition-colors">

                        {job.title}

                      </h3>

                      <span className="bg-[#FF6B35]/10 text-[#FF6B35] text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">

                        {job.type}

                      </span>

                    </div>


                    <div className="flex flex-wrap gap-2 mt-1.5 text-xs text-[#777777]">

                      <span className="font-medium text-[#111111]">
                        {job.industry}
                      </span>

                      <span>
                        •
                      </span>

                      <span>
                        {job.inhouse}
                      </span>

                    </div>

                  </div>

                </div>


                <p className="text-[#555555] text-sm leading-relaxed mb-5">
                  {job.desc}
                </p>


                <button
                  onClick={() =>
                    openApplyModal(job.title)
                  }
                  className="w-full py-3 bg-[#FAF9F6] text-[#111111] font-semibold rounded-xl hover:bg-[#FF6B35] hover:text-white transition-all duration-300 border border-[#EDEAE4] hover:border-[#FF6B35] text-sm cursor-pointer flex items-center justify-center gap-2"
                >

                  Apply Now

                  <FaArrowRight className="text-xs" />

                </button>

              </div>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          APPLICATION MODAL
      ===================================================== */}

      {isModalOpen && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-5 animate-fadeIn">

          <div className="bg-[#111111] w-full max-w-6xl max-h-[94vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#2A2A2A] animate-slideUp">


            {/* ==========================================
                MODAL TOP BAR
            ========================================== */}

            <div className="sticky top-0 z-30 bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A] px-5 sm:px-8 py-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center">

                  <FaBriefcase className="text-[#FF6B35]" />

                </div>


                <div>

                  <p className="text-white font-semibold text-sm">
                    Career Application
                  </p>

                  <p className="text-[#777777] text-xs">
                    Join the TRANSNOVA team
                  </p>

                </div>

              </div>


              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-xl border border-[#333333] text-[#999999] hover:text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] flex items-center justify-center transition-all duration-300"
              >

                <FaTimes />

              </button>

            </div>


            {/* ==========================================
                TWO COLUMN
            ========================================== */}

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">


              {/* ======================================
                  LEFT — APPLICATION FORM
              ====================================== */}

              <div className="p-5 sm:p-8 lg:p-10">


                {/* Heading */}

                <div className="mb-8">

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 mb-4">

                    <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>

                    <span className="text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">
                      Apply Now
                    </span>

                  </div>


                  <h3 className="text-2xl sm:text-3xl font-bold text-white">

                    Apply for{" "}

                    <span className="text-[#FF6B35]">
                      {selectedJob}
                    </span>

                  </h3>


                  <p className="text-[#888888] text-sm mt-2 max-w-xl">

                    Complete the application below. Our recruitment
                    team will review your profile and contact you if
                    your application is shortlisted.

                  </p>

                </div>


                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >


                  {/* ==================================
                      PERSONAL INFORMATION
                  ================================== */}

                  <div>

                    <div className="flex items-center gap-3 mb-4">

                      <div className="h-px flex-1 bg-[#2A2A2A]"></div>

                      <span className="text-[#777777] text-xs uppercase tracking-widest">
                        Personal Information
                      </span>

                      <div className="h-px flex-1 bg-[#2A2A2A]"></div>

                    </div>


                    {/* Name */}

                    <div className="mb-4">

                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                        Full Name

                        <span className="text-[#FF6B35] ml-1">
                          *
                        </span>

                      </label>


                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/30 transition-all placeholder:text-[#555555]"
                      />

                    </div>


                    {/* Email + Phone */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                      {/* Email */}

                      <div>

                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                          Work Email

                          <span className="text-[#FF6B35] ml-1">
                            *
                          </span>

                        </label>


                        <div className="relative">

                          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm" />


                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full bg-[#181818] border border-[#303030] text-white text-sm pl-11 pr-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/30 transition-all placeholder:text-[#555555]"
                          />

                        </div>

                      </div>


                      {/* Phone */}

                      <div>

                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                          Phone / WhatsApp

                          <span className="text-[#FF6B35] ml-1">
                            *
                          </span>

                        </label>


                        <div className="flex gap-2">

                          <select
                            value={countryCode}
                            onChange={(e) =>
                              setCountryCode(
                                e.target.value
                              )
                            }
                            required
                            className="w-[105px] bg-[#181818] border border-[#303030] text-white text-sm px-2 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] cursor-pointer"
                          >

                            <option value="">
                              Code
                            </option>

                            {countriesList.map(
                              (country, index) => (

                                <option
                                  key={index}
                                  value={country.code}
                                >
                                  {country.flag}{" "}
                                  {country.code}
                                </option>

                              )
                            )}

                          </select>


                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="3001234567"
                            className="flex-1 min-w-0 bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/30 transition-all placeholder:text-[#555555]"
                          />

                        </div>

                      </div>

                    </div>


                    {/* City */}

                    <div className="mt-4">

                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                        City & Country

                        <span className="text-[#FF6B35] ml-1">
                          *
                        </span>

                      </label>


                      <div className="relative">

                        <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm" />


                        <input
                          type="text"
                          name="city"
                          required
                          placeholder="Houston, USA / Karachi, Pakistan"
                          className="w-full bg-[#181818] border border-[#303030] text-white text-sm pl-11 pr-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/30 transition-all placeholder:text-[#555555]"
                        />

                      </div>

                    </div>

                  </div>


                  {/* ==================================
                      PROFESSIONAL DETAILS
                  ================================== */}

                  <div>

                    <div className="flex items-center gap-3 mb-4">

                      <div className="h-px flex-1 bg-[#2A2A2A]"></div>

                      <span className="text-[#777777] text-xs uppercase tracking-widest">
                        Professional Details
                      </span>

                      <div className="h-px flex-1 bg-[#2A2A2A]"></div>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                      {/* Experience */}

                      <div>

                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                          Years of Experience

                          <span className="text-[#FF6B35] ml-1">
                            *
                          </span>

                        </label>


                        <select
                          name="experience"
                          required
                          className="w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] cursor-pointer"
                        >

                          <option value="">
                            Select experience
                          </option>

                          <option value="0-1">
                            0-1 Years
                          </option>

                          <option value="2-3">
                            2-3 Years
                          </option>

                          <option value="4-6">
                            4-6 Years
                          </option>

                          <option value="7-10">
                            7-10 Years
                          </option>

                          <option value="10+">
                            10+ Years
                          </option>

                        </select>

                      </div>


                      {/* Language */}

                      <div>

                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                          Language Expertise

                          <span className="text-[#FF6B35] ml-1">
                            *
                          </span>

                        </label>


                        <select
                          name="language"
                          required
                          className="w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] cursor-pointer"
                        >

                          <option value="">
                            Select language
                          </option>

                          <option value="English">
                            English
                          </option>

                          <option value="Spanish">
                            Spanish
                          </option>

                          <option value="French">
                            French
                          </option>

                          <option value="Arabic">
                            Arabic
                          </option>

                          <option value="Urdu">
                            Urdu
                          </option>

                        </select>

                      </div>

                    </div>


                    {/* Expertise */}

                    <div className="mt-4">

                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                        Expertise Level

                        <span className="text-[#FF6B35] ml-1">
                          *
                        </span>

                      </label>


                      <select
                        name="level"
                        required
                        className="w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] cursor-pointer"
                      >

                        <option value="">
                          Select expertise level
                        </option>

                        <option value="Beginner">
                          Beginner
                        </option>

                        <option value="Intermediate">
                          Intermediate
                        </option>

                        <option value="Advanced">
                          Advanced
                        </option>

                        <option value="Expert">
                          Expert
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* ==================================
                      SALARY
                  ================================== */}

                  <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                      {/* Salary */}

                      <div>

                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                          Expected Salary

                          <span className="text-[#FF6B35] ml-1">
                            *
                          </span>

                        </label>


                        <input
                          type="number"
                          name="salary"
                          min="0"
                          max="200000"
                          required
                          placeholder="e.g. 60000"
                          className="w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/30 transition-all placeholder:text-[#555555]"
                        />

                      </div>


                      {/* Currency */}

                      <div>

                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                          Currency

                          <span className="text-[#FF6B35] ml-1">
                            *
                          </span>

                        </label>


                        <select
                          name="currency"
                          required
                          className="w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] cursor-pointer"
                        >

                          <option value="">
                            Select currency
                          </option>

                          <option value="USD">
                            USD ($)
                          </option>

                          <option value="PKR">
                            PKR (Rs)
                          </option>

                        </select>

                      </div>

                    </div>


                    {/* Start Date */}

                    <div className="mt-4">

                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                        Available Start Date

                        <span className="text-[#FF6B35] ml-1">
                          *
                        </span>

                      </label>


                      <input
                        type="date"
                        name="start_date"
                        min={
                          new Date()
                            .toISOString()
                            .split("T")[0]
                        }
                        required
                        className="w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] cursor-pointer"
                      />

                    </div>

                  </div>


                  {/* Hidden Job */}

                  <input
                    type="hidden"
                    name="selectedJob"
                    value={selectedJob}
                  />


                  {/* ==================================
                      COVER LETTER
                  ================================== */}

                  <div>

                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">

                      Additional Information / Cover Letter

                      <span className="text-[#555555] ml-1">
                        (Optional)
                      </span>

                    </label>


                    <textarea
                      name="additional_info"
                      rows="5"
                      placeholder="Tell us why you're the perfect fit for this position..."
                      className="w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/30 transition-all placeholder:text-[#555555] resize-none"
                    />

                  </div>


                  {/* ==================================
                      SUBMIT BUTTON
                  ================================== */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF6B35] text-white font-bold py-4 rounded-xl hover:bg-[#E85C2D] transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >

                    {isSubmitting ? (

                      <>

                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>

                        Submitting Application...

                      </>

                    ) : (

                      <>

                        Submit Application

                        <FaArrowRight />

                      </>

                    )}

                  </button>


                  {/* Security */}

                  <div className="flex items-center justify-center gap-2 text-[#555555] text-xs">

                    <FaShieldAlt />

                    <span>
                      Your information is kept confidential and secure.
                    </span>

                  </div>

                </form>

              </div>


              {/* ======================================
                  RIGHT — CONTACT PANEL
              ====================================== */}

              <div className="bg-[#181818] border-l border-[#2A2A2A] relative overflow-hidden">


                {/* Decorative */}

                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#FF6B35]/10 blur-3xl"></div>

                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#FF6B35]/5 blur-3xl"></div>


                <div className="relative z-10 p-6 sm:p-8 lg:p-9 h-full flex flex-col">


                  {/* Contact Header */}

                  <div className="mb-8">

                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B35] flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20">

                      <FaEnvelope className="text-white text-lg" />

                    </div>


                    <h3 className="text-2xl font-bold text-white mb-3">
                      Let's Stay Connected
                    </h3>


                    <p className="text-[#888888] text-sm leading-relaxed">

                      Have questions about the position or
                      application process? Our team is here to help.

                    </p>

                  </div>


                  {/* ==================================
                      CONTACT ITEMS
                  ================================== */}

                  <div className="space-y-3">


                    {/* EMAIL */}

                    <a
                      href="mailto:your-email@gmail.com"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#FF6B35]/50 hover:bg-[#1C1C1C] transition-all duration-300"
                    >

                      <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">

                        <FaEnvelope className="text-[#FF6B35] group-hover:text-white transition-colors" />

                      </div>


                      <div className="min-w-0">

                        <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">
                          Email
                        </p>

                        <p className="text-white text-sm truncate">
                          your-email@gmail.com
                        </p>

                      </div>

                    </a>


                    {/* WHATSAPP */}

                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#FF6B35]/50 hover:bg-[#1C1C1C] transition-all duration-300"
                    >

                      <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">

                        <FaWhatsapp className="text-[#FF6B35] group-hover:text-white transition-colors text-lg" />

                      </div>


                      <div>

                        <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">
                          WhatsApp
                        </p>

                        <p className="text-white text-sm">
                          +1 404-910-4083
                        </p>

                      </div>

                    </a>


                    {/* PHONE */}

                    <a
                      href="tel:+923001234567"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#FF6B35]/50 hover:bg-[#1C1C1C] transition-all duration-300"
                    >

                      <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">

                        <FaPhone className="text-[#FF6B35] group-hover:text-white transition-colors" />

                      </div>


                      <div>

                        <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">
                          Call Us
                        </p>

                        <p className="text-white text-sm">
                          +92 300 1234567
                        </p>

                      </div>

                    </a>


                    {/* LOCATION */}

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A]">

                      <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">

                        <FaMapMarkerAlt className="text-[#FF6B35]" />

                      </div>


                      <div>

                        <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">
                          Location
                        </p>

                        <p className="text-white text-sm">
                          Pakistan
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* ==================================
                      SOCIAL MEDIA
                  ================================== */}

                  <div className="mt-8">

                    <p className="text-[#666666] text-[10px] uppercase tracking-widest font-semibold mb-4">
                      Follow Us
                    </p>


                    <div className="flex gap-3">


                      {/* Facebook */}

                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-11 h-11 rounded-xl bg-[#111111] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:-translate-y-1 transition-all duration-300"
                      >

                        <FaFacebookF />

                      </a>


                      {/* Twitter */}

                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="w-11 h-11 rounded-xl bg-[#111111] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:-translate-y-1 transition-all duration-300"
                      >

                        <FaTwitter />

                      </a>


                      {/* Instagram */}

                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-11 h-11 rounded-xl bg-[#111111] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:-translate-y-1 transition-all duration-300"
                      >

                        <FaInstagram />

                      </a>

                    </div>

                  </div>


                  {/* ==================================
                      CONTACT PAGE CTA
                  ================================== */}

                  <div className="mt-auto pt-8">

                    <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FF6B35]/15 to-transparent border border-[#FF6B35]/20">


                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <p className="text-white font-semibold text-sm mb-1">
                            Need more information?
                          </p>

                          <p className="text-[#777777] text-xs leading-relaxed">

                            Visit our Contact page for complete
                            company information and support.

                          </p>

                        </div>


                        <FaExternalLinkAlt className="text-[#FF6B35] text-sm mt-1 shrink-0" />

                      </div>


                      <a
                        href="/contact"
                        className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#FF6B35] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#E85C2D] transition-all duration-300"
                      >

                        Contact Us

                        <FaArrowRight className="text-xs" />

                      </a>

                    </div>


                    {/* Availability */}

                    <div className="flex items-center gap-2 mt-5">

                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

                      <FaClock className="text-[#555555] text-xs" />

                      <span className="text-[#666666] text-xs">

                        Our recruitment team is available to assist you.

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      {isSuccessOpen && (

        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">

          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-10 text-center relative animate-scaleUp">


            {/* Close */}

            <button
              onClick={closeSuccess}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5F5F5] text-[#777777] hover:bg-[#FF6B35] hover:text-white flex items-center justify-center transition-all"
            >

              <FaTimes />

            </button>


            {/* Success Icon */}

            <div className="w-24 h-24 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">

              <FaCheckCircle className="text-green-500 text-6xl" />

            </div>


            <h3 className="text-3xl font-bold text-[#111111] mb-2">
              Application Submitted!
            </h3>


            <div className="w-12 h-1 bg-[#FF6B35] mx-auto rounded-full mb-5"></div>


            <p className="text-[#555555] text-base mb-4 leading-relaxed">

              Your application has been successfully submitted for:

            </p>


            <div className="bg-[#FF6B35]/10 border-2 border-[#FF6B35]/20 rounded-xl p-4 mb-6">

              <span className="text-[#FF6B35] font-bold text-lg block">

                {selectedJob}

              </span>

            </div>


            <div className="bg-[#111111] text-white rounded-xl p-4 mb-6 text-left space-y-2">

              <p className="text-sm text-[#9B9B8A]">

                📧 We will get back to you within 24 hours.

              </p>

              <p className="text-sm text-[#9B9B8A]">

                📋 Please check your email for confirmation.

              </p>

            </div>


            <button
              onClick={closeSuccess}
              className="w-full bg-[#FF6B35] text-white font-semibold py-3.5 rounded-xl hover:bg-[#E85C2D] transition-all duration-300 shadow-lg shadow-orange-500/20"
            >

              Got it, Thanks!

            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          CUSTOM CSS
      ===================================================== */}

      <style>{`

        /* ==========================================
           FADE IN UP
        ========================================== */

        @keyframes fadeInUp {

          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        .animate-fadeInUp {

          animation:
            fadeInUp
            0.6s
            ease-out
            forwards;

        }


        /* ==========================================
           FADE IN
        ========================================== */

        @keyframes fadeIn {

          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }

        }


        .animate-fadeIn {

          animation:
            fadeIn
            0.3s
            ease-out
            forwards;

        }


        /* ==========================================
           SLIDE UP
        ========================================== */

        @keyframes slideUp {

          from {
            opacity: 0;
            transform:
              translateY(30px)
              scale(0.96);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }

        }


        .animate-slideUp {

          animation:
            slideUp
            0.4s
            ease-out
            forwards;

        }


        /* ==========================================
           SLIDE DOWN
        ========================================== */

        @keyframes slideDown {

          from {
            opacity: 0;
            transform:
              translateX(-50%)
              translateY(-20px);
          }

          to {
            opacity: 1;
            transform:
              translateX(-50%)
              translateY(0);
          }

        }


        .animate-slideDown {

          animation:
            slideDown
            0.4s
            ease-out
            forwards;

        }


        /* ==========================================
           SLIDE LEFT
        ========================================== */

        @keyframes slideInLeft {

          from {
            opacity: 0;
            transform: translateX(-40px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }


        .animate-slideInLeft {

          animation:
            slideInLeft
            0.6s
            ease-out
            forwards;

        }


        /* ==========================================
           SCALE UP
        ========================================== */

        @keyframes scaleUp {

          from {
            opacity: 0;
            transform: scale(0.9);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }

        }


        .animate-scaleUp {

          animation:
            scaleUp
            0.4s
            ease-out
            forwards;

        }


        /* ==========================================
           SPINNER
        ========================================== */

        @keyframes spin {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }


        .animate-spin {

          animation:
            spin
            0.8s
            linear
            infinite;

        }


        /* ==========================================
           PULSE
        ========================================== */

        @keyframes pulse {

          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.5;
          }

        }


        .animate-pulse {

          animation:
            pulse
            2s
            cubic-bezier(
              0.4,
              0,
              0.6,
              1
            )
            infinite;

        }


        /* ==========================================
           INITIAL CARD STATE
        ========================================== */

        .benefit-card,
        .job-card {

          opacity: 0;

        }


        /* ==========================================
           SCROLLBAR
        ========================================== */

        ::-webkit-scrollbar {

          width: 6px;

        }


        ::-webkit-scrollbar-track {

          background: #111111;

        }


        ::-webkit-scrollbar-thumb {

          background: #444444;

          border-radius: 20px;

        }


        ::-webkit-scrollbar-thumb:hover {

          background: #FF6B35;

        }


        /* ==========================================
           DATE INPUT
        ========================================== */

        input[type="date"]::-webkit-calendar-picker-indicator {

          filter: invert(1);

          cursor: pointer;

        }


        /* ==========================================
           SELECT OPTION
        ========================================== */

        select option {

          background: #181818;

          color: white;

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 640px) {

          .animate-slideUp {

            animation-duration: 0.3s;

          }

        }

      `}</style>

    </div>

  );

};


export default Careers;