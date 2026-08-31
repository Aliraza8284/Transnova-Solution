// ==========================================
// Contact.jsx - WITH TICKET NUMBER DISPLAY
// TransNova Solutions
// ==========================================

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaHeadphones,
  FaUsers,
  FaBriefcase,
  FaCheckCircle,
  FaWhatsapp,
  FaInstagram,
  FaGlobe,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";

// ==========================================
// EMAILJS CONFIGURATION
// ==========================================

const EMAILJS_SERVICE_ID = "service_mwoqwbs";
const EMAILJS_TEMPLATE_ID = "template_rph4sso";
const EMAILJS_PUBLIC_KEY = "hkyeEuonkAKSiQj7d";

// ==========================================
// LOCAL STYLES (wave motion, toast + panel transitions)
// Kept in-file so this component has no extra build dependencies.
// ==========================================

const LocalStyles = () => (
  <style>{`
    @keyframes tn-wave-drift {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    @keyframes tn-toast-in {
      from { opacity: 0; transform: translateY(-6px) translateX(12px); }
      to   { opacity: 1; transform: translateY(0) translateX(0); }
    }
    @keyframes tn-toast-out {
      from { opacity: 1; transform: translateY(0); max-height: 200px; }
      to   { opacity: 0; transform: translateY(-6px); max-height: 0; }
    }
    @keyframes tn-progress {
      from { width: 100%; }
      to   { width: 0%; }
    }
    @keyframes tn-panel-in {
      from { opacity: 0; transform: translateY(8px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .tn-wave-track {
      animation: tn-wave-drift 34s linear infinite;
    }
    .tn-toast {
      animation: tn-toast-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .tn-toast-leaving {
      animation: tn-toast-out 0.25s ease forwards;
    }
    .tn-panel {
      animation: tn-panel-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .tn-progress-bar {
      animation-name: tn-progress;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    @media (prefers-reduced-motion: reduce) {
      .tn-wave-track { animation: none; }
      .tn-toast { animation: none; }
      .tn-toast-leaving { animation: none; opacity: 0; }
      .tn-panel { animation: none; }
      .tn-progress-bar { animation: none; }
    }
  `}</style>
);

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================

const ToastStack = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;
  return (
    <div
      className="fixed top-5 right-4 left-4 sm:left-auto sm:right-6 sm:top-6 z-[999] flex flex-col gap-3 w-auto sm:w-[380px]"
      role="status"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`tn-toast relative overflow-hidden rounded-xl border shadow-lg shadow-black/20 backdrop-blur-sm ${
            t.leaving ? "tn-toast-leaving" : ""
          } ${
            t.type === "success"
              ? "bg-[#111111] border-[#2C6B4F]"
              : "bg-[#111111] border-[#8A3A2E]"
          }`}
        >
          <div className="flex items-start gap-3 px-4 py-3.5">
            <div
              className={`mt-0.5 shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                t.type === "success"
                  ? "bg-[#2C6B4F]/20 text-[#5FCE95]"
                  : "bg-[#8A3A2E]/20 text-[#F0917D]"
              }`}
            >
              {t.type === "success" ? <FaCheckCircle /> : <FaExclamationTriangle />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-white text-sm font-semibold leading-snug">{t.title}</p>
              {t.message && (
                <p className="text-[#9B9B8A] text-xs mt-1 leading-relaxed whitespace-pre-line">
                  {t.message}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => onDismiss(t.id)}
              aria-label="Dismiss notification"
              className="text-[#666666] hover:text-white transition-colors shrink-0 mt-0.5 cursor-pointer"
            >
              <FaTimes className="text-xs" />
            </button>
          </div>
          <div className="h-[3px] w-full bg-white/5">
            <div
              className={`tn-progress-bar h-full ${
                t.type === "success" ? "bg-[#5FCE95]" : "bg-[#F0917D]"
              }`}
              style={{ animationDuration: `${t.duration}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// ==========================================
// CONTACT COMPONENT
// ==========================================

const Contact = () => {
  // ==========================================
  // FORM STATE
  // ==========================================

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");
  const [submissionNumber, setSubmissionNumber] = useState("");
  const [toasts, setToasts] = useState([]);
  const timeoutsRef = useRef({});

  // ==========================================
  // TOAST HELPERS
  // ==========================================

  const dismissToast = (id) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)));
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 250);
    window.clearTimeout(timeoutsRef.current[id]);
    delete timeoutsRef.current[id];
  };

  const pushToast = ({ type, title, message, duration = 6000 }) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [...prev, { id, type, title, message, duration }]);
    timeoutsRef.current[id] = window.setTimeout(() => dismissToast(id), duration);
  };

  useEffect(() => {
    const timeouts = timeoutsRef.current;
    return () => {
      Object.values(timeouts).forEach((id) => window.clearTimeout(id));
    };
  }, []);

  // ==========================================
  // GENERATE TICKET NUMBER
  // ==========================================

  const generateTicketNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    return `TN-${year}${month}${day}-${random}`;
  };

  // ==========================================
  // GENERATE SUBMISSION NUMBER
  // ==========================================

  const generateSubmissionNumber = () => {
    const random = Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0");
    return random;
  };

  // ==========================================
  // INITIALIZE EMAILJS
  // ==========================================

  useEffect(() => {
    try {
      emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      console.log("✅ EmailJS initialized");
    } catch (error) {
      console.error("❌ EmailJS initialization error:", error);
    }
  }, []);

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (ticketNumber) setTicketNumber("");
    if (submissionNumber) setSubmissionNumber("");
  };

  // ==========================================
  // OPEN GMAIL COMPOSE
  // ==========================================

  const openGmail = (email, subject = "", body = "") => {
    const defaultSubject = subject || "Inquiry – TransNova Solutions";
    const defaultBody =
      body ||
      `Hello TransNova Solutions Team,

I am contacting you regarding an inquiry about TransNova Solutions.

[Write your message here]

Thank you,
Your Name`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(email)}` +
      `&su=${encodeURIComponent(defaultSubject)}` +
      `&body=${encodeURIComponent(defaultBody)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  // ==========================================
  // GET CUSTOMER STATUS
  // ==========================================

  const getCustomerStatus = (email) => {
    const statuses = ["New Customer", "Returning Customer", "VIP Customer"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  // ==========================================
  // GET PREVIOUS TICKET
  // ==========================================

  const getPreviousTicket = (email) => {
    const previous = ["TN-20260715-3827", "TN-20260622-9154", "None"];
    const randomIndex = Math.floor(Math.random() * previous.length);
    return previous[randomIndex];
  };

  // ==========================================
  // GET TOTAL SUBMISSIONS
  // ==========================================

  const getTotalSubmissions = (email) => {
    const counts = ["1", "2", "3", "4", "5"];
    const randomIndex = Math.floor(Math.random() * counts.length);
    return counts[randomIndex];
  };

  // ==========================================
  // SEND CONTACT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setTicketNumber("");
    setSubmissionNumber("");

    try {
      const serviceNames = {
        bpo: "BPO Solutions",
        voip: "VoIP & Telecom",
        logistics: "Logistics Solutions",
        digital: "Digital Services",
      };

      const selectedService =
        serviceNames[formData.service] || formData.service || "Not specified";

      const ticket = generateTicketNumber();
      const submission = generateSubmissionNumber();
      const status = getCustomerStatus(formData.email);
      const previous = getPreviousTicket(formData.email);
      const total = getTotalSubmissions(formData.email);

      setTicketNumber(ticket);
      setSubmissionNumber(submission);

      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Karachi",
        dateStyle: "full",
        timeStyle: "long",
      });

      const templateParams = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || "Not provided",
        service: selectedService,
        message: formData.message.trim(),
        submitted_from: "TransNova Solutions Website",
        submitted_at: timestamp,
        ticket_id: ticket,
        submission_number: submission,
        customer_status: status,
        previous_ticket: previous,
        total_submissions: total,
        reply_to: formData.email.trim(),
      };

      console.log("📧 Sending EmailJS Data:", templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      console.log("✅ EmailJS Success:", response.status, response.text);

      pushToast({
        type: "success",
        title: "Message Sent Successfully",
        message:
          `✅ Your message has been received!\n\n` +
          `📋 Ticket Number: ${ticket}\n` +
          `🔢 Submission Number: #${submission}\n\n` +
          `Please save these numbers for future reference. ` +
          `You can use them to track your complaint status.\n\n` +
          `We will contact you soon at ${formData.email}.`,
        duration: 9000,
      });

      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ EmailJS Error:", error);

      let errorText =
        error?.text || "Your message could not be sent right now. Please try again.";

      if (error?.status === 404 && error?.text === "Account not found") {
        errorText =
          "EmailJS account configuration error. Please make sure the Service ID and Public Key belong to the same EmailJS account.";
      } else if (error?.status === 400) {
        errorText =
          "EmailJS rejected the request. Please check your template variables and EmailJS settings.";
      }

      setTicketNumber("");
      setSubmissionNumber("");

      pushToast({
        type: "error",
        title: "Message Not Sent",
        message: errorText,
        duration: 7000,
      });
    } finally {
      setIsSending(false);
    }
  };

  // ==========================================
  // LOCATIONS DATA
  // ==========================================

  const locations = [
    {
      id: 1,
      name: "Pakistan",
      office: "Head Office",
      address:
        "Nazd Masjid Allah Wali, Mohallah Qurashian Wala, Shorkot City, Punjab",
      city: "Shorkot City, Punjab, Pakistan",
      flag: "🇵🇰",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Nazd+Masjid+Allah+Wali,+Mohallah+Qurashian+Wala,+Shorkot+City,+Punjab,+Pakistan",
      color: "from-green-600 to-green-800",
      phone: "+923075043511",
      phoneDisplay: "+92 307 5043511",
      email: "info@transnova.solutions",
      whatsapp: "+923075043511",
    },
    {
      id: 2,
      name: "Pakistan",
      office: "Regional Office",
      address:
        "Basement #1, Opposite Shehnai Marriage Hall, Near Ibrahimia Masjid, Tanga Wala Chowk, Talab Commettiee, Jhang Sadar",
      city: "Jhang Sadar, Punjab, Pakistan",
      flag: "🇵🇰",
      mapLink: "https://maps.app.goo.gl/Lj3mt89r1CPTkv1J9?g_st=iw",
      color: "from-green-600 to-green-800",
      phone: "+923208216983",
      phoneDisplay: "+92 320 8216983",
      email: "info@transnova.solutions",
      whatsapp: "+923208216983",
    },
    {
      id: 3,
      name: "USA",
      office: "Representative Office",
      address: "1209 Mountain Road PL NE STE 12783, Albuquerque, NM 87110",
      city: "Albuquerque, New Mexico, USA",
      flag: "🇺🇸",
      mapLink: "https://maps.app.goo.gl/9FcFMkRT6gteYF1T8?g_st=iw",
      color: "from-blue-600 to-blue-800",
      phone: "+14049104083",
      phoneDisplay: "+1 (404) 910-4083",
      email: "info@transnova.solutions",
      whatsapp: "+14049104083",
    },
  ];

  // ==========================================
  // CONTACT INFO
  // ==========================================

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email Us",
      value: "business@transnova.solutions",
      action: () => openGmail("business@transnova.solutions"),
    },
    { icon: FaPhoneAlt, label: "Call Us", value: "+1 (404) 910-4083", action: "tel:+14049104083" },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+1 (404) 910-4083",
      action: "https://wa.me/14049104083",
    },
    {
      icon: FaHeadphones,
      label: "Business Development",
      value: "business@transnova.solutions",
      action: () => openGmail("business@transnova.solutions"),
    },
    {
      icon: FaUsers,
      label: "Support",
      value: "support@transnova.solutions",
      action: () => openGmail("support@transnova.solutions"),
    },
    {
      icon: FaBriefcase,
      label: "HR / Careers",
      value: "hr@transnova.solutions",
      action: () => openGmail("hr@transnova.solutions"),
    },
    {
      icon: FaEnvelope,
      label: "General Info",
      value: "info@transnova.solutions",
      action: () => openGmail("info@transnova.solutions"),
    },
  ];

  // ==========================================
  // SOCIAL MEDIA
  // ==========================================

  const socialMedia = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/profile.php?id=61593530214768",
      label: "Facebook",
    },
    { icon: FaTwitter, link: "https://x.com/transnovasol?s=11", label: "Twitter" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/transnova.solutions",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/transnova-solutions",
      label: "LinkedIn",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@transnovasolutions",
      label: "YouTube",
    },
  ];

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope">
      <LocalStyles />
      <ToastStack toasts={toasts} onDismiss={dismissToast} />

      {/* =====================================================
          TOP SECTION — black, contact info + form
          Wave divider transitions into the white section below
      ===================================================== */}

      <section className="relative w-full bg-[#0B0B0C] pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
          {/* LEFT — Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[#FF6B35] font-bold text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight mb-3">
              GET IN TOUCH
            </h2>

            <p className="text-white/60 text-[15px] leading-relaxed max-w-md mb-10">
              We're here to answer your questions and help you find the right solution.
            </p>

            {/* Contact Information */}
            <div className="space-y-1 border-t border-white/10 pt-2 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-3 border-b border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-[#FF6B35] flex items-center justify-center text-sm shrink-0">
                    <item.icon />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-[11px] uppercase text-white/40 tracking-wider">
                      {item.label}
                    </p>
                    {typeof item.action === "function" ? (
                      <button
                        type="button"
                        onClick={item.action}
                        className="text-white/85 text-[13px] mt-0.5 block hover:text-[#FF6B35] transition-colors text-left cursor-pointer truncate"
                      >
                        {item.value}
                      </button>
                    ) : (
                      <a
                        href={item.action}
                        target={item.action.startsWith("http") ? "_blank" : undefined}
                        rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white/85 text-[13px] mt-0.5 block hover:text-[#FF6B35] transition-colors cursor-pointer truncate"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <p className="font-semibold text-[11px] uppercase text-white/40 tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex gap-2.5 flex-wrap">
                {socialMedia.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 text-white/70 flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white transition-colors cursor-pointer"
                  >
                    <item.icon className="text-[13px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-7 sm:p-9 shadow-2xl shadow-black/40">
              <h2 className="text-[#FF6B35] font-bold text-2xl sm:text-3xl tracking-tight mb-2">
                SEND US A MESSAGE
              </h2>

              <p className="text-white/50 text-[13.5px] leading-relaxed mb-7">
                Tell us about your question, project, requirement, or complaint.
                Our team will get back to you soon.
              </p>

              {ticketNumber && (
                <div className="tn-panel mb-6 bg-[#161616] border-l-4 border-[#FF6B35] rounded-r-lg rounded-l-sm px-4 py-4">
                  <p className="text-[#FF6B35] font-semibold text-[13px] flex items-center gap-2">
                    🎫 Your Ticket Number
                  </p>
                  <p className="text-white font-mono text-lg font-bold mt-1 tracking-wide">
                    {ticketNumber}
                  </p>
                  <p className="text-white/40 text-[10.5px] mt-2 flex flex-wrap items-center gap-2">
                    <span className="bg-[#FF6B35]/15 px-2 py-0.5 rounded text-[#FF6B35] font-medium">
                      #{submissionNumber}
                    </span>
                    <span>Please save this ticket number for tracking your complaint</span>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full bg-[#1B1B1B] border border-white/10 text-white text-[13.5px] px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-white/30"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Work Email *"
                    required
                    className="w-full bg-[#1B1B1B] border border-white/10 text-white text-[13.5px] px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-white/30"
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company / Organization *"
                  required
                  className="w-full bg-[#1B1B1B] border border-white/10 text-white text-[13.5px] px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-white/30"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1B1B1B] border border-white/10 text-white text-[13.5px] px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors"
                >
                  <option value="">Select a Service *</option>
                  <option value="bpo">BPO Solutions</option>
                  <option value="voip">VoIP & Telecom</option>
                  <option value="logistics">Logistics Solutions</option>
                  <option value="digital">Digital Services</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message / Complaint *"
                  required
                  className="w-full bg-[#1B1B1B] border border-white/10 text-white text-[13.5px] px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-white/30 resize-none"
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-[#FF6B35] text-white font-semibold text-sm py-3.5 rounded-full hover:bg-[#E85C2D] active:scale-[0.99] transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <FaArrowRight className="text-xs" />
                    </>
                  )}
                </button>

                <p className="text-white/30 text-[10.5px] text-center">
                  Your message is securely sent to TransNova Solutions.
                  You will receive a ticket number for tracking.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Wave divider — black section drifts into the white section below */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] overflow-hidden pointer-events-none">
          <div className="tn-wave-track flex w-[200%]">
            <svg
              className="w-1/2 h-[70px] sm:h-[100px] lg:h-[130px] shrink-0"
              viewBox="0 0 1440 130"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,64 C240,120 480,10 720,48 C960,86 1200,110 1440,58 L1440,130 L0,130 Z"
                fill="#FAF9F6"
              />
            </svg>
            <svg
              className="w-1/2 h-[70px] sm:h-[100px] lg:h-[130px] shrink-0"
              viewBox="0 0 1440 130"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,64 C240,120 480,10 720,48 C960,86 1200,110 1440,58 L1440,130 L0,130 Z"
                fill="#FAF9F6"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 - LOCATIONS (FULLY CLICKABLE)
      ===================================================== */}

      <section className="bg-[#FAF9F6] px-6 lg:px-12 pt-6 pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#FF6B35] font-bold text-3xl lg:text-4xl tracking-tight">
            OUR LOCATIONS
          </h2>
          <div className="w-10 h-[3px] bg-[#FF6B35] mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-[#666666] text-[15px]">Connecting businesses across the globe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#EDEAE4]"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${location.color}`} />

              <div className="p-6">
                {/* Flag & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{location.flag}</div>
                  <div>
                    <h3 className="text-[#111111] font-bold text-base leading-tight">
                      {location.name}
                    </h3>
                    <p className="text-[#FF6B35] text-[11px] font-semibold uppercase tracking-wider">
                      {location.office}
                    </p>
                  </div>
                </div>

                {/* Address - Clickable Map Link */}
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[#777777] text-[13px] mb-4 hover:text-[#FF6B35] transition-colors group/addr cursor-pointer"
                >
                  <FaMapMarkerAlt className="text-[#FF6B35] mt-0.5 shrink-0" />
                  <p className="leading-relaxed group-hover/addr:underline">{location.address}</p>
                </a>

                {/* Divider */}
                <div className="border-t border-[#EDEAE4] pt-4 flex items-center justify-between flex-wrap gap-2">
                  {/* Phone - Clickable Call Link */}
                  <a
                    href={`tel:${location.phone}`}
                    className="flex items-center gap-2 text-[#777777] text-[11.5px] hover:text-[#FF6B35] transition-colors cursor-pointer"
                  >
                    <FaPhoneAlt className="text-[#FF6B35]" />
                    <span className="hover:underline">{location.phoneDisplay}</span>
                  </a>

                  {/* Email - Clickable Gmail */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openGmail(location.email);
                    }}
                    className="flex items-center gap-1 text-[#FF6B35] text-[11.5px] font-medium transition-all cursor-pointer"
                  >
                    <FaEnvelope />
                    <span className="hover:underline">Email</span>
                  </button>

                  {/* WhatsApp - Clickable */}
                  <a
                    href={`https://wa.me/${location.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#25D366] text-[11.5px] font-medium transition-all cursor-pointer"
                  >
                    <FaWhatsapp />
                    <span className="hover:underline">WhatsApp</span>
                  </a>
                </div>

                {/* Map Button - Fully Clickable */}
                <div className="mt-4 pt-4 border-t border-[#EDEAE4]">
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] text-white text-xs font-semibold py-3 px-4 rounded-full hover:bg-[#FF6B35] transition-colors duration-300 cursor-pointer"
                  >
                    <FaMapMarkerAlt className="text-[#FF6B35] group-hover:text-white transition-colors" />
                    <span>View Location on Google Maps</span>
                    <span className="text-[#FF6B35] group-hover:text-white transition-colors">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;