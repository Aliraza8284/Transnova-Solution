import React from 'react';

const TermsConditions = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
        <span className="text-[#111111]">Terms</span>{' '}
        <span className="text-[#FF6B35]">Conditions</span>
      </h1>
      <div className="w-10 h-[3px] bg-[#FF6B35] mt-3 mb-6 rounded-full"></div>
      
      <div className="mt-4 space-y-6 max-w-4xl">
        <p className="text-[#666666] text-lg leading-relaxed">
          By using the TransNova Solutions website and services, you agree to comply with our 
          Terms & Conditions. Please read them carefully before accessing any of our platforms.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
          <h3 className="text-xl font-bold text-[#111111] mb-3">1. Acceptance of Terms</h3>
          <p className="text-[#777777] text-sm leading-relaxed">
            By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
          <h3 className="text-xl font-bold text-[#111111] mb-3">2. Service Usage</h3>
          <p className="text-[#777777] text-sm leading-relaxed">
            All services provided by TransNova Solutions are subject to availability and our internal approval. We reserve the right to refuse or cancel any service request at our discretion.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
          <h3 className="text-xl font-bold text-[#111111] mb-3">3. Intellectual Property</h3>
          <p className="text-[#777777] text-sm leading-relaxed">
            All content, logos, and branding on this website are the exclusive property of TransNova Solutions LLC. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;