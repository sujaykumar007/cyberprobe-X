import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    // Parse request body
    const details = await req.json()

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host :"smtp.hostinger.com",
        port:465,
        secure:true,
        auth: {
            user: 'info@hacfy.com', 
            pass: 'QAZmlp1@*?)0'   
        }
      });

    // Email content
    const mailOptions = {
    to: details.email, // Send to the provided email
      from: 'info@hacfy.com',
      subject: "",
      text: `Hello ${details.name},\n\nYour details have been received.\n\nDetails: ${JSON.stringify(details, null, 2)}`,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      message: "User  email sent successfully",
      valid: true,
    })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { message: "Failed to send email", valid: false },
      { status: 500 }
    )
  }
}
