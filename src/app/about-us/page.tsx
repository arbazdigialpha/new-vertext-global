"use client";

import Image from "next/image";
import Seo from '../../components/Seo';
// import "../../scss/about-us.scss";
import WhoWeAreSection from "./WhoWeAreSection";
import OurPurpose from "./OurPurpose";
import CoreValues from "./CoreValues";

const AboutUsPage = () => {
  const pageUrl = '/about-us';
  return (
    <>
      <Seo
        title="About Vertex Globals – Our Mission, Vision & Values"
        description="Learn about Vertex Globals, our mission to deliver efficient outsourcing solutions, vision for global partnerships, and core values of integrity, accuracy, and client focus."
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
        <section className="leadership-team section-padding bg-light-gray">
          <div className="container section-container">
            <h2 className="section-title section-heading">Our Leadership Team</h2>
            <p className="subtitle">
              Meet the dedicated individuals guiding Vertex Globals towards a future of
              innovation and success.
            </p>
            <div className="team-grid">
              <div className="team-card">
                <Image
                  src="https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/team-image.webp"
                  alt="Emily Rodriguez"
                  width={150}
                  height={150}
                  className="team-img"
                />
                <h4>Emily Rodriguez</h4>
                <p className="role">Chief Executive Officer</p>
              </div>
              <div className="team-card">
                <Image
                  src="https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/main-banner.webp"
                  alt="David Chen"
                  width={150}
                  height={150}
                  className="team-img"
                />
                <h4>David Chen</h4>
                <p className="role">Chief Operating Officer</p>
              </div>
              <div className="team-card">
                <Image
                  src="https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/main-banner.webp"
                  alt="Sarah Miller"
                  width={150}
                  height={150}
                  className="team-img"
                />
                <h4>Sarah Miller</h4>
                <p className="role">Head of Client Relations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUsPage;
