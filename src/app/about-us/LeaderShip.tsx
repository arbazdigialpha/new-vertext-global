import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sohel Shaikh",
    role: "CEO & Founder",
    intro : "Sohel Shaikh is the visionary founder and CEO of Vertex Globals, bringing over a decade of expertise in outsourcing and business process management. His leadership is defined by a commitment to innovation, client success, and operational excellence.",
    img: "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/team-image.webp",
    animation: { type: "fade-right", delay: 700 },
  },
  {
    name: "John Doe",
    role: "CEO & Founder",
    intro :"Sohel Shaikh is the visionary founder and CEO of Vertex Globals, bringing over a decade of expertise in outsourcing and business process management. His leadership is defined by a commitment to innovation, client success, and operational excellence.",
    img: "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/main-banner.webp",
    animation: { type: "fade-left", delay: 1000 },
  },
//   {
//     name: "Sarah Miller",
//     role: "Head of Client Relations",
//     img: "https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/main-banner.webp",
//   },
];

const LeaderShip = () => {
  return (
    <section className="leadership-team section-padding bg-light-gray">
      <div className="container section-container">
        <h2 className="section-title section-heading" data-aos="zoom-in">Our Leadership Team</h2>
        <p className="subtitle" data-aos="zoom-in" data-aos-delay="400">
          Meet the dedicated individuals guiding Vertex Globals towards a future
          of innovation and success.
        </p>
        <div className="team-grid team-card-wrapper">
          {teamMembers.map(({ name, role, img , intro , animation}, index) => (
            <div 
                key={index} 
                className="team-card"
                data-aos={animation.type}
                data-aos-delay={animation.delay}
                data-aos-offset="200"
                data-aos-duration="600"
            >
              <div className="member-image">
                <Image
                  src={img}
                  alt={`${name} - ${role}`}
                  width={150}
                  height={150}
                  className="team-img"
                  loading="lazy"
                />
              </div>
              <div className="user-information">
                <p className="team-member-name">{name}</p>
                <span className="role">{role}</span>
                <p className="intro">{intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderShip;
