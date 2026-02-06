import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import egoLogo from "../assets/logo.png";

// Navbar Component
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("ego-dark-mode");
    const enabled = stored === "true";
    setDarkMode(enabled);
    document.documentElement.classList.toggle("dark", enabled);
    document.documentElement.classList.toggle("light", !enabled);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      window.localStorage.setItem("ego-dark-mode", String(next));
      document.documentElement.classList.toggle("dark", next);
      document.documentElement.classList.toggle("light", !next);
      return next;
    });
  };

  const anchorTarget = (id: string) =>
    location.pathname === "/"
      ? { hash: `#${id}` }
      : { pathname: "/", hash: `#${id}` };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] dark:bg-[#111827]/90 dark:border-slate-700"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 ring-1 ring-black/10 shadow-sm dark:bg-[#1f2937] dark:ring-white/10">
              <img
                src={egoLogo}
                alt="Ego logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-black tracking-tight text-black dark:text-white">
                Ego Transit
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Enterprise Platform
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            <Link to={anchorTarget("home")} className="hover:text-[#F59E0B] transition-colors">
              Home
            </Link>
            <Link to={anchorTarget("how")} className="hover:text-[#F59E0B] transition-colors">
              How it works
            </Link>
            <Link to={anchorTarget("users")} className="hover:text-[#F59E0B] transition-colors">
              User types
            </Link>
            <Link to={anchorTarget("benefits")} className="hover:text-[#F59E0B] transition-colors">
              Benefits
            </Link>
            <Link to={anchorTarget("demo")} className="hover:text-[#F59E0B] transition-colors">
              Live demo
            </Link>
            <Link to={anchorTarget("pricing")} className="hover:text-[#F59E0B] transition-colors">
              Pricing
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="min-h-[44px] min-w-[44px] rounded-full border border-[#E2E8F0] bg-white text-slate-700 hover:border-[#F59E0B] hover:text-[#F59E0B] dark:border-slate-700 dark:bg-[#1f2937] dark:text-slate-200"
              aria-label="Toggle dark mode"
              aria-pressed={darkMode}
            >
              {darkMode ? <Sun size={18} className="mx-auto" /> : <Moon size={18} className="mx-auto" />}
            </button>
            <button className="min-h-[44px] rounded-full bg-[#F59E0B] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-[#FBBF24]">
              Start Free Trial
            </button>
          </div>

          <button
            className="lg:hidden text-slate-700 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 border-t border-[#E2E8F0] pt-6 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
            <Link to={anchorTarget("home")} className="block hover:text-[#F59E0B] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to={anchorTarget("how")} className="block hover:text-[#F59E0B] transition-colors" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
            <Link to={anchorTarget("users")} className="block hover:text-[#F59E0B] transition-colors" onClick={() => setMobileMenuOpen(false)}>User types</Link>
            <Link to={anchorTarget("benefits")} className="block hover:text-[#F59E0B] transition-colors" onClick={() => setMobileMenuOpen(false)}>Benefits</Link>
            <Link to={anchorTarget("demo")} className="block hover:text-[#F59E0B] transition-colors" onClick={() => setMobileMenuOpen(false)}>Live demo</Link>
            <Link to={anchorTarget("pricing")} className="block hover:text-[#F59E0B] transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <button
              onClick={toggleDarkMode}
              className="w-full min-h-[44px] rounded-full border border-[#E2E8F0] bg-white text-slate-700 hover:border-[#F59E0B] hover:text-[#F59E0B] dark:border-slate-700 dark:bg-[#1f2937] dark:text-slate-200"
              aria-label="Toggle dark mode"
              aria-pressed={darkMode}
            >
              {darkMode ? "Light mode" : "Dark mode"}
            </button>
            <button className="w-full min-h-[44px] rounded-full bg-[#F59E0B] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-[#FBBF24]">
              Start Free Trial
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;