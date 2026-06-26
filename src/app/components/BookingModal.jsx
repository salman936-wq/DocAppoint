"use client";

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Book Appointment</h2>
              <p className="text-sky-100 text-sm mt-0.5">Fill in your details below</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          {/* Readonly doctor info */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Doctor Name</label>
              <input
                type="text"
                value="Dr. Ayesha Rahman"
                readOnly
                className="input input-sm w-full bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm cursor-not-allowed"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Your Email</label>
              <input
                type="email"
                value="john@email.com"
                readOnly
                className="input input-sm w-full bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Patient Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-sm w-full border bg-white text-black border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-sm"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Gender</label>
            <select className="select select-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 text-sm text-slate-600 bg-white text-black">
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Phone Number</label>
            <input
              type="tel"
              placeholder="+880 17xx-xxxxxx"
              className="input input-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-sm bg-white text-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Appointment Date</label>
              <input
                type="date"
                className="input input-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 bg-white text-black focus:ring-sky-100 text-sm text-slate-600"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Appointment Time</label>
              <select className="select select-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 text-sm text-slate-600 bg-white text-black">
                <option value="">Select time</option>
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
                <option>06:00 PM</option>
              </select>
            </div>
          </div>

          <button className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-100 mt-2">
            Confirm Appointment
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
