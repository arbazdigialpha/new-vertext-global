import React from "react";
import Image from "next/image";

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are section-padding">
      <div className="container section-container">
        <h2 className="section-heading">Who We Are</h2>
        <div className="content">
          <div className="about-us-text">
            <p className="text-content">
              Founded with a vision to redefine business process outsourcing,
              Vertex Globals brings together a team of seasoned professionals
              and cutting-edge technology. We specialize in delivering bespoke
              solutions that address the unique challenges of modern
              enterprises, from startups to large corporations. Our commitment
              to excellence, innovation, and client satisfaction drives every
              partnership.
            </p>
            <p className="text-content">
              We believe that effective outsourcing is more than just cost
              savings—it's about strategic partnerships that foster efficiency,
              agility, and competitive advantage. Our comprehensive suite of
              services is designed to streamline operations, enhance customer
              experiences, and unlock new opportunities for our clients across
              diverse industries.
            </p>
          </div>
          <div className="team-image">
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
