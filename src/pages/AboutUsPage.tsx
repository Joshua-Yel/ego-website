import React from 'react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-gray-800">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-gray-900">About EGO</h1>
          </header>

          <main className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2>Our Mission</h2>
              <p>
                Our mission is to solve the complex transportation challenges faced by modern bus companies. We believe that by providing powerful, real-time tools for operators and a seamless, predictable experience for passengers, we can build a smarter, more efficient, and more reliable public transportation ecosystem for everyone.
              </p>
            </section>

            <section className="mb-12">
              <h2>Our Journey</h2>
              <p>
                EGO began as an academic pilot project, initially focused on tracking campus jeepney routes. This early work allowed us to prove our core technology and understand the fundamental needs of commuters. We saw the daily struggles and inefficiencies firsthand and were inspired to build a more robust solution.
              </p>
              <p>
                Recognizing the immense potential to make a larger impact, we transitioned our focus from the informal jeepney model to the structured, high-stakes environment of professional bus companies. This pivot allowed us to evolve EGO into an enterprise-grade platform capable of handling complex schedules, large fleets, and the sophisticated demands of modern transit operations.
              </p>
            </section>

            <section>
              <h2>Our Vision</h2>
              <p>
                We envision a future where public transportation is the first and best choice for commuters. A future where bus operators are empowered with data-driven insights to optimize their services, reduce operational costs, and increase revenue. A future where passengers enjoy a predictable, stress-free, and comfortable journey every time. Through continuous innovation and close partnerships with transport operators, we aim to be at the forefront of the smart mobility revolution.
              </p>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;