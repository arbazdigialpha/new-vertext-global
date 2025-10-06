"use client"
import React, { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

type FAQ = {
  id: number
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs: FAQ[]
}

const FAQSection = ({ title, faqs }: FAQSectionProps) => {
  const [activeId, setActiveId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="faq-section">
      <div className="section-container">
        {title && <h2 className="section-heading">{title}</h2>}

        <div className="faq-list">
          {faqs.map((item) => {
            const isActive = activeId === item.id

            return (
              <div key={item.id} className={`faq-card ${isActive ? "active" : ""}`}>
                <div
                  className="faq-header"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <h5 className="faq-question">{item.question}</h5>
                  <span className="faq-icon">
                    {isActive ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </span>
                </div>

                <div className={`faq-collapse ${isActive ? "show" : ""}`}>
                  <div className="faq-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
