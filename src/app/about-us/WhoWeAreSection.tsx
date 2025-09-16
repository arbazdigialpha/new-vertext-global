import React from "react";
import Image from "next/image";

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are section-padding">
      <div className="container section-container">
        <h2 className="section-heading" data-aos="zoom-in">Who We Are</h2>
        <div className="content">
          <div className="about-us-text" data-aos="fade-right" data-aos-delay="700" data-aos-offset="200">
            <p className="text-content">
              At Vertex Global Solutions, we are redefining the future of Business Process Outsourcing (BPO) by bringing together cutting-edge technology, innovation, and human expertise. Our journey began with a simple vision – to build a company that not only supports businesses but also empowers them to scale and succeed in a highly competitive world.
            </p>
            <p className="text-content">
              Founded by professionals with over a decade of combined experience in BPO operations, e-commerce, and business management, Vertex Global Solutions is more than just an outsourcing partner. We act as an extension of your business, ensuring that every interaction creates value and builds trust.
            </p>
            <p className="text-content">
              Our mission is to deliver seamless customer experiences, data-driven strategies, and scalable business solutions that help our clients grow globally. Whether it’s customer support, human resource management, digital transformation, or back-office operations, we focus on quality, reliability, and results.
            </p>
            <p className="text-content">
              At the core of our values is people-first thinking – we believe that combining skilled professionals with smart technology leads to sustainable success. Our clients trust us because we don’t just provide services; we build long-term partnerships based on transparency, innovation, and measurable outcomes.
            </p>
            <p className="text-content">
              At Vertex Global Solutions, we are not just running processes – we are shaping the future of outsourcing.
            </p>
          </div>
          <div className="team-image" data-aos="fade-left" data-aos-delay="1000" data-aos-offset="200">
            <Image
              src="https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/team-image.webp"
              alt="team image"
              width={450}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
