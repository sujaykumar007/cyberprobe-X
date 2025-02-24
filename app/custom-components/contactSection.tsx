"use client"

import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function ConatctUs() {




  return (

    <div className="realtive w-full  md:py-10 px-4 md:px-12 mx-auto bg-black  bg-cover bg-center bg-no-repeat">
      <Image src="/lock.jpg" alt="contact" className="w-full h-full opacity-20 rounded-2xl mt-10 " width={1200} height={screen.height} />
    <div className=" absolute inset-0 flex flex-col justify-center pt-36 md:pt-0 gap-14  min-h-svh ">
        <div className="flex felx-col justify-center items-center">

         <div className="relative  lg:block">
       <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-yellow" >Get in Touch</h1>
               <p className="text-2xl md:text-4xl font-semibold max-w-3xl ml-16 text-white">
                 With Out Team
               </p>
      </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
      
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-[40%]  rounded-2xl">
            <LoginForm  />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
