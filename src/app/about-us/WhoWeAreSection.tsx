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
              At Vertex Global Solutions, we are redefining business process outsourcing by combining technology, innovation, and human expertise. Founded by professionals with deep industry experience, our mission is to deliver seamless customer experiences and scalable business solutions that empower our clients to grow globally.
            </p>
            {/* <p className="text-content">
              We believe that effective outsourcing is more than just cost
              savings—it's about strategic partnerships that foster efficiency,
              agility, and competitive advantage. Our comprehensive suite of
              services is designed to streamline operations, enhance customer
              experiences, and unlock new opportunities for our clients across
              diverse industries.
            </p> */}
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
