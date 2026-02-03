import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 text-gray-800">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center transform -rotate-12">
                <div className="transform rotate-12 text-white font-black">E</div>
              </div>
              <div className="font-black text-gray-900">EGO Transit</div>
            </div>
            <p className="text-sm text-gray-500">Your efficient way to go</p>
          </div>

          <div>
            <div className="font-bold mb-4 text-sm text-gray-900">Product</div>
            <div className="space-y-2">
              <a href="/#features" className="block text-sm text-gray-500 hover:text-amber-500 transition-colors">Features</a>
              <a href="/#pricing" className="block text-sm text-gray-500 hover:text-amber-500 transition-colors">Pricing</a>
              <Link to="/demo" className="block text-sm text-gray-500 hover:text-amber-500 transition-colors">Demo</Link>
            </div>
          </div>

          <div>
            <div className="font-bold mb-4 text-sm text-gray-900">Company</div>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-gray-500 hover:text-amber-500 transition-colors">About</Link>
              <Link to="/contact" className="block text-sm text-gray-500 hover:text-amber-500 transition-colors">Contact</Link>
              <a href="#" className="block text-sm text-gray-500 hover:text-amber-500 transition-colors">Careers</a>
            </div>
          </div>

          <div>
            <div className="font-bold mb-4 text-sm text-gray-900">Legal</div>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-sm text-gray-500 hover:text-amber-500 transition-colors">Privacy</Link>
              <Link to="/terms" className="block text-sm text-gray-500 hover:text-amber-500 transition-colors">Terms</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          © 2026 EGO Transit. Built different.
        </div>
      </div>
    </footer>
  );
};