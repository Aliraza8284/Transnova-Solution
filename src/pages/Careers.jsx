// ==========================================
// 1. IMPORTS
// ==========================================
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaBriefcase, FaUsers, FaChartLine, FaTrophy, FaTimes, FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaGlobe, FaStar, FaRocket, FaShieldAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Careers = () => {
  // ==========================================
  // 2. STATES
  // ==========================================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '', icon: '' });
  const [animatedJobs, setAnimatedJobs] = useState([]);
  const [animatedBenefits, setAnimatedBenefits] = useState([]);

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target.classList.contains('benefit-card')) {
              setAnimatedBenefits(prev => [...prev, target.dataset.index]);
            }
            if (target.classList.contains('job-card')) {
              setAnimatedJobs(prev => [...prev, target.dataset.index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.benefit-card, .job-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openApplyModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob('');
  };

  // Toast function
  const showToast = (message, type = 'success', icon = '✅') => {
    setToast({ show: true, message, type, icon });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '', icon: '' });
    }, 4000);
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const applicationData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: countryCode + formData.get('phone'),
      city: formData.get('city'),
      experience: formData.get('experience'),
      language: formData.get('language'),
      level: formData.get('level'),
      salary: formData.get('salary'),
      currency: formData.get('currency'),
      start_date: formData.get('start_date'),
      selectedJob: formData.get('selectedJob')
    };

    try {
      const saveRes = await fetch('http://localhost:5000/api/save-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationData)
      });
      await saveRes.json();

      const SERVICE_ID = 'service_cqjmmcc';
      const TEMPLATE_ID = 'template_0owkphk';
      const PUBLIC_KEY = 'Sf50Q47C4HaqNIBKx';

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );

      setIsModalOpen(false);
      showToast('🎉 Application submitted successfully!', 'success', '✅');
      
      setTimeout(() => {
        setIsSuccessOpen(true);
      }, 500);
      
    } catch (error) {
      console.error('❌ Error:', error);
      showToast('❌ Submission failed. Please try again.', 'error', '❌');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccess = () => {
    setIsSuccessOpen(false);
  };

  // ==========================================
  // 3. COUNTRIES LIST
  // ==========================================
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

  // ==========================================
  // 4. JOBS DATA
  // ==========================================
  const jobList = [
    {
      title: 'Operation Executive',
      industry: 'Trucking & Logistics',
      type: 'Contract based',
      inhouse: 'Remote',
      desc: 'Manage daily fleet operations, route planning, and ensure timely delivery of goods.',
    },
    {
      title: 'Sales Executive',
      industry: 'Trucking & Logistics',
      type: 'Contract based',
      inhouse: 'Remote',
      desc: 'Drive new sales opportunities, build client relationships, and expand logistics market share.',
    },
    {
      title: 'VoIP / Telecom & Dialers Manager',
      industry: 'Telecommunication',
      type: 'Contract based',
      inhouse: 'Remote',
      desc: 'Oversee VoIP systems and dialer operations, ensuring high-quality call connectivity and performance.',
    },
    {
      title: 'Accounts Lead',
      industry: 'Finance & Banking',
      type: 'Contract based',
      inhouse: 'Inhouse (Pakistan)',
      desc: 'Manage financial accounts, oversee auditing, and ensure compliance with banking regulations.',
    },
    {
      title: 'License Agents',
      industry: 'Medical & Healthcare',
      type: 'Contract based',
      inhouse: 'Remote',
      desc: 'Handle medical licensing processes, verify credentials, and assist with compliance documentation.',
    },
    {
      title: 'Verifiers & Closers',
      industry: 'Medical & Healthcare',
      type: 'Contract based',
      inhouse: 'Remote',
      desc: 'Verify patient and insurance information and efficiently close medical service cases.',
    },
  ];

  // ==========================================
  // 5. BENEFITS DATA
  // ==========================================
  const benefitsList = [
    { icon: <FaTrophy className="text-[#FF6B35] text-2xl" />, title: 'Competitive Salary', desc: 'We offer market-leading compensation packages.' },
    { icon: <FaUsers className="text-[#FF6B35] text-2xl" />, title: 'Great Culture', desc: 'Collaborative, innovative, and inclusive workplace.' },
    { icon: <FaChartLine className="text-[#FF6B35] text-2xl" />, title: 'Growth Opportunities', desc: 'Continuous learning and career advancement programs.' },
  ];

  // ==========================================
  // 6. RENDER
  // ==========================================
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope pb-16 overflow-x-hidden">
      
      {/* Custom Toast Notification */}
      {toast.show && (
        <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-[999999] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slideDown ${
          toast.type === 'success' ? 'bg-[#111111] border border-[#FF6B35]' : 'bg-[#111111] border border-[#FF4444]'
        }`}>
          <span className="text-2xl">{toast.icon}</span>
          <span className="text-white font-medium text-sm">{toast.message}</span>
          <button 
            onClick={() => setToast({ show: false, message: '', type: '', icon: '' })}
            className="text-white/50 hover:text-white transition-colors ml-2"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>
      )}

      {/* SECTION 1: HERO */}
      <section className="pt-16 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto animate-fadeInUp">
        <div className="bg-[#111111] text-white rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500">
          <div className="w-full lg:w-3/5 space-y-5">
            <p className="text-[#FF6B35] font-medium text-sm tracking-[3px] uppercase animate-slideInLeft">Join Our Team</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight flex flex-wrap items-center gap-2 animate-slideInLeft animation-delay-200">
              <span className="text-white">Build Your Career With</span>
              <span className="text-white">TRANS</span>
              <span className="text-[#FF6B35]">NOVA</span>
            </h1>
            <p className="text-[#9B9B8A] text-base leading-relaxed max-w-lg animate-slideInLeft animation-delay-400">
              We are looking for passionate, talented individuals to join our growing family. If you are ready to make an impact, we want to hear from you.
            </p>
            <div className="pt-2 animate-slideInLeft animation-delay-600">
              <a href="#jobs" className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-full font-medium hover:bg-[#E85C2D] transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105">
                View Open Positions <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/5 animate-slideInRight animation-delay-300">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team working" className="w-full h-56 lg:h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* SECTION 2: BENEFITS */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] animate-fadeInUp">Why Join <span className="text-[#FF6B35]">Us?</span></h2>
          <div className="w-12 h-[3px] bg-[#FF6B35] mx-auto mt-3 rounded-full animate-scaleIn"></div>
          <p className="text-[#666666] mt-4 max-w-xl mx-auto animate-fadeInUp animation-delay-200">We invest in our people, providing the tools and environment to thrive.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefitsList.map((item, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`benefit-card bg-white p-8 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 text-center border border-[#EDEAE4] hover:border-transparent hover:scale-105 hover:-translate-y-2 ${
                animatedBenefits.includes(String(index)) ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF9F6] flex items-center justify-center mb-4 group-hover:bg-[#FF6B35]/10 transition-colors animate-bounceIn">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
              <p className="text-[#777777] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: JOB LIST */}
      <section id="jobs" className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] animate-fadeInUp">Open Positions</h2>
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-2 rounded-full animate-scaleIn"></div>
          </div>
          <p className="text-[#777777] text-sm bg-white px-4 py-2 rounded-full border border-[#EDEAE4] animate-fadeInUp animation-delay-200">{jobList.length} Jobs Available</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobList.map((job, index) => (
            <div 
              key={index}
              data-index={index}
              className={`job-card bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-500 border border-[#EDEAE4] group hover:scale-[1.02] hover:-translate-y-1 ${
                animatedJobs.includes(String(index)) ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
                    <FaBriefcase className="text-lg" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#FF6B35] transition-colors duration-300">{job.title}</h3>
                      <span className="bg-[#FF6B35]/10 text-[#FF6B35] text-[10px] font-bold px-3 py-1 rounded-full border border-[#FF6B35]/20 uppercase tracking-wide group-hover:bg-[#FF6B35] group-hover:text-white group-hover:border-[#FF6B35] transition-all duration-300">
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
              </div>
              <p className="text-[#555555] text-sm leading-relaxed mb-4">{job.desc}</p>
              <button 
                onClick={() => openApplyModal(job.title)} 
                className="w-full py-2.5 bg-[#FAF9F6] text-[#111111] font-medium rounded-lg hover:bg-[#FF6B35] hover:text-white transition-all duration-300 border border-[#EDEAE4] group-hover:border-transparent text-sm cursor-pointer relative overflow-hidden"
              >
                <span className="relative z-10">Apply Now</span>
                <span className="absolute inset-0 bg-[#FF6B35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: APPLICATION FORM MODAL - CONTACT PAGE STYLE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-slideUp">
            
            {/* Modal Header - Dark like Contact page */}
            <div className="sticky top-0 bg-[#111111] z-10 p-6 border-b border-[#333333] flex justify-between items-center rounded-t-2xl">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Apply for <span className="text-[#FF6B35]">{selectedJob}</span>
                </h3>
                <p className="text-[#9B9B8A] text-sm mt-1">
                  Fill out the form below and our team will get back to you soon.
                </p>
              </div>
              <button 
                onClick={closeModal} 
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:rotate-90"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Form Body - Dark like Contact page */}
            <div className="p-6 lg:p-8 bg-[#111111]">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                    Full Name <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 placeholder-[#777777] hover:border-[#555555]" 
                    placeholder="Enter your full name" 
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                    Work Email <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 placeholder-[#777777] hover:border-[#555555]" 
                    placeholder="john@example.com" 
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                    Phone / WhatsApp <span className="text-[#FF6B35]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select 
                      className="w-[30%] bg-[#1A1A1A] border border-[#333333] text-white text-sm px-3 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 hover:border-[#555555] cursor-pointer" 
                      onChange={(e) => setCountryCode(e.target.value)}
                      required
                    >
                      <option value="">Code</option>
                      {countriesList.map((c, i) => (
                        <option key={i} value={c.code}>{c.flag} {c.code}</option>
                      ))}
                    </select>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="w-[70%] bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 placeholder-[#777777] hover:border-[#555555]" 
                      placeholder="1234567890" 
                    />
                  </div>
                </div>

                {/* City and Country */}
                <div>
                  <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                    City and Country <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="city" 
                    required 
                    className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 placeholder-[#777777] hover:border-[#555555]" 
                    placeholder="Houston, USA / Karachi, Pakistan" 
                  />
                </div>

                {/* Experience & Language - Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                      Years of Experience <span className="text-[#FF6B35]">*</span>
                    </label>
                    <select 
                      name="experience" 
                      required 
                      className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 hover:border-[#555555] cursor-pointer"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 Years</option>
                      <option value="2-3">2-3 Years</option>
                      <option value="4-6">4-6 Years</option>
                      <option value="7-10">7-10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                      Language Expertise <span className="text-[#FF6B35]">*</span>
                    </label>
                    <select 
                      name="language" 
                      required 
                      className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 hover:border-[#555555] cursor-pointer"
                    >
                      <option value="">Select language</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Urdu">Urdu</option>
                    </select>
                  </div>
                </div>

                {/* Expertise Level */}
                <div>
                  <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                    Expertise Level <span className="text-[#FF6B35]">*</span>
                  </label>
                  <select 
                    name="level" 
                    required 
                    className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 hover:border-[#555555] cursor-pointer"
                  >
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>

                {/* Salary + Currency */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                      Expected Salary <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input 
                      type="number" 
                      name="salary" 
                      min="0" 
                      max="200000" 
                      required 
                      className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 placeholder-[#777777] hover:border-[#555555]" 
                      placeholder="e.g. 60000" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                      Currency <span className="text-[#FF6B35]">*</span>
                    </label>
                    <select 
                      name="currency" 
                      required 
                      className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 hover:border-[#555555] cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="USD">USD ($)</option>
                      <option value="PKR">PKR (Rs)</option>
                    </select>
                  </div>
                </div>

                {/* Available Start Date */}
                <div>
                  <label className="block text-sm font-medium text-[#9B9B8A] mb-1.5">
                    Available Start Date <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input 
                    type="date" 
                    name="start_date" 
                    min="1947-01-01" 
                    max={new Date().toISOString().split('T')[0]} 
                    required 
                    className="w-full bg-[#1A1A1A] border border-[#333333] text-white text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all duration-300 hover:border-[#555555]" 
                  />
                </div>

                {/* Hidden Input for selectedJob */}
                <input type="hidden" name="selectedJob" value={selectedJob} />

                {/* Submit Button - Orange like Contact page */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#FF6B35] text-white font-bold text-sm py-4 rounded-lg hover:bg-[#E85C2D] transition-all duration-300 shadow-md shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      SEND APPLICATION
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: SUCCESS POPUP */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10 text-center relative animate-scaleUp">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mb-6 animate-bounceIn">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#111111] mb-2 animate-fadeInUp">🎉 Application Submitted!</h3>
            <div className="w-12 h-1 bg-[#FF6B35] mx-auto rounded-full mb-4 animate-scaleIn"></div>
            <p className="text-[#555555] text-base mb-4 leading-relaxed">
              You have successfully applied for:
            </p>
            <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-xl p-4 mb-6 animate-pulse-slow">
              <span className="text-[#FF6B35] font-bold text-xl block">{selectedJob}</span>
            </div>
            <p className="text-[#111111] font-medium text-sm mb-6">
              📧 We will get back to you within 24 hours.
            </p>
            <button 
              onClick={closeSuccess} 
              className="w-full bg-[#FF6B35] text-white font-semibold py-3 rounded-xl hover:bg-[#E85C2D] transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02]"
            >
              Got it, Thanks!
            </button>
          </div>
        </div>
      )}

      {/* Custom CSS Animations */}
      <style jsx>{`
        /* Fade In Up */
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
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Fade In */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        /* Slide Up */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }

        /* Slide Down for Toast */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }

        /* Slide In Left */
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
          animation: slideInLeft 0.6s ease-out forwards;
        }

        /* Slide In Right */
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        /* Scale In */
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        /* Scale Up */
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
          animation: scaleUp 0.4s ease-out forwards;
        }

        /* Bounce In */
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
        }

        /* Pulse Slow */
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        /* Animation Delays */
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }

        /* Scroll-triggered animation - initial hidden */
        .benefit-card, .job-card {
          opacity: 0;
        }
      `}</style>

    </div>
  );
};

export default Careers;