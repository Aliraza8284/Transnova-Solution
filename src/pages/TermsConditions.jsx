import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaFileContract,
  FaGavel,
  FaUserShield,
} from "react-icons/fa";
import useCopyProtection from "../Hooks/useCopyProtection";

const TermsConditions = () => {
  // ==========================================
  // COPY PROTECTION
  // ==========================================
  useCopyProtection();

  const companyName = "Trans Nova Solutions";
  const companyPhone = "+1 (407) 205-9059";
  const companyEmail = "business@transnova.solutions";
  const companyAddress = "1209 Mountain Road PL NE STE 12783, Albuquerque, NM 87110, USA";

  return (
    <div 
      className="bg-[#FAF9F6] min-h-screen font-manrope pt-[72px]"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }}
    >
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 sm:py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] mb-6">
            <Link to="/" className="text-gray-500 hover:text-[#FF6B35] transition">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#FF6B35] font-medium">Terms & Conditions</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center">
                <FaFileContract className="text-xl" />
              </div>
              <div>
                <span className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">
                  Legal Agreement
                </span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#0A0A0A]">Terms &</span>{' '}
              <span className="text-[#FF6B35]">Conditions</span>
            </h1>
            <p className="text-gray-500 text-sm mt-3 max-w-2xl">
              Please read these terms carefully before using our services. 
              By accessing this website, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}
      <section className="py-10 sm:py-14 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Introduction */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6">
            <p className="text-[#666666] text-base leading-relaxed">
              Welcome to <strong className="text-[#FF6B35]">{companyName}</strong>. 
              By using our website and services, you agree to comply with and be bound by 
              the following terms and conditions. Please review them carefully.
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shrink-0 mt-1">
                <FaGavel className="text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">1. Acceptance of Terms</h3>
                <p className="text-[#777777] text-sm leading-relaxed">
                  By using this website, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms & Conditions. If you do not agree 
                  with any part of these terms, please refrain from using our services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shrink-0 mt-1">
                <FaShieldAlt className="text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">2. Service Usage</h3>
                <p className="text-[#777777] text-sm leading-relaxed">
                  All services provided by <strong className="text-[#FF6B35]">{companyName}</strong> are subject to 
                  availability and our internal approval. We reserve the right to refuse, 
                  modify, or cancel any service request at our sole discretion. 
                  Services include but are not limited to:
                </p>
                <ul className="mt-3 space-y-2 text-[#777777] text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                    Trucking & Logistics Dispatching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                    Commercial Auto & Health Care Insurance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                    Bookkeeping & Accounting Services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                    Telecom & Communication Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shrink-0 mt-1">
                <FaUserShield className="text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">3. Intellectual Property</h3>
                <p className="text-[#777777] text-sm leading-relaxed">
                  All content, logos, branding, and materials on this website are the 
                  exclusive property of <strong className="text-[#FF6B35]">{companyName}</strong> LLC. 
                  Unauthorized use, reproduction, or distribution of any content is 
                  strictly prohibited. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 - Company Information */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shrink-0 mt-1">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">4. About {companyName}</h3>
                <p className="text-[#777777] text-sm leading-relaxed mb-4">
                  <strong className="text-[#FF6B35]">{companyName}</strong> is a diversified business solutions company 
                  built around one simple idea: businesses grow faster when the right people, 
                  technology, and opportunities are connected.
                </p>
                <p className="text-[#777777] text-sm leading-relaxed">
                  We provide professional trucking and logistics dispatching, commercial 
                  auto insurance, health care insurance, bookkeeping and accounting services, 
                  telecom and communication solutions, and financial services to clients 
                  across the United States.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#0A0A0A] rounded-2xl p-6 sm:p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center">
                <FaPhoneAlt className="text-sm" />
              </div>
              <h3 className="text-xl font-bold">Contact <span className="text-[#FF6B35]">{companyName}</span></h3>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a
                href={`tel:${companyPhone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:text-white transition-all">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">Call Us</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#FF6B35] transition-colors">
                    {companyPhone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyEmail}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:text-white transition-all">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">Email Us</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#FF6B35] transition-colors truncate">
                    {companyEmail}
                  </p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/9FcFMkRT6gteYF1T8?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:text-white transition-all">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">Visit Us</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#FF6B35] transition-colors truncate">
                    {companyAddress}
                  </p>
                </div>
                <FaArrowRight className="text-[#FF6B35] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Back to Home */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#FF6B35] hover:gap-3 transition-all duration-300 text-sm font-medium"
              >
                Return to Home
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          WATERMARK
      ========================================== */}
      <div className="fixed bottom-4 right-4 pointer-events-none z-50 opacity-5">
        <span className="text-[#0A0A0A] text-xs font-bold tracking-widest select-none">
          © {new Date().getFullYear()} {companyName}
        </span>
      </div>
    </div>
  );
};

export default TermsConditions;