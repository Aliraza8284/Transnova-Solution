import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useCopyProtection from '../Hooks/useCopyProtection';

import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaTruck,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

/* =========================================================
   COMPANY INFORMATION
========================================================= */

const COMPANY_NAME = "Trans Nova Solutions";
const COMPANY_PHONE = "+1 (407) 205-9059";
const COMPANY_EMAIL = "business@transnova.solutions";
const COMPANY_ADDRESS =
  "1209 Mountain Road PL NE STE 12783, Albuquerque, NM 87110, USA";

/* =========================================================
   DESIGN TOKENS
========================================================= */

const INK = "#15181D";
const PAPER = "#FAF9F7";
const STEEL = "#5B5F66";
const STEEL_LINE = "#E2E1DC";
const SIGNAL = "#D9480F";
const SIGNAL_DARK = "#B33D0C";

/* =========================================================
   EMAIL CONFIGURATION
========================================================= */

const getMailToLink = () => {
  const subject = encodeURIComponent("Inquiry about Trans Nova Solutions Services");
  const body = encodeURIComponent(
    "Hello Trans Nova Solutions Team,\n\n" +
    "I would like to get more information about your dispatch and logistics services.\n\n" +
    "Please let me know about:\n" +
    "- Your dispatch services\n" +
    "- Pricing and fees\n" +
    "- Availability\n\n" +
    "Thank you,\n" +
    "[Your Name]\n" +
    "[Your Phone Number]\n" +
    "[Your MC Number if applicable]"
  );
  return `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
};

/* =========================================================
   BLOG ARTICLES DATA - Complete with all fields
   ✅ FIXED: Images with proper paths
========================================================= */

const blogPosts = [
  {
    id: 1,
    slug: "how-to-start-trucking-business-usa",
    category: "Dispatching",
    date: "March 29, 2026",
    readTime: "8 min read",
    title: "How to Start a Trucking Business in the USA (Step-by-Step Guide for 2026)",
    image: "/box.avif",
    description: "Learn how to start a trucking business in the USA in 2026. Complete guide covering MC/DOT registration, dispatch, compliance, equipment and building a successful trucking operation.",
    content: `
      <p>Starting a trucking business in the United States is a rewarding venture that offers independence and financial growth. However, navigating the regulatory landscape, securing equipment, and building a client base requires careful planning and execution.</p>
      
      <h2>1. Understand the Industry</h2>
      <p>Before diving in, it's essential to understand the trucking industry's dynamics. The freight market is influenced by economic cycles, fuel prices, and seasonal demand. Research the types of freight that are in high demand in your region and identify your niche.</p>
      
      <h2>2. Choose Your Business Structure</h2>
      <p>Decide on a legal structure for your trucking business. Most owner-operators choose between:</p>
      <ul>
        <li><strong>Sole Proprietorship</strong> — Simple and affordable, but offers no personal liability protection.</li>
        <li><strong>LLC (Limited Liability Company)</strong> — Provides liability protection and tax flexibility.</li>
        <li><strong>Corporation</strong> — Best for larger operations with multiple trucks and employees.</li>
      </ul>
      
      <h2>3. Register Your Business</h2>
      <p>Once you've chosen a structure, register your business with the state and obtain an EIN (Employer Identification Number) from the IRS. This is required for tax purposes and to open business bank accounts.</p>
      
      <h2>4. Obtain Your MC and DOT Numbers</h2>
      <p>The Federal Motor Carrier Safety Administration (FMCSA) requires all commercial vehicles operating in interstate commerce to have:</p>
      <ul>
        <li><strong>MC Number</strong> — Motor Carrier number used for freight brokerage and authority.</li>
        <li><strong>DOT Number</strong> — Department of Transportation number used for safety inspections and compliance.</li>
      </ul>
      <p>Apply through the FMCSA Unified Registration System (URS). This process typically takes 4-6 weeks.</p>
      
      <h2>5. Secure Your Equipment</h2>
      <p>Your truck and trailer are your most significant investments. Consider whether to buy new, used, or lease equipment. For new carriers, used trucks often provide a more accessible entry point. Ensure your equipment meets all safety and emissions standards.</p>
      
      <h2>6. Get Proper Insurance</h2>
      <p>Insurance is mandatory for all trucking operations. At a minimum, you'll need:</p>
      <ul>
        <li><strong>Primary Liability</strong> — Covers damages to third parties in case of an accident.</li>
        <li><strong>Physical Damage</strong> — Covers damage to your truck and trailer.</li>
        <li><strong>Cargo Insurance</strong> — Protects the freight you're hauling.</li>
      </ul>
      <p>Rates vary based on your operation type, equipment, and safety record.</p>
      
      <h2>7. Find a Dispatch Partner</h2>
      <p>Partnering with a professional dispatch service like Trans Nova Solutions can help you secure better-paying loads, reduce empty miles, and keep your trucks moving. A good dispatch team negotiates rates, manages paperwork, and provides 24/7 support.</p>
      
      <h2>8. Build Your Network</h2>
      <p>Success in trucking relies heavily on relationships. Connect with freight brokers, shippers, and other carriers. Attend industry events and join online communities to stay informed about market trends and opportunities.</p>
      
      <h2>9. Manage Your Finances</h2>
      <p>Cash flow management is critical in trucking. Track all expenses, including fuel, maintenance, insurance, and driver pay. Use accounting software to stay on top of invoices and receivables.</p>
      
      <h2>10. Stay Compliant</h2>
      <p>Compliance with FMCSA regulations is non-negotiable. Maintain accurate logs, conduct regular vehicle inspections, and ensure your drivers are properly qualified. Non-compliance can result in fines, penalties, or even losing your authority.</p>
      
      <h2>Conclusion</h2>
      <p>Starting a trucking business requires dedication, planning, and a willingness to learn. With the right approach and support from experienced partners, you can build a successful operation that provides long-term stability and growth.</p>
      
      <p><strong>Ready to get started?</strong> Contact Trans Nova Solutions today to learn how our dispatch and logistics services can help you launch and grow your trucking business.</p>
    `
  },
  {
    id: 2,
    slug: "truck-dispatch-services-usa",
    category: "Compliance",
    date: "March 22, 2026",
    readTime: "7 min read",
    title: "Truck Dispatch Services in the USA: How Owner-Operators Can Increase Revenue and Reduce Downtime",
    image: "/mbox.avif",
    description: "Looking for truck dispatch services in the USA? Discover how professional dispatch helps owner-operators secure better-paying loads, reduce empty miles and keep their trucks moving.",
    content: `
      <p>For owner-operators and small fleet owners, time is money. Every hour spent searching for loads, negotiating rates, or dealing with paperwork is an hour not spent on the road generating revenue. This is where professional truck dispatch services become invaluable.</p>
      
      <h2>What Are Truck Dispatch Services?</h2>
      <p>Dispatch services act as a bridge between carriers and freight brokers. They handle the logistical and administrative tasks involved in securing and managing freight loads. This includes:</p>
      <ul>
        <li>Finding and negotiating freight rates</li>
        <li>Coordinating pickup and delivery appointments</li>
        <li>Managing paperwork and compliance documentation</li>
        <li>Providing 24/7 support for drivers</li>
      </ul>
      
      <h2>How Dispatch Services Increase Revenue</h2>
      <h3>1. Access to Better Loads</h3>
      <p>Dispatch teams have established relationships with brokers and access to load boards. They can identify high-paying freight that may not be visible to individual carriers.</p>
      
      <h3>2. Rate Negotiation</h3>
      <p>Experienced dispatchers know market rates and can negotiate better pay per mile. They understand when to push for higher rates and when to accept a fair offer.</p>
      
      <h3>3. Reduced Empty Miles</h3>
      <p>By planning loads strategically, dispatchers minimize deadhead miles (empty driving). This maximizes your revenue per mile and reduces fuel costs.</p>
      
      <h2>How Dispatch Services Reduce Downtime</h2>
      <h3>1. Faster Load Matching</h3>
      <p>Dispatchers work continuously to find your next load, often before you've completed your current delivery. This reduces waiting time between loads.</p>
      
      <h3>2. 24/7 Support</h3>
      <p>Issues can arise at any hour — a delayed pickup, a missed appointment, or a mechanical problem. Dispatch teams provide support around the clock to resolve problems quickly.</p>
      
      <h3>3. Paperwork Management</h3>
      <p>Dispatchers handle all the documentation, from rate confirmations to proof of delivery. This frees you up to focus on driving safely.</p>
      
      <h2>Choosing the Right Dispatch Partner</h2>
      <p>When selecting a dispatch service, consider:</p>
      <ul>
        <li><strong>Experience</strong> — Look for a team with industry knowledge and established relationships.</li>
        <li><strong>Communication</strong> — Ensure they provide clear, responsive communication.</li>
        <li><strong>Transparent Pricing</strong> — Avoid hidden fees; choose a service with straightforward rates.</li>
        <li><strong>Reputation</strong> — Read reviews and testimonials from other carriers.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Professional dispatch services help owner-operators and fleets operate more efficiently, increase revenue, and reduce stress. By outsourcing the logistics, you can focus on what matters most — delivering freight safely and on time.</p>
      
      <p><strong>Ready to partner with a dispatch team that puts your success first?</strong> Contact Trans Nova Solutions today.</p>
    `
  },
  {
    id: 3,
    slug: "best-truck-dispatch-services",
    category: "Fleet Management",
    date: "March 15, 2026",
    readTime: "9 min read",
    title: "Best Truck Dispatch Services for Owner-Operators in the USA: How to Choose the Right Partner for Maximum Profit",
    image: "/logistics.jpg",
    description: "Find the right truck dispatch service for your operation. Learn what to look for in a dispatch partner, including communication, rate negotiation, load planning and carrier support.",
    content: `
      <p>Choosing the right dispatch service can be the difference between a profitable trucking operation and one that struggles to stay afloat. With so many options available, how do you identify the best partner for your business?</p>
      
      <h2>What Makes a Great Dispatch Service?</h2>
      <p>The best dispatch services go beyond simply finding loads. They act as strategic partners who understand your business goals and work to help you achieve them.</p>
      
      <h2>Key Qualities to Look For</h2>
      
      <h3>1. Industry Experience</h3>
      <p>Experience matters in trucking. Dispatchers with years of industry knowledge understand market trends, seasonal fluctuations, and the nuances of different freight types. They know when to push for higher rates and when to secure a reliable load.</p>
      
      <h3>2. Strong Broker Relationships</h3>
      <p>Top dispatch services maintain relationships with a wide network of reliable brokers. This gives them access to better freight opportunities and more competitive rates.</p>
      
      <h3>3. Technology-Driven Operations</h3>
      <p>Modern dispatch services use technology to streamline operations. From load boards to real-time tracking and automated paperwork, technology improves efficiency and reduces errors.</p>
      
      <h3>4. Transparent Communication</h3>
      <p>Clear, honest communication is essential. Your dispatch team should keep you informed about load opportunities, market conditions, and any issues that arise. They should be accessible and responsive.</p>
      
      <h3>5. Fair and Transparent Pricing</h3>
      <p>Look for a dispatch service with straightforward pricing. Avoid services with hidden fees, long-term contracts, or unclear terms. The best partners are transparent about their rates and what you get in return.</p>
      
      <h2>Questions to Ask Before Signing Up</h2>
      <ul>
        <li>What is your fee structure? Are there any hidden costs?</li>
        <li>How do you find loads? Do you work with multiple brokers?</li>
        <li>What is your typical response time for load offers?</li>
        <li>Do you provide 24/7 support?</li>
        <li>What kind of reporting do you provide?</li>
        <li>Can you share testimonials from other carriers you work with?</li>
      </ul>
      
      <h2>Why Choose Trans Nova Solutions?</h2>
      <p>Trans Nova Solutions combines years of industry expertise with a commitment to transparency and client success. We work closely with owner-operators and fleets to understand their unique needs and provide dispatch services that maximize revenue and minimize downtime.</p>
      <ul>
        <li><strong>Experienced team</strong> — Our dispatchers have deep industry knowledge.</li>
        <li><strong>Broker network</strong> — We work with trusted partners to secure high-quality loads.</li>
        <li><strong>24/7 support</strong> — We're here when you need us.</li>
        <li><strong>Transparent pricing</strong> — No surprises, just straightforward rates.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Finding the best dispatch service for your operation requires research and careful consideration. Look for a partner with experience, strong relationships, transparent communication, and a commitment to your success. With the right dispatch team, your trucking business can thrive.</p>
      
      <p><strong>Ready to find out how Trans Nova Solutions can help your operation grow?</strong> Get in touch with our team today.</p>
    `
  }
];

/* =========================================================
   BLOG LIST COMPONENT
   ✅ FIXED: Images loading on mobile
========================================================= */

const BlogList = () => {
  // ==========================================
  // COPY PROTECTION
  // ==========================================
  useCopyProtection();

  // ✅ Image fallback handler
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/fallback.jpg";
  };

  return (
    <div 
      className="min-h-screen pt-[72px] font-calibri"
      style={{ 
        backgroundColor: PAPER, 
        color: INK,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Calibri&display=swap');
        
        .font-calibri { 
          font-family: 'Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', sans-serif; 
        }
        
        .calibri-heading {
          font-family: 'Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', sans-serif;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
      `}</style>

      {/* HERO */}
      <section className="bg-white" style={{ borderBottom: `1px solid ${STEEL_LINE}` }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="pt-8 sm:pt-10">
            <div className="flex items-center gap-2 text-[16px]">
              <Link to="/" className="transition-colors" style={{ color: STEEL }}>Home</Link>
              <span style={{ color: "#C9C8C1" }}>/</span>
              <span style={{ color: SIGNAL }} className="font-medium">Blog</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-end pt-12 sm:pt-16 pb-12 sm:pb-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[3px]" style={{ backgroundColor: SIGNAL }} />
                <span className="text-[12px] font-semibold" style={{ color: STEEL }}>
                  Notes from the road and the dispatch desk
                </span>
              </div>

              <h1 className="calibri-heading text-[44px] sm:text-[58px] md:text-[66px] font-bold leading-[0.98] tracking-tight">
                <span style={{ color: SIGNAL }}>Insights</span>
                <span style={{ color: INK }}> that keep</span>
                <br />
                <span style={{ color: INK }}>trucks moving.</span>
              </h1>

              <p className="text-[14.5px] sm:text-[15px] leading-7 mt-6 max-w-[520px]" style={{ color: STEEL }}>
                Dispatching tips, fleet management insights, and logistics
                knowledge — written for drivers, owner-operators and
                fleet owners.
              </p>
            </div>

            {/* ✅ HERO IMAGE - Fixed with fallback */}
            <div className="relative overflow-hidden rounded-[10px]" style={{ border: `1px solid ${STEEL_LINE}` }}>
              <img
                src="/maintruck.avif"
                alt="Truck on highway"
                className="w-full h-full object-cover min-h-[200px] max-h-[270px]"
                draggable="false"
                style={{
                  pointerEvents: 'none',
                  WebkitUserDrag: 'none',
                  userSelect: 'none'
                }}
                onError={handleImageError}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block text-white text-sm font-bold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  🚛 Trans Nova Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-[14px] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
                style={{ border: `1px solid ${STEEL_LINE}`, boxShadow: "0 1px 2px rgba(21,24,29,0.04)" }}
              >
                {/* ✅ IMAGE - Fixed with fallback */}
                <div className="relative h-[210px] sm:h-[220px] overflow-hidden" style={{ backgroundColor: "#EDECE7" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable="false"
                    style={{
                      pointerEvents: 'none',
                      WebkitUserDrag: 'none',
                      userSelect: 'none'
                    }}
                    onError={handleImageError}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className="inline-flex items-center px-3 py-1.5 rounded-[6px] text-[10px] font-bold"
                      style={{ backgroundColor: "#FFFFFF", color: SIGNAL, border: `1px solid ${SIGNAL}` }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute left-0 bottom-0 h-[3px] w-full" style={{ backgroundColor: SIGNAL }} />
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* DATE & READ TIME */}
                  <div className="flex items-center gap-4 text-[10px] mb-3" style={{ color: "#9B9B94" }}>
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt style={{ color: SIGNAL }} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock style={{ color: SIGNAL }} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* TITLE */}
                  <Link to={`/blog/${post.slug}`} className="block">
                    <h2
                      className="calibri-heading text-[21px] font-bold leading-[1.15] mb-3 transition-colors duration-300 line-clamp-3"
                      style={{ color: INK }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = SIGNAL)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = INK)}
                    >
                      {post.title}
                    </h2>
                  </Link>

                  {/* DESCRIPTION */}
                  <p className="text-[12.5px] leading-6 mb-5 line-clamp-3" style={{ color: STEEL }}>
                    {post.description}
                  </p>

                  {/* READ ARTICLE */}
                  <div className="mt-auto pt-4" style={{ borderTop: `1px solid ${STEEL_LINE}` }}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group/link inline-flex items-center gap-2 text-[11px] font-bold transition-colors"
                      style={{ color: SIGNAL }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = SIGNAL_DARK)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = SIGNAL)}
                    >
                      <span>Read article</span>
                      <FaArrowRight className="text-[9px] group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 pb-14 sm:pb-20">
        <div
          className="max-w-[1120px] mx-auto rounded-[14px] px-6 sm:px-10 lg:px-14 py-10 sm:py-12 relative overflow-hidden"
          style={{ backgroundColor: INK }}
        >
          <div className="absolute right-0 top-0 h-full w-[6px]" style={{ backgroundColor: SIGNAL }} />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaTruck className="text-[13px]" style={{ color: SIGNAL }} />
                <span className="text-[11.5px] font-semibold" style={{ color: SIGNAL }}>
                  Keep your trucks moving
                </span>
              </div>

              <h2 className="calibri-heading text-[28px] sm:text-[34px] font-bold text-white leading-tight">
                Ready to grow your
                <br className="hidden sm:block" />
                trucking business?
              </h2>

              <p className="text-[12.5px] sm:text-[13px] leading-6 mt-3 max-w-[600px]" style={{ color: "#9CA0A8" }}>
                Let our experienced logistics team handle dispatching,
                load planning and rate negotiation while you focus on
                keeping your trucks moving.
              </p>

              {/* Email Contact with mailto */}
              <div className="flex items-center gap-2 mt-4">
                <FaEnvelope className="text-[12px]" style={{ color: SIGNAL }} />
                <a 
                  href={getMailToLink()}
                  className="text-[12px] transition-colors hover:underline"
                  style={{ color: "#9CA0A8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = SIGNAL)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA0A8")}
                >
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3.5 text-[12px] font-bold text-white transition-colors duration-150"
                style={{ backgroundColor: SIGNAL }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = SIGNAL_DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = SIGNAL)}
              >
                Talk to us
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WATERMARK */}
      <div className="fixed bottom-4 right-4 pointer-events-none z-50 opacity-5">
        <span className="text-[#0A0A0A] text-xs font-bold tracking-widest select-none">
          © Trans Nova Solutions
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   BLOG ARTICLE COMPONENT
   ✅ FIXED: Images loading on mobile
========================================================= */

const BlogArticle = () => {
  // ==========================================
  // COPY PROTECTION
  // ==========================================
  useCopyProtection();

  const navigate = useNavigate();
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Image fallback handler
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/fallback.jpg";
  };

  useEffect(() => {
    const fetchArticle = () => {
      try {
        setLoading(true);
        setError("");

        const foundArticle = blogPosts.find(
          (post) => post.slug === slug
        );

        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          throw new Error("Article not found");
        }
      } catch (err) {
        console.error("Blog Error:", err);
        setError(err.message || "Unable to load article");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  if (loading) {
    return (
      <div 
        className="min-h-screen bg-[#FAF9F7] pt-[100px] flex items-center justify-center"
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          WebkitTouchCallout: 'none'
        }}
      >
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#FBE7DB] border-t-[#D9480F] rounded-full animate-spin mx-auto mb-5" />
          <p className="text-[#5B5F66]">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div 
        className="min-h-screen bg-[#FAF9F7] pt-[100px] flex items-center justify-center px-5"
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          WebkitTouchCallout: 'none'
        }}
      >
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 rounded-full bg-[#FBE7DB] text-[#D9480F] flex items-center justify-center mx-auto mb-5">
            <FaTruck className="text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-[#15181D] mb-3">Article Not Found</h1>
          <p className="text-[#5B5F66] mb-6">
            The article you're looking for doesn't exist or could not be loaded.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-[#D9480F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B33D0C] transition"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-[#FAF9F7] pt-[72px] font-calibri"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Calibri&display=swap');
        
        .font-calibri { 
          font-family: 'Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', sans-serif; 
        }
        
        .calibri-heading {
          font-family: 'Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', sans-serif;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        
        .article-content p { margin-bottom: 22px; }
        .article-content h2 {
          font-family: 'Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', sans-serif;
          font-size: 30px;
          font-weight: 700;
          margin-top: 38px;
          margin-bottom: 16px;
          color: #15181D;
        }
        .article-content h3 {
          font-family: 'Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', sans-serif;
          font-size: 20px;
          font-weight: 700;
          margin-top: 28px;
          margin-bottom: 12px;
          color: #15181D;
        }
        .article-content ul {
          list-style: disc;
          padding-left: 25px;
          margin-bottom: 24px;
        }
        .article-content li { margin-bottom: 10px; }
        .article-content strong { color: #15181D; font-weight: 700; }
      `}</style>

      {/* BACK TO BLOG */}
      <section className="bg-white border-b border-[#E2E1DC]">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 py-5">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#5B5F66] hover:text-[#D9480F] transition">
            <FaArrowLeft />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* ARTICLE HEADER */}
      <section className="bg-white">
        <div className="max-w-[950px] mx-auto px-5 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
          <div className="mb-5">
            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#FBE7DB] text-[#D9480F] text-xs font-bold">
              {article.category}
            </span>
          </div>
          <h1 className="calibri-heading text-[42px] sm:text-[55px] lg:text-[64px] font-bold leading-[1] text-[#15181D]">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 mt-7 text-xs text-[#5B5F66]">
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#D9480F]" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <FaClock className="text-[#D9480F]" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ✅ ARTICLE IMAGE - Fixed with fallback */}
      <section className="px-5 sm:px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="rounded-2xl overflow-hidden h-[260px] sm:h-[400px] lg:h-[520px]">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
              draggable="false"
              style={{
                pointerEvents: 'none',
                WebkitUserDrag: 'none',
                userSelect: 'none'
              }}
              onError={handleImageError}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[820px] mx-auto px-5 sm:px-6">
          <article
            className="article-content text-[15px] sm:text-[16px] leading-8 text-[#5B5F66]"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 pb-16">
        <div className="max-w-[820px] mx-auto">
          <div className="bg-[#15181D] rounded-2xl px-6 sm:px-10 py-9 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1.5 h-full bg-[#D9480F]" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <FaTruck className="text-[#D9480F]" />
                <span className="text-xs font-bold text-[#D9480F]">TRANS NOVA SOLUTIONS</span>
              </div>
              <h2 className="calibri-heading text-3xl sm:text-4xl text-white font-bold">
                Ready to keep your trucks moving?
              </h2>
              <p className="text-sm text-[#9CA0A8] mt-3 mb-6 max-w-xl">
                Talk to our dispatch team about your trucking operation and available services.
              </p>
              
              {/* Email Contact in Article CTA */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#D9480F] hover:bg-[#B33D0C] text-white px-6 py-3 rounded-lg font-bold text-sm transition"
                >
                  Talk to us
                </Link>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-[12px]" style={{ color: "#9CA0A8" }} />
                  <a 
                    href={getMailToLink()}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: "#9CA0A8" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D9480F")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA0A8")}
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
     
    </div>
  );
};

/* =========================================================
   MAIN EXPORT
========================================================= */

const Blog = () => {
  const { slug } = useParams();

  if (slug) {
    return <BlogArticle />;
  }

  return <BlogList />;
};

export default Blog;