import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 min-h-[88vh] flex items-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100 rounded-full blur-3xl opacity-40 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-200 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            Trusted by 50,000+ patients
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
            Book Your Doctor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-600">
              Appointment
            </span>{" "}
            Easily
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md">
            Connect with trusted, board-certified doctors and manage your healthcare appointments online — from anywhere, at any time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn bg-sky-500 hover:bg-sky-600 text-white rounded-xl px-8 border-0 shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-0.5 transition-all duration-200 font-semibold">
              Find a Doctor
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="btn btn-ghost rounded-xl px-8 text-slate-600 hover:text-sky-500 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 transition-all duration-200 font-semibold">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-slate-200">
            <div>
              <p className="text-3xl font-bold text-slate-800">500+</p>
              <p className="text-sm text-slate-500 mt-0.5">Verified Doctors</p>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div>
              <p className="text-3xl font-bold text-slate-800">50k+</p>
              <p className="text-sm text-slate-500 mt-0.5">Happy Patients</p>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div>
              <p className="text-3xl font-bold text-slate-800">30+</p>
              <p className="text-sm text-slate-500 mt-0.5">Specialties</p>
            </div>
          </div>
        </div>

        {/* Right — Doctor Illustration Card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main card */}
            <div className="relative w-80 rounded-3xl overflow-hidden shadow-2xl shadow-sky-100 border border-white">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=top"
                alt="Doctor"
                className="w-full h-[420px] object-cover"
              />
              {/* Available badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-green-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available Now
              </div>
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">Dr. Sarah Mitchell</p>
                <p className="text-sky-300 text-sm">Senior Cardiologist</p>
              </div>
            </div>

            {/* Floating appointment card */}
            <div className="absolute -left-14 top-1/3 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-52">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Next Appointment</p>
                  <p className="text-sm font-bold text-slate-700">Today, 2:30 PM</p>
                </div>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full">
                <div className="w-3/4 h-full bg-sky-500 rounded-full"></div>
              </div>
              <p className="text-xs text-slate-400 mt-1.5">3 of 4 slots confirmed</p>
            </div>

            {/* Rating card */}
            <div className="absolute -right-10 bottom-28 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-lg">⭐</div>
              <div>
                <p className="text-sm font-bold text-slate-700">4.9/5.0</p>
                <p className="text-xs text-slate-400">2.4k reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Hero;