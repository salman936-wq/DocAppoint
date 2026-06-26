import { GraduationCap } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-between px-10 py-4 border-b border-white/5 bg-[#05050f]/80 backdrop-blur-xl">
                {/* Logo */}
                <Link href='/'>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                        <span className="text-white font-black text-sm"><GraduationCap/></span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">Doc <span className="text-violet-400">Appoint</span></span>
                </div>
</Link>
                {/* Links */}
                <div className="flex items-center gap-8">
                    <a href="#about" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">About</a>
                    <a href="#services" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Services</a>
                    <a href="#pricing" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Pricing</a>
                    <a href="#contact" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Contact</a>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3">
<Link href='/login'>
                    <button className="px-4 py-2 text-sm text-slate-300 hover:text-white font-medium transition-colors cursor-pointer">
                        Log in
                    </button>
                    </Link>
                    <Link href='/register'>
                    <button className="px-5 py-2 text-sm font-semibold text-white rounded-lg bg-linear-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 transition-all shadow-lg shadow-violet-900/30 cursor-pointer">
                        Register
                    </button>
                    </Link>

                </div>
            </nav>

            {/* Mobile Nav using DaisyUI drawer concept */}
            <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-[#05050f]/90 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                        <span className="text-white font-black text-xs">N</span>
                    </div>
                    <span className="text-white font-bold text-lg">Nexus<span className="text-violet-400">AI</span></span>
                </div>
                {/* Hamburger icon - static */}
                <div className="drawer drawer-end">
                    <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="mobile-drawer" className="btn btn-ghost btn-sm text-slate-300 flex flex-col gap-1 px-2">
                            <span className="block w-5 h-0.5 bg-slate-300"></span>
                            <span className="block w-5 h-0.5 bg-slate-300"></span>
                            <span className="block w-4 h-0.5 bg-slate-300"></span>
                        </label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
                        <div className="w-72 min-h-full bg-[#0a0a1a] border-l border-white/10 p-6 flex flex-col gap-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                                    <span className="text-white font-black text-sm">N</span>
                                </div>
                                <span className="text-white font-bold text-xl">Nexus<span className="text-violet-400">AI</span></span>
                            </div>
                            <nav className="flex flex-col gap-1">
                                <a href="#about" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-all">About</a>
                                <a href="#services" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-all">Services</a>
                                <a href="#pricing" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-all">Pricing</a>
                                <a href="#contact" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-all">Contact</a>
                            </nav>
                            <div className="mt-auto flex flex-col gap-3">
                                <button className="w-full py-2.5 text-sm text-slate-300 border border-white/10 rounded-lg hover:border-white/20 transition-all">Log in</button>
                                <button className="w-full py-2.5 text-sm font-semibold text-white rounded-lg bg-linear-to-r from-violet-600 to-violet-500">Get started free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;