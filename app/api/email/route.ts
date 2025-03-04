import { NextResponse } from 'next/server'
import emailjs from '@emailjs/nodejs'

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, companyName,  phone, message } = await req.json()

    if (!firstName || !lastName || !email || !companyName  || !phone ) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 })
    }


    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY || !process.env.EMAILJS_PRIVATE_KEY) {
      return NextResponse.json({ success: false, message: 'Email.js credentials are not set.' }, { status: 500 })
    }

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        to_name: 'Support Team',
        from_first_name: firstName,
        from_last_name: lastName,
        from_email: email,
        company_name: companyName,
        phone: phone,
        message: message
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    )

    return NextResponse.json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 })
  }
}