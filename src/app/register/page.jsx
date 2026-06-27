import React from 'react';
import RegisterForm from '../components/RegisterForm';
import GoogleLogin from '../components/GoogleLogin';

const page = () => {
    return (
    <div className="min-h-screen pt-10 pb-32 bg-linear-to-br from-slate-50 via-sky-50 to-slate-100 flex justify-center p-4 relative overflow-hidden">
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

<RegisterForm/>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">or continue with</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <GoogleLogin/>

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