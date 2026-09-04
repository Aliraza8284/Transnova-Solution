import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaUserSecret,
  FaDatabase,
  FaUserCog,
  FaLock,
} from "react-icons/fa";
import useCopyProtection from "../Hooks/useCopyProtection";

const PrivacyPolicy = () => {
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
            <span className="text-[#FF6B35] font-medium">Privacy Policy</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center">
                <FaUserSecret className="text-xl" />
              </div>
              <div>
                <span className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">
                  Your Privacy Matters
                </span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#0A0A0A]">Privacy</span>{' '}
              <span className="text-[#FF6B35]">Policy</span>
            </h1>
            <p className="text-gray-500 text-sm mt-3 max-w-2xl">
              We are committed to protecting your personal information 
              and being transparent about how we use it.
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
              At <strong className="text-[#FF6B35]">{companyName}</strong>, we value your trust. 
              This Privacy Policy outlines how we collect, use, and protect your personal 
              information when you visit our website or use our services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shrink-0 mt-1">
                <FaDatabase className="text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">1. Information We Collect</h3>
                <ul className="space-y-2 text-[#777777] text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0"></span>
                    <span><strong className="text-[#0A0A0A]">Personal Identification Details:</strong> Name, Email Address, Phone Number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0"></span>
                    <span><strong className="text-[#0A0A0A]">Business Information:</strong> Company name, job title, and business details provided through contact forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0"></span>
                    <span><strong className="text-[#0A0A0A]">Usage Data:</strong> Cookies and analytics to improve website performance and user experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shrink-0 mt-1">
                <FaUserCog className="text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">2. How We Use Your Information</h3>
                <ul className="space-y-2 text-[#777777] text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0"></span>
                    <span>To respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0"></span>
                    <span>To process job applications and recruitment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0"></span>
                    <span>To send you important updates, newsletters, and marketing materials (only with your consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0"></span>
                    <span>To improve our website, services, and customer experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shrink-0 mt-1">
                <FaLock className="text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">3. Data Security</h3>
                <p className="text-[#777777] text-sm leading-relaxed">
                  We implement industry-standard security measures to protect your data 
                  from unauthorized access, alteration, or destruction. Your information 
                  is stored securely and is never shared with third parties without your 
                  explicit consent. We use:
                </p>
                <ul className="mt-3 space-y-2 text-[#777777] text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                    SSL encryption for data transmission
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                    Secure servers with restricted access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                    Regular security audits and updates
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 - About Company */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EDEAE4] mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shrink-0 mt-1">
                <FaShieldAlt className="text-sm" />
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
              If you have any questions about this Privacy Policy or how we handle your data, 
              please contact us:
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

export default PrivacyPolicy;