import React from "react";
import {
  FaConnectdevelop,
  FaChartLine,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const AboutScript = () => {
  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="bg-[#FAF9F6] font-manrope pb-8 overflow-hidden">

      {/* ==========================================
          SECTION 0: BREADCRUMB
         ========================================== */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto pt-4 pb-1 relative z-20">
        <p className="text-[#9B9B8A] text-xs">Home / About Us</p>
      </div>

      {/* ==========================================
          SECTION 1: WHO WE ARE
         ========================================== */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-12 lg:py-16 relative">

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden -z-10 opacity-20">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path d="M0 100 L100 100 L50 0 Z" fill="none" stroke="#9B9B8A" strokeWidth="0.5" />
            <path d="M0 50 L100 50 L100 0 Z" fill="none" stroke="#9B9B8A" strokeWidth="0.5" />
            <path d="M0 0 L100 100 L0 100 Z" fill="none" stroke="#9B9B8A" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">

          {/* LEFT: TEXT */}
          <div className="w-full lg:w-1/2">

            <p className="text-[#FF6B35] font-bold text-sm tracking-[3px] uppercase mb-3">
              Who We Are
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#111111] leading-[1.05] tracking-tight">
              We Connect
              <br />
              <span className="text-[#FF6B35]">What Matters.</span>
            </h2>

            <div className="flex items-center gap-2 mt-5 mb-6">
              <div className="w-12 h-[3px] bg-[#FF6B35] rounded-full" />
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
            </div>

            <div className="space-y-4 max-w-xl">
              <p className="text-[#555555] text-sm sm:text-base leading-7">
                Trans Nova Solutions is a diversified business solutions
                company built around one simple idea: businesses grow faster
                when the right people, technology, and opportunities are
                connected.
              </p>

              <p className="text-[#555555] text-sm sm:text-base leading-7">
                From customer operations and telecommunications to logistics
                and digital services, we help organizations simplify
                complexity, improve performance, and create new opportunities
                for growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-[#E5E2DC]">
              <div>
                <h4 className="text-2xl font-bold text-[#111111]">01</h4>
                <p className="text-xs text-[#777777] mt-1">Connected Thinking</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#111111]">02</h4>
                <p className="text-xs text-[#777777] mt-1">Smart Solutions</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#111111]">03</h4>
                <p className="text-xs text-[#777777] mt-1">Business Growth</p>
              </div>
            </div>
          </div>

          {/* RIGHT: WIDER & SHORTER IMAGE (WIDE ASPECT RATIO) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[700px] aspect-[10/9] overflow-hidden">
              <img
                src="/amm.png"
                alt="Trans Nova Solutions Graphic"
                className="w-full h-full object-contain block"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: WHY BUSINESSES CHOOSE TNS
         ========================================== */}
      <section className="bg-[#050505] text-white py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <p className="text-center text-[#FF6B35] font-semibold text-xs tracking-[3px] uppercase mb-6">
            Why Businesses Choose TNS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 divide-y lg:divide-y-0 lg:divide-x divide-[#2a2a2a]">
            {[
              {
                Icon: FaConnectdevelop,
                title: "Connected Thinking",
                desc: "We look beyond individual services to understand the bigger picture and deliver solutions that truly connect.",
              },
              {
                Icon: FaChartLine,
                title: "Built to Scale",
                desc: "Our solutions are designed to adapt to your needs and scale as your business grows.",
              },
              {
                Icon: FaUsers,
                title: "Technology + People",
                desc: "We combine human expertise with technology to deliver smarter, faster, and better outcomes.",
              },
              {
                Icon: FaHandshake,
                title: "One Connected Partner",
                desc: "Multiple capabilities. One trusted partner. Less complexity, more opportunities.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center px-4 py-5 lg:py-0"
              >
                <item.Icon className="text-[#FF6B35] text-3xl mb-3" />

                <h3 className="text-base font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-[#9B9B8A] text-xs leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: OUR APPROACH
         ========================================== */}
      <section className="bg-white py-12 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto text-center relative">

          <p className="text-[#FF6B35] font-bold text-xs tracking-[2px] uppercase mb-2">
            Our Approach
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] mb-10 leading-tight">
            A Connected Approach to Every Solution.
          </h2>

          {/* Wavy Line */}
          <div className="absolute top-[60px] left-[5%] right-[5%] h-[2px] w-[90%] hidden lg:block -z-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 C 10 2, 15 2, 25 5 S 35 5, 50 5 S 70 3, 75 7 S 85 2, 100 5"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-2">

            {/* STEP 01 */}
            <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 w-full lg:w-auto relative">
              <div className="w-14 h-14 rounded-full border-2 border-[#FF6B35] bg-white flex items-center justify-center text-[#FF6B35] z-10 shadow-sm shrink-0">
                <span className="text-xs font-bold">01</span>
              </div>

              <div className="text-left lg:text-center mt-1 lg:mt-3">
                <div className="w-5 h-[2px] bg-[#FF6B35] mb-2 lg:mx-auto" />

                <h4 className="font-bold text-[#111111] text-base">
                  Understand
                </h4>

                <p className="text-[#777777] text-xs leading-relaxed mt-1 max-w-[170px]">
                  We listen, analyze, and identify the real business challenge.
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 w-full lg:w-auto relative">
              <div className="w-14 h-14 rounded-full border-2 border-[#FF6B35] bg-white flex items-center justify-center text-[#FF6B35] z-10 shadow-sm shrink-0">
                <span className="text-xs font-bold">02</span>
              </div>

              <div className="text-left lg:text-center mt-1 lg:mt-3">
                <div className="w-5 h-[2px] bg-[#FF6B35] mb-2 lg:mx-auto" />

                <h4 className="font-bold text-[#111111] text-base">
                  Connect
                </h4>

                <p className="text-[#777777] text-xs leading-relaxed mt-1 max-w-[170px]">
                  We bring together the right people, capabilities, and technology.
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 w-full lg:w-auto relative">
              <div className="w-14 h-14 rounded-full border-2 border-[#FF6B35] bg-white flex items-center justify-center text-[#FF6B35] z-10 shadow-sm shrink-0">
                <span className="text-xs font-bold">03</span>
              </div>

              <div className="text-left lg:text-center mt-1 lg:mt-3">
                <div className="w-5 h-[2px] bg-[#FF6B35] mb-2 lg:mx-auto" />

                <h4 className="font-bold text-[#111111] text-base">
                  Deliver
                </h4>

                <p className="text-[#777777] text-xs leading-relaxed mt-1 max-w-[170px]">
                  We turn strategy into practical, measurable solutions.
                </p>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 w-full lg:w-auto relative">
              <div className="w-14 h-14 rounded-full border-2 border-[#FF6B35] bg-white flex items-center justify-center text-[#FF6B35] z-10 shadow-sm shrink-0">
                <span className="text-xs font-bold">04</span>
              </div>

              <div className="text-left lg:text-center mt-1 lg:mt-3">
                <div className="w-5 h-[2px] bg-[#FF6B35] mb-2 lg:mx-auto" />

                <h4 className="font-bold text-[#111111] text-base">
                  Evolve
                </h4>

                <p className="text-[#777777] text-xs leading-relaxed mt-1 max-w-[170px]">
                  We continuously improve as your business and market change.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: BOTTOM CTA
         ========================================== */}
      <section className="bg-white px-6 lg:px-12 border-t border-[#EDEAE4] pt-8 pb-8">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#FAF9F6] p-6 lg:p-10 rounded-3xl shadow-sm">

          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight">
              Ready to Move
              <br />
              <span className="text-[#FF6B35]">
                Business Forward?
              </span>
            </h2>
          </div>

          <div className="hidden lg:block w-[1px] h-12 bg-[#D1D1D1]" />

          <div className="max-w-sm text-center lg:text-left">

            <p className="text-[#777777] text-sm mb-4">
              Let's connect your challenges with smarter possibilities.
            </p>

            <button
              onClick={goToContact}
              className="bg-[#FF6B35] text-white font-bold text-xs tracking-wide uppercase px-6 py-3 rounded-md hover:bg-[#E85C2D] transition-all duration-300 shadow-md shadow-orange-200 flex items-center gap-2 mx-auto lg:mx-0"
            >
              Start a Conversation
              <span className="text-lg leading-none">›</span>
            </button>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutScript;