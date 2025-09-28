import React from 'react';
import Seo from '../../components/Seo';
import ServiceCard from '../components/ServiceCard';
import ServiceBanner from './ServiceBanner';
import CTA from '../components/CTA';
export default function Services() {
  const pageUrl = '/services';
  const services = [
    {
      title: "Non-Voice Process Outsourcing",
      description:
        "Streamline your non-voice operations with our expert outsourcing solutions.",
      imageUrl:
        "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/non-voice-img.webp",
    },
    {
      title: "Data Processing & Back Office",
      description:
        "Enhance efficiency with our comprehensive data processing and back-office services.",
      imageUrl:
        "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/data-process-img.webp",
    },
    {
      title: "Customer Email & Chat Support",
      description:
        "Provide exceptional customer service through our email and chat support solutions.",
      imageUrl:
        "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/email-chat-img.webp",
    },
    {
      title: "Document Management",
      description:
        "Efficiently manage your documents with our advanced document management services.",
      imageUrl:
        "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/doc-management.webp",
    },
  ];
  return (
    <>
      <Seo
        title="BPO & Outsourcing Services – Vertex Global"
        description="Explore Vertex Global’ outsourcing services including customer support, data entry, back office, and document processing."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Services', url: 'https://www.vertex-globals.com/services' },
        ]}
      />
      {/* Our services banner start  */}
      <ServiceBanner />
      {/* Our services banner end  */}
      <section className="section-padding services-section bg-light-gray" aria-labelledby="services-heading">
        <div className='section-container'>
          <h1 id="services-heading" aria-labelledby="services-heading" className="section-heading" data-aos="zoom-in">
            Our Services
          </h1>
          <div className='services__list card-arrangment'>
            {services.map((service, i) => (
              <ServiceCard
                key={service.title.replace(/\s+/g, '-').toLowerCase()}
                index={i}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}