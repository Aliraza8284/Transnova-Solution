// Careers.jsx
// ==========================================

import React, { useState, useEffect } from "react";

import {
  FaBriefcase,
  FaTimes,
  FaArrowRight,
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLockOpen,
  FaUndoAlt,
  FaShieldAlt,
  FaIdCard,
  FaTruck,
  FaUser,
  FaBuilding,
  FaHome,
  FaMap,
  FaCalendarAlt,
  FaChartLine,
  FaLanguage,
  FaStar,
  FaRulerCombined,
  FaMoneyBillWave,
  FaDollarSign,
  FaCalendarCheck,
  FaTools,
  FaCheckCircle,
  FaFileAlt,
  FaPencilAlt,
  FaTrophy,
  FaUsers,       // ← FIX: was used in benefitsList but never imported (crashed the page)
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";


// ==========================================
// SHARED CLASS TOKENS (medium, animated inputs/buttons)
// ==========================================

const INPUT_CLS =
  "peer w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3 rounded-xl " +
  "focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:scale-[1.01] " +
  "hover:border-[#454545] transition-all duration-200 placeholder:text-[#555555]";

const SELECT_CLS =
  "peer w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3 rounded-xl " +
  "focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:scale-[1.01] " +
  "hover:border-[#454545] transition-all duration-200 cursor-pointer";

const BTN_PRIMARY =
  "bg-[#FF6B35] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#E85C2D] " +
  "hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-md shadow-orange-500/20 " +
  "flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100";

const BTN_SECONDARY =
  "bg-[#181818] border border-[#303030] text-white font-semibold text-sm py-3 rounded-xl " +
  "hover:border-[#FF6B35] hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 " +
  "flex items-center justify-center gap-2 cursor-pointer";

const BTN_PRIMARY_SM =
  "bg-[#FF6B35] text-white font-semibold text-xs py-2.5 px-5 rounded-lg hover:bg-[#E85C2D] " +
  "hover:scale-[1.03] active:scale-[0.96] transition-all duration-200 shadow-md shadow-orange-500/20 " +
  "flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100";

const BTN_SECONDARY_SM =
  "bg-[#181818] border border-[#303030] text-white font-semibold text-xs py-2.5 px-5 rounded-lg " +
  "hover:border-[#FF6B35] hover:scale-[1.03] active:scale-[0.96] transition-all duration-200 " +
  "flex items-center justify-center gap-2 cursor-pointer";


// ==========================================
// DRIVER & EQUIPMENT — STATIC OPTIONS
// ==========================================

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

const truckTypes = [
  "Dry Van", "Reefer", "Flatbed", "Step Deck", "Power Only",
  "Box Truck", "Sprinter Van", "Tanker", "Conestoga",
];

const trailerLengths = [
  "26 ft", "28 ft", "40 ft", "45 ft", "48 ft", "53 ft",
];

const accessoriesList = [
  "Liftgate", "Pallet Jack", "Straps", "Chains", "Tarps", "Ramps",
  "E-Track", "Load Bars", "Refrigeration Unit", "Team Drivers",
  "Hazmat Certified",
];

const countriesList = [
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+853", flag: "🇲🇴", name: "Macau" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
];

const jobList = [
  { title: "Operation Executive", industry: "Trucking & Logistics", type: "Contract based", inhouse: "Remote", desc: "Manage daily fleet operations, route planning, and ensure timely delivery of goods." },
  { title: "Sales Executive", industry: "Trucking & Logistics", type: "Contract based", inhouse: "Remote", desc: "Drive new sales opportunities, build client relationships, and expand logistics market share." },
  { title: "VoIP / Telecom & Dialers Manager", industry: "Telecommunication", type: "Contract based", inhouse: "Remote", desc: "Oversee VoIP systems and dialer operations, ensuring high-quality call connectivity and performance." },
  { title: "Accounts Lead", industry: "Finance & Banking", type: "Contract based", inhouse: "Inhouse (Pakistan)", desc: "Manage financial accounts, oversee auditing, and ensure compliance with banking regulations." },
  { title: "License Agents", industry: "Medical & Healthcare", type: "Contract based", inhouse: "Remote", desc: "Handle medical licensing processes, verify credentials, and assist with compliance documentation." },
  { title: "Verifiers & Closers", industry: "Medical & Healthcare", type: "Contract based", inhouse: "Remote", desc: "Verify patient and insurance information and efficiently close medical service cases." },
];

const benefitsList = [
  { icon: <FaTrophy className="text-[#FF6B35] text-2xl" />, title: "Competitive Salary", desc: "We offer market-leading compensation packages." },
  { icon: <FaUsers className="text-[#FF6B35] text-2xl" />, title: "Great Culture", desc: "Collaborative, innovative, and inclusive workplace." },
  { icon: <FaChartLine className="text-[#FF6B35] text-2xl" />, title: "Growth Opportunities", desc: "Continuous learning and career advancement programs." },
];


// ==========================================
// CAREERS COMPONENT
// ==========================================

const Careers = () => {

  // ==========================================
  // STATES — JOB APPLICATION MODAL
  // ==========================================

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [applicationStep, setApplicationStep] = useState(1);
  const [employmentType, setEmploymentType] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toast, setToast] = useState({ show: false, message: "", type: "", icon: "" });
  const [animatedJobs, setAnimatedJobs] = useState([]);
  const [animatedBenefits, setAnimatedBenefits] = useState([]);

  // ==========================================
  // STATES — DRIVER & EQUIPMENT SECTION
  // FIX: this used to share `isModalOpen` with the job-application flow,
  // so clicking "Apply Now" on a job opened the driver form instead.
  // It now has its own dedicated open/close state.
  // ==========================================

  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [driverStep, setDriverStep] = useState(1);
  const [operatorType, setOperatorType] = useState("");
  const [driverCountryCode, setDriverCountryCode] = useState("");
  const [accessories, setAccessories] = useState([]);
  const [isDriverSubmitting, setIsDriverSubmitting] = useState(false);
  const [isDriverSuccessOpen, setIsDriverSuccessOpen] = useState(false);


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
              setAnimatedBenefits((prev) =>
                prev.includes(target.dataset.index) ? prev : [...prev, target.dataset.index]
              );
            }
            if (target.classList.contains("job-card")) {
              setAnimatedJobs((prev) =>
                prev.includes(target.dataset.index) ? prev : [...prev, target.dataset.index]
              );
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".benefit-card, .job-card");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);


  // ==========================================
  // OPEN / CLOSE — JOB APPLICATION MODAL
  // ==========================================

  const openApplyModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setCountryCode("");
    setApplicationStep(1);
    setEmploymentType("");
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCountryCode("");
    setApplicationStep(1);
    setEmploymentType("");
    document.body.style.overflow = "auto";
  };

  const closeSuccess = () => {
    setIsSuccessOpen(false);
    setSelectedJob("");
    document.body.style.overflow = "auto";
  };


  // ==========================================
  // TOAST (shared by job applications + driver applications)
  // ==========================================

  const showToast = (message, type = "success", icon = "✅") => {
    setToast({ show: true, message, type, icon });
    setTimeout(() => setToast({ show: false, message: "", type: "", icon: "" }), 5000);
  };


  // ==========================================
  // HANDLE JOB APPLICATION SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);

      const emailData = {
        to_email: "business@transnova.solutions",
        to_name: "HR Team",
        job_title: formData.get("selectedJob"),
        employment_type: employmentType === "fulltime" ? "Full-time" : "Contract-based",
        candidate_name: formData.get("name"),
        candidate_email: formData.get("email"),
        candidate_phone: countryCode + formData.get("phone"),
        candidate_city: formData.get("city"),
        experience: formData.get("experience"),
        language: formData.get("language"),
        expertise_level: formData.get("level"),
        expected_salary: formData.get("salary") + " " + formData.get("currency"),
        start_date: formData.get("start_date"),
        additional_details: formData.get("additional_info"),
        applied_date: new Date().toLocaleString("en-US", {
          weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
        }),
      };

      const EMAILJS_SERVICE_ID = "service_mwoqwbs";
      const EMAILJS_TEMPLATE_ID = "template_zb04utt";
      const EMAILJS_PUBLIC_KEY = "hkyeEuonkAKSiQj7d";

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData, EMAILJS_PUBLIC_KEY);

      try {
        const backendResponse = await fetch("http://localhost:5000/api/save-application", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        });
        if (!backendResponse.ok) console.warn("Backend returned an error.");
      } catch (backendError) {
        console.warn("Backend save skipped:", backendError);
      }

      closeModal();

      showToast(`Your application was submitted! We'll contact you as soon as possible.`, "success", "✅");

      setTimeout(() => {
        setIsSuccessOpen(true);
        document.body.style.overflow = "hidden";
      }, 800);

    } catch (error) {
      console.error("❌ Job application submission error:", error?.text || error?.message || error);
      showToast("Submission failed. Please try again.", "error", "❌");
    } finally {
      setIsSubmitting(false);
    }
  };


  // ==========================================
  // OPEN / CLOSE — DRIVER & EQUIPMENT MODAL
  // ==========================================

  const openDriverModal = () => {
    setDriverStep(1);
    setOperatorType("");
    setDriverCountryCode("");
    setAccessories([]);
    setIsDriverModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDriverModal = () => {
    setIsDriverModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleAccessory = (item) => {
    setAccessories((prev) => (prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]));
  };

  const resetDriverForm = () => {
    setDriverStep(1);
    setOperatorType("");
    setDriverCountryCode("");
    setAccessories([]);
  };

  const handleDriverSubmit = async (e) => {
    e.preventDefault();
    setIsDriverSubmitting(true);

    try {
      const formData = new FormData(e.target);

      const driverData = {
        to_email: "business@transnova.solutions",
        to_name: "Dispatch Team",
        operator_type: operatorType === "owner" ? "Owner Operator" : "MC Lease Operator",
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        company_name: formData.get("company_name"),
        phone: driverCountryCode + formData.get("phone"),
        email: formData.get("email"),
        home_address: formData.get("home_address"),
        home_state: formData.get("home_state"),
        agreement_date: formData.get("agreement_date"),
        truck_type: formData.get("truck_type"),
        trailer_length: formData.get("trailer_length"),
        accessories: accessories.join(", ") || "None selected",
        applied_date: new Date().toLocaleString("en-US", {
          weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
        }),
      };

      const EMAILJS_SERVICE_ID = "service_mwoqwbs";
      const EMAILJS_TEMPLATE_ID = "template_zb04utt";
      const EMAILJS_PUBLIC_KEY = "hkyeEuonkAKSiQj7d";

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, driverData, EMAILJS_PUBLIC_KEY);

      try {
        const backendResponse = await fetch("http://localhost:5000/api/save-driver-application", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(driverData),
        });
        if (!backendResponse.ok) console.warn("Backend returned an error.");
      } catch (backendError) {
        console.warn("Backend save skipped:", backendError);
      }

      closeDriverModal();
      resetDriverForm();

      showToast("Your driver application was submitted! Dispatch will reach out soon.", "success", "✅");

      setTimeout(() => {
        setIsDriverSuccessOpen(true);
        document.body.style.overflow = "hidden";
      }, 800);

    } catch (error) {
      console.error("❌ Driver submission error:", error?.text || error?.message || error);
      showToast("Submission failed. Please try again.", "error", "❌");
    } finally {
      setIsDriverSubmitting(false);
    }
  };

  const closeDriverSuccess = () => {
    setIsDriverSuccessOpen(false);
    document.body.style.overflow = "auto";
  };


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
          className={`fixed top-5 left-1/2 -translate-x-1/2 z-[999999] w-[calc(100%-30px)] max-w-md px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-slideDown ${
            toast.type === "success" ? "bg-[#111111] border-2 border-[#FF6B35]" : "bg-[#111111] border-2 border-red-500"
          }`}
        >
          <span className="text-2xl">{toast.icon}</span>
          <span className="text-white font-medium text-sm flex-1">{toast.message}</span>
          <button
            onClick={() => setToast({ show: false, message: "", type: "", icon: "" })}
            className="text-white/50 hover:text-white hover:scale-110 active:scale-90 transition-all duration-150"
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
              Build Your Career With <span className="text-white">TRANS</span>
              <span className="text-[#FF6B35]">NOVA</span>
            </h1>
            <p className="text-[#9B9B8A] text-base leading-relaxed max-w-lg">
              We are looking for passionate, talented individuals to join our growing family.
              If you are ready to make an impact, we want to hear from you.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#jobs"
                className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#E85C2D] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                View Open Positions
                <FaArrowRight className="text-xs" />
              </a>

              {/* FIX: was an <a href="#drive-with-tls"> pointing at a section id
                  that doesn't exist anywhere in the page (dead link that did nothing).
                  This now actually opens the driver application modal. */}
              <button
                type="button"
                onClick={openDriverModal}
                className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-white px-6 py-3 rounded-full font-medium text-sm hover:border-[#FF6B35] hover:text-[#FF6B35] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <FaTruck className="text-xs" />
                Drive With TLS
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              src="/truck.png"
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
            Why Join <span className="text-[#FF6B35]">Us?</span>
          </h2>
          <div className="w-12 h-[3px] bg-[#FF6B35] mx-auto mt-3 rounded-full"></div>
          <p className="text-[#666666] mt-4 max-w-xl mx-auto">
            We invest in our people, providing the tools and environment to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefitsList.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`benefit-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center border border-[#EDEAE4] ${
                animatedBenefits.includes(String(index)) ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF9F6] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
              <p className="text-[#777777] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          JOBS
      ========================================== */}
      <section id="jobs" className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">Open Positions</h2>
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-2 rounded-full"></div>
          </div>
          <p className="text-[#777777] text-sm bg-white px-4 py-2 rounded-full border border-[#EDEAE4] w-fit">
            {jobList.length} Jobs Available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobList.map((job, index) => (
            <div
              key={index}
              data-index={index}
              className={`job-card bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-[#EDEAE4] group ${
                animatedJobs.includes(String(index)) ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white group-hover:scale-110 transition-all duration-300">
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
                    <span className="font-medium text-[#111111]">{job.industry}</span>
                    <span>•</span>
                    <span>{job.inhouse}</span>
                  </div>
                </div>
              </div>

              <p className="text-[#555555] text-sm leading-relaxed mb-5">{job.desc}</p>

              <button
                onClick={() => openApplyModal(job.title)}
                className="w-full py-3 bg-[#FAF9F6] text-[#111111] font-semibold rounded-xl hover:bg-[#FF6B35] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-[#EDEAE4] hover:border-[#FF6B35] text-sm cursor-pointer flex items-center justify-center gap-2"
              >
                Apply Now
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          JOB APPLICATION MODAL — 2-STEP WIZARD
          FIX: this modal was referenced only by a comment in the
          original file — no JSX existed for it, so "Apply Now"
          silently opened the (unrelated) driver form instead.
      ===================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-5 animate-fadeIn">
          <div className="bg-[#111111] w-full max-w-2xl max-h-[94vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#2A2A2A] animate-slideUp">

            {/* TOP BAR */}
            <div className="sticky top-0 z-30 bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A] px-5 sm:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center">
                  <FaBriefcase className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{selectedJob}</p>
                  <p className="text-[#777777] text-xs">
                    Step {applicationStep} of 2 · {applicationStep === 1 ? "Employment type" : "Your details"}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-xl border border-[#333333] text-[#999999] hover:text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:rotate-90 flex items-center justify-center transition-all duration-300"
              >
                <FaTimes />
              </button>
            </div>

            {/* PROGRESS BAR */}
            <div className="flex gap-2 px-5 sm:px-8 pt-4">
              <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${applicationStep >= 1 ? "bg-[#FF6B35]" : "bg-[#2A2A2A]"}`} />
              <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${applicationStep >= 2 ? "bg-[#FF6B35]" : "bg-[#2A2A2A]"}`} />
            </div>

            {/* STEP 1 — EMPLOYMENT TYPE */}
            {applicationStep === 1 && (
              <div key="jobstep1" className="p-6 sm:p-8 lg:p-10 animate-step">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  How would you like to <span className="text-[#FF6B35]">work with us?</span>
                </h3>
                <p className="text-[#888888] text-sm mb-6 max-w-xl">
                  Choose the engagement type that fits you best for the {selectedJob} role.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setEmploymentType("fulltime")}
                    className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 ${
                      employmentType === "fulltime" ? "bg-[#1C1C1C] border-[#FF6B35]" : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]"
                    }`}
                  >
                    <span className={`absolute top-4 right-4 w-4 h-4 rounded-full border transition-all duration-300 ${employmentType === "fulltime" ? "border-[#FF6B35] bg-[#FF6B35] scale-110" : "border-[#3A3A3A]"}`} />
                    <FaClock className="text-[#FF6B35] text-xl mb-3" />
                    <p className="text-white font-semibold text-base mb-1">Full-time</p>
                    <p className="text-[#888888] text-xs leading-relaxed">I'm looking for a permanent, full-time role.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEmploymentType("contract")}
                    className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 ${
                      employmentType === "contract" ? "bg-[#1C1C1C] border-[#FF6B35]" : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]"
                    }`}
                  >
                    <span className={`absolute top-4 right-4 w-4 h-4 rounded-full border transition-all duration-300 ${employmentType === "contract" ? "border-[#FF6B35] bg-[#FF6B35] scale-110" : "border-[#3A3A3A]"}`} />
                    <FaFileAlt className="text-[#FF6B35] text-xl mb-3" />
                    <p className="text-white font-semibold text-base mb-1">Contract-based</p>
                    <p className="text-[#888888] text-xs leading-relaxed">I'm open to a fixed-term or project contract.</p>
                  </button>
                </div>

                <button
                  type="button"
                  disabled={!employmentType}
                  onClick={() => setApplicationStep(2)}
                  className={`${BTN_PRIMARY} w-full`}
                >
                  Continue
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            )}

            {/* STEP 2 — CANDIDATE DETAILS */}
            {applicationStep === 2 && (
              <div key="jobstep2" className="p-5 sm:p-8 lg:p-10 animate-step">
                <button
                  type="button"
                  onClick={() => setApplicationStep(1)}
                  className="inline-flex items-center gap-2 text-[#888888] hover:text-[#FF6B35] hover:-translate-x-1 text-xs font-semibold mb-5 transition-all duration-200 cursor-pointer"
                >
                  <FaArrowLeft className="text-[10px]" />
                  Back
                </button>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Tell us about <span className="text-[#FF6B35]">yourself</span>
                </h3>
                <p className="text-[#888888] text-sm mb-6">
                  Applying for <span className="text-white font-medium">{selectedJob}</span> ·{" "}
                  {employmentType === "fulltime" ? "Full-time" : "Contract-based"}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                      Full Name<span className="text-[#FF6B35] ml-1">*</span>
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                      <input type="text" name="name" required placeholder="Enter your full name" className={`${INPUT_CLS} pl-11`} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                      Email<span className="text-[#FF6B35] ml-1">*</span>
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                      <input type="email" name="email" required placeholder="john@example.com" className={`${INPUT_CLS} pl-11`} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                      Phone / WhatsApp<span className="text-[#FF6B35] ml-1">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          required
                          className={`${SELECT_CLS} w-[115px] pl-9 pr-2`}
                        >
                          <option value="">Code</option>
                          {countriesList.map((country, index) => (
                            <option key={index} value={country.code}>
                              {country.flag} {country.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input type="tel" name="phone" required placeholder="3001234567" className={`${INPUT_CLS} flex-1 min-w-0`} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                      City & Country<span className="text-[#FF6B35] ml-1">*</span>
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                      <input type="text" name="city" required placeholder="Houston, USA / Karachi, Pakistan" className={`${INPUT_CLS} pl-11`} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                        Years of Experience<span className="text-[#FF6B35] ml-1">*</span>
                      </label>
                      <div className="relative">
                        <FaChartLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                        <select name="experience" required className={`${SELECT_CLS} pl-11`}>
                          <option value="">Select experience</option>
                          <option value="0-1">0-1 Years</option>
                          <option value="2-3">2-3 Years</option>
                          <option value="4-6">4-6 Years</option>
                          <option value="7-10">7-10 Years</option>
                          <option value="10+">10+ Years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                        Language Expertise<span className="text-[#FF6B35] ml-1">*</span>
                      </label>
                      <div className="relative">
                        <FaLanguage className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                        <select name="language" required className={`${SELECT_CLS} pl-11`}>
                          <option value="">Select language</option>
                          <option value="English">English</option>
                          <option value="Spanish">Spanish</option>
                          <option value="French">French</option>
                          <option value="Arabic">Arabic</option>
                          <option value="Urdu">Urdu</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                      Expertise Level<span className="text-[#FF6B35] ml-1">*</span>
                    </label>
                    <div className="relative">
                      <FaStar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                      <select name="level" required className={`${SELECT_CLS} pl-11`}>
                        <option value="">Select expertise level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                        Expected Salary<span className="text-[#FF6B35] ml-1">*</span>
                      </label>
                      <div className="relative">
                        <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                        <input type="number" name="salary" min="0" max="200000" required placeholder="e.g. 60000" className={`${INPUT_CLS} pl-11`} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                        Currency<span className="text-[#FF6B35] ml-1">*</span>
                      </label>
                      <div className="relative">
                        <FaMoneyBillWave className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                        <select name="currency" required className={`${SELECT_CLS} pl-11`}>
                          <option value="">Select currency</option>
                          <option value="USD">USD ($)</option>
                          <option value="PKR">PKR (Rs)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                      Available Start Date<span className="text-[#FF6B35] ml-1">*</span>
                    </label>
                    <div className="relative">
                      <FaCalendarCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                      <input type="date" name="start_date" min={new Date().toISOString().split("T")[0]} required className={`${SELECT_CLS} pl-11`} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                      Cover Letter / Additional Information <span className="text-[#555555] ml-1">(Optional)</span>
                    </label>
                    <div className="relative">
                      <FaPencilAlt className="absolute left-4 top-4 text-[#666666] text-sm pointer-events-none" />
                      <textarea name="additional_info" rows="4" placeholder="Tell us why you're the perfect fit for this position..." className={`${INPUT_CLS} pl-11 resize-none`} />
                    </div>
                  </div>

                  {/* hidden fields consumed by handleSubmit */}
                  <input type="hidden" name="selectedJob" value={selectedJob} />

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button type="button" onClick={() => setApplicationStep(1)} className={`${BTN_SECONDARY} sm:w-40`}>
                      <FaArrowLeft className="text-xs" />
                      Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className={`${BTN_PRIMARY} flex-1 py-3.5 font-bold`}>
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <FaArrowRight />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[#555555] text-xs pt-1">
                    <FaShieldAlt />
                    <span>Your information is kept confidential and secure.</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          DRIVE WITH TLS — DRIVER & EQUIPMENT APPLICATION
      ===================================================== */}
      {isDriverModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-5 animate-fadeIn">
          <div className="bg-[#111111] w-full max-w-6xl max-h-[94vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#2A2A2A] animate-slideUp">

            {/* MODAL TOP BAR */}
            <div className="sticky top-0 z-30 bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A] px-5 sm:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center">
                  <FaBriefcase className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Driver Application</p>
                  <p className="text-[#777777] text-xs">
                    Step {driverStep} of 2 · {driverStep === 1 ? "Operator type" : "Driver & Equipment"}
                  </p>
                </div>
              </div>
              <button
                onClick={closeDriverModal}
                className="w-10 h-10 rounded-xl border border-[#333333] text-[#999999] hover:text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:rotate-90 flex items-center justify-center transition-all duration-300"
              >
                <FaTimes />
              </button>
            </div>

            {/* PROGRESS BAR */}
            <div className="flex gap-2 px-5 sm:px-8 pt-4">
              <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${driverStep >= 1 ? "bg-[#FF6B35]" : "bg-[#2A2A2A]"}`} />
              <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${driverStep >= 2 ? "bg-[#FF6B35]" : "bg-[#2A2A2A]"}`} />
            </div>

            {/* STEP 1 — OPERATOR TYPE + CONTACT PANEL */}
            {driverStep === 1 && (
              <div key="step1" className="grid grid-cols-1 lg:grid-cols-[320px_1fr] animate-step">
                <div className="bg-[#181818] border-r border-[#2A2A2A] relative overflow-hidden animate-field" style={{ animationDelay: "0ms" }}>
                  <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#FF6B35]/10 blur-3xl"></div>
                  <div className="relative z-10 p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-white mb-2">Drive With Trans Nova Solutions?</h3>
                    <p className="text-[#888888] text-sm leading-relaxed mb-7">
                      Apply once and let our dispatch team keep you loaded. No forced dispatch, no hidden fees —
                      and if you have questions at any step, we're one call away.
                    </p>

                    <div className="space-y-3">
                      <a
                        href="tel:+14049104083"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#FF6B35]/50 hover:bg-[#1C1C1C] hover:scale-[1.02] transition-all duration-300"
                      >
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">
                          <FaPhone className="text-[#FF6B35] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">Call Us Directly</p>
                          <p className="text-white text-sm">+1 (404) 910-4083</p>
                        </div>
                      </a>

                      <a
                        href="mailto:business@transnova.solutions"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#FF6B35]/50 hover:bg-[#1C1C1C] hover:scale-[1.02] transition-all duration-300"
                      >
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">
                          <FaEnvelope className="text-[#FF6B35] group-hover:text-white transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">Drop Us An Email</p>
                          <p className="text-white text-sm truncate">business@transnova.solutions</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A]">
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                          <FaMapMarkerAlt className="text-[#FF6B35]" />
                        </div>
                        <div>
                          <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">Our Location</p>
                          <p className="text-white text-sm">Shorkot  Jhang </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A]">
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                          <FaClock className="text-[#FF6B35]" />
                        </div>
                        <div>
                          <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">Availability</p>
                          <p className="text-white text-sm">24 / 7 Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 mb-5 animate-field" style={{ animationDelay: "60ms" }}>
                    <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
                    <span className="text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">Apply Now</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-field" style={{ animationDelay: "110ms" }}>
                    What's your <span className="text-[#FF6B35]">operator type?</span>
                  </h3>

                  <p className="text-[#888888] text-sm mb-6 max-w-xl animate-field" style={{ animationDelay: "160ms" }}>
                    Choose the onboarding option that best matches your operation.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 animate-field" style={{ animationDelay: "210ms" }}>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-[#999999] bg-[#181818] border border-[#2A2A2A] rounded-full px-3 py-1.5">
                      <FaLockOpen className="text-[#FF6B35] text-[10px]" />
                      No commitment required
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-[#999999] bg-[#181818] border border-[#2A2A2A] rounded-full px-3 py-1.5">
                      <FaUndoAlt className="text-[#FF6B35] text-[10px]" />
                      Withdraw anytime
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-[#999999] bg-[#181818] border border-[#2A2A2A] rounded-full px-3 py-1.5">
                      <FaShieldAlt className="text-[#FF6B35] text-[10px]" />
                      100% confidential
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setOperatorType("owner")}
                      className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 animate-field ${
                        operatorType === "owner" ? "bg-[#1C1C1C] border-[#FF6B35]" : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]"
                      }`}
                      style={{ animationDelay: "260ms" }}
                    >
                      <span className={`absolute top-4 right-4 w-4 h-4 rounded-full border transition-all duration-300 ${operatorType === "owner" ? "border-[#FF6B35] bg-[#FF6B35] scale-110" : "border-[#3A3A3A]"}`} />
                      <FaIdCard className="text-[#FF6B35] text-xl mb-3" />
                      <p className="text-white font-semibold text-base mb-1">Owner Operator</p>
                      <p className="text-[#888888] text-xs leading-relaxed">I already have my own MC/DOT authority.</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOperatorType("lease")}
                      className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 animate-field ${
                        operatorType === "lease" ? "bg-[#1C1C1C] border-[#FF6B35]" : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]"
                      }`}
                      style={{ animationDelay: "310ms" }}
                    >
                      <span className={`absolute top-4 right-4 w-4 h-4 rounded-full border transition-all duration-300 ${operatorType === "lease" ? "border-[#FF6B35] bg-[#FF6B35] scale-110" : "border-[#3A3A3A]"}`} />
                      <FaTruck className="text-[#FF6B35] text-xl mb-3" />
                      <p className="text-white font-semibold text-base mb-1">MC Lease Operator</p>
                      <p className="text-[#888888] text-xs leading-relaxed">I want to operate under TLS authority.</p>
                    </button>
                  </div>

                  <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-7 animate-field" style={{ animationDelay: "360ms" }}>
                    <FaShieldAlt className="text-green-400 mt-0.5 shrink-0 text-sm" />
                    <p className="text-green-300 text-xs leading-relaxed">
                      No commitment, no pressure. This application is non-binding — you can withdraw at any
                      time before signing any agreement.
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={!operatorType}
                    onClick={() => setDriverStep(2)}
                    className={`${BTN_PRIMARY} w-full animate-field`}
                    style={{ animationDelay: "410ms" }}
                  >
                    Continue
                    <FaArrowRight className="text-xs" />
                  </button>

                  <p className="text-[#555555] text-xs text-center mt-4 animate-field" style={{ animationDelay: "450ms" }}>
                    Takes only 3 minutes · Non-binding · Cancel anytime
                  </p>
                </div>
              </div>
            )}

            {/* STEP 2 — DRIVER & EQUIPMENT FORM */}
            {driverStep === 2 && (
              <div key="step2" className="p-5 sm:p-8 lg:p-10 animate-step">
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8 animate-field" style={{ animationDelay: "0ms" }}>
                    <button
                      type="button"
                      onClick={() => setDriverStep(1)}
                      className="inline-flex items-center gap-2 text-[#888888] hover:text-[#FF6B35] hover:-translate-x-1 text-xs font-semibold mb-5 transition-all duration-200 cursor-pointer"
                    >
                      <FaArrowLeft className="text-[10px]" />
                      Back
                    </button>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
                      <span className="text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">Step 2</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Driver & <span className="text-[#FF6B35]">Equipment</span>
                    </h3>

                    <p className="text-[#888888] text-sm mt-2 max-w-xl">
                      Applying as{" "}
                      <span className="text-white font-medium">
                        {operatorType === "owner" ? "Owner Operator" : "MC Lease Operator"}
                      </span>
                      . Please provide your operational and contact details.
                    </p>
                  </div>

                  <form onSubmit={handleDriverSubmit} className="space-y-6">
                    <div className="animate-field" style={{ animationDelay: "60ms" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                        <span className="text-[#777777] text-xs uppercase tracking-widest flex items-center gap-2">
                          <FaUser className="text-[#FF6B35]" />
                          Personal Information
                        </span>
                        <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                            First Name<span className="text-[#FF6B35] ml-1">*</span>
                          </label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                            <input type="text" name="first_name" required placeholder="John" className={`${INPUT_CLS} pl-11`} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                            Last Name<span className="text-[#FF6B35] ml-1">*</span>
                          </label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                            <input type="text" name="last_name" required placeholder="Smith" className={`${INPUT_CLS} pl-11`} />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                          Company Name <span className="text-[#555555] ml-1">(Optional)</span>
                        </label>
                        <div className="relative">
                          <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                          <input type="text" name="company_name" placeholder="Your LLC or DBA name" className={`${INPUT_CLS} pl-11`} />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                          Work Email<span className="text-[#FF6B35] ml-1">*</span>
                        </label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                          <input type="email" name="email" required placeholder="john@example.com" className={`${INPUT_CLS} pl-11`} />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                          Phone / WhatsApp<span className="text-[#FF6B35] ml-1">*</span>
                        </label>
                        <div className="flex gap-2">
                          <div className="relative">
                            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                            <select
                              value={driverCountryCode}
                              onChange={(e) => setDriverCountryCode(e.target.value)}
                              required
                              className={`${SELECT_CLS} w-[115px] pl-9 pr-2`}
                            >
                              <option value="">Code</option>
                              {countriesList.map((country, index) => (
                                <option key={index} value={country.code}>
                                  {country.flag} {country.code}
                                </option>
                              ))}
                            </select>
                          </div>
                          <input type="tel" name="phone" required placeholder="3001234567" className={`${INPUT_CLS} flex-1 min-w-0`} />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                          Home Address<span className="text-[#FF6B35] ml-1">*</span>
                        </label>
                        <div className="relative">
                          <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                          <input type="text" name="home_address" required placeholder="123 Main St, City, State, ZIP" className={`${INPUT_CLS} pl-11`} />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                          Home State<span className="text-[#FF6B35] ml-1">*</span>
                        </label>
                        <div className="relative">
                          <FaMap className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                          <select name="home_state" required className={`${SELECT_CLS} pl-11`}>
                            <option value="">Select state...</option>
                            {usStates.map((state) => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                          Agreement Date<span className="text-[#FF6B35] ml-1">*</span>
                        </label>
                        <div className="relative">
                          <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                          <input
                            type="date"
                            name="agreement_date"
                            required
                            defaultValue={new Date().toISOString().split("T")[0]}
                            className={`${SELECT_CLS} pl-11`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="animate-field" style={{ animationDelay: "180ms" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                        <span className="text-[#777777] text-xs uppercase tracking-widest flex items-center gap-2">
                          <FaTruck className="text-[#FF6B35]" />
                          Equipment Details
                        </span>
                        <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                            Truck Type<span className="text-[#FF6B35] ml-1">*</span>
                          </label>
                          <div className="relative">
                            <FaTruck className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                            <select name="truck_type" required className={`${SELECT_CLS} pl-11`}>
                              <option value="">Select type...</option>
                              {truckTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                            Trailer Length<span className="text-[#FF6B35] ml-1">*</span>
                          </label>
                          <div className="relative">
                            <FaRulerCombined className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                            <select name="trailer_length" required className={`${SELECT_CLS} pl-11`}>
                              <option value="">Select length...</option>
                              {trailerLengths.map((len) => (
                                <option key={len} value={len}>{len}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="animate-field" style={{ animationDelay: "300ms" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                        <span className="text-[#777777] text-xs uppercase tracking-widest flex items-center gap-2">
                          <FaTools className="text-[#FF6B35]" />
                          Optional Accessories
                        </span>
                        <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {accessoriesList.map((item, index) => {
                          const checked = accessories.includes(item);
                          return (
                            <label
                              key={item}
                              className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border cursor-pointer select-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/20 animate-field ${
                                checked ? "bg-[#1C1C1C] border-[#FF6B35]" : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]"
                              }`}
                              style={{ animationDelay: `${320 + index * 25}ms` }}
                            >
                              <input
                                type="checkbox"
                                name="accessories"
                                value={item}
                                checked={checked}
                                onChange={() => toggleAccessory(item)}
                                className="sr-only"
                              />
                              <span
                                className={`w-4 h-4 shrink-0 rounded-md border flex items-center justify-center transition-all duration-200 ${
                                  checked ? "bg-[#FF6B35] border-[#FF6B35] scale-105" : "border-[#3A3A3A] bg-transparent"
                                }`}
                              >
                                <FaCheckCircle className={`text-white text-[10px] transition-all duration-200 ${checked ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
                              </span>
                              <span className={`text-xs font-medium transition-colors ${checked ? "text-white" : "text-[#999999]"}`}>{item}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* hidden fields */}
                    <input type="hidden" name="operator_type" value={operatorType} />

                    <div className="flex flex-col sm:flex-row gap-3 animate-field" style={{ animationDelay: "450ms" }}>
                      <button type="button" onClick={() => setDriverStep(1)} className={`${BTN_SECONDARY} sm:w-40`}>
                        <FaArrowLeft className="text-xs" />
                        Back
                      </button>
                      <button type="submit" disabled={isDriverSubmitting} className={`${BTN_PRIMARY} flex-1 py-3.5 font-bold`}>
                        {isDriverSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <FaArrowRight />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[#555555] text-xs animate-field" style={{ animationDelay: "490ms" }}>
                      <FaShieldAlt />
                      <span>Your information is kept confidential and secure.</span>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          SUCCESS POPUP — JOB APPLICATIONS
      ===================================================== */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-10 text-center relative animate-scaleUp">
            <button
              onClick={closeSuccess}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5F5F5] text-[#777777] hover:bg-[#FF6B35] hover:text-white hover:rotate-90 flex items-center justify-center transition-all duration-300"
            >
              <FaTimes />
            </button>
            <div className="w-24 h-24 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#111111] mb-2">Application Submitted!</h3>
            <div className="w-12 h-1 bg-[#FF6B35] mx-auto rounded-full mb-5"></div>
            <p className="text-[#555555] text-base mb-4 leading-relaxed">
              Your application has been successfully submitted for:
            </p>
            <div className="bg-[#FF6B35]/10 border-2 border-[#FF6B35]/20 rounded-xl p-4 mb-6">
              <span className="text-[#FF6B35] font-bold text-lg block">{selectedJob}</span>
            </div>
            <div className="bg-[#111111] text-white rounded-xl p-4 mb-6 text-left space-y-2">
              <p className="text-sm text-[#9B9B8A]">📞 Please contact us as soon as possible if you don't hear back within 24 hours.</p>
              <p className="text-sm text-[#9B9B8A]">📋 Please check your email for confirmation.</p>
            </div>
            <button onClick={closeSuccess} className={`${BTN_PRIMARY} w-full py-3.5`}>Got it, Thanks!</button>
          </div>
        </div>
      )}

      {/* =====================================================
          SUCCESS POPUP — DRIVER APPLICATIONS
      ===================================================== */}
      {isDriverSuccessOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-10 text-center relative animate-scaleUp">
            <button
              onClick={closeDriverSuccess}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5F5F5] text-[#777777] hover:bg-[#FF6B35] hover:text-white hover:rotate-90 flex items-center justify-center transition-all duration-300"
            >
              <FaTimes />
            </button>
            <div className="w-24 h-24 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#111111] mb-2">Application Submitted!</h3>
            <div className="w-12 h-1 bg-[#FF6B35] mx-auto rounded-full mb-5"></div>
            <p className="text-[#555555] text-base mb-6 leading-relaxed">
              Thanks for applying to drive with TLS. Our dispatch team will review your details and reach out shortly.
            </p>
            <button onClick={closeDriverSuccess} className={`${BTN_PRIMARY_SM} w-full py-3`}>Got it, Thanks!</button>
          </div>
        </div>
      )}

      {/* =====================================================
          CUSTOM CSS
      ===================================================== */}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }

        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-slideUp { animation: slideUp 0.4s ease-out forwards; }

        @keyframes slideDown { from { opacity: 0; transform: translateX(-50%) translateY(-20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        .animate-slideDown { animation: slideDown 0.4s ease-out forwards; }

        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; }

        @keyframes scaleUp { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-scaleUp { animation: scaleUp 0.4s ease-out forwards; }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 0.8s linear infinite; }

        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        @keyframes stepIn { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: translateX(0); } }
        .animate-step { animation: stepIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes fieldIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-field { animation: fieldIn 0.45s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp, .animate-fadeIn, .animate-slideUp, .animate-slideDown,
          .animate-slideInLeft, .animate-scaleUp, .animate-step, .animate-field {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }

        .benefit-card, .job-card { opacity: 0; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111111; }
        ::-webkit-scrollbar-thumb { background: #444444; border-radius: 20px; }
        ::-webkit-scrollbar-thumb:hover { background: #FF6B35; }

        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); cursor: pointer; }

        select option { background: #181818; color: white; }

        @media (max-width: 640px) {
          .animate-slideUp { animation-duration: 0.3s; }
        }
      `}</style>
    </div>
  );
};

export default Careers;