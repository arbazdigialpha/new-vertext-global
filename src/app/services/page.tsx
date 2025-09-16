import React from 'react';
import Seo from '../../components/Seo';
import ServiceCard from '../components/ServiceCard';
export default function Services() {
  const pageUrl = '/services';
    const services = [
    {
      title: "Non-Voice Process Outsourcing",
      description:
        "Streamline your non-voice operations with our expert outsourcing solutions.",
      imageUrl:
        "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/non-voice.webp",
    },
    {
      title: "Data Processing & Back Office",
      description:
        "Enhance efficiency with our comprehensive data processing and back-office services.",
      imageUrl:
        "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/data-processing-back-office.webp",
    },
    {
      title: "Customer Email & Chat Support",
      description:
        "Provide exceptional customer service through our email and chat support solutions.",
      imageUrl:
        "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/customer-email.webp",
    },
    {
      title: "Document Management",
      description:
        "Efficiently manage your documents with our advanced document management services.",
      imageUrl:
        "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/document-management.webp",
    },
  ];
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

      <section className="section-padding services-section" aria-labelledby="services-heading">
        <div className='section-container'>
          <h1 id="services-heading" aria-labelledby="services-heading"className="section-heading" data-aos="zoom-in">
            Our Services
          </h1>
          <div className='services__list card-arrangment'>
          {services.map((service , i) => (
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
    </>
  );
}