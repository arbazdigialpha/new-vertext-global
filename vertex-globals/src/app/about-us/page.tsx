"use client";

import Image from "next/image";
import Link from "next/link";
import Seo from '../../components/Seo';
import "../../scss/about-us.scss";

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
        <section className="who-we-are section-padding">
          <div className="container section-container">
            <h2 className="section-heading">Who We Are</h2>
            <p className="subtitle">
              Vertex Globals is a leading BPO company dedicated to empowering
              businesses with scalable and efficient outsourcing solutions,
              enabling them to focus on core competencies and achieve sustained
              growth.
            </p>
            <div className="content">
              <div className="about-us-text">
                <p className="text-content">
                Founded with a vision to redefine business process outsourcing, Vertex Globals brings together a team of seasoned professionals and cutting-edge technology. We specialize in delivering bespoke solutions that address the unique challenges of modern enterprises, from startups to large corporations. Our commitment to excellence, innovation, and client satisfaction drives every partnership.
                </p>
                <p className="text-content">
                We believe that effective outsourcing is more than just cost savings—it's about strategic partnerships that foster efficiency, agility, and competitive advantage. Our comprehensive suite of services is designed to streamline operations, enhance customer experiences, and unlock new opportunities for our clients across diverse industries.
                </p>
                <Link href="/about-us" className="btn">
                  Learn More About Us
                </Link>
              </div>
              <div className="image">
                <Image
                  src="https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/main-banner.webp"
                  alt="Who We Are"
                  width={450}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Purpose Section */}
        <section className="our-purpose section-padding">
          <div className="container">
            <h2 className="section-title">Our Purpose</h2>
            <p className="subtitle">
              Driving excellence through clear objectives and forward-thinking goals.
            </p>
            <div className="cards">
              <div className="card">
                <h3>Our Mission</h3>
                <p>
                  To empower businesses globally with seamless, high-quality outsourcing
                  solutions that enhance operational efficiency, reduce costs, and
                  foster sustainable growth, allowing our clients to excel in their
                  core business.
                </p>
              </div>
              <div className="card">
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted and innovative global partner in business process
                  outsourcing, recognized for our commitment to client success,
                  technological advancement, and an ethical, empowered workforce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values">
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <p className="subtitle">
              The principles that guide our every action and decision at Vertex Globals.
            </p>
            <div className="values-grid">
              <div className="value-card">
                <h4>Efficiency</h4>
                <p>
                  Streamlining processes to deliver optimal results quickly and effectively.
                </p>
              </div>
              <div className="value-card">
                <h4>Accuracy</h4>
                <p>
                  Ensuring precision and meticulous attention to detail in all tasks.
                </p>
              </div>
              <div className="value-card">
                <h4>Integrity</h4>
                <p>
                  Operating with honesty, transparency, and the highest ethical standards.
                </p>
              </div>
              <div className="value-card">
                <h4>Client-Centricity</h4>
                <p>
                  Prioritizing client needs and building lasting partnerships through
                  exceptional service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="leadership-team">
          <div className="container">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="subtitle">
              Meet the dedicated individuals guiding Vertex Globals towards a future of
              innovation and success.
            </p>
            <div className="team-grid">
              <div className="team-card">
                <Image
                  src="https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/main-banner.webp"
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
