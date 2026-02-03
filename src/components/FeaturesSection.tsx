import { useState } from 'react';
import { MapPin, BarChart3, Bus, Users, Target, TrendingUp, Calendar, Clock, Smartphone, CreditCard, QrCode, ClipboardList, Shield, SlidersHorizontal, Wallet, FileText, Bot, Ticket, Search, MessageSquare, Navigation, PowerOff } from 'lucide-react';

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState('operator');

  const featuresData = {
    operator: [
      { icon: SlidersHorizontal, title: 'Operations Command Center', desc: 'Monitor your entire fleet from a single interface with a live GPS dashboard, schedule compliance tracking, and incident management.', color: 'from-purple-500 to-pink-500' },
      { icon: Calendar, title: 'Route & Schedule Management', desc: 'Handle multi-route operations, dynamic assignments, and designated stops. Build and publish timetables with GTFS integration.', color: 'from-blue-500 to-cyan-500' },
      { icon: Bus, title: 'Fleet & Driver Management', desc: 'Control 50-500+ buses, manage driver assignments and shifts, and use digital pre-trip checklists for safety and compliance.', color: 'from-green-500 to-emerald-500' },
      { icon: Ticket, title: 'Passenger Booking & Reservations', desc: 'Enable real seat selection, multi-seat and group bookings, flexible scheduling, and instant digital ticketing for passengers.', color: 'from-orange-500 to-red-500' },
      { icon: Wallet, title: 'Payment & Revenue Management', desc: 'Accept multi-channel payments (GCash, Stripe), manage manual collections, and track revenue with detailed analytics and reports.', color: 'from-teal-500 to-cyan-500' },
      { icon: BarChart3, title: 'Advanced Analytics & Reporting', desc: 'Leverage predictive commuter forecasting, bunching detection, real-time capacity monitoring, and custom operational reports.', color: 'from-[#FCD535] to-[#FF8C42]' }
    ],
    driver: [
      { icon: Target, title: 'Trip Management Dashboard', desc: "Confirm route assignments with pre-trip checklists and monitor your schedule compliance in real-time.", color: 'from-green-500 to-emerald-500' },
      { icon: Navigation, title: 'Turn-by-Turn Navigation', desc: 'Get integrated GPS with optimized routes and automatic updates for traffic and dispatcher-sent changes.', color: 'from-blue-500 to-cyan-500' },
      { icon: Users, title: 'Passenger Manifest', desc: 'View complete passenger lists with pickup locations and boarding status before departure.', color: 'from-purple-500 to-pink-500' },
      { icon: QrCode, title: 'QR Code Scanner', desc: 'Validate passenger e-tickets instantly with the built-in scanner for seamless boarding.', color: 'from-orange-500 to-red-500' },
      { icon: Bot, title: 'Next Stop Prompts', desc: 'Receive automated announcements and countdowns to the next stop, with alerts for any route deviations.', color: 'from-teal-500 to-cyan-500' },
      { icon: MessageSquare, title: 'Two-Way Communication', desc: 'Stay connected with the dispatch center through direct messaging and an SOS button for emergencies.', color: 'from-red-500 to-rose-500' },
      { icon: TrendingUp, title: 'Trip Reporting', desc: 'Automatically log trip details, mileage, and incidents with end-of-shift performance summaries.', color: 'from-indigo-500 to-violet-500' },
      { icon: PowerOff, title: 'Offline Mode', desc: 'Access essential features like ticket scanning and trip logging even without an internet connection.', color: 'from-slate-500 to-gray-500' },
      { icon: ClipboardList, title: 'Conductor Tools', desc: 'A dedicated interface for passenger counting, incident reporting, and manual cash payment collection.', color: 'from-[#FCD535] to-[#FF8C42]' }
    ],
    passenger: [
      { icon: Search, title: 'Intuitive Route Browsing', desc: 'Easily search for routes by origin, destination, or route number, and filter by time, price, and seat availability.', color: 'from-blue-500 to-cyan-500' },
      { icon: Ticket, title: 'Easy Ticket Booking', desc: 'A simple 3-step process to select your route, choose your seats, and confirm payment for single or round trips.', color: 'from-indigo-500 to-purple-500' },
      { icon: MapPin, title: 'Live Bus Tracking', desc: 'View the exact GPS location of your bus and get a precise ETA to your stop, with "Board Me First" alerts.', color: 'from-green-500 to-emerald-500' },
      { icon: QrCode, title: 'Digital QR Tickets', desc: 'Enjoy paperless boarding with instant QR code tickets. Access all your bookings and trip history in one place.', color: 'from-orange-500 to-red-500' },
      { icon: Users, title: 'Multi-Passenger Support', desc: 'Book for companions, including PWDs, seniors, and those without smartphones, managing all tickets in one account.', color: 'from-purple-500 to-pink-500' },
      { icon: Smartphone, title: 'Smart Notifications', desc: 'Receive booking confirmations, departure reminders, delay alerts, and special offers to stay informed.', color: 'from-teal-500 to-cyan-500' },
      { icon: MessageSquare, title: 'In-App Support', desc: 'Connect directly with customer service via chat for quick resolution of booking issues or refund requests.', color: 'from-rose-500 to-pink-500' },
      { icon: Clock, title: 'ETA Tracking', desc: 'See your estimated arrival time to your final destination, with real-time updates based on traffic and route progress.', color: 'from-[#FCD535] to-[#FF8C42]' }
    ]
  };

  const tabs = [
    { id: 'operator', label: 'Operators', icon: BarChart3 },
    { id: 'driver', label: 'Drivers & Conductors', icon: Bus },
    { id: 'passenger', label: 'Passengers', icon: Users }
  ];

  return (
    <section id="features" className="py-32 relative bg-gray-50 text-gray-800">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-amber-100 border border-amber-200 rounded-md mb-4">
            <span className="text-xs font-bold text-amber-500">HOW IT WORKS</span>
          </div>
          <h2 className="text-5xl font-black mb-4">A Connected Ecosystem</h2>
        </div>

        {/* Feature Tabs */}
        <div className="flex justify-center mb-12 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFeature(tab.id)}
              className={`relative px-6 py-3 rounded-md font-bold transition-all flex items-center gap-2 ${activeFeature === tab.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuresData[activeFeature as keyof typeof featuresData].map((f, i) => (
            <div key={i} className="group relative transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-10 rounded-md blur-md transition-all" />
              <div className="relative bg-white rounded-md p-8 border border-gray-200 hover:border-amber-300 transition-all h-full shadow-sm hover:shadow-lg">
                <div className={`w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <f.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};