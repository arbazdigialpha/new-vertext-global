import React from "react";
import Image from "next/image";
import { Target , Lightbulb  } from "lucide-react";

const OurPurpose = () => {
  return (
    <section className="our-purpose section-padding bg-light-gray">
      <div className="container section-container">
        <h2 className="section-heading">
          Our Purpose
          <p className="subtitle">
            Driving excellence through clear objectives and forward-thinking
            goals.
          </p>
        </h2>
        <div className="cards">
          <div className="card">
            <Target color="#1874d2" strokeWidth={2} />
            <h3 className="card-title">Our Mission</h3>
            <p className="card-desc">
              To empower businesses globally with seamless, high-quality
              outsourcing solutions that enhance operational efficiency, reduce
              costs, and foster sustainable growth, allowing our clients to
              excel in their core business.
            </p>
          </div>
          <div className="card">
            <Lightbulb color="#005bb5" strokeWidth={2} />
            <h3 className="card-title">Our Vision</h3>
            <p className="card-desc">
              To be the most trusted and innovative global partner in business
              process outsourcing, recognized for our commitment to client
              success, technological advancement, and an ethical, empowered
              workforce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
