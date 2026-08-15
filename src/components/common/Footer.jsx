// ==========================================
// 1. IMPORTS
// ==========================================
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  // ==========================================
  // 2. FOOTER DATA (Columns ke liye)
  // ==========================================
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
  ];

  const ourServices = [
    { name: 'BPO Solutions', path: '/services' },
    { name: 'VoIP & Telecom', path: '/services' },
    { name: 'Invoicing Solutions', path: '/services' },
    { name: 'Logistics Solutions', path: '/services' },
    { name: 'Trucking Services', path: '/services' },
    { name: 'Outsourcing Services', path: '/services' },
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <footer className="bg-[#0f0f0f] text-white font-manrope">
      
      {/* ==========================================
          SECTION 1: TOP STRIP (About TransNova)
         ========================================== */}
      <div className="border-b border-[#2a2a2a] py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          {/* Left: Title */}
          <div className="max-w-md">
            <p className="text-[#FF6B35] font-semibold text-sm tracking-[2px] uppercase mb-2">About TransNova</p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Driving Business.<br />
              <span className="text-[#FF6B35]">Creating Value.</span>
            </h2>
          </div>

          {/* Middle: Description + Button */}
          <div className="max-w-lg flex flex-col gap-4">
            <p className="text-[#9B9B8A] text-sm leading-relaxed">
              TransNova Solutions LLC is a global business solutions provider committed to innovation, integrity, and impact. We partner with businesses to overcome challenges and unlock new opportunities.
            </p>
            <Link 
              to="/about" 
              className="text-[#FF6B35] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              More About Us <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Right: Stats (3 items) */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="text-[#FF6B35] text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <div className="text-xl font-bold">100+</div>
                <p className="text-[#9B9B8A] text-xs">Global Clients</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-[#FF6B35] text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <div className="text-xl font-bold">500+</div>
                <p className="text-[#9B9B8A] text-xs">Skilled Professionals</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-[#FF6B35] text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9-4-18-3 9H2"/></svg>
              </div>
              <div>
                <div className="text-xl font-bold">98%</div>
                <p className="text-[#9B9B8A] text-xs">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 2: MAIN FOOTER (5 Columns)
         ========================================== */}
      <div className="py-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF6B35] text-white flex items-center justify-center font-bold text-lg rounded-sm">T</div>
              <span className="text-2xl font-bold tracking-tight text-white">
                TRANS<span className="text-[#FF6B35]">NOVA</span>
              </span>
            </div>
            <p className="text-[#9B9B8A] text-sm leading-relaxed">
              Solutions without boundaries. We empower businesses worldwide with innovation, technology, and expertise.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm">Quick Links</h4>
            <ul className="space-y-2.5 text-[#9B9B8A] text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-[#FF6B35] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm">Our Services</h4>
            <ul className="space-y-2.5 text-[#9B9B8A] text-sm">
              {ourServices.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-[#FF6B35] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm">Resources</h4>
            <ul className="space-y-2.5 text-[#9B9B8A] text-sm">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-[#FF6B35] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Stay Connected (Socials + Newsletter) */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm">Stay Connected</h4>
            
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-[#FF6B35] hover:text-white transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-[#FF6B35] hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-[#FF6B35] hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#9B9B8A] hover:bg-[#FF6B35] hover:text-white transition-colors"><FaInstagram /></a>
            </div>

            <div className="flex items-center mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm px-4 py-2.5 rounded-l-md w-full focus:outline-none focus:border-[#FF6B35]"
              />
              <button className="bg-[#FF6B35] text-white px-4 py-2.5 rounded-r-md hover:bg-[#E85C2D] transition-colors">
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-[#2a2a2a] py-6 px-6 lg:px-12 text-center text-[#9B9B8A] text-xs">
        &copy; {new Date().getFullYear()} TransNova Solutions LLC. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;