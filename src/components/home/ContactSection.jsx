// src/components/home/ContactSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto bg-[#111111] text-white rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
        
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Ready to Connect?
          </h2>
          <p className="text-[#9B9B8A] text-base leading-relaxed">
            Have a question, need a quote, or want to explore partnership opportunities? 
            Our team is ready to help you take your business to the next level.
          </p>
        </div>

        <Link 
          to="/contact"
          className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#E85C2D] transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30"
        >
          Get In Touch <FaArrowRight className="text-xs" />
        </Link>

      </div>
    </section>
  );
};

export default ContactSection;