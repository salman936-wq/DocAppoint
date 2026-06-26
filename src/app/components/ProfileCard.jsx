export default function ProfileCard() {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
        {/* Cover */}
        <div className="h-28 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 relative">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E\")"
            }}
          />
        </div>

        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="-mt-12 mb-4">
            <div className="avatar">
              <div className="w-24 rounded-2xl ring-4 ring-white shadow-lg">
                <img src="https://i.pravatar.cc/200?img=47" alt="Profile" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-slate-800">John Doe</h2>
              <span className="bg-sky-100 text-sky-600 text-xs font-semibold px-2 py-0.5 rounded-full">Patient</span>
            </div>
            <p className="text-slate-500 text-sm">john@email.com</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-slate-50 rounded-xl">
            <div className="text-center">
              <p className="text-xl font-bold text-slate-800">8</p>
              <p className="text-xs text-slate-500 mt-0.5">Total Visits</p>
            </div>
            <div className="w-px bg-slate-200 self-stretch" />
            <div className="text-center">
              <p className="text-xl font-bold text-slate-800">3</p>
              <p className="text-xs text-slate-500 mt-0.5">Upcoming</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-slate-600">john@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-slate-600">+880 1700-000000</span>
            </div>
          </div>

          {/* Update button */}
          <button className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-100">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
