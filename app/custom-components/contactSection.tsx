
"use client"

import { LoginForm } from "@/components/login-form"
import Image from "next/image"
import "../styles/colors.css"

export default function ContactUs() {
  return (
    <div className="relative w-full min-h-screen md:py-10 px-4 md:px-12 mx-auto bg-black bg-cover bg-center bg-no-repeat">
      <Image src="/lock.jpg" alt="contact"  className="w-full h-full opacity-20 rounded-2xl mt-10 object-cover absolute inset-0 "   width={1200} height={screen.height}
      />
      
      <div className="relative flex flex-col justify-center items-center gap-14 min-h-screen px-4 md:px-0">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-yellow">Get in Touch</h1>
          <p className="text-xl md:text-3xl font-semibold text-white">With Our Team</p>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-lg  md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-2xl">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
