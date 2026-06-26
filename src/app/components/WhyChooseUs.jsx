function FeatureCard({ icon, title, description, highlight }) {
  return (
    <div className={`relative rounded-2xl p-8 ${highlight ? 'bg-sky-500 text-white shadow-2xl shadow-sky-200' : 'bg-white border border-slate-100 shadow-md'} transition-all duration-300 hover:-translate-y-1`}>
      <div className={`w-14 h-14 rounded-2xl ${highlight ? 'bg-white/20' : 'bg-sky-50'} flex items-center justify-center mb-6`}>
        <div className={highlight ? 'text-white' : 'text-sky-500'}>{icon}</div>
      </div>
      <h3 className={`text-xl font-bold mb-3 ${highlight ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${highlight ? 'text-sky-100' : 'text-slate-500'}`}>{description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sky-500 text-sm font-semibold uppercase tracking-widest">Why DocAppoint</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mt-2 mb-4">Healthcare You Can Trust</h2>
          <p className="text-slate-500 max-w-lg mx-auto">We built DocAppoint to remove the friction from healthcare — so you spend less time waiting and more time healing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Trusted Doctors"
            description="Every doctor on our platform is fully vetted, board-certified, and reviewed by thousands of real patients."
          />
          <FeatureCard
            highlight
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            title="Easy Booking"
            description="Book, reschedule, or cancel appointments in seconds. Real-time availability means no waiting on hold."
          />
          <FeatureCard
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            title="Secure Healthcare"
            description="Your medical data is encrypted and protected with enterprise-grade security. Your privacy is our priority."
          />
        </div>
      </div>
    </section>
  );
}
