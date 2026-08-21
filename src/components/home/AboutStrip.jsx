import React from "react";
import {
  FaConnectdevelop,
  FaChartLine,
  FaUsers,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const AboutScript = () => {
  const goToContact = () => {
    window.location.href = "/contact";
  };

  const benefits = [
    {
      Icon: FaConnectdevelop,
      number: "01",
      title: "Connected Thinking",
      desc: "We look beyond individual services to understand the bigger picture and deliver solutions that truly connect.",
    },
    {
      Icon: FaChartLine,
      number: "02",
      title: "Built to Scale",
      desc: "Our solutions are designed to adapt to your needs and scale as your business grows.",
    },
    {
      Icon: FaUsers,
      number: "03",
      title: "Technology + People",
      desc: "We combine human expertise with technology to deliver smarter, faster, and better outcomes.",
    },
    {
      Icon: FaHandshake,
      number: "04",
      title: "One Connected Partner",
      desc: "Multiple capabilities. One trusted partner. Less complexity, more opportunities.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Understand",
      desc: "We listen, analyze, and identify the real business challenge.",
    },
    {
      number: "02",
      title: "Connect",
      desc: "We bring together the right people, capabilities, and technology.",
    },
    {
      number: "03",
      title: "Deliver",
      desc: "We turn strategy into practical, measurable solutions.",
    },
    {
      number: "04",
      title: "Evolve",
      desc: "We continuously improve as your business and market change.",
    },
  ];

  return (
    <main className="bg-[#FAF9F6] font-manrope text-[#111111] overflow-hidden">
      {/* ==========================================
          BREADCRUMB
         ========================================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-5">
        <p className="text-[11px] font-medium tracking-wide text-[#9B9B8A]">
          Home <span className="mx-2 text-[#D0CCC4]">/</span> About Us
        </p>
      </div>

      {/* ==========================================
          HERO / WHO WE ARE
         ========================================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-16 lg:pt-16 lg:pb-20">
        {/* subtle background decoration */}
        <div className="absolute -right-32 top-0 h-[520px] w-[520px] rounded-full border border-[#E8E3DA] opacity-70 pointer-events-none" />
        <div className="absolute right-0 top-20 h-[360px] w-[360px] rounded-full border border-[#ECE7DF] opacity-60 pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-9 h-[2px] bg-[#FF6B35]" />
              <span className="text-[#FF6B35] font-bold text-[11px] tracking-[3px] uppercase">
                Who We Are
              </span>
            </div>

            <h1 className="text-[42px] sm:text-5xl lg:text-[58px] font-extrabold leading-[0.98] tracking-[-2px]">
              We Connect
              <br />
              <span className="text-[#FF6B35]">What Matters.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[#5F5D59] text-sm sm:text-base leading-7">
              Trans Nova Solutions is a diversified business solutions
              company built around one simple idea: businesses grow faster
              when the right people, technology, and opportunities are
              connected.
            </p>

            <p className="mt-4 max-w-xl text-[#5F5D59] text-sm sm:text-base leading-7">
              From customer operations and telecommunications to logistics and
              digital services, we help organizations simplify complexity,
              improve performance, and create new opportunities for growth.
            </p>

            <div className="mt-8 grid grid-cols-3 max-w-lg border-y border-[#E3DED5] py-5">
              <div>
                <p className="text-2xl font-extrabold">01</p>
                <p className="mt-1 text-[10px] sm:text-xs text-[#77736D]">
                  Connected Thinking
                </p>
              </div>
              <div className="border-l border-[#E3DED5] pl-5">
                <p className="text-2xl font-extrabold">02</p>
                <p className="mt-1 text-[10px] sm:text-xs text-[#77736D]">
                  Smart Solutions
                </p>
              </div>
              <div className="border-l border-[#E3DED5] pl-5">
                <p className="text-2xl font-extrabold">03</p>
                <p className="mt-1 text-[10px] sm:text-xs text-[#77736D]">
                  Business Growth
                </p>
              </div>
            </div>

            <button
              onClick={goToContact}
              className="group mt-8 inline-flex items-center gap-3 bg-[#111111] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-[#FF6B35] transition-all duration-300"
            >
              Let's Connect
              <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] border border-[#E3DED5]" />
            <div className="relative rounded-[24px] overflow-hidden bg-white p-3 shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
              <div className="relative rounded-[18px] overflow-hidden bg-[#111111]">
                <img
                  src="about.png"
                  alt="Trans Nova Solutions"
                  className="w-full h-auto object-contain block"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 sm:left-6 bg-[#FF6B35] text-white rounded-xl px-5 py-4 shadow-xl">
              <p className="text-[10px] uppercase tracking-[2px] font-semibold opacity-80">
                Our Focus
              </p>
              <p className="text-sm font-bold mt-1">People • Technology • Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          WHY BUSINESSES CHOOSE TNS
         ========================================== */}
      <section className="relative bg-[#070707] text-white py-16 lg:py-20 px-6 lg:px-12">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(circle_at_top_right,#FF6B35_0,transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#FF6B35] font-bold text-[10px] tracking-[3px] uppercase mb-3">
                Why Businesses Choose TNS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Built Around Your
                <span className="text-[#FF6B35]"> Growth.</span>
              </h2>
            </div>

            <p className="max-w-md text-[#99958E] text-sm leading-6 lg:text-right">
              One connected partner bringing people, technology, and
              capabilities together to make business simpler.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#292929] rounded-2xl overflow-hidden">
            {benefits.map(({ Icon, number, title, desc }) => (
              <div
                key={number}
                className="group bg-[#070707] p-7 min-h-[270px] flex flex-col hover:bg-[#101010] transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <Icon className="text-[#FF6B35] text-2xl" />
                  <span className="text-[10px] font-bold text-[#4D4D4D]">
                    {number}
                  </span>
                </div>

                <div className="mt-auto">
                  <div className="w-7 h-[2px] bg-[#FF6B35] mb-4 transition-all duration-300 group-hover:w-12" />
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-[#96928B] text-xs leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          OUR APPROACH
         ========================================== */}
      <section className="bg-white py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#FF6B35] font-bold text-[10px] tracking-[3px] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              A Connected Approach
              <br />
              <span className="text-[#FF6B35]">to Every Solution.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+35px)] right-[-24px] h-px bg-[#E7E2DA]" />
                )}

                <div className="relative z-10 w-14 h-14 mx-0 lg:mx-auto rounded-full border-2 border-[#FF6B35] bg-white flex items-center justify-center text-[#FF6B35] shadow-[0_5px_20px_rgba(255,107,53,0.10)]">
                  <span className="text-xs font-extrabold">{step.number}</span>
                </div>

                <div className="mt-5 lg:text-center">
                  <div className="w-6 h-[2px] bg-[#FF6B35] mb-3 lg:mx-auto" />
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-[#77736D] text-xs leading-6 mt-2 max-w-[210px] lg:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CTA
         ========================================== */}
      
    </main>
  );
};

export default AboutScript;