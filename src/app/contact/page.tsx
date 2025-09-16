'use client'

import React, { useState } from 'react'
import Seo from '../../components/Seo'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'

const Contact = () => {
  const pageUrl = '/contact'

  return (
    <>
      <Seo
        title="Contact Vertex Global – Get in Touch"
        description="Contact Vertex Global today. Reach us via email, phone, or our online form for outsourcing and BPO solutions."
        url={pageUrl}
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.vertex-globals.com/' },
          { name: 'Contact', url: 'https://www.vertex-globals.com/contact' },
        ]}
      />
      {/* Contact page Banner start */}
      <ContactBanner />
      {/* Contact page Banner end */}
      <ContactForm />
    </>
  )
}

export default Contact
