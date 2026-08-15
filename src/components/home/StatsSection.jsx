const stats = [["10+", "Years of experience"], ["24/7", "Customer support"], ["50+", "Business clients"], ["99%", "Service commitment"]];

export default function StatsSection() {
  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map(([number, label]) => (
          <div key={label} className="text-center">
            <div className="text-4xl font-black text-orange-500">{number}</div>
            <div className="mt-2 text-slate-300">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
