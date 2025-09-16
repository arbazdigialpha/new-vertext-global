"use client";

import Image from "next/image";
import Seo from '../../components/Seo';
import WhoWeAreSection from "./WhoWeAreSection";
import OurPurpose from "./OurPurpose";
import CoreValues from "./CoreValues";
import LeaderShip from "./LeaderShip";
import CTA from "../components/CTA";

const AboutUsPage = () => {
  const pageUrl = '/about-us';
  return (
    <>
      <Seo
        title="About Vertex Global – Our Mission, Vision & Values"
        description="Learn about Vertex Global, our mission to deliver efficient outsourcing solutions, vision for global partnerships, and core values of integrity, accuracy, and client focus."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'About Us', url: 'https://www.vertex-globals.com/about-us' },
        ]}
      />
      <main className="about-us">
        {/* Who We Are Section */}
        <WhoWeAreSection />
        {/* Our Purpose Section */}
        <OurPurpose />
        {/* Core Values Section */}
        <CoreValues />
        {/* Leadership Team Section */}
        <LeaderShip />
        {/* Call to Action Section */}
        <CTA />
      </main>
    </>
  );
};

export default AboutUsPage;
