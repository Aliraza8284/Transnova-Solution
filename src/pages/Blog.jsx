import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of BPO: AI & Automation',
      date: 'August 10, 2026',
      excerpt: 'Explore how Artificial Intelligence and robotic process automation are transforming the BPO industry and creating new opportunities.',
    },
    {
      title: 'Logistics Tech: Revolutionizing Supply Chains',
      date: 'July 28, 2026',
      excerpt: 'From real-time tracking to predictive analytics, discover the cutting-edge technologies driving modern logistics and transportation.',
    },
    {
      title: 'VoIP Security: Best Practices for Enterprises',
      date: 'July 05, 2026',
      excerpt: 'Ensure your telecommunication infrastructure is secure with these essential VoIP security measures and compliance standards.',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-manrope py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#111111]">
        <span className="text-[#111111]">Blog</span>
      </h1>
      <div className="w-10 h-[3px] bg-[#FF6B35] mt-3 mb-6 rounded-full"></div>
      
      <div className="mt-4 mb-12">
        <p className="text-[#666666] text-lg max-w-3xl leading-relaxed">
          Stay updated with the latest insights, industry trends, and company news from TransNova Solutions. 
          Our blog covers topics ranging from BPO innovation and logistics technology to telecommunication advancements and digital transformation strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#EDEAE4]">
            <p className="text-[#9B9B8A] text-xs mb-2">{post.date}</p>
            <h3 className="text-xl font-bold text-[#111111] mb-3">{post.title}</h3>
            <p className="text-[#777777] text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#FF6B35] text-sm font-medium hover:gap-3 transition-all duration-300">
              Read More <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;