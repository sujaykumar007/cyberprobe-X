
import * as React from "react";
import '../styles/colors.css'
import { ServiceCard } from "../custom-components/ServiceCard";
import Testimonials from "../custom-components/servicesUsedBy";


export default function Services() {
  return (
    <div className="w-full py-24 md:py-32 px-4 md:px-12 mx-auto bg-black">
      {/* Title Section - Fixed Positioning */}
      <div
  className="w-full min-h-[600px] flex flex-col items-center justify-around rounded-3xl text-white px-6 md:px-12 relative text-center"
  style={{ backgroundColor: "var(--primary-blue)" }}
>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 sm:mt-5" style={{color:"var(--primary-yellow)"}}>Our Services</h1>
        <div>
        <ServiceCard />
        </div>
     </div>
    </div>
  );
}
