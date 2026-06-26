import React from 'react';

const page = () => {
    return (
    <div className="min-h-screen pt-10 pb-32 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 flex justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300 rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3" />

      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-sky-100 border border-white w-full max-w-md overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600" />

        <div className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-md shadow-sky-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-slate-800">Doc<span className="text-sky-500">Appoint</span></span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-slate-800 text-center mb-1">Create Account</h1>
          <p className="text-slate-500 text-sm text-center mb-8">Join 50,000+ patients managing their health</p>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-600 block mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600 block mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600 block mb-1.5">Photo URL</label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600 block mb-1.5">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
              />
              {/* Validation hints */}
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  6+ characters
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Uppercase
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Lowercase
                </div>
              </div>
            </div>

            <button className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-200 hover:shadow-sky-300 mt-2">
              Create Account
            </button>
          </div>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">or continue with</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <button className="btn btn-outline w-full rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-medium">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <a className="text-sky-500 hover:text-sky-600 font-semibold cursor-pointer">Login</a>
          </p>
        </div>
      </div>
    </div>
    );
};

export default page;