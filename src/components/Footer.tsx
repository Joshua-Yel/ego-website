import { Link, useLocation } from "react-router-dom";
import egoLogo from "../assets/logo.png";

export const Footer = () => {
  const location = useLocation();
  const anchorTarget = (id: string) =>
    location.pathname === "/"
      ? { hash: `#${id}` }
      : { pathname: "/", hash: `#${id}` };

  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-14 text-[#111827] dark:bg-[#111827] dark:border-slate-700 dark:text-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/90 ring-1 ring-black/10 shadow-sm dark:bg-[#1f2937] dark:ring-white/10">
                <img
                  src={egoLogo}
                  alt="Ego logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="font-black text-black dark:text-white">Ego Transit</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Smart transit operations for operators, agencies, and commuters.
            </p>
            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Your efficient way to get around.
            </div>
          </div>

          <div>
            <div className="font-bold mb-4 text-sm text-black dark:text-white">Product</div>
            <div className="space-y-2">
              <Link to={anchorTarget("users")} className="block text-sm text-slate-600 hover:text-[#F59E0B] transition-colors dark:text-slate-300">User dashboards</Link>
              <Link to={anchorTarget("benefits")} className="block text-sm text-slate-600 hover:text-[#F59E0B] transition-colors dark:text-slate-300">Benefits</Link>
              <Link to={anchorTarget("demo")} className="block text-sm text-slate-600 hover:text-[#F59E0B] transition-colors dark:text-slate-300">Live demo</Link>
            </div>
          </div>

          <div>
            <div className="font-bold mb-4 text-sm text-black dark:text-white">Company</div>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-slate-600 hover:text-[#F59E0B] transition-colors dark:text-slate-300">About</Link>
              <Link to="/contact" className="block text-sm text-slate-600 hover:text-[#F59E0B] transition-colors dark:text-slate-300">Contact</Link>
              <a href="#" className="block text-sm text-slate-600 hover:text-[#F59E0B] transition-colors dark:text-slate-300">Careers</a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]">
            <div className="text-sm font-semibold text-black dark:text-white">
              Newsletter
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Monthly insights on smarter bus operations.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="name@company.com"
                className="min-h-[44px] rounded-xl border border-[#E2E8F0] bg-white px-3 text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] dark:border-slate-600 dark:bg-[#111827] dark:text-slate-100"
              />
              <button className="min-h-[44px] rounded-xl bg-[#F59E0B] px-4 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-[#FBBF24]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-6 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
          © 2026 Ego Transit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};