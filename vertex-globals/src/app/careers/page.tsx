'use client';

import React, { useState } from 'react';
import Seo from '../../components/Seo';

export default function Careers() {
  const pageUrl = '/careers';
  const [formData, setFormData] = useState({ name: '', email: '', position: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Just simulate submission
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Careers at Vertex Globals – Join Our Team"
        description="Explore career opportunities at Vertex Globals and join a growing BPO where talent meets opportunity."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Careers', url: 'https://www.vertex-globals.com/careers' },
        ]}
      />

      <section className="container" aria-labelledby="careers-heading">
        <h1 id="careers-heading">Careers at Vertex Globals</h1>
        <p>Join a growing BPO where talent meets opportunity.</p>

        <div aria-label="Job listings placeholder" style={{ marginBottom: '2rem' }}>
          <p>Job listings placeholder.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} aria-label="Job application form" noValidate>
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
              <label htmlFor="position">Position*</label><br />
              <input
                type="text"
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                aria-required="true"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message">Message</label><br />
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit Application</button>
          </form>
        ) : (
          <p>Thank you for your application! We will be in touch soon.</p>
        )}
      </section>
    </>
  );
}