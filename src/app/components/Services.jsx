function ServiceCard({ icon, title, description, color }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-sky-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-sky-600 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sky-500 text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mt-2 mb-4">Our Medical Services</h2>
          <p className="text-slate-500 max-w-md mx-auto">World-class care across a wide range of medical specialties — all in one place.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            color="bg-red-50"
            icon={
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            title="Cardiology"
            description="Expert heart care with advanced diagnostics and personalized treatment plans for cardiovascular health."
          />
          <ServiceCard
            color="bg-sky-50"
            icon={
              <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Dental Care"
            description="Comprehensive dental services from routine cleanings to cosmetic procedures and orthodontic treatment."
          />
          <ServiceCard
            color="bg-purple-50"
            icon={
              <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            title="Neurology"
            description="Specialized neurological care for brain, spine, and nervous system conditions with cutting-edge technology."
          />
          <ServiceCard
            color="bg-amber-50"
            icon={
              <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
            title="Eye Care"
            description="Complete ophthalmology services including eye exams, laser surgery, and treatment for vision disorders."
          />
        </div>
      </div>
    </section>
  );
}
