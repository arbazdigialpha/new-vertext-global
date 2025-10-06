import React from 'react'
import { Headset, Laptop, Briefcase, Megaphone, ArrowRight, ChartColumn, ChartNoAxesCombined, Handshake } from 'lucide-react'
import TeamIcon from '@/components/icons/TeamIcon'

const CareerPath = () => {
  const careerAreas = [
    {
      icon: Headset ,
      title: "Customer Support (Voice/Non-Voice/Chat/Email)",
      description: "Deliver exceptional support experiences across voice, chat, and email.",
      positions: 12
    },
    {
      icon: Laptop,
      title: "Technical Support & Helpdesk",
      description: "Solve technical issues and keep systems running smoothly.",
      positions: 5
    },
    {
      icon: ChartColumn,
      title: "Back-Office & Data Management",
      description: "Manage data, processes, and ensure seamless operations.",
      positions: 8
    },
    {
      icon: ChartNoAxesCombined,
      title: "Finance & Accounting",
      description: "Drive business growth with accurate finance and accounting.",
      positions: 6
    },
    {
      icon: Handshake,
      title: "Human Resources & Recruitment",
      description: "Build strong teams through talent acquisition and HR support.",
      positions: 6
    },
    {
      icon: Megaphone,
      title: "Sales & Telemarketing",
      description: "Boost business growth through impactful sales and outreach.",
      positions: 6
    },
    {
      icon: TeamIcon,
      title: "Operations & Team Management",
      description: "Lead teams, optimize processes, and deliver operational success.",
      positions: 6
    }
  ]

  return (
    // <div className="career-page">
      <section className="career-areas section-padding bg-light-gray">
        <div className="section-container">
          {/* Career Areas Header */}
          <h2 className="section-heading"> Explore Career Paths </h2>
          <p className="subtitle">
            Explore diverse career paths across our organization. Whether you're a seasoned professional or just starting your journey, we have opportunities that match your skills and aspirations.
          </p>
          {/* Career Cards */}
          <div className="career-cards-container">
            {careerAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="career-card">
                  <div className="career-card-icon">
                    {area.title === "Operations & Team Management" ? (
                      <div style={{ width: '40px', height: '40px', color: '#1874d2' }}>
                        <IconComponent />
                      </div>
                    ) : (
                      <IconComponent size={40} color="#1874d2" />
                    )}
                  </div>
                  <h3 className="career-card-title">{area.title}</h3>
                  <p className="career-card-description">{area.description}</p>
                  <a href="#" className="career-card-link">
                    {area.positions} open positions <ArrowRight size={16} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    // </div>
  )
}

export default CareerPath