import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Logistics Optimization for a US-Based Trucking Firm',
      industry: 'Trucking & Logistics',
      result: 'Reduced delivery delays by 40% and improved fleet efficiency.',
    },
    {
      title: 'Telecom Infrastructure Upgrade for a Global Call Center',
      industry: 'Telecommunication',
      result: 'Enhanced call quality by 60% and minimized downtime to near zero.',
    },
    {
      title: 'Medical Claims Verification Automation for a Healthcare Provider',
      industry: 'Medical & Healthcare',
      result: 'Processed 10,000+ claims per month with 99.8% accuracy.',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
        <span className="text-[#111111]">Case</span>{' '}
        <span className="text-[#FF6B35]">Studies</span>
      </h1>
      <div className="w-10 h-[3px] bg-[#FF6B35] mt-3 mb-6 rounded-full"></div>
      
      <div className="mt-4 mb-12">
        <p className="text-[#666666] text-lg max-w-3xl leading-relaxed">
          Explore real-world success stories where TransNova Solutions empowered businesses across 
          Trucking & Logistics, Telecommunication, Finance & Banking, and Medical & Healthcare industries. 
          Our tailored solutions have consistently driven measurable growth and operational excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#EDEAE4]">
            <p className="text-[#9B9B8A] text-xs mb-2">Industry: {item.industry}</p>
            <h3 className="text-xl font-bold text-[#111111] mb-3">{item.title}</h3>
            <p className="text-[#777777] text-sm leading-relaxed mb-4">{item.result}</p>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#FF6B35] text-sm font-medium hover:gap-3 transition-all duration-300">
              Read Full Case <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;