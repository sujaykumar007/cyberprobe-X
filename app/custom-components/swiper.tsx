


"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Sample card data (Replace with real data)
const cardData = [
  {
    image: "/images/astro.jpg",
    title: "Astronomy Wonders",
    description: "Discover the mysteries of the universe and beyond.",
  },
  {
    image: "/images/tech.jpg",
    title: "Future of Technology",
    description: "How AI and automation are shaping the world.",
  },
  {
    image: "/images/nature.jpg",
    title: "Beauty of Nature",
    description: "Explore breathtaking landscapes and wildlife.",
  },
  {
    image: "/images/space.jpg",
    title: "Space Exploration",
    description: "Latest advancements in interstellar travel.",
  },
  {
    image: "/images/health.jpg",
    title: "Mental Health Awareness",
    description: "Learn how to maintain a healthy mind and body.",
  },
];

const SwiperComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden bg-black">
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
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
        <SwiperSlide key={index} className="w-full border-2 border-white shadow-xl rounded-lg">
          <div className="bg-black rounded-xl border-2 border-white shadow-lg p-5 text-center flex flex-col items-center text-white">
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full h-[200px] object-cover"
            />
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="text-sm text-white mt-2">{card.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  );
};

export default SwiperComponent;
