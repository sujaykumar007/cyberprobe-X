import * as React from "react"
import "../styles/colors.css"
import { ServiceCard } from "../custom-components/ServiceCard"
import ServiceHero from "../custom-components/ServiceHero"

export default function Services() {
  return (
    <div className="w-full bg-black overflow-hidden flex flex-col">
      
      {/* Title Section */}
      <div className="w-full min-h-[70vh] flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 mt-40">
        <ServiceHero />
      </div>  

      {/* Services Heading */}
      <div className="flex items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold py-6 sm:py-10 text-white">
          Cyber Resilience Services
        </h1>
      </div>

      {/* Service Cards Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-12">
        <ServiceCard />
      </div>

    </div>
  )
}
