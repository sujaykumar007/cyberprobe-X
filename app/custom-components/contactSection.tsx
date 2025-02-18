

import { LoginForm } from "@/components/login-form"

export default function ConatctUs() {
  return (
    <div className="flex flex-col justify-center pt-36 md:pt-0 gap-14 md:grid min-h-svh lg:grid-cols-2">
        <div className="flex felx-col justify-center items-center">

         <div className="relative  bg-black lg:block">
       <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color:"var(--primary-yellow)"}}>Get in Touch</h1>
               <p className="text-2xl md:text-4xl font-semibold max-w-3xl ml-16 text-white">
                 With Out Team
               </p>
      </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
         
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
