

import * as React from "react";
import { ServiceCard } from "@/components/ui/ServiceCard";

export default function Home() {
  return (
    <div className="w-full py-16 md:py-32 px-4 md:px-12 mx-auto">
      <div className="w-full min-h-[600px] flex flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-800 px-6 md:px-12 relative">
        
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our Services</h1>
      <p className="text-lg md:text-2xl font-semibold text-white mb-6">
            Security consultancy focusing on bringing the benefits of Penetration Testing
          </p>
     
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mb-10">
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
  );
}
