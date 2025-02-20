
import * as React from "react";
import '../styles/colors.css'
import { ServiceCard } from "../custom-components/ServiceCard";
import Testimonials from "../custom-components/servicesUsedBy";


export default function Services() {
  return (
    <div className="w-full py-24 md:py-32 px-4 md:px-12 mx-auto bg-black">
      {/* Title Section - Fixed Positioning */}
      <div
  className="w-full min-h-[600px] flex flex-col items-center justify-center rounded-3xl text-white px-6 md:px-12 relative text-center"
  style={{ backgroundColor: "var(--primary-blue)" }}
>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 sm:mt-5" style={{color:"var(--primary-yellow)"}}>Our Services</h1>
        <p className="text-lg md:text-2xl font-semibold max-w-3xl">
          Security consultancy focusing on bringing the benefits of Penetration Testing
        </p>
        <div className="max-w-7xl mx-auto mt-10 md:mt-20 lg:mt-32 px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          <ServiceCard
            title="Security Testing" 
            description="Ensuring system security by identifying vulnerabilities." 
            drawerTitles={[
              "Web Application Penetration Testing",
              "Mobile Application Security",
              "Cloud Security Assessment",
              "Security Testing",
              "Cloud Security Assessment",
              "Security Testing",
              "Security Testing",
              "Cloud Security Assessment",
              "Security Testing",
            ]}
          />
          <ServiceCard 
            title="Performance Testing" 
            description="Measuring system performance under various conditions." 
            drawerTitles={[
              "Load Testing",
              "Stress Testing",
              "Scalability Testing"
            ]}
          />
          <ServiceCard 
            title="Usability Testing" 
            description="Improving user experience through usability studies." 
            drawerTitles={[
              "User Interface Testing",
              "Accessibility Testing",
              "User Experience Research"
            ]}
          />
          <ServiceCard 
            title="API Testing" 
            description="Testing the reliability and functionality of APIs." 
            drawerTitles={[
              "API Integration Testing",
              "Functional API Testing",
              "Security API Testing"
            ]}
          />
        </div>
        
      </div>

     </div>

      <Testimonials />

    </div>
  );
}
