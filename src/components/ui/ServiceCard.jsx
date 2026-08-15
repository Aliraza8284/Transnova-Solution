export default function ServiceCard({ title, description }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 h-10 w-10 rounded-lg bg-orange-100" />
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}
