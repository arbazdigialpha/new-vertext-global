import React from 'react'
import { Users, TrendingUp, Lightbulb } from 'lucide-react'

const WelcomeToVertex = () => {
  const cards = [
    {
      icon: <Users size={24} color="#005bb5" strokeWidth={2} />,
      title: 'Collaborative Team Culture',
      description:
        'Work alongside brilliant professionals who share your passion for excellence, teamwork, and innovation.',
    },
    {
      icon: <TrendingUp size={24} color="#005bb5" strokeWidth={2} />,
      title: 'Career Growth Opportunities',
      description:
        'Advance your career with continuous learning, leadership training, and professional development programs at Vertex.',
    },
    {
      icon: <Lightbulb size={24} color="#005bb5" strokeWidth={2} />,
      title: 'Innovation and Technology Focus',
      description:
        'Be part of cutting-edge projects that shape the future of technology, business, and digital transformation.',
    },
  ]
  return (
    <section
      className="welcome-to-vertex section-padding"
      aria-labelledby="welcome-title"
    >
      <div className="welcome-container section-container">
        <div>
          <h2 id="welcome-title" className="welcome-title section-heading">
            Welcome to Vertex Global Solutions
          </h2>
          <p className="welcome-description subtitle">
            We believe great people achieve remarkable results. Our mission is to empower talent and drive innovation that transforms industries.
          </p>
        </div>
        <div className="welcome-cards">
          {cards.map(({ icon, title, description }, index) => (
            <article key={index} className="welcome-card">
              <div className="welcome-card-icon" aria-hidden="true">
                {icon}
              </div>
              <h3 className="welcome-card-title">{title}</h3>
              <p className="welcome-card-description">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default WelcomeToVertex
