// ==========================================
// Contact.jsx - WITH TICKET NUMBER DISPLAY
// TransNova Solutions
// ==========================================

import React, { useEffect, useState } from "react";
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
} from "react-icons/fa";

// ==========================================
// EMAILJS CONFIGURATION
// ==========================================

const EMAILJS_SERVICE_ID = "service_mwoqwbs";
const EMAILJS_TEMPLATE_ID = "template_rph4sso";
const EMAILJS_PUBLIC_KEY = "hkyeEuonkAKSiQj7d";

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
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [submissionNumber, setSubmissionNumber] = useState("");

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
    if (successMessage) setSuccessMessage("");
    if (errorMessage) setErrorMessage("");
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
    // This is a mock function - in production, check database
    const statuses = ["New Customer", "Returning Customer", "VIP Customer"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  // ==========================================
  // GET PREVIOUS TICKET
  // ==========================================

  const getPreviousTicket = (email) => {
    // This is a mock function - in production, check database
    const previous = ["TN-20260715-3827", "TN-20260622-9154", "None"];
    const randomIndex = Math.floor(Math.random() * previous.length);
    return previous[randomIndex];
  };

  // ==========================================
  // GET TOTAL SUBMISSIONS
  // ==========================================

  const getTotalSubmissions = (email) => {
    // This is a mock function - in production, check database
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
    setSuccessMessage("");
    setErrorMessage("");
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

      // ==========================================
      // TEMPLATE PARAMS FOR EMAIL
      // ==========================================

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

      setSuccessMessage(
        `✅ Your message has been received!\n\n` +
        `📋 Ticket Number: ${ticket}\n` +
        `🔢 Submission Number: #${submission}\n\n` +
        `Please save these numbers for future reference. ` +
        `You can use them to track your complaint status.\n\n` +
        `We will contact you soon at ${formData.email}.`
      );

      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ EmailJS Error:", error);

      if (error?.status === 404 && error?.text === "Account not found") {
        setErrorMessage(
          "EmailJS account configuration error. Please make sure the Service ID and Public Key belong to the same EmailJS account."
        );
      } else if (error?.status === 400) {
        setErrorMessage(
          "EmailJS rejected the request. Please check your template variables and EmailJS settings."
        );
      } else {
        setErrorMessage(
          error?.text || "Your message could not be sent right now. Please try again."
        );
      }
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
      office: "Regional Office",
      address: '31°16\'47.7"N 72°18\'44.7"E, Jhang',
      city: "Jhang, Pakistan",
      flag: "🇵🇰",
      mapLink: "https://maps.app.goo.gl/Lj3mt89r1CPTkv1J9?g_st=iw",
      color: "from-green-600 to-green-800",
    },
    {
      id: 2,
      name: "Pakistan",
      office: "Regional Office",
      address: '30°50\'06.0"N 72°03\'58.8"E, Sargodha',
      city: "Sargodha, Pakistan",
      flag: "🇵🇰",
      mapLink: "https://maps.app.goo.gl/RkF8RDbmtg2Die6z6?g_st=iw",
      color: "from-green-600 to-green-800",
    },
    {
      id: 3,
      name: "USA",
      office: "Regional Office",
      address: '35°05\'30.0"N 106°33\'29.0"W, Albuquerque',
      city: "Albuquerque, New Mexico, USA",
      flag: "🇺🇸",
      mapLink: "https://maps.app.goo.gl/9FcFMkRT6gteYF1T8?g_st=iw",
      color: "from-blue-600 to-blue-800",
    },
  ];

  // ==========================================
  // CONTACT INFO
  // ==========================================

  const contactInfo = [
    { icon: FaEnvelope, label: "Email Us", value: "business@transnova.solutions", action: () => openGmail("business@transnova.solutions") },
    { icon: FaPhoneAlt, label: "Call Us", value: "+1 (404) 910-4083", action: "tel:+14049104083" },
    { icon: FaWhatsapp, label: "WhatsApp", value: "+1 (404) 910-4083", action: "https://wa.me/14049104083" },
    { icon: FaHeadphones, label: "Business Development", value: "business@transnova.solutions", action: () => openGmail("business@transnova.solutions") },
    { icon: FaUsers, label: "Support", value: "support@transnova.solutions", action: () => openGmail("support@transnova.solutions") },
    { icon: FaBriefcase, label: "HR / Careers", value: "hr@transnova.solutions", action: () => openGmail("hr@transnova.solutions") },
    { icon: FaEnvelope, label: "General Info", value: "info@transnova.solutions", action: () => openGmail("info@transnova.solutions") },
  ];

  // ==========================================
  // SOCIAL MEDIA
  // ==========================================

  const socialMedia = [
    { icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61593530214768", label: "Facebook" },
    { icon: FaTwitter, link: "https://x.com/transnovasol?s=11", label: "Twitter" },
    { icon: FaInstagram, link: "https://www.instagram.com/transnova.solutions", label: "Instagram" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/company/transnova-solutions", label: "LinkedIn" },
    { icon: FaYoutube, link: "https://www.youtube.com/@transnovasolutions", label: "YouTube" },
  ];

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope">

      {/* =====================================================
          MAIN SECTION - CONTACT + FORM
      ===================================================== */}

      <section className="relative w-full flex flex-col lg:flex-row overflow-hidden">

        {/* LEFT SIDE - Contact Info */}

        <div className="w-full lg:w-[50%] bg-[#FAF9F6] px-8 py-16 lg:px-16 lg:py-24 flex flex-col justify-center relative z-10">

          <h2 className="text-[#FF6B35] font-bold text-3xl lg:text-4xl tracking-tight mb-2">
            GET IN TOUCH
          </h2>

          <p className="text-[#666666] text-sm max-w-md mb-10">
            We're here to answer your questions and help you find the right solution.
          </p>

          {/* Contact Information */}

          <div className="space-y-5 border-b border-[#E0E0E0] pb-8 mb-8">

            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center text-lg shadow-md shrink-0">
                  <item.icon className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="font-bold text-xs uppercase text-[#111111] tracking-wider">
                    {item.label}
                  </p>
                  {typeof item.action === "function" ? (
                    <button
                      type="button"
                      onClick={item.action}
                      className="text-[#555555] text-xs mt-0.5 block hover:text-[#FF6B35] transition-colors text-left"
                    >
                      {item.value}
                    </button>
                  ) : (
                    <a
                      href={item.action}
                      target={item.action.startsWith("http") ? "_blank" : undefined}
                      rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#555555] text-xs mt-0.5 block hover:text-[#FF6B35] transition-colors"
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
            <p className="font-bold text-xs uppercase text-[#111111] tracking-wider mb-3">
              Follow Us
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialMedia.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - Form */}

        <div className="w-full lg:w-[50%] relative bg-[#111111] px-8 py-16 lg:px-16 lg:py-24 flex flex-col justify-center">

          {/* Orange Shapes */}

          <div
            className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF6B35] pointer-events-none"
            style={{ clipPath: "polygon(100% 0, 0% 0%, 100% 100%)" }}
          />

          <div
            className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-[#FF6B35] pointer-events-none"
            style={{ clipPath: "polygon(0 100%, 0% 0%, 100% 100%)" }}
          />

          <div className="relative z-10 w-full max-w-lg">

            <h2 className="text-[#FF6B35] font-bold text-3xl lg:text-4xl tracking-tight mb-2">
              SEND US A MESSAGE
            </h2>

            <p className="text-[#9B9B8A] text-sm mb-8">
              Tell us about your question, project, requirement, or complaint.
              Our team will get back to you soon.
            </p>

            {/* =================================================
                TICKET NUMBER DISPLAY
            ================================================= */}

            {ticketNumber && (
              <div className="mb-6 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg px-4 py-4">
                <p className="text-[#FF6B35] font-bold text-sm flex items-center gap-2">
                  🎫 Your Ticket Number
                </p>
                <p className="text-white font-mono text-xl font-bold mt-1 tracking-wide">
                  {ticketNumber}
                </p>
                <p className="text-[#9B9B8A] text-[10px] mt-2 flex items-center gap-2">
                  <span className="bg-[#FF6B35]/20 px-2 py-0.5 rounded text-[#FF6B35]">
                    #{submissionNumber}
                  </span>
                  <span>Please save this ticket number for tracking your complaint</span>
                </p>
              </div>
            )}

            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            {successMessage && (
              <div className="mb-6 flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-4">
                <FaCheckCircle className="text-green-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-green-400 font-semibold text-sm">Message Sent Successfully</p>
                  <p className="text-green-300/80 text-xs mt-1 leading-relaxed whitespace-pre-line">
                    {successMessage}
                  </p>
                </div>
              </div>
            )}

            {/* =================================================
                ERROR MESSAGE
            ================================================= */}

            {errorMessage && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-4">
                <p className="text-red-400 font-semibold text-sm">Message Not Sent</p>
                <p className="text-red-300/80 text-xs mt-1 leading-relaxed">{errorMessage}</p>
              </div>
            )}

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-[#777777]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Work Email *"
                  required
                  className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-[#777777]"
                />
              </div>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Organization *"
                required
                className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-[#777777]"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors"
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
                className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-[#777777] resize-none"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#FF6B35] text-white font-bold text-sm py-3.5 rounded-lg hover:bg-[#E85C2D] transition-colors shadow-md shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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

              <p className="text-[#666666] text-[10px] text-center">
                Your message is securely sent to TransNova Solutions.
                You will receive a ticket number for tracking.
              </p>

            </form>

          </div>

        </div>

      </section>

      {/* =====================================================
          SECTION 2 - LOCATIONS (PROFESSIONAL DESIGN)
      ===================================================== */}

      <section className="bg-[#FAF9F6] px-6 lg:px-12 py-16 max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-[#FF6B35] font-bold text-3xl lg:text-4xl tracking-tight">
            OUR LOCATIONS
          </h2>
          <div className="w-10 h-[3px] bg-[#FF6B35] mx-auto mt-2 mb-4 rounded-full" />
          <p className="text-[#666666] text-sm">
            Connecting businesses across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {locations.map((location) => (
            <a
              key={location.id}
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#EDEAE4]"
            >

              {/* Gradient Top Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${location.color}`} />

              <div className="p-6">

                {/* Flag & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{location.flag}</div>
                  <div>
                    <h3 className="text-[#111111] font-bold text-lg leading-tight">
                      {location.name}
                    </h3>
                    <p className="text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">
                      {location.office}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 text-[#777777] text-sm mb-4">
                  <FaMapMarkerAlt className="text-[#FF6B35] mt-0.5 shrink-0" />
                  <p className="leading-relaxed">{location.address}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-[#EDEAE4] pt-4 flex items-center justify-between">

                  {/* Phone */}
                  <div className="flex items-center gap-2 text-[#777777] text-xs">
                    <FaPhoneAlt className="text-[#FF6B35]" />
                    <span>+1 (404) 910-4083</span>
                  </div>

                  {/* Email */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      openGmail("info@transnova.solutions");
                    }}
                    className="flex items-center gap-1 text-[#FF6B35] text-xs font-medium hover:gap-2 transition-all"
                  >
                    <FaEnvelope />
                    <span>Email</span>
                  </button>

                </div>

                {/* Map Link */}
                <div className="mt-4 pt-3 border-t border-[#EDEAE4] flex items-center justify-between">
                  <span className="text-[#9B9B8A] text-[10px] flex items-center gap-1">
                    <FaGlobe className="text-[#FF6B35]" />
                    Open in Maps
                  </span>
                  <span className="text-[#FF6B35] text-sm group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>

              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            </a>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Contact;