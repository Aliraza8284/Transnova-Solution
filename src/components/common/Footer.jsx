// ==========================================
// Footer.jsx
// ==========================================

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaArrowUp,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  // ==========================================
  // STATE
  // ==========================================
  const [showArrow, setShowArrow] = useState(false);

  // ==========================================
  // COMPANY EMAIL
  // ==========================================
  const companyEmail = "business@transnova.solutions";

  // LinkedIn URL
  const linkedInUrl = "";

  // ==========================================
  // MAP LINK
  // ==========================================
  const mapLink = "https://maps.app.goo.gl/9FcFMkRT6gteYF1T8?g_st=iw";

  // ==========================================
  // SCROLL EVENT
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 150) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // OPEN GMAIL COMPOSE
  // ==========================================
  const openGmail = () => {
    const subject = "Complaint / Problem Report – TransNova Solutions";
    const body = `Hello TransNova Solutions Team,

I am contacting you regarding a problem/complaint related to TransNova Solutions.

Please describe your problem or complaint below:

[Write your problem here]

Additional Details:
[Add any additional information if needed]

Thank you,
Your Name`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  // ==========================================
  // SCROLL TO TOP
  // ==========================================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // QUICK LINKS
  // ==========================================
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/Contact" },
  ];

  // ==========================================
  // SERVICES - Updated with new services
  // ==========================================
  const ourServices = [
    { name: "Trucking & Logistics", path: "/services" },
    { name: "Commercial Auto Insurance", path: "/services" },
    { name: "Health Care Insurance", path: "/services" },
    { name: "Bookkeeping & Accounting Services", path: "/services" },
 
  ];

  // ==========================================
  // RESOURCES
  // ==========================================
  const resources = [
    { name: "Blog", path: "/blog" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "FAQs", path: "/faqs" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  // ==========================================
  // CONTACT INFO - Updated with US location
  // ==========================================
  const contactInfo = [
    { 
      icon: FaEnvelope, 
      label: "Email", 
      value: "business@transnova.solutions",
      action: openGmail
    },
    { 
      icon: FaPhoneAlt, 
      label: "Phone", 
      value: "+1 (407) 205-9059",
      action: "tel:+14072059059"
    },
    { 
      icon: FaMapMarkerAlt, 
      label: "Address", 
      value: "USA",
      action: mapLink
    },
  ];

  return (
    // =========================================================
    // FOOTER
    // =========================================================
    <footer className="bg-[#0f0f0f] text-white font-manrope relative">

      {/* =========================================================
          SECTION 1: TOP STRIP
      ========================================================= */}

      <div className="border-b border-[#2a2a2a] py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

          {/* ABOUT */}
          <div className="max-w-xs">
            <p className="text-[#FF6B35] font-semibold text-[12px] tracking-[2px] uppercase mb-1">
              About TransNova
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
              Driving Business.
              <br />
              <span className="text-[#FF6B35]">Creating Value.</span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-md flex flex-col gap-2">
            <p className="text-[#9B9B8A] text-sm leading-relaxed">
              Trans Nova Solutions is a global business solutions
              provider committed to innovation, integrity, and impact.
            </p>
            <Link
              to="/about"
              className="text-[#FF6B35] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              More About Us
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-4">

            {/* GLOBAL CLIENTS */}
            <div className="flex items-center gap-2">
              <div className="text-[#FF6B35] text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">1000+</div>
                <p className="text-[#9B9B8A] text-[10px]">Global Clients</p>
              </div>
            </div>

            {/* PROFESSIONALS */}
            <div className="flex items-center gap-2">
              <div className="text-[#FF6B35] text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">130+</div>
                <p className="text-[#9B9B8A] text-[10px]">Professionals</p>
              </div>
            </div>

            {/* SATISFACTION */}
            <div className="flex items-center gap-2">
              <div className="text-[#FF6B35] text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9-4-18-3 9H2" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">98%</div>
                <p className="text-[#9B9B8A] text-[10px]">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 2: MAIN FOOTER
      ========================================================= */}

      <div className="py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">

            {/* LOGO */}
            <div className="col-span-2 md:col-span-1 space-y-2">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/alogo.png"
                  alt="TransNova Logo"
                  className="h-[30px] w-auto object-contain"
                />
                <div className="flex flex-col leading-none">
                  <div className="flex items-baseline">
                    <span className="text-[14px] font-bold tracking-[-0.5px] text-white">TRANS</span>
                    <span className="ml-2 text-[14px] font-bold tracking-[-0.5px] text-[#FF6B35]">NOVA</span>
                    <span className="ml-2 text-[14px] font-bold tracking-[-0.5px] text-white">SOLUTIONS</span>
                  </div>
                </div>
              </Link>
              <p className="text-[#9B9B8A] text-[11px] leading-relaxed max-w-xs">
                Solutions without boundaries. We empower businesses
                worldwide with innovation.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="space-y-2">
              <h4 className="text-white font-bold text-[12px] uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-1.5 text-[#9B9B8A] text-[12px]">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-[#FF6B35] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES - Updated with new services */}
            <div className="space-y-2">
              <h4 className="text-white font-bold text-[12px] uppercase tracking-wide">Services</h4>
              <ul className="space-y-1.5 text-[#9B9B8A] text-[12px]">
                {ourServices.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-[#FF6B35] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-2">
              <h4 className="text-white font-bold text-[12px] uppercase tracking-wide">Resources</h4>
              <ul className="space-y-1.5 text-[#9B9B8A] text-[12px]">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-[#FF6B35] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT & CONTACT - Updated with Contact section */}
            <div className="col-span-2 md:col-span-1 space-y-3">
              {/* CONTACT SECTION - NEW */}
              <div>
                <h4 className="text-white font-bold text-[12px] uppercase tracking-wide mb-2">Contact</h4>
                <ul className="space-y-2 text-[#9B9B8A] text-[12px]">
                  {contactInfo.map((item, index) => (
                    <li key={index}>
                      {typeof item.action === "function" ? (
                        <button
                          onClick={item.action}
                          className="flex items-center gap-2 hover:text-[#FF6B35] transition-colors cursor-pointer w-full text-left"
                        >
                          <item.icon className="text-[#FF6B35] text-sm shrink-0" />
                          <span className="text-[11px]">{item.value}</span>
                        </button>
                      ) : (
                        <a
                          href={item.action}
                          target={item.action.startsWith("http") ? "_blank" : undefined}
                          rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-2 hover:text-[#FF6B35] transition-colors"
                        >
                          <item.icon className="text-[#FF6B35] text-sm shrink-0" />
                          <span className="text-[11px]">{item.value}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOCIAL ICONS */}
  <div>
  <h4 className="text-white font-bold text-[12px] uppercase tracking-wide mb-2">Follow Us</h4>
  <div className="flex gap-2 flex-wrap">
    <a
      href="https://www.facebook.com/profile.php?id=61593530214768"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-[#1877F2] hover:text-white transition-colors text-sm"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.instagram.com/transnova.solutions"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white transition-colors text-sm"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="https://wa.me/14049104083"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-[#25D366] hover:text-white transition-colors text-sm"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>

    {linkedInUrl && (
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-[#0A66C2] hover:text-white transition-colors text-sm"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
    )}

    <a
      href="https://x.com/transnovasol?s=11"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-[#000000] hover:text-white transition-colors text-sm"
      aria-label="Twitter / X"
    >
      <FaTwitter />
    </a>
  </div>
</div>

              {/* EMAIL - OPENS GMAIL */}
              <div>
                <button
                  onClick={openGmail}
                  className="flex items-center gap-2 text-[#9B9B8A] hover:text-[#FF6B35] transition-colors group cursor-pointer"
                  aria-label="Report a problem to TransNova"
                >
                  <FaEnvelope className="text-[#FF6B35] text-sm" />
                  <span className="text-[11px] font-medium group-hover:text-[#FF6B35]">
                    Report a Problem
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 3: COPYRIGHT
      ========================================================= */}

      <div className="border-t border-[#2a2a2a] py-4 px-6 lg:px-12 relative">

        {/* BACK TO TOP */}
        <button
          onClick={scrollToTop}
          className={`
            mx-auto block bg-[#FF6B35] text-white w-9 h-9
            rounded-full flex items-center justify-center
            shadow-lg shadow-orange-500/30
            hover:bg-[#E85C2D]
            transition-all duration-300
            hover:-translate-y-1 mb-2
            ${showArrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          `}
          aria-label="Back to top"
        >
          <FaArrowUp className="text-sm" />
        </button>

        {/* COPYRIGHT */}
        <p className="text-center text-[#9B9B8A] text-[10px]">
          &copy; {new Date().getFullYear()} Trans Nova Solutions. All Rights Reserved.
        </p>

        {/* WEBSITE CREDIT - Updated Ali Raza link */}
        <p className="text-center text-[#9B9B8A] text-[12px] mt-1">
          Devolped by{" "}
          <a
            href="https://www.facebook.com/share/1Lw7SmANPJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:underline transition-colors font-medium"
          >
            Ali Raza
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;