import React from "react";
import { Target, Lightbulb } from "lucide-react";

const purposes = [
  {
    icon: <Target color="#1874d2" strokeWidth={2} aria-hidden="true" />,
    title: "Our Mission",
    description:
      "To empower businesses globally with seamless, high-quality outsourcing solutions that enhance operational efficiency, reduce costs, and foster sustainable growth, allowing our clients to excel in their core business.",
    animation: { type: "fade-right", delay: 700 },
  },
  {
    icon: <Lightbulb color="#005bb5" strokeWidth={2} aria-hidden="true" />,
    title: "Our Vision",
    description:
      "To be the most trusted and innovative global partner in business process outsourcing, recognized for our commitment to client success, technological advancement, and an ethical, empowered workforce.",
    animation: { type: "fade-left", delay: 1000 },
  },
];

const OurPurpose = () => {
  return (
    <section className="our-purpose section-padding bg-light-gray">
      <div className="container section-container">
        <h2 className="section-heading" data-aos="zoom-in">
          Our Purpose
        </h2>
        <p className="subtitle" data-aos="zoom-in" data-aos-delay="400">
          Driving excellence through clear objectives and forward-thinking goals.
        </p>

        <div className="cards">
          {purposes.map(({ icon, title, description, animation }, index) => (
            <div
              key={index}
              className="card"
              data-aos={animation.type}
              data-aos-delay={animation.delay}
              data-aos-offset="200"
            >
              {icon}
              <h3 className="card-title">{title}</h3>
              <p className="card-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
