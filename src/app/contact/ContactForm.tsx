'use client'
import React, { useState } from 'react'
import MessageSendingAnimation from './MessageSendingAnimation'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian phone number'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    
    try {
      // Send POST request to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
      } else {
        // Handle API error
        setErrors({ submit: result.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      // Handle network or other errors
      setErrors({ submit: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" aria-labelledby="contact-heading" id="contact-form">
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
                  placeholder=''
                  value={formData.name}
                  onChange={handleChange}
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
                  placeholder=''
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="input-label">Email*</label>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  className={`input-field ${errors.phone ? 'error' : ''}`}
                  id="phone"
                  name="phone"
                  placeholder=''
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone" className="input-label">Phone*</label>
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className={`input-field ${errors.company ? 'error' : ''}`}
                  id="company"
                  name="company"
                  placeholder=''
                  value={formData.company}
                  onChange={handleChange}
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
                  maxLength={maxMessageLength}
                />
                <div className={`char-counter ${formData.message.length > 480 ? 'limit' : ''}`}>
                  {formData.message.length}/{maxMessageLength}
                </div>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn-submit" 
                disabled={isSubmitting}
              >
                {/* {isSubmitting ? 'Sending...' : <MessageSendingAnimation />} */}
                {isSubmitting ? <MessageSendingAnimation /> : 'Send Message'}
              </button>
              
              {errors.submit && (
                <div className="error-text" style={{ marginTop: '10px', textAlign: 'center' }}>
                  {errors.submit}
                </div>
              )}
            </form>
          ) : (
            <div className="thank-you">
              <p>✅ Thank you for contacting us! We will get back to you shortly.</p>
              <button 
                type="button" 
                onClick={() => setSubmitted(false)}
                className="btn-submit"
                style={{ marginTop: '20px' }}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
