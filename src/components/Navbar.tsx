import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

// Navbar Component
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#1a1d29]/90 backdrop-blur-xl border-b border-white/5' : ' bg-[#1a1d29]'} `}>
      <div className="max-w-[1400px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-[#FCD535] via-[#FF8C42] to-[#FCD535] rounded-2xl flex items-center justify-center transform -rotate-12 shadow-lg shadow-[#FCD535]/20">
                <div className="transform rotate-12">
                  <img src={Logo} alt="EGO Logo" width="24" height="24" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FF8C42] rounded-full animate-pulse" />
            </div> */}
            <div>
              <h1 className="text-xl lg:text-2xl text-amber-500 font-black tracking-tight">EGO</h1>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-white">
            <a href="#home" className="text-sm  hover:text-amber-500 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FCD535] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#features" className="text-sm  hover:text-amber-500 transition-colors relative group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FCD535] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#pricing" className="text-sm  hover:text-amber-500 transition-colors relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FCD535] group-hover:w-full transition-all duration-300" />
            </a>
            <Link to="/demo" className="text-sm  hover:text-amber-500 transition-colors relative group">
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FCD535] group-hover:w-full transition-all duration-300" />
            </Link>
            <button className="px-6 py-3 text-white font-bold rounded-md bg-amber-500 hover:bg-amber-600 transition-colors">
              Get Started
            </button>
          </div>

          <button className="lg:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 border-t border-white/5 pt-6">
            <a href="#home" className="block text-gray-600 hover:text-amber-500 transition-colors">Home</a>
            <a href="#features" className="block text-gray-600 hover:text-amber-500 transition-colors">How It Works</a>
            <a href="#pricing" className="block text-gray-600 hover:text-amber-500 transition-colors">Pricing</a>
            <Link to="/demo" className="block text-gray-600 hover:text-amber-500 transition-colors">Demo</Link>
            <button className="w-full px-6 py-3 text-white font-bold rounded-md mt-2 bg-amber-500 hover:bg-amber-600 transition-colors">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;