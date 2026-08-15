// ==========================================
// 1. IMPORTS
// ==========================================
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaArrowRight, FaChartLine, FaHeadphones, FaUserTie } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope pb-16">
      
      {/* ==========================================
          SECTION 1: TOP (Info + Form)
         ========================================== */}
      <section className="pt-16 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto pb-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT: Contact Information */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Breadcrumb */}
            <p className="text-[#9B9B8A] text-sm">Home / Contact Us</p>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              Contact Us
            </h2>
            {/* Orange line */}
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-2 mb-4 rounded-full"></div>
            
            <p className="text-[#555555] text-base leading-relaxed max-w-md">
              We'd love to hear from you. Get in touch with us and let's build something great together.
            </p>

            {/* Contact Details List */}
            <div className="space-y-5 mt-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-[#EDEAE4] flex items-center justify-center text-[#FF6B35] text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-medium text-[#111111]">Email Us</p>
                  <p className="text-[#777777] text-sm">info@transnovasolutions.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-[#EDEAE4] flex items-center justify-center text-[#FF6B35] text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-medium text-[#111111]">Call Us</p>
                  <p className="text-[#777777] text-sm">+1 (888) 123-4567</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-[#EDEAE4] flex items-center justify-center text-[#FF6B35] text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-medium text-[#111111]">Head Office</p>
                  <p className="text-[#777777] text-sm leading-relaxed">
                    123 Business Park Drive,<br />
                    Suite 100, Houston, TX 77001, USA
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-[#EDEAE4] flex items-center justify-center text-[#FF6B35] text-lg">
                  <FaClock />
                </div>
                <div>
                  <p className="font-medium text-[#111111]">Working Hours</p>
                  <p className="text-[#777777] text-sm">Mon - Fri: 8:00 AM - 6:00 PM (CT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#777777] text-sm font-medium block mb-1">Full Name</label>
                    <input type="text" className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-[#777777] text-sm font-medium block mb-1">Email Address</label>
                    <input type="email" className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="text-[#777777] text-sm font-medium block mb-1">Subject</label>
                  <input type="text" className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="How can we help?" />
                </div>

                <div>
                  <label className="text-[#777777] text-sm font-medium block mb-1">Your Message</label>
                  <textarea rows="4" className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <button type="button" className="w-full bg-[#FF6B35] text-white font-medium py-3.5 rounded-lg flex justify-center items-center gap-3 hover:bg-[#E85C2D] transition-colors shadow-md shadow-orange-200">
                  Send Message <FaArrowRight className="text-xs" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 2: MAP (Dark Strip with Orange Pin)
         ========================================== */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-16">
        <div className="relative w-full h-48 lg:h-56 rounded-2xl overflow-hidden shadow-md bg-[#1a1a1a]">
          {/* Background Map Image (Darkened) */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop" 
            alt="Map" 
            className="w-full h-full object-cover opacity-40 brightness-50"
          />
          
          {/* Orange Location Pin (Center) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            {/* Drop Shadow / Glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF6B35] blur-xl opacity-50 rounded-full w-14 h-14"></div>
              <FaMapMarkerAlt className="text-[#FF6B35] text-5xl relative z-10 drop-shadow-lg animate-bounce" />
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 3: BOTTOM FEATURES (3 Icons)
         ========================================== */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
          
          {/* Feature 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] text-2xl">
              <FaUserTie />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-base">Tailored Solutions</h4>
              <p className="text-[#777777] text-sm mt-1">Solutions that fit your unique business needs.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] text-2xl">
              <FaChartLine />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-base">Scalable Services</h4>
              <p className="text-[#777777] text-sm mt-1">Solutions that grow with your business.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] text-2xl">
              <FaHeadphones />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-base">24/7 Support</h4>
              <p className="text-[#777777] text-sm mt-1">Always here when you need us.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;