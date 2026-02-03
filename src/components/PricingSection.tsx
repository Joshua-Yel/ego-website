import { CheckCircle } from 'lucide-react';

export const PricingSection = () => {
  const tiers = [
    {
      name: 'Starter',
      desc: 'For Small Operators (10-50 buses)',
      price: 'Contact for pricing',
      features: ['Real-time GPS fleet tracking', 'Passenger mobile app with your branding', 'Driver application with navigation', 'Route and schedule management', 'Basic operations dashboard', 'Monthly performance reports', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      desc: 'For Growing Companies (50-200 buses)',
      price: 'Contact for pricing',
      features: ['Everything in Starter', 'Full web-based operations dashboard', 'Schedule adherence tracking & alerts', 'Advanced dispatch tools', 'Incident management system', 'Driver performance monitoring', 'Priority support (chat and phone)', 'Detailed analytics & custom reports'],
      popular: true
    },
    {
      name: 'Enterprise',
      desc: 'For Large Operations (200+ buses)',
      price: 'Custom pricing',
      features: ['Everything in Professional', 'Predictive analytics & demand forecasting', 'Multi-region and multi-terminal support', 'Dedicated account manager', 'Custom feature development', 'On-site training & implementation', '24/7 priority support', 'Service level agreements'],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 relative bg-gray-50 text-gray-800">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-4">Plans That Grow With Your Business</h2>
          <p className="text-xl text-gray-600">From small operators to regional networks, choose the features you need today.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative group ${tier.popular ? 'md:-mt-8' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-xs font-black rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className={`relative bg-white rounded-md p-8 border ${tier.popular ? 'border-amber-400' : 'border-gray-200'} hover:border-amber-400 transition-all h-full shadow-sm hover:shadow-lg`}>
                <div className="mb-6">
                  <h3 className="text-3xl font-black mb-2">{tier.name}</h3>
                  <div className="text-gray-500 text-sm mb-4">{tier.desc}</div>
                  <div className="text-4xl font-black text-amber-500">{tier.price}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-md font-bold transition-all ${tier.popular
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'border-2 border-gray-200 hover:border-amber-400 hover:bg-gray-100'
                  }`}>{tier.name === 'Starter' ? 'Request Quote' : tier.name === 'Professional' ? 'Request Demo' : 'Contact Sales'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Powerful Add-On Modules</h3>
            <p className="text-lg text-gray-600">Customize your platform with specialized features.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {[
              { title: 'Advanced Booking System', desc: 'Seat reservations, group bookings, recurring trips' },
              { title: 'Automatic Passenger Counting', desc: 'Hardware integration for real-time capacity' },
              { title: 'Maintenance Management', desc: 'Vehicle service scheduling and history' },
              { title: 'Passenger Feedback System', desc: 'In-app ratings, surveys, and complaints' },
              { title: 'Revenue Optimization', desc: 'Dynamic pricing and yield management tools' },
            ].map(item => (
              <div key={item.title} className="bg-white p-4 rounded-md border border-gray-200">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Implementation & Onboarding</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every plan includes a one-time implementation package. Our team handles initial route data setup, driver and ops training, branding, and go-live support.
          </p>
          <div className="bg-white rounded-md p-8 border border-gray-200 inline-block shadow-sm">
            <h4 className="text-xl font-bold text-amber-500 mb-2">One-Time Implementation Fee</h4>
            <p className="text-gray-600">Based on fleet size and complexity. Timeline is typically 3-5 weeks.</p>
            <hr className="border-gray-200 my-4" />
            <p className="text-sm text-gray-500">A small service fee (1-3%) applies to tickets sold via the booking system.</p>
          </div>
        </div>
      </div>
    </section>
  );
};