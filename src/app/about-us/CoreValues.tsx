import React from "react";
import { TrendingUp, Gem, Handshake, Users } from "lucide-react";

const coreValues = [
  {
    icon: <TrendingUp color="#005bb5" strokeWidth={2} aria-hidden="true" />,
    title: "Efficiency",
    description:
      "Streamlining processes to deliver optimal results quickly and effectively.",
  },
  {
    icon: <Gem color="#005bb5" strokeWidth={2} aria-hidden="true" />,
    title: "Accuracy",
    description:
      "Ensuring precision and meticulous attention to detail in all tasks.",
  },
  {
    icon: <Handshake color="#005bb5" strokeWidth={2} aria-hidden="true" />,
    title: "Integrity",
    description:
      "Operating with honesty, transparency, and the highest ethical standards.",
  },
  {
    icon: <Users color="#005bb5" strokeWidth={2} aria-hidden="true" />,
    title: "Client-Centricity",
    description:
      "Prioritizing client needs and building lasting partnerships through exceptional service.",
  },
];

const CoreValues = () => {
  return (
    <section className="core-values section-padding">
      <div className="container section-container">
        <h2 className="section-heading" data-aos="zoom-in">Our Core Values</h2>
        <p className="subtitle" data-aos="zoom-in" data-aos-delay="300">
          The principles that guide our every action and decision at Vertex Globals.
        </p>
        <div className="values-grid">
          {coreValues.map(({ icon, title, description }, index) => (
            <div 
              key={index} 
              className="value-card small-card" 
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="600"
            >
              <span>{icon}</span>
              <h3 className="value-card-title card-title">{title}</h3>
              <p className="card-content">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
