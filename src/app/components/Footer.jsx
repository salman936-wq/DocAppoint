import { GraduationCap } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#05050f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-black text-sm"><GraduationCap/></span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Doc <span className="text-violet-400">Appoint</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              A healthcare company provides medical services, solutions, and innovations to improve patient care, wellness, and overall health outcomes.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/15 hover:bg-white/10 transition-all text-sm">
                𝕏
              </a>
              <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/15 hover:bg-white/10 transition-all text-sm">
                ⌥
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/15 hover:bg-white/10 transition-all text-sm">
                in
              </a>
              <a href="#" aria-label="Discord" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/15 hover:bg-white/10 transition-all text-sm">
                ◈
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">About us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Careers <span className="ml-1 px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-400 text-xs">Hiring</span></a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Partners</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Legal</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">API Reference</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Status page</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Changelog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Open source</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Get in touch</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <span className="text-violet-400 text-sm mt-0.5">✉</span>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">General inquiries</p>
                  <a href="mailto:hello@docappoint.com" className="text-slate-300 hover:text-white text-sm transition-colors">hello@docappoint.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 text-sm mt-0.5">💬</span>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Sales</p>
                  <a href="mailto:sales@docappoint.com" className="text-slate-300 hover:text-white text-sm transition-colors">sales@docappoint.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-fuchsia-400 text-sm mt-0.5">🛟</span>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Support</p>
                  <a href="mailto:support@docappoint.com" className="text-slate-300 hover:text-white text-sm transition-colors">help@docappoint.com</a>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6 bg-[#0a0a1a] border border-white/5 rounded-xl p-4">
              <p className="text-slate-400 text-xs mb-3 font-medium">Get Appoinment →</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@gmail.com"
                  readOnly
                  className="flex-1 bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-xs text-slate-400 placeholder-slate-600 outline-none"
                />
                <button className="px-3 py-2 rounded-lg bg-violet-600 text-white text-xs font-semibold">→</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © 2026 DocAppoint. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;