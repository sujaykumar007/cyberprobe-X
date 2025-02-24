
import * as React from "react";
import '../styles/colors.css'

import Testimonials from "../custom-components/servicesUsedBy";


export default function Services() {
  return (
    <div className="w-full py-24 md:py-32 px-4 md:px-12 mx-auto bg-black">
      {/* Title Section - Fixed Positioning */}
   
      <Testimonials />

    </div>
  );
}
