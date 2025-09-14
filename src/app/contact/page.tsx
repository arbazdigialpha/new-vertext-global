'use client'

import React, { useState } from 'react'
import Seo from '../../components/Seo'

const Contact = () => {
  const pageUrl = '/contact'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const maxMessageLength = 500

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: '' })) // clear error on change
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    // Company validation (at least 2 words)
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.trim().length > maxMessageLength) {
      newErrors.message = `Message cannot exceed ${maxMessageLength} characters`
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      <Seo
        title="Contact Vertex Globals – Get in Touch"
        description="Contact Vertex Globals today. Reach us via email, phone, or our online form for outsourcing and BPO solutions."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Contact', url: 'https://www.vertex-globals.com/contact' },
        ]}
      />
      <section className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-box">
          <div className="contact-info">
            <h2 id="contact-heading" className="contact-heading section-heading">Let's Chat</h2>
            <p className="left-txt">
              Whether you have a question, want to start a project or simply want to connect.
            </p>
            <p className="left-txt">
              Feel free to send me a message in the contact form.
            </p>
          </div>
          <div className="contact-form-container">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <input
                    type="text"
                    className={`input-field ${errors.name ? 'error' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                  />
                  <label htmlFor="name" className="input-label">Name*</label>
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={`input-field ${errors.email ? 'error' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                  />
                  <label htmlFor="email" className="input-label">Email*</label>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={`input-field ${errors.company ? 'error' : ''}`}
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder=""
                  />
                  <label htmlFor="company" className="input-label">Company*</label>
                  {errors.company && <span className="error-text">{errors.company}</span>}
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className={errors.message ? 'error' : ''}
                    maxLength={500}
                  />
                  <div className={`char-counter ${formData.message.length > 480 ? 'limit' : ''}`}>
                    {formData.message.length}/500
                  </div>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            ) : (
              <p className="thank-you">✅ Thank you for contacting us! We will get back to you shortly.</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
