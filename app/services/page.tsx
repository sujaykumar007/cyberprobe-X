import * as React from "react"
import "../styles/colors.css"
import { ServiceCard } from "../custom-components/ServiceCard"
import ServiceHero from "../custom-components/ServiceHero"

export default function Services() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 mx-auto bg-black overflow-hidden flex-col">
      {/* Title Section */}
      <div
        className="w-full pt-44  pb-10 flex flex-col items-center  justify-evenly px-4 md:px-12 rounded-3xl text-white"
        style={{ backgroundColor: "var(--primary-blue)" }}
      >
        
        <div className="w-full max-w-[95%] sm:max-w-3xl md:max-w-6xl px-4 sm:px-6">
          <ServiceHero />
        </div>  
      </div>

      {/* Services Heading */}
      <div className="flex items-center justify-center text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold py-10 text-white">
          Cyber Resilience Services
        </h1>
      </div>

      {/* Service Cards Section */}
      <div>
        <ServiceCard />
      </div>
    </div>
  )
}
