"use client"
import React, { useState } from "react"
import { ChevronLeft, ChevronDown } from "lucide-react"

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

const CollapsibleSection = ({ 
  title, 
  children, 
  defaultOpen = false, 
  className = "" 
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleSection = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`collapsible-section ${className}`}>
      <button 
        className="collapsible-section__header" 
        onClick={toggleSection}
        aria-expanded={isOpen}
      >
        <span className="collapsible-section__title">{title}</span>
        <span className="collapsible-section__icon">
          {isOpen ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </span>
      </button>

      <div className={`collapsible-section__content ${isOpen ? "active" : ""}`}>
        <div className="collapsible-section__content-inner">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CollapsibleSection
