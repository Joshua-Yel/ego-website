import { useEffect, useState } from "react";
import {
  BarChart3,
  Bell,
  Bus,
  CalendarCheck,
  CheckCircle2,
  Clock,
  CreditCard,
  Globe,
  MapPin,
  Navigation,
  Phone,
  Radar,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Map, MapControls, MapMarker, MarkerContent } from "@/components/ui/map";
import egoOperatorLogo from "@/assets/egoOperator.png";
import egoTransitLogo from "@/assets/egoLogoTransit.png";
import egoCommuteLogo from "@/assets/egoLogoCommute.png";

const userTypes = [
  {
    title: "Operators",
    tone: "Blue",
    color: "#2563EB",
    soft: "#DBEAFE",
    darkSoft: "#1E3A8A",
    labelText: "#FFFFFF",
    logo: egoOperatorLogo,
    features: [
      "Fleet management & monitoring",
      "Driver assignment & scheduling",
      "Route optimization",
      "Real-time GPS tracking",
      "Revenue & analytics dashboard",
      "Maintenance scheduling",
    ],
  },
  {
    title: "Transit Companies",
    tone: "Green",
    color: "#16A34A",
    soft: "#DCFCE7",
    darkSoft: "#064E3B",
    labelText: "#FFFFFF",
    logo: egoTransitLogo,
    features: [
      "Multi-route management",
      "Passenger capacity monitoring",
      "Schedule management",
      "Performance metrics",
      "Fare collection tracking",
      "Compliance reporting",
    ],
  },
  {
    title: "Commuters",
    tone: "Yellow",
    color: "#F59E0B",
    soft: "#FEF3C7",
    darkSoft: "#78350F",
    labelText: "#111827",
    logo: egoCommuteLogo,
    features: [
      "Real-time bus tracking with live map",
      "Route planning & schedules",
      "Seat booking & reservation",
      "Mobile ticket purchases",
      "Arrival time predictions",
      "Favorite routes & stops",
      "Push notifications for delays",
    ],
  },
];

const benefits = [
  {
    title: "Real-Time Visibility",
    description: "Track every bus in real-time with precise location updates.",
    icon: Radar,
  },
  {
    title: "Increased Efficiency",
    description: "Optimize routes and reduce wait times across every corridor.",
    icon: TrendingUp,
  },
  {
    title: "Enhanced Safety",
    description: "Monitor driver behavior and vehicle health in one view.",
    icon: ShieldCheck,
  },
  {
    title: "Seamless Booking",
    description: "Book and pay for tickets quickly and securely.",
    icon: CreditCard,
  },
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions with comprehensive analytics.",
    icon: BarChart3,
  },
  {
    title: "Cost Reduction",
    description: "Save on fuel and operational costs through optimization.",
    icon: Zap,
  },
];

const testimonials = [
  {
    quote:
      "Ego cut our dispatch time in half and gave our riders real confidence.",
    name: "Maria Santos",
    role: "Operations Director, MetroLink",
  },
  {
    quote:
      "We track every route with accuracy and compliance is finally painless.",
    name: "Kenji Reyes",
    role: "Transit Manager, CityRide",
  },
  {
    quote:
      "Booking takes seconds and the arrival predictions are incredibly reliable.",
    name: "Aira Villanueva",
    role: "Daily Commuter",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "₱24,900",
    description: "For growing fleets and regional routes.",
    features: [
      "Up to 50 vehicles",
      "Live GPS tracking",
      "Basic analytics",
      "Mobile booking",
    ],
  },
  {
    name: "Growth",
    price: "₱69,900",
    description: "For multi-route operators and agencies.",
    features: [
      "Up to 300 vehicles",
      "Advanced dispatch tools",
      "Revenue dashboards",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Sales",
    description: "For city-wide transit and custom integrations.",
    features: [
      "Unlimited vehicles",
      "Custom SLA",
      "Compliance automation",
      "Dedicated success team",
    ],
  },
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-[#111827] dark:bg-[#111827] dark:text-slate-100">
      <Navbar />

      <section
        id="home"
        className="relative pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#F59E0B]/15 blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          />
          <div
            className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-black/10 blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-[#1f2937]/80 dark:text-slate-300">
                <Sparkles className="h-4 w-4 text-[#F59E0B]" />
                Smart, real-time transit platform
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl">
                Smart Transit Management for Modern Cities
              </h1>
              <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
                Ego unifies fleet operations, rider booking, and live analytics
                so operators, transit agencies, and commuters stay perfectly in
                sync.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="min-h-[44px] rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-[#FBBF24]">
                  Start Free Trial
                </button>
                <button className="min-h-[44px] rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:border-[#F59E0B] hover:text-[#F59E0B] dark:border-slate-700 dark:bg-[#1f2937] dark:text-slate-100">
                  Watch Demo
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4 text-[#F59E0B]" />
                  <span>Quick booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-black dark:text-white" />
                  <span>Accessibility-ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-slate-500" />
                  <span>Filipino + English</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {userTypes.map((user) => (
                <div
                  key={user.title}
                  className="rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur dark:bg-[#1f2937]/80"
                  style={{ borderColor: user.color }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 ring-1 ring-black/5 dark:bg-[#111827]"
                        style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}
                      >
                        <img
                          src={user.logo}
                          alt={`${user.title} logo`}
                          className="h-7 w-7 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {user.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          Key dashboard features
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {user.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span
                          className="mt-1 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: user.color }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 border-t border-[#E2E8F0] dark:border-slate-700">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#F59E0B]">
                How it works
              </p>
            <h2 className="mt-3 text-3xl font-bold text-black dark:text-white">
              Launch real-time transit in three steps
            </h2>
            </div>
            <button className="min-h-[44px] rounded-full border border-[#E2E8F0] bg-white px-5 py-2 text-sm font-semibold text-[#111827] hover:border-[#F59E0B] hover:text-[#F59E0B] dark:border-slate-700 dark:bg-[#1f2937] dark:text-slate-100">
              See the workflow
            </button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Connect your fleet",
                description: "Install trackers, sync schedules, and import routes.",
                icon: Bus,
              },
              {
                title: "Track in real-time",
                description: "Live GPS updates, rider load, and driver status.",
                icon: Radar,
              },
              {
                title: "Optimize & grow",
                description: "Insights surface delays, demand peaks, and savings.",
                icon: TrendingUp,
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="motion-safe:animate-slide-up-fade flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#F59E0B]">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
                <div className="mt-auto pt-4 text-xs font-semibold text-[#F59E0B]">
                  Step {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="users" className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#F59E0B]">
              Features by user type
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black dark:text-white">
              See your entire transit network at a glance
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Tailored dashboards show the right details for operators, transit
              managers, and commuters without the clutter.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {userTypes.map((user) => (
              <div
                key={user.title}
                className="rounded-3xl border bg-white p-6 shadow-sm dark:bg-[#1f2937]"
                style={{ borderColor: user.color }}
              >
                <div
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-black"
                  style={{ backgroundColor: user.color, color: user.labelText }}
                >
                  <span>{user.title}</span>
                </div>
                <div
                  className="mt-5 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-[#111827]/70"
                  style={{
                    backgroundColor: isDark ? user.darkSoft : user.soft,
                  }}
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-black dark:text-white">
                    <Navigation className="h-4 w-4" />
                    Live dashboard preview
                  </div>
                  <div className="mt-4 grid gap-3 text-xs text-slate-700 dark:text-slate-200">
                    <div className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2 dark:bg-[#0f172a]/60 dark:text-slate-100">
                      <span>Active vehicles</span>
                      <span className="font-semibold">Active</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2 dark:bg-[#0f172a]/60 dark:text-slate-100">
                      <span>Peak load</span>
                      <span className="font-semibold">High</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2 dark:bg-[#0f172a]/60 dark:text-slate-100">
                      <span>Next departure</span>
                      <span className="font-semibold">Soon</span>
                    </div>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {user.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#111827] dark:text-slate-200" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 border-t border-[#E2E8F0] dark:border-slate-700">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#F59E0B]">
                Benefits
              </p>
              <h2 className="mt-3 text-3xl font-bold text-black dark:text-white">
                Smarter routes. Happier riders. Lower costs.
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#1f2937]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#F59E0B]">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#F59E0B]">
                Live demo
              </p>
              <h2 className="mt-3 text-3xl font-bold text-black dark:text-white">
                Book your ride while tracking in real-time
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Riders can confirm a seat, pay fast, and follow live arrivals
                without leaving the map.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  "Live route updates and ETA predictions",
                  "One-tap booking with saved payment methods",
                  "Clear status indicators: arriving / delayed / canceled",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="min-h-[44px] rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-[#FBBF24]">
                  Try Live Demo
                </button>
                <button className="min-h-[44px] rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:border-[#F59E0B] hover:text-[#F59E0B] dark:border-slate-700 dark:bg-[#1f2937] dark:text-slate-100">
                  View Booking Flow
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]">
              <div className="relative h-[360px] overflow-hidden rounded-2xl border border-[#E2E8F0] dark:border-slate-700">
                <Map center={[121.0244, 14.5547]} zoom={12} attributionControl={false}>
                  <MapControls position="bottom-right" showZoom showLocate />
                  <MapMarker longitude={121.027} latitude={14.549}>
                    <MarkerContent className="flex items-center gap-1 rounded-full bg-[#F59E0B] px-2 py-1 text-[10px] font-semibold text-black shadow">
                      <Bus className="h-3 w-3" />
                      Bus 08A
                    </MarkerContent>
                  </MapMarker>
                  <MapMarker longitude={121.035} latitude={14.554}>
                    <MarkerContent className="h-3 w-3 rounded-full bg-black shadow" />
                  </MapMarker>
                  <MapMarker longitude={121.045} latitude={14.565}>
                    <MarkerContent className="h-3 w-3 rounded-full bg-slate-400 shadow" />
                  </MapMarker>
                </Map>
                <div className="absolute left-6 top-6 rounded-xl bg-white/90 px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:bg-[#111827]/90 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#F59E0B]" />
                    Route 08 • Ayala → BGC
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    Next arrival: soon • seats available
                  </p>
                </div>
                <div className="absolute left-1/2 top-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-black/30">
                  <Bus className="h-4 w-4" /> Bus 08A • On time
                </div>
                <div className="absolute bottom-10 right-6 rounded-2xl bg-white/90 p-4 text-xs shadow-sm backdrop-blur dark:bg-[#111827]/90 dark:text-slate-200">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Live route updates
                  </p>
                  <div className="mt-3 space-y-2 text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-[#111827] dark:text-slate-200" />
                      <span>ETA updated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="h-3 w-3 text-[#111827] dark:text-slate-200" />
                      <span>Minor delay at EDSA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-[#22C55E]" />
                      <span>Booking confirmed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3 text-xs">
                <div className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-slate-600 dark:border-slate-700 dark:bg-[#111827] dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Live</span>
                  <p>Active routes</p>
                </div>
                <div className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-slate-600 dark:border-slate-700 dark:bg-[#111827] dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">ETA</span>
                  <p>Updated</p>
                </div>
                <div className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-slate-600 dark:border-slate-700 dark:bg-[#111827] dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Load</span>
                  <p>Balanced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="py-20 border-t border-[#E2E8F0] dark:border-slate-700">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#F59E0B]">
                Social proof
              </p>
              <h2 className="mt-3 text-3xl font-bold text-black dark:text-white">
                Built for Southeast Asia's transit future
              </h2>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Ego partners with forward-thinking operators and agencies to
                modernize public transportation across the region.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {[
                  "Metro Manila city operators",
                  "Regional intercity bus networks",
                  "Private commuter shuttle providers",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {testimonials.map((testimonial) => {
                const initials = testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .filter(Boolean)
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();

                return (
                  <div
                    key={testimonial.name}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#1f2937]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFBEB] text-sm font-semibold text-[#B45309] dark:bg-[#78350F] dark:text-[#FDE68A]">
                        {initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-black dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      “{testimonial.quote}”
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#F59E0B]">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-bold text-black dark:text-white">
                Simple plans that scale with your fleet
              </h2>
            </div>
            <button className="min-h-[44px] rounded-full border border-[#E2E8F0] bg-white px-5 py-2 text-sm font-semibold text-[#111827] hover:border-[#F59E0B] hover:text-[#F59E0B] dark:border-slate-700 dark:bg-[#1f2937] dark:text-slate-100">
              Contact Sales
            </button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl border p-6 shadow-sm ${
                  tier.highlight
                    ? "border-[#F59E0B] bg-[#FFFBEB]"
                    : "border-[#E2E8F0] bg-white"
                } dark:border-slate-700 dark:bg-[#1f2937]`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {tier.name}
                  </h3>
                  {tier.highlight && (
                    <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-semibold text-black">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="mt-4 text-3xl font-bold text-black dark:text-white">
                  {tier.price}
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {tier.description}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full min-h-[44px] rounded-full bg-[#F59E0B] px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-[#FBBF24]">
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-[#E2E8F0] dark:border-slate-700">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid gap-8 rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#1f2937] lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                Ready to modernize your city transit?
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Launch in days with guided onboarding, training, and a dedicated
                success team. Optimized for 3G networks and sunlight visibility.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="min-h-[44px] rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-[#FBBF24]">
                  Start Free Trial
                </button>
                <button className="min-h-[44px] rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:border-[#F59E0B] hover:text-[#F59E0B] dark:border-slate-700 dark:bg-[#111827] dark:text-slate-100">
                  Schedule a demo
                </button>
              </div>
            </div>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              {[
                { icon: Phone, label: "24/7 support in-app and phone" },
                { icon: CalendarCheck, label: "Deployment in under 14 days" },
                { icon: Bell, label: "Push alerts 5 mins before arrival" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 dark:border-slate-700 dark:bg-[#111827]">
                  <item.icon className="h-4 w-4 text-[#F59E0B]" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;