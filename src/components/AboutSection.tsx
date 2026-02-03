import { Monitor, Smartphone, Users } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-amber-100 border border-amber-200 rounded-md">
              <span className="text-xs font-bold text-amber-500">WHAT IS EGO TRANSIT</span>
            </div>
            <h2 className="text-5xl font-black leading-tight text-gray-900">
              Built for Modern
              <br />
              <span className="text-amber-500">Bus Companies</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              EGO Transit is an enterprise-grade, real-time transit management and passenger information platform. We connect your operations, drivers, and passengers into a single ecosystem, giving you the tools to manage everything from dispatch to destination for scheduled routes, express services, and professional fleet operations.
            </p>
          </div>

          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-md border border-gray-200">
                <Monitor size={32} className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Operations Platform</h4>
                  <p className="text-gray-600 text-sm">Web dashboard for dispatchers and managers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-md border border-gray-200">
                <Smartphone size={32} className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Driver Application</h4>
                  <p className="text-gray-600 text-sm">Mobile tools for efficient route execution.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-md border border-gray-200">
                <Users size={32} className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Passenger App</h4>
                  <p className="text-gray-600 text-sm">Booking and tracking for your riders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};