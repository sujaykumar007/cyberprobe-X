

import * as React from "react"
import { ServiceCard } from "@/components/ui/ServiceCard"

export default function Home() {
  return (
    <div className="w-full py-16 md:py-32 px-4 md:px-12 mx-auto">
      <div className="w-full min-h-[600px] flex flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-800 px-6 md:px-12 relative">
        
        <div className="text-white text-4xl md:text-6xl font-extrabold text-center mb-6">
          Services
        </div>
        <div className="text-white text-lg md:text-xl font-normal text-center mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ad.
        </div>
        <div className="text-white text-lg md:text-xl font-normal text-center mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ad.
        </div>
        
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mb-10">
          <ServiceCard 
            title="Security Testing" 
            description="Ensuring system security by identifying vulnerabilities." 
            drawerTitle="Web Application Penetration Testing" 
          />
          <ServiceCard 
            title="Performance Testing" 
            description="Measuring system performance under various conditions." 
            drawerTitle="Load Testing" 
          />
          <ServiceCard 
            title="Usability Testing" 
            description="Improving user experience through usability studies." 
            drawerTitle="User Interface Testing" 
          />
          <ServiceCard 
            title="API Testing" 
            description="Testing the reliability and functionality of APIs." 
            drawerTitle="API Integration Testing" 
          />
        </div>
      </div>
    </div>
  )
}
