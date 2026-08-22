// ==========================================
// Contact.jsx
// ==========================================

import React, { useState } from "react";
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
} from "react-icons/fa";

const Contact = () => {
  // ==========================================
  // EMAILJS CONFIG
  // ==========================================

  const EMAILJS_SERVICE_ID = "service_wlhattr";
const EMAILJS_TEMPLATE_ID = "template_o8tddsw";
const EMAILJS_PUBLIC_KEY = "Sf50Q47C4HaqNIBKx";

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

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  // ==========================================
  // SEND EMAIL USING EMAILJS
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // ------------------------------------------
      // SERVICE NAME
      // ------------------------------------------

      const serviceNames = {
        bpo: "BPO Solutions",
        voip: "VoIP & Telecom",
        logistics: "Logistics Solutions",
        digital: "Digital Services",
      };

      const selectedService =
        serviceNames[formData.service] || formData.service;

      // ------------------------------------------
      // EMAILJS TEMPLATE VARIABLES
      // ------------------------------------------

      const templateParams = {
        full_name: formData.fullName,
        email: formData.email,
        company: formData.company,
        service: selectedService,
        message: formData.message,

        // Extra variables
        submitted_from: "TransNova Solutions Website",
      };

      // ------------------------------------------
      // SEND EMAIL
      // ------------------------------------------

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // ------------------------------------------
      // SUCCESS
      // ------------------------------------------

      setSuccessMessage(
        "Thank you! Your message has been sent successfully to TransNova Solutions. Our team will contact you soon."
      );

      // ------------------------------------------
      // CLEAR FORM
      // ------------------------------------------

      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setErrorMessage(
        "Sorry, your message could not be sent. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope">

      {/* =========================================================
          SECTION 1: TOP SPLIT SECTION
      ========================================================= */}

      <section className="relative w-full flex flex-col lg:flex-row overflow-hidden">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="w-full lg:w-[50%] bg-[#FAF9F6] px-8 py-16 lg:px-16 lg:py-24 flex flex-col justify-center relative z-10">

          <h2 className="text-[#FF6B35] font-bold text-3xl lg:text-4xl tracking-tight mb-2">
            GET IN TOUCH
          </h2>

          <p className="text-[#666666] text-sm max-w-md mb-10">
            We're here to answer your questions and help you find the right
            solution.
          </p>

          {/* CONTACT LIST */}

          <div className="space-y-6 border-b border-[#E0E0E0] pb-8 mb-8">

            {/* EMAIL */}

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center text-lg shadow-md">
                <FaEnvelope className="text-[#FF6B35]" />
              </div>

              <div>

                <p className="font-bold text-xs uppercase text-[#111111] tracking-wider">
                  Email Us
                </p>

                <p className="text-[#555555] text-xs mt-0.5">
                  aligill82841@gmail.com
                </p>

              </div>

            </div>

            {/* CALL */}

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center text-lg shadow-md">
                <FaPhoneAlt className="text-[#FF6B35]" />
              </div>

              <div>

                <p className="font-bold text-xs uppercase text-[#111111] tracking-wider">
                  Call Us
                </p>

                <p className="text-[#555555] text-xs mt-0.5">
                  +92 21 1234 5678
                </p>

              </div>

            </div>

            {/* BUSINESS DEVELOPMENT */}

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center text-lg shadow-md">
                <FaHeadphones className="text-[#FF6B35]" />
              </div>

              <div>

                <p className="font-bold text-xs uppercase text-[#111111] tracking-wider">
                  Business Development
                </p>

                <p className="text-[#555555] text-xs mt-0.5">
                  business@transnovasolutions.com
                </p>

              </div>

            </div>

            {/* PARTNERSHIPS */}

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center text-lg shadow-md">
                <FaUsers className="text-[#FF6B35]" />
              </div>

              <div>

                <p className="font-bold text-xs uppercase text-[#111111] tracking-wider">
                  Partnerships
                </p>

                <p className="text-[#555555] text-xs mt-0.5">
                  partnerships@transnovasolutions.com
                </p>

              </div>

            </div>

            {/* CAREERS */}

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center text-lg shadow-md">
                <FaBriefcase className="text-[#FF6B35]" />
              </div>

              <div>

                <p className="font-bold text-xs uppercase text-[#111111] tracking-wider">
                  Careers
                </p>

                <p className="text-[#555555] text-xs mt-0.5">
                  careers@transnovasolutions.com
                </p>

              </div>

            </div>

          </div>

          {/* SOCIAL MEDIA */}

          <div>

            <p className="font-bold text-xs uppercase text-[#111111] tracking-wider mb-3">
              Follow Us
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE FORM
        ===================================================== */}

        <div className="w-full lg:w-[50%] relative bg-[#111111] px-8 py-16 lg:px-16 lg:py-24 flex flex-col justify-center">

          {/* ORANGE TOP SHAPE */}

          <div
            className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF6B35] pointer-events-none"
            style={{
              clipPath:
                "polygon(100% 0, 0% 0%, 100% 100%)",
            }}
          />

          {/* ORANGE BOTTOM SHAPE */}

          <div
            className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-[#FF6B35] pointer-events-none"
            style={{
              clipPath:
                "polygon(0 100%, 0% 0%, 100% 100%)",
            }}
          />

          <div className="relative z-10 w-full max-w-lg">

            <h2 className="text-[#FF6B35] font-bold text-3xl lg:text-4xl tracking-tight mb-2">
              SEND US A MESSAGE
            </h2>

            <p className="text-[#9B9B8A] text-sm mb-8">
              Fill out the form below and our team will get back to you soon.
            </p>


            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            {successMessage && (
              <div className="mb-6 flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3">

                <FaCheckCircle className="text-green-400 mt-0.5 shrink-0" />

                <p className="text-green-400 text-xs leading-relaxed">
                  {successMessage}
                </p>

              </div>
            )}


            {/* =================================================
                ERROR MESSAGE
            ================================================= */}

            {errorMessage && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">

                <p className="text-red-400 text-xs">
                  {errorMessage}
                </p>

              </div>
            )}


            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-[#777777]"
                  />

                </div>


                <div>

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

              </div>


              {/* COMPANY */}

              <div>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company / Organization *"
                  required
                  className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-[#777777]"
                />

              </div>


              {/* SERVICE */}

              <div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors"
                >

                  <option value="">
                    Service Interested In *
                  </option>

                  <option value="bpo">
                    BPO Solutions
                  </option>

                  <option value="voip">
                    VoIP & Telecom
                  </option>

                  <option value="logistics">
                    Logistics Solutions
                  </option>

                  <option value="digital">
                    Digital Services
                  </option>

                </select>

              </div>


              {/* MESSAGE */}

              <div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message *"
                  required
                  className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-colors placeholder-[#777777] resize-none"
                />

              </div>


              {/* SEND BUTTON */}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#FF6B35] text-white font-bold text-sm py-3.5 rounded-lg hover:bg-[#E85C2D] transition-colors shadow-md shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >

                {isSending ? (
                  <>
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
                Your information is securely sent to the TransNova
                Solutions team.
              </p>

            </form>

          </div>

        </div>

      </section>


      {/* =========================================================
          SECTION 2: OUR LOCATIONS
      ========================================================= */}

      <section className="bg-[#FAF9F6] px-6 lg:px-12 py-16 max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-[#FF6B35] font-bold text-3xl lg:text-4xl tracking-tight">
            OUR LOCATIONS
          </h2>

          <div className="w-10 h-[3px] bg-[#FF6B35] mx-auto mt-2 mb-4 rounded-full" />

          <p className="text-[#666666] text-sm">
            Connecting businesses across the globe.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* =====================================================
              PAKISTAN
          ===================================================== */}

          <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#EDEAE4]">

            <div className="flex items-center gap-4 mb-4">

              <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm shrink-0">

                <img
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200&auto=format&fit=crop"
                  alt="Pakistan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>

              <div>

                <h3 className="text-[#FF6B35] font-bold text-xs uppercase tracking-wider">
                  Pakistan
                </h3>

                <p className="font-bold text-sm text-[#111111]">
                  Head Office
                </p>

              </div>

            </div>


            <div className="space-y-2 text-[#777777] text-xs">

              <div className="flex items-start gap-2">

                <FaMapMarkerAlt className="text-[#FF6B35] mt-0.5 shrink-0" />

                <p>
                  Suite 501, 5th Floor,
                  <br />
                  Business Avenue,
                  <br />
                  Karachi, Pakistan.
                </p>

              </div>


              <div className="flex items-center gap-2">

                <FaPhoneAlt className="text-[#FF6B35] shrink-0" />

                <p>
                  +92 21 1234 5678
                </p>

              </div>


              <div className="flex items-center gap-2">

                <FaEnvelope className="text-[#FF6B35] shrink-0" />

                <p>
                  aligill82841@gmail.com
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
              UAE
          ===================================================== */}

          <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#EDEAE4]">

            <div className="flex items-center gap-4 mb-4">

              <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm shrink-0">

                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea932a9f306?q=80&w=200&auto=format&fit=crop"
                  alt="UAE"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>

              <div>

                <h3 className="text-[#FF6B35] font-bold text-xs uppercase tracking-wider">
                  UAE
                </h3>

                <p className="font-bold text-sm text-[#111111]">
                  Regional Office
                </p>

              </div>

            </div>


            <div className="space-y-2 text-[#777777] text-xs">

              <div className="flex items-start gap-2">

                <FaMapMarkerAlt className="text-[#FF6B35] mt-0.5 shrink-0" />

                <p>
                  Office 1203, The One Tower,
                  <br />
                  Tecom, Dubai,
                  <br />
                  United Arab Emirates.
                </p>

              </div>


              <div className="flex items-center gap-2">

                <FaPhoneAlt className="text-[#FF6B35] shrink-0" />

                <p>
                  +971 50 123 4567
                </p>

              </div>


              <div className="flex items-center gap-2">

                <FaEnvelope className="text-[#FF6B35] shrink-0" />

                <p>
                  info@transnovasolutions.com
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
              UK
          ===================================================== */}

          <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#EDEAE4]">

            <div className="flex items-center gap-4 mb-4">

              <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm shrink-0">

                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=200&auto=format&fit=crop"
                  alt="United Kingdom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>

              <div>

                <h3 className="text-[#FF6B35] font-bold text-xs uppercase tracking-wider">
                  United Kingdom
                </h3>

                <p className="font-bold text-sm text-[#111111]">
                  Representative Office
                </p>

              </div>

            </div>


            <div className="space-y-2 text-[#777777] text-xs">

              <div className="flex items-start gap-2">

                <FaMapMarkerAlt className="text-[#FF6B35] mt-0.5 shrink-0" />

                <p>
                  71-75 Shelton Street,
                  <br />
                  Covent Garden,
                  <br />
                  London, WC2H 9JQ, UK.
                </p>

              </div>


              <div className="flex items-center gap-2">

                <FaPhoneAlt className="text-[#FF6B35] shrink-0" />

                <p>
                  +44 20 4578 0780
                </p>

              </div>


              <div className="flex items-center gap-2">

                <FaEnvelope className="text-[#FF6B35] shrink-0" />

                <p>
                  uk@transnovasolutions.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;