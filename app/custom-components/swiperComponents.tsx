'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const SwiperComponent: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 text-white p-5 text-center container overflow-hidden">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-5xl">
        <h1 className="mb-2">Find and fix every single</h1>
        <h1 className="text-[var(--primary-yellow)]">Vulnerability in your web app</h1>
        <h1>
          with <span className="text-[var(--primary-yellow)]">Cyberprobe-X</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-14 space-y-8 w-full px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-80"
          >
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-xl font-bold p-4 rounded-lg">
              Content 1
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-xl font-bold p-4 rounded-lg">
              Content 2
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-xl font-bold p-4 rounded-lg">
              Content 3
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-xl font-bold p-4 rounded-lg">
              Content 4
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-xl font-bold p-4 rounded-lg">
              Content 5
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
