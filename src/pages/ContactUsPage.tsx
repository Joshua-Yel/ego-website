import React from 'react';

const ContactUsPage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>We'd love to hear from you!</p>
      </header>

      <main>
        <section style={{ marginBottom: '2rem' }}>
          <h2>Get In Touch</h2>
          <p>For any inquiries, support, or feedback, please reach out to us through the following channels.</p>
        </section>

        <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px', minWidth: '250px' }}>
            <h3>Email Us</h3>
            <p>For general inquiries:</p>
            <a href="mailto:hello@ego-transit.app">hello@ego-transit.app</a>
            <p style={{ marginTop: '1rem' }}>For support:</p>
            <a href="mailto:support@ego-transit.app">support@ego-transit.app</a>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px', minWidth: '250px' }}>
            <h3>Call Us</h3>
            <p>Our lines are open from 9 AM to 6 PM, Monday to Friday.</p>
            <p><strong>[+63 2 8000 1234]</strong></p>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px', minWidth: '250px' }}>
            <h3>Our Office</h3>
            <p>[123 Innovation Drive]</p>
            <p>[Bonifacio Global City, Taguig]</p>
            <p>[Metro Manila, Philippines]</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUsPage;