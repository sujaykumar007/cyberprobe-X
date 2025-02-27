


"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import { assets } from "../assets/assets";

// Sample card data (Replace with real data)
const cardData = [
  {
    image:assets.card1,
    title: "PCI DSS Compliance",
    description: "Secure payment transactions and meet compliance requirements.",
  },
  {
    image:assets.card2,
    title: "Regulatory Compliance",
    description: " Ensure adherence to industry regulations and cybersecurity frameworks.",
  },
  {
    image:assets.card3,
    title: "VCISO",
    description: " On-demand cybersecurity leadership to strengthen your security strategy.",
  },
  {
    image:assets.card4,
    title: "ISO27001 Certification",
    description: " Achieve global information security standards with expert guidance..",
  },
  {
    image:assets.card5,
    title: "Risk Assessment",
    description: " Identify, analyze, and mitigate cybersecurity risks to protect your business..",
  },
  {
    image:assets.card6,
    title: "IT Security Audit",
    description: " In-depth assessment to identify vulnerabilities and enhance security posture.",
  }
];

const SwiperComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden bg-black ">
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      spaceBetween={20}
      slidesPerView={1} // Default for mobile
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 15 }, // Small screens
        768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
        1024: { slidesPerView: 3, spaceBetween: 25 }, // Laptops
        1280: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="w-full max-w-[90vw] lg:max-w-[60vw] py-10"
    >
      {cardData.map((card, index) => (
        <SwiperSlide key={index} className="w-full border-2 border-white shadow-xl rounded-lg ">
          <div className="bg-black rounded-xl  shadow-lg p-5 text-center flex flex-col items-center text-white gap-4">
          <h3 className="text-lg font-semibold text-primary-yellow ">{card.title}</h3>
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full h-[200px] object-cover"
            />
         
            <p className="text-sm text-white mt-2">{card.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  );
};

export default SwiperComponent;
