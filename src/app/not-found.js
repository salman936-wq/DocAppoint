"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-sky-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative text-center max-w-lg w-full">
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-sky-100 border border-white px-10 py-14">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-md shadow-sky-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-slate-800">
                Doc<span className="text-sky-500">Appoint</span>
              </span>
            </div>
          </div>

          {/* 404 number */}
          <div className="relative mb-4">
            <p className="text-[120px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-sky-600 select-none">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 rounded-full bg-sky-100 blur-2xl opacity-60" />
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center">
              <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-slate-800 mb-2">Page Not Found</h1>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            <br />Let&apos;s get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 shadow-md shadow-sky-200 hover:shadow-sky-300 font-semibold hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
            <a
              href="/doctors"
              className="btn btn-ghost rounded-xl text-slate-600 hover:text-sky-500 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 font-semibold transition-all"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Find Doctors
            </a>
          </div>

          {/* Auto redirect countdown */}
          <p className="text-xs text-slate-400 mt-6">
            Redirecting to home in{" "}
            <span className="font-bold text-sky-500">{count}s</span>
          </p>
        </div>
      </div>
    </div>
  );
}