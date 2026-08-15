// ==========================================
// 1. IMPORTS
// ==========================================
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaUsers, FaChartLine, FaTrophy } from 'react-icons/fa';

const Careers = () => {
  // ==========================================
  // 2. DATA: Job Openings ki list
  // ==========================================
  const jobList = [
    {
      title: 'Senior BPO Executive',
      type: 'Full-Time',
      location: 'Houston, TX (Remote Option)',
      desc: 'Lead and manage customer support operations, ensuring exceptional service delivery.',
    },
    {
      title: 'VoIP / Telecom Engineer',
      type: 'Full-Time',
      location: 'Austin, TX',
      desc: 'Design, deploy, and maintain robust VoIP and telecommunication systems.',
    },
    {
      title: 'Logistics Operations Manager',
      type: 'Full-Time',
      location: 'Dallas, TX',
      desc: 'Oversee supply chain operations, optimize routes, and manage warehouse logistics.',
    },
    {
      title: 'Trucking Fleet Coordinator',
      type: 'Contract',
      location: 'Remote (US)',
      desc: 'Coordinate dispatch schedules, driver assignments, and fleet compliance.',
    },
    {
      title: 'Business Development Lead',
      type: 'Full-Time',
      location: 'Houston, TX',
      desc: 'Drive new business opportunities, build client relationships, and expand market reach.',
    },
    {
      title: 'HR & Talent Acquisition Specialist',
      type: 'Full-Time',
      location: 'Houston, TX',
      desc: 'Manage the full recruitment lifecycle and shape company culture.',
    },
  ];

  // ==========================================
  // 3. DATA: Benefits ki list
  // ==========================================
  const benefitsList = [
    { icon: <FaTrophy className="text-[#FF6B35] text-2xl" />, title: 'Competitive Salary', desc: 'We offer market-leading compensation packages.' },
    { icon: <FaUsers className="text-[#FF6B35] text-2xl" />, title: 'Great Culture', desc: 'Collaborative, innovative, and inclusive workplace.' },
    { icon: <FaChartLine className="text-[#FF6B35] text-2xl" />, title: 'Growth Opportunities', desc: 'Continuous learning and career advancement programs.' },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope pb-16">
      
      {/* ==========================================
          SECTION 1: HERO SECTION
         ========================================== */}
      <section className="pt-16 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-[#111111] text-white rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center shadow-xl shadow-black/20">
          
          {/* Left: Text */}
          <div className="w-full lg:w-3/5 space-y-5">
            <p className="text-[#FF6B35] font-medium text-sm tracking-[3px] uppercase">Join Our Team</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Build Your Career With <span className="text-[#FF6B35]">TransNova</span>
            </h1>
            <p className="text-[#9B9B8A] text-base leading-relaxed max-w-lg">
              We are looking for passionate, talented individuals to join our growing family. 
              If you are ready to make an impact, we want to hear from you.
            </p>
            
            <div className="pt-2">
              <a href="#jobs" className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-full font-medium hover:bg-[#E85C2D] transition-colors shadow-lg shadow-orange-500/30">
                View Open Positions <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-56 lg:h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 2: WHY JOIN US (Benefits)
         ========================================== */}
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


      {/* ==========================================
          SECTION 3: OPEN POSITIONS (Job List)
         ========================================== */}
      <section id="jobs" className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">Open Positions</h2>
            <div className="w-10 h-[3px] bg-[#FF6B35] mt-2 rounded-full"></div>
          </div>
          <p className="text-[#777777] text-sm bg-white px-4 py-2 rounded-full border border-[#EDEAE4]">
            {jobList.length} Jobs Available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobList.map((job, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#EDEAE4] group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#FF6B35]">
                    <FaBriefcase className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111]">{job.title}</h3>
                    <p className="text-[#777777] text-xs">{job.type} • {job.location}</p>
                  </div>
                </div>
              </div>
              <p className="text-[#555555] text-sm leading-relaxed mb-4">{job.desc}</p>
              <button className="w-full py-2.5 bg-[#FAF9F6] text-[#111111] font-medium rounded-lg hover:bg-[#FF6B35] hover:text-white transition-all duration-300 border border-[#EDEAE4] group-hover:border-transparent text-sm">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Careers;