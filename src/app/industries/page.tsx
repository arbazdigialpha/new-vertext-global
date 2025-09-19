import React from 'react';
import Seo from '../../components/Seo';
import { Banknote, Briefcase, FileText, Heart, HeartPulse, Hotel, Plane, ShoppingBag, ShoppingCart, Store } from 'lucide-react';
import CTA from '../components/CTA';

const industries = [
  {
    title: 'E-commerce',
    description: 'Streamlining online operations for seamless customer experiences, from order processing to inventory management.',
    icon: <ShoppingCart color="#1874d2" />,
    alt: 'E-commerce icon',
  },
  {
    title: 'Banking & Finance',
    description: 'Secure and efficient back-office support for financial institutions, ensuring compliance and data integrity.',
    icon: <Banknote color="#1874d2" />,
    alt: 'Banking icon',
  },
  {
    title: 'Healthcare',
    description: 'Optimizing patient data management, billing, and administrative tasks for healthcare providers.',
    icon: <HeartPulse color="#1874d2" />,
    alt: 'Healthcare icon',
  },
  {
    title: 'Travel & Hospitality',
    description: 'Enhancing guest services and operational efficiency for airlines, hotels, and travel agencies.',
      icon: <Briefcase color="#1874d2" />,
    alt: 'Travel icon',
  },
  {
    title: 'Retail',
    description: 'Managing supply chains, customer support, and data analytics to drive growth for retail businesses.',
    icon: <Store color="#1874d2" />,
    alt: 'Retail icon',
  },
];

export default function Industries() {
  const pageUrl = '/industries';
  return (
    <>
      <Seo
        title="Industries We Serve – Vertex Global"
        description="Vertex Global provides outsourcing solutions for e-commerce, banking, finance, healthcare, travel, hospitality, and retail industries."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Industries', url: 'https://www.vertex-globals.com/industries' },
        ]}
      />

      <section className="section-padding industries-section" aria-labelledby="industries-heading">
        <div className="section-container">
          <div className='industries-heading'>
            <h1 id="industries-heading" className='section-heading'>Industries We Empower</h1>
            <p className='subtitle'> Vertex Globals partners with leading businesses across diverse sectors, providing tailored BPO solutions that drive efficiency, reduce costs, and accelerate growth. Discover how our expertise can transform your operations. </p>
          </div>
          <div className='industries-list card-arrangment'>
            {industries.map(({ title, description, icon }) => (
              <article key={title} aria-labelledby={`industry-${title.replace(/\s+/g, '-').toLowerCase()}`} className='industry-card'>
                <div className='industry-card-icon'>
                  <span>{icon}</span>
                </div>
                <h2 id={`industry-${title.replace(/\s+/g, '-').toLowerCase()}`} className='industry-card-title'>{title}</h2>
                <p className='industry-card-description'>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}