import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Define the request body interface
interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS?.replace(/\s/g, ''), // Remove spaces from app password
    },
  })
}

// POST handler for contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing email environment variables')
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Create email transporter
    const transporter = createTransporter()

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Contact Details:</h3>
            
            <p style="margin: 10px 0;">
              <strong style="color: #007bff;">Name:</strong> 
              <span style="color: #333;">${body.name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #007bff;">Email:</strong> 
              <span style="color: #333;">${body.email}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #007bff;">Phone:</strong> 
              <span style="color: #333;">${body.phone}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #007bff;">Message:</strong>
            </p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              <p style="margin: 0; color: #333; white-space: pre-wrap;">${body.message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
            <p>This message was sent from your website contact form.</p>
            <p>Reply directly to this email to respond to ${body.name}.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone}
        
        Message:
        ${body.message}
        
        ---
        This message was sent from your website contact form.
        Reply directly to this email to respond to ${body.name}.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Mail sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    // Log error for debugging
    console.error('Error sending email:', error)
    
    // Return error response
    return NextResponse.json(
      { success: false, message: 'Failed to send mail' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  )
}
