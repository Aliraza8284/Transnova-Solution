import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
        <span className="text-[#111111]">Privacy</span>{' '}
        <span className="text-[#FF6B35]">Policy</span>
      </h1>
      <div className="w-10 h-[3px] bg-[#FF6B35] mt-3 mb-6 rounded-full"></div>
      
      <div className="mt-4 space-y-6 max-w-4xl">
        <p className="text-[#666666] text-lg leading-relaxed">
          At TransNova Solutions, we value your trust. This Privacy Policy outlines how we collect, 
          use, and protect your personal information when you visit our website or use our services.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
          <h3 className="text-xl font-bold text-[#111111] mb-3">1. Information We Collect</h3>
          <ul className="list-disc pl-5 text-[#777777] text-sm space-y-1.5 leading-relaxed">
            <li>Personal identification details (Name, Email, Phone Number).</li>
            <li>Business information provided through contact forms.</li>
            <li>Usage data and cookies to improve website performance.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
          <h3 className="text-xl font-bold text-[#111111] mb-3">2. How We Use Your Information</h3>
          <ul className="list-disc pl-5 text-[#777777] text-sm space-y-1.5 leading-relaxed">
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To process job applications and recruitment.</li>
            <li>To send you important updates, newsletters, and marketing materials (only with your consent).</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
          <h3 className="text-xl font-bold text-[#111111] mb-3">3. Data Security</h3>
          <p className="text-[#777777] text-sm leading-relaxed">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction. Your information is stored securely and is never shared with third parties without your explicit consent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;