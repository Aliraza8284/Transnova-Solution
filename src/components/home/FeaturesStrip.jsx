const features = ["24/7 Support", "Scalable Operations", "Experienced Team", "Reliable Solutions"];

export default function FeaturesStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {features.map((item) => <div key={item} className="border-r border-slate-200 px-6 py-6 text-center font-semibold text-slate-800">{item}</div>)}
      </div>
    </section>
  );
}
