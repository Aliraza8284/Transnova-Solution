// ==========================================
// 1. IMPORTS
// ==========================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaUsers, FaChartLine, FaTrophy, FaTimes, FaCheckCircle } from 'react-icons/fa';

const Careers = () => {
  // ==========================================
  // 2. STATES
  // ==========================================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const openApplyModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSuccessOpen(true);
    }, 300);
  };

  const closeSuccess = () => {
    setIsSuccessOpen(false);
  };

  // ==========================================
  // 3. 196 COUNTRIES LIST (Flags + Codes)
  // ==========================================
  const countriesList = [
    { code: "+1", flag: "🇺🇸", name: "USA" },
    { code: "+1", flag: "🇨🇦", name: "Canada" },
    { code: "+44", flag: "🇬🇧", name: "UK" },
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
    { code: "+963", flag: "🇸🇾", name: "Syria" },
    { code: "+964", flag: "🇮🇶", name: "Iraq" },
    { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
    { code: "+967", flag: "🇾🇪", name: "Yemen" },
    { code: "+968", flag: "🇴🇲", name: "Oman" },
    { code: "+974", flag: "🇶🇦", name: "Qatar" },
    { code: "+973", flag: "🇧🇭", name: "Bahrain" },
    { code: "+965", flag: "🇰🇼", name: "Kuwait" },
    { code: "+20", flag: "🇪🇬", name: "Egypt" },
    { code: "+212", flag: "🇲🇦", name: "Morocco" },
    { code: "+216", flag: "🇹🇳", name: "Tunisia" },
    { code: "+213", flag: "🇩🇿", name: "Algeria" },
    { code: "+218", flag: "🇱🇾", name: "Libya" },
    { code: "+27", flag: "🇿🇦", name: "South Africa" },
    { code: "+234", flag: "🇳🇬", name: "Nigeria" },
    { code: "+233", flag: "🇬🇭", name: "Ghana" },
    { code: "+254", flag: "🇰🇪", name: "Kenya" },
    { code: "+256", flag: "🇺🇬", name: "Uganda" },
    { code: "+255", flag: "🇹🇿", name: "Tanzania" },
    { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
    { code: "+260", flag: "🇿🇲", name: "Zambia" },
    { code: "+263", flag: "🇿🇼", name: "Zimbabwe" },
    { code: "+265", flag: "🇲🇼", name: "Malawi" },
    { code: "+230", flag: "🇲🇺", name: "Mauritius" },
    { code: "+248", flag: "🇸🇨", name: "Seychelles" },
    { code: "+262", flag: "🇷🇪", name: "Reunion" },
    { code: "+52", flag: "🇲🇽", name: "Mexico" },
    { code: "+54", flag: "🇦🇷", name: "Argentina" },
    { code: "+55", flag: "🇧🇷", name: "Brazil" },
    { code: "+56", flag: "🇨🇱", name: "Chile" },
    { code: "+57", flag: "🇨🇴", name: "Colombia" },
    { code: "+58", flag: "🇻🇪", name: "Venezuela" },
    { code: "+51", flag: "🇵🇪", name: "Peru" },
    { code: "+593", flag: "🇪🇨", name: "Ecuador" },
    { code: "+591", flag: "🇧🇴", name: "Bolivia" },
    { code: "+598", flag: "🇺🇾", name: "Uruguay" },
    { code: "+595", flag: "🇵🇾", name: "Paraguay" },
    { code: "+507", flag: "🇵🇦", name: "Panama" },
    { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
    { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
    { code: "+504", flag: "🇭🇳", name: "Honduras" },
    { code: "+503", flag: "🇸🇻", name: "El Salvador" },
    { code: "+502", flag: "🇬🇹", name: "Guatemala" },
    { code: "+501", flag: "🇧🇿", name: "Belize" },
    { code: "+1", flag: "🇧🇸", name: "Bahamas" },
    { code: "+1", flag: "🇯🇲", name: "Jamaica" },
    { code: "+1", flag: "🇹🇹", name: "Trinidad & Tobago" },
    { code: "+1", flag: "🇧🇧", name: "Barbados" },
    { code: "+7", flag: "🇷🇺", name: "Russia" },
    { code: "+380", flag: "🇺🇦", name: "Ukraine" },
    { code: "+48", flag: "🇵🇱", name: "Poland" },
    { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
    { code: "+421", flag: "🇸🇰", name: "Slovakia" },
    { code: "+36", flag: "🇭🇺", name: "Hungary" },
    { code: "+40", flag: "🇷🇴", name: "Romania" },
    { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
    { code: "+30", flag: "🇬🇷", name: "Greece" },
    { code: "+381", flag: "🇷🇸", name: "Serbia" },
    { code: "+385", flag: "🇭🇷", name: "Croatia" },
    { code: "+386", flag: "🇸🇮", name: "Slovenia" },
    { code: "+387", flag: "🇧🇦", name: "Bosnia" },
    { code: "+389", flag: "🇲🇰", name: "North Macedonia" },
    { code: "+355", flag: "🇦🇱", name: "Albania" },
    { code: "+382", flag: "🇲🇪", name: "Montenegro" },
    { code: "+377", flag: "🇲🇨", name: "Monaco" },
    { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
    { code: "+350", flag: "🇬🇮", name: "Gibraltar" },
    { code: "+356", flag: "🇲🇹", name: "Malta" },
    { code: "+357", flag: "🇨🇾", name: "Cyprus" },
    { code: "+372", flag: "🇪🇪", name: "Estonia" },
    { code: "+371", flag: "🇱🇻", name: "Latvia" },
    { code: "+370", flag: "🇱🇹", name: "Lithuania" },
    { code: "+47", flag: "🇸🇯", name: "Svalbard" },
    { code: "+299", flag: "🇬🇱", name: "Greenland" },
    { code: "+1", flag: "🇵🇷", name: "Puerto Rico" },
    { code: "+1", flag: "🇻🇮", name: "US Virgin Islands" },
    { code: "+1", flag: "🇰🇾", name: "Cayman Islands" },
    { code: "+1", flag: "🇧🇲", name: "Bermuda" },
    { code: "+290", flag: "🇸🇭", name: "Saint Helena" },
    { code: "+247", flag: "🇦🇨", name: "Ascension Island" },
    { code: "+246", flag: "🇮🇴", name: "British Indian Ocean Territory" },
    { code: "+672", flag: "🇳🇫", name: "Norfolk Island" },
    { code: "+64", flag: "🇳🇿", name: "New Zealand" },
    { code: "+678", flag: "🇻🇺", name: "Vanuatu" },
    { code: "+679", flag: "🇫🇯", name: "Fiji" },
    { code: "+687", flag: "🇳🇨", name: "New Caledonia" },
    { code: "+689", flag: "🇵🇫", name: "French Polynesia" },
    { code: "+682", flag: "🇨🇰", name: "Cook Islands" },
    { code: "+683", flag: "🇳🇺", name: "Niue" },
    { code: "+685", flag: "🇼🇸", name: "Samoa" },
    { code: "+676", flag: "🇹🇴", name: "Tonga" },
    { code: "+688", flag: "🇹🇻", name: "Tuvalu" },
    { code: "+691", flag: "🇫🇲", name: "Micronesia" },
    { code: "+692", flag: "🇲🇭", name: "Marshall Islands" },
    { code: "+680", flag: "🇵🇼", name: "Palau" },
    { code: "+674", flag: "🇳🇷", name: "Nauru" },
    { code: "+677", flag: "🇸🇧", name: "Solomon Islands" },
    { code: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
    { code: "+228", flag: "🇹🇬", name: "Togo" },
    { code: "+229", flag: "🇧🇯", name: "Benin" },
    { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
    { code: "+225", flag: "🇨🇮", name: "Ivory Coast" },
    { code: "+221", flag: "🇸🇳", name: "Senegal" },
    { code: "+223", flag: "🇲🇱", name: "Mali" },
    { code: "+224", flag: "🇬🇳", name: "Guinea" },
    { code: "+245", flag: "🇬🇼", name: "Guinea-Bissau" },
    { code: "+232", flag: "🇸🇱", name: "Sierra Leone" },
    { code: "+231", flag: "🇱🇷", name: "Liberia" },
    { code: "+235", flag: "🇹🇩", name: "Chad" },
    { code: "+236", flag: "🇨🇫", name: "Central African Republic" },
    { code: "+237", flag: "🇨🇲", name: "Cameroon" },
    { code: "+240", flag: "🇬🇶", name: "Equatorial Guinea" },
    { code: "+241", flag: "🇬🇦", name: "Gabon" },
    { code: "+242", flag: "🇨🇬", name: "Republic of the Congo" },
    { code: "+243", flag: "🇨🇩", name: "DR Congo" },
    { code: "+244", flag: "🇦🇴", name: "Angola" },
    { code: "+264", flag: "🇳🇦", name: "Namibia" },
    { code: "+267", flag: "🇧🇼", name: "Botswana" },
    { code: "+268", flag: "🇸🇿", name: "Eswatini" },
    { code: "+266", flag: "🇱🇸", name: "Lesotho" },
    { code: "+258", flag: "🇲🇿", name: "Mozambique" },
    { code: "+261", flag: "🇲🇬", name: "Madagascar" },
    { code: "+269", flag: "🇰🇲", name: "Comoros" },
    { code: "+253", flag: "🇩🇯", name: "Djibouti" },
    { code: "+252", flag: "🇸🇴", name: "Somalia" },
    { code: "+249", flag: "🇸🇩", name: "Sudan" },
    { code: "+211", flag: "🇸🇸", name: "South Sudan" },
    { code: "+257", flag: "🇧🇮", name: "Burundi" },
    { code: "+250", flag: "🇷🇼", name: "Rwanda" },
    { code: "+222", flag: "🇲🇷", name: "Mauritania" },
    { code: "+227", flag: "🇳🇪", name: "Niger" },
  ];

  // ==========================================
  // 4. UPDATED JOBS DATA (Contract based + Global + Inhouse)
  // ==========================================
  const jobList = [
    {
      title: 'Senior Software Engineer (MERN)',
      type: 'Contract',
      location: 'Global',
      inhouse: 'Remote',
      desc: 'Lead the development of scalable web applications using MERN stack with best practices.',
    },
    {
      title: 'VoIP / Telecom Engineer',
      type: 'Contract',
      location: 'Global',
      inhouse: 'Remote',
      desc: 'Design and maintain high-performance VoIP and telecommunication infrastructure.',
    },
    {
      title: 'E-Commerce Shopify Developer',
      type: 'Contract',
      location: 'Global',
      inhouse: 'Remote',
      desc: 'Build and optimize custom Shopify themes, apps, and integrations for global clients.',
    },
    {
      title: 'Business Development Lead (US Market)',
      type: 'Contract',
      location: 'Global',
      inhouse: 'Inhouse (Pakistan)',
      desc: 'Drive revenue growth by acquiring new clients and building strong partnerships in the US market.',
    },
    {
      title: 'UI/UX Designer (Web & Mobile)',
      type: 'Contract',
      location: 'Global',
      inhouse: 'Remote',
      desc: 'Design modern, responsive, and user-friendly interfaces for mobile and web platforms.',
    },
    {
      title: 'Digital Marketing & SEO Specialist',
      type: 'Contract',
      location: 'Global',
      inhouse: 'Remote',
      desc: 'Create and execute data-driven SEO and digital marketing strategies to boost online presence.',
    },
  ];

  // ==========================================
  // 5. DATA: Benefits
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
    <div className="bg-[#FAF9F6] min-h-screen font-manrope pb-16">
      
      {/* SECTION 1: HERO */}
      <section className="pt-16 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-[#111111] text-white rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center shadow-xl shadow-black/20">
          <div className="w-full lg:w-3/5 space-y-5">
            <p className="text-[#FF6B35] font-medium text-sm tracking-[3px] uppercase">Join Our Team</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Build Your Career With <span className="text-[#FF6B35]">TransNova</span>
            </h1>
            <p className="text-[#9B9B8A] text-base leading-relaxed max-w-lg">
              We are looking for passionate, talented individuals to join our growing family. If you are ready to make an impact, we want to hear from you.
            </p>
            <div className="pt-2">
              <a href="#jobs" className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-full font-medium hover:bg-[#E85C2D] transition-colors shadow-lg shadow-orange-500/30">
                View Open Positions <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team working" className="w-full h-56 lg:h-64 object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* SECTION 2: BENEFITS */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">Why Join <span className="text-[#FF6B35]">Us?</span></h2>
          <div className="w-12 h-[3px] bg-[#FF6B35] mx-auto mt-3 rounded-full"></div>
          <p className="text-[#666666] mt-4 max-w-xl mx-auto">We invest in our people, providing the tools and environment to thrive.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefitsList.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 text-center border border-[#EDEAE4] hover:border-transparent">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF9F6] flex items-center justify-center mb-4 group-hover:bg-[#FF6B35]/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
              <p className="text-[#777777] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: UPDATED JOB LIST */}
      <section id="jobs" className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">Open Positions</h2>
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-2 rounded-full"></div>
          </div>
          <p className="text-[#777777] text-sm bg-white px-4 py-2 rounded-full border border-[#EDEAE4]">{jobList.length} Jobs Available</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobList.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#EDEAE4] group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35]"><FaBriefcase className="text-lg" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111]">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-[#FF6B35] text-xs font-medium bg-[#FAF9F6] px-2 py-0.5 rounded-full border border-[#FF6B35]/20">{job.type}</span>
                      <span className="text-[#777777] text-xs">• {job.location}</span>
                      <span className="text-[#777777] text-xs">• {job.inhouse}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#555555] text-sm leading-relaxed mb-4">{job.desc}</p>
              <button onClick={() => openApplyModal(job.title)} className="w-full py-2.5 bg-[#FAF9F6] text-[#111111] font-medium rounded-lg hover:bg-[#FF6B35] hover:text-white transition-all duration-300 border border-[#EDEAE4] group-hover:border-transparent text-sm cursor-pointer">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: APPLICATION FORM MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fadeIn">
            <div className="sticky top-0 bg-white z-10 p-6 border-b border-[#EDEAE4] flex justify-between items-center rounded-t-2xl">
              <div>
                <h3 className="text-2xl font-bold text-[#111111]">Apply for <span className="text-[#FF6B35]">{selectedJob}</span></h3>
                <p className="text-[#777777] text-sm mt-1">Fill out the form below to submit your application.</p>
              </div>
              <button onClick={closeModal} className="w-10 h-10 rounded-full hover:bg-[#FAF9F6] flex items-center justify-center text-[#111111] transition-colors"><FaTimes className="text-xl" /></button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#111111] mb-1">Full Name <span className="text-[#FF6B35]">*</span></label>
                  <input type="text" required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6]" placeholder="John Doe" />
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#111111] mb-1">Email Address <span className="text-[#FF6B35]">*</span></label>
                  <input type="email" required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6]" placeholder="john@example.com" />
                </div>

                {/* Phone / WhatsApp + Country Code (196 Countries) */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-1">Country Code & Flag <span className="text-[#FF6B35]">*</span></label>
                    <select required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6] text-[#111111]">
                      <option value="">Select Country</option>
                      {countriesList.map((c, i) => (
                        <option key={i} value={c.code}>{c.flag} {c.name} ({c.code})</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#111111] mb-1">Phone / WhatsApp Number <span className="text-[#FF6B35]">*</span></label>
                    <input type="tel" required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6]" placeholder="123-456-7890" />
                  </div>
                </div>

                {/* City and Country */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#111111] mb-1">City and Country <span className="text-[#FF6B35]">*</span></label>
                  <input type="text" required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6]" placeholder="Houston, USA / Karachi, Pakistan" />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1">Years of Experience <span className="text-[#FF6B35]">*</span></label>
                  <select required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6] text-[#111111]">
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 Years</option>
                    <option value="2-3">2-3 Years</option>
                    <option value="4-6">4-6 Years</option>
                    <option value="7-10">7-10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>

                {/* Language Expertise */}
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1">Language Expertise <span className="text-[#FF6B35]">*</span></label>
                  <select required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6] text-[#111111]">
                    <option value="">Select language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Urdu">Urdu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1">How much is your Expertise? <span className="text-[#FF6B35]">*</span></label>
                  <select required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6] text-[#111111]">
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>

                {/* Salary + Currency */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#111111] mb-1">Expected Salary <span className="text-[#FF6B35]">*</span></label>
                    <input type="text" required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6]" placeholder="e.g. 60,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-1">Currency <span className="text-[#FF6B35]">*</span></label>
                    <select required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6] text-[#111111]">
                      <option value="">Select</option>
                      <option value="USD">USD ($)</option>
                      <option value="PKR">PKR (Rs)</option>
                    </select>
                  </div>
                </div>

                {/* Available Start Date */}
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1">Available Start Date <span className="text-[#FF6B35]">*</span></label>
                  <input type="date" required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6] text-[#111111]" />
                </div>

                {/* Upload CV */}
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1">Upload CV/Resume (PDF) <span className="text-[#FF6B35]">*</span></label>
                  <input type="file" accept=".pdf" required className="w-full border border-[#EDEAE4] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FF6B35] file:text-white hover:file:bg-[#E85C2D]" />
                </div>

                {/* Additional Info */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#111111] mb-1">Additional Info <span className="text-[#777777] text-xs font-normal">(Optional - Max 1000 words)</span></label>
                  <textarea 
                    maxLength="5000" 
                    className="w-full border border-[#EDEAE4] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#FAF9F6] resize-none min-h-[100px]" 
                    placeholder="Tell us anything else you'd like us to know about you..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 pt-2">
                  <button type="submit" className="w-full bg-[#FF6B35] text-white font-medium py-3.5 rounded-lg hover:bg-[#E85C2D] transition-colors shadow-md shadow-orange-200 flex justify-center items-center gap-2">
                    Submit Application <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: SUCCESS POPUP */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10 text-center relative animate-fadeIn">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <FaCheckCircle className="text-green-500 text-5xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#111111] mb-2">Application Submitted!</h3>
            <p className="text-[#777777] text-base mb-8 leading-relaxed">
              Thank you for applying to <span className="text-[#FF6B35] font-medium">{selectedJob}</span>.<br />
              <span className="block mt-2 text-[#111111] font-medium text-lg">
                We will get back to you within 24 hours.
              </span>
            </p>
            <button onClick={closeSuccess} className="w-full bg-[#FF6B35] text-white font-medium py-3 rounded-lg hover:bg-[#E85C2D] transition-colors">
              Got it, Thanks!
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;