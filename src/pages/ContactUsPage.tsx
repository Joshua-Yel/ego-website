import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ContactUsPage = () => {
  return (
    <div className="bg-white text-slate-800 dark:bg-[#111827] dark:text-slate-100">
      <Navbar />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-black tracking-tight text-black dark:text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              We would love to hear from you.
            </p>
          </header>

          <main>
            <section className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Get In Touch
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                For inquiries, support, or feedback, reach us through the
                channels below.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  Email Us
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  For general inquiries:
                </p>
                <a
                  href="mailto:business@innewgen.com"
                  className="text-sm font-semibold text-[#F59E0B] hover:underline"
                >
                  business@innewgen.com
                </a>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                  For support:
                </p>
                  <a
                    href="mailto:support@innewgen.com"
                  className="text-sm font-semibold text-[#F59E0B] hover:underline"
                >
                  support@innewgen.com
                </a>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  Call Us
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Our lines are open from 9 AM to 6 PM, Monday to Friday.
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  +63 995 348 9923
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#1f2937]">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  Our Office
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Parang
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Marikina City
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Metro Manila, Philippines
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;