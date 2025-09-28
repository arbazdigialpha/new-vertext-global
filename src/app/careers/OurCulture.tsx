import React, { useState } from 'react'
import { Heart, Lightbulb, Shield, ChevronLeft, ChevronRight, Users, ShieldCheck, HeartIcon, Target } from 'lucide-react'

const OurCulture = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const cultureFeatures = [
    {
        icon: <HeartIcon size={22} color="#1874d2" strokeWidth={2} />,
        title: 'People First',
        description: 'We prioritize work-life balance and create an environment where everyone feels valued and supported.'
    },
    {
      icon: <Target size={22} color="#1874d2" strokeWidth={2} />,
      title: 'Excellence Driven',
      description: 'We strive for excellence in everything we do, continuously pushing boundaries and setting new standards.'
    },
    {
      icon: <Lightbulb size={22} color="#1874d2" strokeWidth={2} />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and bold ideas that push boundaries.'
    },
  ]

  const cultureImages = [
    {
      src: 'https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/our-culture1.webp',
      alt: 'Team collaboration in office setting'
    },
    {
      src: 'https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/our-culture2.webp',
      alt: 'Focused work and learning'
    },
    {
      src: 'https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/our-culture3.webp',
      alt: 'Presentation and audience engagement'
    },
    {
      src: 'https://ik.imagekit.io/qamrdwkcj/assets/cdn/images/our-culture4.webp',
      alt: 'Creative space and team interaction'
    }
  ]

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + cultureImages.length) % cultureImages.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % cultureImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <section className="our-culture section-padding" aria-labelledby="culture-title">
      <div className="our-culture-container section-container">
        <div className="our-culture-content">
          <div className="our-culture-text">
            <h2 id="culture-title" className="our-culture-title section-heading">
              Our Culture
            </h2>
            <p className="our-culture-description subtitle">
                A culture of trust, diversity, and innovation—where every voice matters.
            </p>       
            <div className="culture-features">
              {cultureFeatures.map((feature, index) => (
                <div key={index} className="culture-feature">
                  <div className="culture-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div className="culture-feature-content">
                    <h3 className="culture-feature-title">{feature.title}</h3>
                    <p className="culture-feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="our-culture-images">
            <div className="culture-images-grid">
              {cultureImages.map((image, index) => (
                <div key={index} className="culture-image-item">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="culture-image"
                  />
                </div>
              ))}
            </div>
            
            <div className="culture-images-carousel">
              <div className="custom-carousel-container">
                <div className="custom-carousel-track" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                  {cultureImages.map((image, index) => (
                    <div key={index} className="custom-carousel-slide">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="culture-carousel-image"
                      />
                    </div>
                  ))}
                </div>
                
                <button type="button" className="custom-carousel-arrow custom-carousel-prev" onClick={goToPrevious}>
                  <ChevronLeft color="#1874d2" strokeWidth={2} />
                </button>
                <button type="button" className="custom-carousel-arrow custom-carousel-next" onClick={goToNext}>
                  <ChevronRight color="#1874d2" strokeWidth={2} />
                </button>
                
                <div className="custom-carousel-dots">
                  {cultureImages.map((_, index) => (
                    <button
                      key={index}
                      className={`custom-carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCulture