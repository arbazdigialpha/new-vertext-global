'use client';

import React from 'react';
import Seo from '../../components/Seo';
import HeroSection from './HeroSection';
import WelcomeToVertext from './WelcomeToVertext';
import OurCulture from './OurCulture';
import WhyCareerWithUs from './WhyCareerWithUs';
import CareerPath from './CareerPath';
import { careersFaqs } from '@/data/faqs/careersFaqs';
import FAQSection from '@/components/FAQSection';

export default function Careers() {
  const pageUrl = '/careers'

  return (
    <main className="careers-page">
      <Seo
        title="Careers at Vertex Global – Join Our Team"
        description="Explore career opportunities at Vertex Global and join a growing BPO where talent meets opportunity."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Careers', url: 'https://www.vertex-globals.com/careers' },
        ]}
      />
      {/* Careers Hero Section */}
      <HeroSection />
      {/* Welcome to Vertex Section */}
      <WelcomeToVertext />
      {/* Our Culture Section */}
      <OurCulture />
      {/* Why Career with Us Section */}
      <WhyCareerWithUs />
      {/* Career Path Section */}
      <CareerPath /> 
      {/* FAQ Section */}
      <FAQSection title="Careers FAQs" faqs={careersFaqs} />
    </main>
  );
}