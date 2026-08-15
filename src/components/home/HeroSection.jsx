import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-orange-500">Transnova Solutions</p>
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Smart solutions for modern businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We provide reliable BPO, VoIP, logistics, and business support solutions designed to help companies operate, scale, and serve customers better.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/services">Explore Services</Button>
            <Button to="/contact">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
