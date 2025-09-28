import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="careers-hero section-padding">
    <div className="careers-hero-container section-container">
      <div className="careers-hero-content">
        <div className="careers-hero-text">
          <h1 className="careers-hero-title section-heading">
            Build Your Future with Vertex Global Solution
          </h1>
          <p className="careers-hero-description">
            Join a dynamic team where innovation meets opportunity. At Vertex Global Solutions, we're not just building careers - we're shaping the future of technology and creating meaningful impact across industries.
          </p>
          <div className="careers-hero-buttons">
            <button className="btn explore-opportunities-btn">
              Explore Opportunities
            </button>
          </div>
        </div>
        <div className="careers-hero-image">
        <Image
          src="https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/career.webp"
          alt="Vertex Global team working in modern office environment"
          width={550}
          height={300}
          className="careers-team-image"
        />
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection