import React from 'react';
import Seo from '../../components/Seo';

const services = [
  {
    title: 'Email & Chat Support',
    description: '24/7 customer engagement through email and chat channels.',
  },
  {
    title: 'Data Entry & Processing',
    description: 'Accurate, scalable data handling for your business needs.',
  },
  {
    title: 'Back Office Solutions',
    description: 'Payroll, finance, and administrative support tailored to your operations.',
  },
  {
    title: 'Document Processing',
    description: 'Digitization, indexing, and secure handling of your documents.',
  },
];

export default function Services() {
  const pageUrl = '/services';
  return (
    <>
      <Seo
        title="BPO & Outsourcing Services – Vertex Globals"
        description="Explore Vertex Globals’ outsourcing services including customer support, data entry, back office, and document processing."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Services', url: 'https://www.vertex-globals.com/services' },
        ]}
      />

      <section className="container" aria-labelledby="services-heading">
        <h1 id="services-heading">Our Services</h1>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
          {services.map(({ title, description }) => (
            <article
              key={title}
              aria-labelledby={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
              className="service-card"
            >
              <h2 id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}