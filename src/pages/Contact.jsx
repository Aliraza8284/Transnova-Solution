// ==========================================
// 1. IMPORTS
// ==========================================
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaArrowRight, FaChartLine, FaHeadphones, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

// ==========================================
// 2. ANIMATION VARIANTS
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// ==========================================
// 3. GOOGLE MAPS IFRAME (Shorkot Head Office)
// ==========================================
const MAP_EMBED_URL = "https://maps.google.com/maps?q=Shorkot+City+Jhang+Punjab+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed";

const Contact = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope pb-16 overflow-hidden">
      
      {/* ==========================================
          SECTION 1: TOP (Info + Form) with Animations
         ========================================== */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="pt-16 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto pb-12"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT: Contact Information */}
          <motion.div 
            variants={fadeInLeft}
            className="w-full lg:w-1/2 space-y-6"
          >
            {/* Breadcrumb */}
            <p className="text-[#9B9B8A] text-sm">Home / Contact Us</p>
            
            {/* 👇 HEADING: Contact BLACK, Us ORANGE */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#111111]">Contact</span>{' '}
              <span className="text-[#FF6B35]">Us</span>
            </h2>
            {/* Orange line */}
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-2 mb-4 rounded-full"></div>
            
            <p className="text-[#555555] text-base leading-relaxed max-w-md">
              We'd love to hear from you. Get in touch with us and let's build something great together.
            </p>

            {/* Contact Details List */}
            <div className="space-y-5 mt-4">
              {/* Email */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#EDEAE4] flex items-center justify-center text-[#FF6B35] text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-medium text-[#111111]">Email Us</p>
                  <p className="text-[#777777] text-sm">info@transnovasolutions.com</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#EDEAE4] flex items-center justify-center text-[#FF6B35] text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-medium text-[#111111]">Call Us</p>
                  <p className="text-[#777777] text-sm">+1 (888) 123-4567</p>
                </div>
              </motion.div>

              {/* Address (Shorkot, Pakistan) */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300 cursor-pointer group"
                onClick={() => {
                  const mapSection = document.getElementById('map-section');
                  if (mapSection) mapSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#EDEAE4] flex items-center justify-center text-[#FF6B35] text-lg group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-medium text-[#111111] group-hover:text-[#FF6B35] transition-colors duration-300">Head Office</p>
                  <p className="text-[#777777] text-sm leading-relaxed group-hover:text-[#111111] transition-colors duration-300">
                    Shorkot City, Jhang District,<br />
                    Punjab, Pakistan
                  </p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#EDEAE4] flex items-center justify-center text-[#FF6B35] text-lg">
                  <FaClock />
                </div>
                <div>
                  <p className="font-medium text-[#111111]">Working Hours</p>
                  <p className="text-[#777777] text-sm">Mon - Fri: 8:00 AM - 6:00 PM (PKT)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div 
            variants={fadeInRight}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#EDEAE4] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#777777] text-sm font-medium block mb-1">Full Name</label>
                    <input type="text" className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-all duration-300 bg-[#FAF9F6]" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-[#777777] text-sm font-medium block mb-1">Email Address</label>
                    <input type="email" className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-all duration-300 bg-[#FAF9F6]" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="text-[#777777] text-sm font-medium block mb-1">Subject</label>
                  <input type="text" className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-all duration-300 bg-[#FAF9F6]" placeholder="How can we help?" />
                </div>

                <div>
                  <label className="text-[#777777] text-sm font-medium block mb-1">Your Message</label>
                  <textarea rows="4" className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-all duration-300 bg-[#FAF9F6] resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button" 
                  className="w-full bg-[#FF6B35] text-white font-medium py-3.5 rounded-lg flex justify-center items-center gap-3 hover:bg-[#E85C2D] transition-colors shadow-md shadow-orange-200"
                >
                  Send Message <FaArrowRight className="text-xs" />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </motion.section>


      {/* ==========================================
          SECTION 2: MAP (Inline Google Map - Same Page)
         ========================================== */}
      <motion.section 
        id="map-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 lg:px-12 max-w-7xl mx-auto mb-16"
      >
        <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-md bg-[#1a1a1a] group border border-[#EDEAE4]">
          
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shorkot Head Office Map"
            className="w-full h-full"
          ></iframe>

          {/* Orange Location Pin Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF6B35] blur-xl opacity-40 rounded-full w-14 h-14 animate-pulse"></div>
              <FaMapMarkerAlt className="text-[#FF6B35] text-4xl relative z-10 drop-shadow-lg animate-bounce" />
            </div>
            <div className="mt-3 bg-[#111111] text-white text-xs px-3 py-1.5 rounded-full opacity-90">
              Shorkot, Pakistan
            </div>
          </div>

        </div>
      </motion.section>


      {/* ==========================================
          SECTION 3: BOTTOM FEATURES (3 Icons) with Animations
         ========================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
          
          {/* Feature 1 */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
          >
            <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] text-2xl">
              <FaUserTie />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-base">Tailored Solutions</h4>
              <p className="text-[#777777] text-sm mt-1">Solutions that fit your unique business needs.</p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
          >
            <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] text-2xl">
              <FaChartLine />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-base">Scalable Services</h4>
              <p className="text-[#777777] text-sm mt-1">Solutions that grow with your business.</p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
          >
            <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] text-2xl">
              <FaHeadphones />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-base">24/7 Support</h4>
              <p className="text-[#777777] text-sm mt-1">Always here when you need us.</p>
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
};

export default Contact;