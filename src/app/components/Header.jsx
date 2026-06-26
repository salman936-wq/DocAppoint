import { GraduationCap } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Mobile hamburger */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-xl shadow-xl border border-slate-100 z-[1] mt-3 w-52 p-2">
              <li><a className="text-slate-700 font-medium hover:text-sky-500">Home</a></li>
              <li><a className="text-slate-700 font-medium hover:text-sky-500">Doctors</a></li>
              <li><a className="text-slate-700 font-medium hover:text-sky-500">Appointments</a></li>
              <li><a className="text-slate-700 font-medium hover:text-sky-500">Dashboard</a></li>
            </ul>
          </div>
          {/* Logo */}
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-md shadow-sky-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
              Doc<span className="text-sky-500">Appoint</span>
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li><a className="text-slate-600 font-medium rounded-lg hover:text-sky-500 hover:bg-sky-50 transition-all">Home</a></li>
            <li><a className="text-slate-600 font-medium rounded-lg hover:text-sky-500 hover:bg-sky-50 transition-all">Doctors</a></li>
            <li><a className="text-slate-600 font-medium rounded-lg hover:text-sky-500 hover:bg-sky-50 transition-all">Appointments</a></li>
            <li><a className="text-slate-600 font-medium rounded-lg hover:text-sky-500 hover:bg-sky-50 transition-all">Dashboard</a></li>
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end gap-2">
            <>
              <button
                className="btn btn-ghost btn-sm text-slate-600 hover:text-sky-500 hover:bg-sky-50 rounded-lg font-medium border border-slate-200 hover:border-sky-200 transition-all"
              >
                Login
              </button>
              <button className="btn btn-sm bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium border-0 shadow-md shadow-sky-200 hover:shadow-sky-300 transition-all">
                Register
              </button>
            </>
            <>
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-9 rounded-full ring-2 ring-sky-400 ring-offset-1">
                    <img src="https://i.pravatar.cc/100?img=47" alt="User avatar" />
                  </div>
                </div>
                <button
                  className="btn btn-ghost btn-sm text-slate-500 hover:text-red-500 hover:bg-red-50 hover:border-transparent rounded-lg font-medium transition-all"
                >
                  Logout
                </button>
              </div>
            </>
        </div>
      </div>
    </header>
    );
};

export default Header;