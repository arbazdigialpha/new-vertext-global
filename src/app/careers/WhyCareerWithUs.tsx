import { BookOpen, DollarSign, Shield, Home, Coffee, Rocket, Gift, Globe } from 'lucide-react'
import React from 'react'

const WhyCareerWithUs = () => {
    const benefits = [
        {
            icon: <DollarSign size={24} color="#1874d2" strokeWidth={2} />,
            title: 'Competitive Compensation',
            description: 'We offer industry-leading salaries, performance-based bonuses, and equity options to reward your contributions and dedication.',
        },
        {
            icon: <Gift size={24} color="#1874d2" strokeWidth={2} />,
            title: 'Recognition & Rewards',
            description: 'We value every contribution and celebrate achievements with meaningful recognition and rewards that inspire continued excellence.',

        },
        {
            icon: <Home size={24} color="#1874d2" strokeWidth={2} />,
            title: 'Flexible Work',
            description: 'Enjoy remote work options and adaptable schedules designed to support your work-life balance and personal lifestyle.',
        },
        {
            icon: <BookOpen size={24} color="#1874d2" strokeWidth={2} />,
            title: 'Learning & Development',
            description: 'Access continuous training, professional certifications, and opportunities to attend conferences to enhance your skills and knowledge.',
        },
        {
            icon: <Globe size={24} color="#1874d2" strokeWidth={2} />,
            title: 'Global Exposure',
            description: 'Collaborate with international clients across diverse industries, gaining valuable experience and broadening your professional perspective.',
        },
        {
            icon: <Rocket size={24} color="#1874d2" strokeWidth={2} />,
            title: 'Career Growth',
            description: 'Follow clear advancement paths with structured mentorship and leadership opportunities to help you reach your full potential.',
        },
    ]
  return (
        <section className="why-career-with-us section-padding">
            <div className="why-career-container section-container">
                <h2 className="section-heading">Why Join Us?</h2>
                <p className="why-career-subtitle subtitle">
                    Discover the benefits and opportunities that make Vertex Global Solutions an exceptional place to build your career.
                </p>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-item">
                            <div className="benefit-icon">
                                {benefit.icon}
                            </div>
                            <div className="benefit-content">
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default WhyCareerWithUs