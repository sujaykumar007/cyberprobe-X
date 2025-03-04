'use client'

import Image from 'next/image'
import '../styles/colors.css'
import ContactForm from './ContactForm'

export default function ContactUs() {
  return (
    <div className="relative w-full min-h-screen px-4 md:px-12 mx-auto bg-black bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/lock.jpg" 
          alt="contact"  
          className="w-full h-full opacity-20 rounded-2xl object-cover" 
          width={1200} 
          height={900}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full md:w-[80%] flex flex-col  items-center py-32">
        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-yellow">Get in Touch</h1>
          <p className="text-lg md:text-3xl text-white">With Our Team</p>
        </div>

        {/* Contact Form */}
        <div className="w-full   bg-opacity-90 p-6 md:p-8 rounded-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
