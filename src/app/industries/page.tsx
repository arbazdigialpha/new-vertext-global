import React from 'react';
import Seo from '../../components/Seo';

const industries = [
  {
    title: 'E-commerce',
    description: 'Outsourcing solutions tailored for e-commerce businesses.',
    icon: '/images/industry-icons/e-commerce.webp',
    alt: 'E-commerce icon',
  },
  {
    title: 'Banking',
    description: 'Secure and compliant outsourcing for banking institutions.',
    icon: '/images/industry-icons/banking.webp',
    alt: 'Banking icon',
  },
  {
    title: 'Finance',
    description: 'Financial document processing and support services.',
    icon: '/images/industry-icons/finance.webp',
    alt: 'Finance icon',
  },
  {
    title: 'Healthcare',
    description: 'Reliable outsourcing for healthcare providers and insurers.',
    icon: '/images/industry-icons/healthcare.webp',
    alt: 'Healthcare icon',
  },
  {
    title: 'Travel',
    description: 'Customer support and back-office for travel agencies.',
    icon: '/images/industry-icons/travel.webp',
    alt: 'Travel icon',
  },
  {
    title: 'Hospitality',
    description: 'Outsourcing solutions for hotels and hospitality businesses.',
    icon: '/images/industry-icons/hospitality.webp',
    alt: 'Hospitality icon',
  },
  {
    title: 'Retail',
    description: 'Efficient outsourcing for retail operations.',
    icon: '/images/industry-icons/retail.webp',
    alt: 'Retail icon',
  },
];

export default function Industries() {
  const pageUrl = '/industries';
  return (
    <>
      <Seo
        title="Industries We Serve – Vertex Globals"
        description="Vertex Globals provides outsourcing solutions for e-commerce, banking, finance, healthcare, travel, hospitality, and retail industries."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Industries', url: 'https://www.vertex-globals.com/industries' },
        ]}
      />

      <section className="container" aria-labelledby="industries-heading">
        <h1 id="industries-heading">Industries We Serve</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: '2rem',
          }}
        >
          {industries.map(({ title, description, icon, alt }) => (
            <article key={title} aria-labelledby={`industry-${title.replace(/\s+/g, '-').toLowerCase()}`}>
              <img src={icon} alt={alt} width={64} height={64} />
              <h2 id={`industry-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}