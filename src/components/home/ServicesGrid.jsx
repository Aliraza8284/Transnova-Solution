import ServiceCard from "../ui/ServiceCard";
import services from "../../data/servicesData";

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="font-semibold uppercase tracking-widest text-orange-500">What we do</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our Core Services</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => <ServiceCard key={service.title} {...service} />)}
      </div>
    </section>
  );
}
