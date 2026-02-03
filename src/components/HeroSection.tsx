import { ArrowRight, Bus, Clock, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import egoLogoCommute from '../assets/egoLogoCommute.png';
import egoLogoTransit from '../assets/egoLogoTransit.png';

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-white text-gray-800 flex items-center pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 mb-12 lg:mb-0">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-md mb-8">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-amber-600">ENTERPRISE TRANSIT PLATFORM</span>
            </div> */}

            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
              Modern Transit Management for Professional Bus
              <br />
              <span className="relative inline-block text-amber-500">
                Operations
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C100 3 200 3 298 10" stroke="#FCD535" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Complete platform for fleet operations, passenger booking, and real-time coordination. Everything your bus company needs in one system.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/demo" className="group relative inline-block px-8 py-4 bg-amber-500 text-white font-bold rounded-md hover:bg-amber-600 transition-colors">
                <span className="relative z-10 flex items-center gap-2">
                  Request Demo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
              <button className="px-8 py-4 border-2 border-gray-200 hover:border-amber-400 text-gray-800 font-bold rounded-md transition-all hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Floating Cards */}
            <div className="relative">
              <div className="absolute inset-0 bg-amber-200/50 blur-3xl rounded-full" />

              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-md rounded-lg p-6 border border-gray-200 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                      <Bus size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Route 101</div>
                      <div className="text-xs text-gray-500">Manila → Quezon City</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">LIVE</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center">
                        <Users size={16} className="text-[#FCD535]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">32 Passengers</div>
                        <div className="text-xs text-gray-500">Moderate</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-amber-500">53%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                        <Clock size={16} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">8 mins away</div>
                        <div className="text-xs text-gray-500">Next: SM North</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                        <CheckCircle size={16} className="text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">On Schedule</div>
                        <div className="text-xs text-gray-500">+2 mins ahead</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Card */}
              <div className="absolute -top-4 -right-4 bg-amber-500 p-0 rounded-lg shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <img src={egoLogoTransit} alt="Bus Icon" className="w-20 h-20" />
              </div>

              {/* Another Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-0 rounded-lg shadow-lg">
                <img src={egoLogoCommute} alt="Bus Icon" className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};