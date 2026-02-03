import { X, CheckCircle } from 'lucide-react';

export const ProblemSolutionSection = () => {
  return (
    <section id="solutions" className="py-32 relative bg-white text-gray-800">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-amber-100 border border-amber-200 rounded-md mb-4">
            <span className="text-xs font-bold text-amber-500">DESIGNED FOR BUS OPERATIONS</span>
          </div>
          <h2 className="text-5xl font-black mb-4">More Than Just Tracking</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Side */}
          <div className="relative group transition-all duration-300 hover:-translate-y-1">
            <div className="relative bg-white rounded-md p-10 border border-red-200 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <X size={24} className="text-red-500" />
                </div>
                <h3 className="text-2xl font-black">Basic GPS Tracking</h3>
              </div>

              <div className="space-y-4">
                {[
                  'Just GPS Tracking',
                  'Capacity Indicators',
                  'Location Sharing',
                  'Basic Communication'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-red-50 rounded-md border border-red-100">
                    <div className="w-6 h-6 bg-red-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative group transition-all duration-300 hover:-translate-y-1">
            <div className="relative bg-white rounded-md p-10 border border-amber-300 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-2xl font-black">With EGO Transit</h3>
              </div>

              <div className="space-y-4">
                {[
                  'Real fleet management with schedule adherence and performance monitoring.',
                  'Actual seat reservations with visual seat selection and confirmed bookings.',
                  'Complete operations dashboard with dispatch tools and incident management.',
                  'Professional two-way messaging between dispatch and drivers.'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-amber-50 rounded-md border border-amber-100">
                    <div className="w-6 h-6 bg-amber-500 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};