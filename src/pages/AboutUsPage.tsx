import React from 'react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AboutUsPage = () => {
  return (
    <div className="bg-white text-slate-800 dark:bg-[#111827] dark:text-slate-100">
      <Navbar />
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
                About Ego
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-black dark:text-white sm:text-6xl">
                Building a smarter, safer, and more reliable transit future.
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Ego connects operators, transit agencies, and commuters with
                real-time fleet intelligence, streamlined booking, and actionable
                analytics built for the Philippines.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="min-h-[44px] rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-[#FBBF24]">
                  Meet the team
                </button>
                <button className="min-h-[44px] rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:border-[#F59E0B] hover:text-[#F59E0B] dark:border-slate-700 dark:bg-[#1f2937] dark:text-slate-100">
                  Our roadmap
                </button>
              </div>
            </div>
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]">
              <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
                {[
                  { label: "Trips optimized", value: "500K+ daily" },
                  { label: "Live routes tracked", value: "1,200+" },
                  { label: "Average ETA accuracy", value: "99.9%" },
                  { label: "Average wait time", value: "-40%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 dark:border-slate-700 dark:bg-[#111827]"
                  >
                    <span>{stat.label}</span>
                    <span className="font-semibold text-black dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Our Mission",
                body:
                  "Solve complex transport challenges with real-time tools for operators and a seamless, predictable experience for commuters.",
              },
              {
                title: "Our Journey",
                body:
                  "Started as a campus pilot tracking jeepney routes, then expanded into an enterprise-grade system for professional bus fleets.",
              },
              {
                title: "Our Vision",
                body:
                  "A future where public transportation is the first choice and every ride feels safe, efficient, and on time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]"
              >
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {item.body}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                What makes Ego different
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                We bring together live tracking, automated dispatch, compliance
                reporting, and rider booking into a single, collaborative
                platform.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {[
                  "Real-time visibility for every vehicle on route",
                  "High-contrast views designed for bright outdoor use",
                  "Offline-ready schedules for low-connectivity areas",
                  "Multilingual support for Filipino and English riders",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#F59E0B]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Trusted by transit leaders
              </h2>
              <div className="mt-5 grid gap-4 text-sm text-slate-600 dark:text-slate-300">
                {[
                  "Metro Manila transport operators",
                  "City-run transit agencies",
                  "Private commuter shuttle fleets",
                ].map((partner) => (
                  <div
                    key={partner}
                    className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 dark:border-slate-700 dark:bg-[#111827]"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;