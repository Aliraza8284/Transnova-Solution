import React from 'react';

const FAQs = () => {
  const faqs = [
    { q: 'What services does TransNova Solutions offer?', a: 'We offer BPO Solutions, VoIP & Telecom, Invoicing, Logistics, Trucking, and Outsourcing services across various industries.' },
    { q: 'How can I apply for a job at TransNova?', a: 'Visit our Careers page, view open positions, and fill out the application form with your details and CV.' },
    { q: 'Is TransNova a global company?', a: 'Yes, we serve clients globally with remote teams and in-house operations in Pakistan.' },
    { q: 'How do I get a quote for my business?', a: 'You can contact us through the Contact page, email us at info@transnovasolutions.com, or call +1 (888) 123-4567.' },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
        <span className="text-[#111111]">FAQs</span>
      </h1>
      <div className="w-10 h-[3px] bg-[#FF6B35] mt-3 mb-6 rounded-full"></div>
      
      <div className="mt-4 mb-12">
        <p className="text-[#666666] text-lg max-w-3xl leading-relaxed">
          Find answers to the most frequently asked questions about TransNova Solutions. 
          Learn about our services, hiring process, client onboarding, and partnership opportunities. If you need further assistance, feel free to reach out to our support team.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#EDEAE4]">
            <h3 className="text-lg font-bold text-[#111111] mb-2">{item.q}</h3>
            <p className="text-[#777777] text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;