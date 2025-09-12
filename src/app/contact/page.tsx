'use client';

import React, { useState } from 'react';
import Seo from '../../components/Seo';

export default function Contact() {
  const pageUrl = '/contact';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contact Vertex Globals – Get in Touch"
        description="Contact Vertex Globals today. Reach us via email, phone, or our online form for outsourcing and BPO solutions."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Contact', url: 'https://www.vertex-globals.com/contact' },
        ]}
      />

      <section className="container" aria-labelledby="contact-heading">
        <h1 id="contact-heading">Contact Us</h1>
        <p>Reach us via email, phone, or our online form for outsourcing and BPO solutions.</p>

        <address>
          <p>Email: <a href="mailto:connect@vertex-globals.com">connect@vertex-globals.com</a></p>
          <p>Phone: <a href="tel:+15555555555">+1-555-555-5555</a></p>
          <p>Office Address: 123 Corporate Blvd, New York, NY 10001, USA</p>
        </address>

        {!submitted ? (
          <form onSubmit={handleSubmit} aria-label="Contact form" noValidate>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name">Name*</label><br />
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email">Email*</label><br />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="company">Company</label><br />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message">Message*</label><br />
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                aria-required="true"
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <p>Thank you for contacting us! We will get back to you shortly.</p>
        )}

        <section aria-label="Google map">
          <iframe
            title="Vertex Globals Office Location"
            src="https://maps.google.com/maps?q=123%20Corporate%20Blvd%2C%20New%20York%2C%20NY%2010001&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, marginTop: '2rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </section>
    </>
  );
}