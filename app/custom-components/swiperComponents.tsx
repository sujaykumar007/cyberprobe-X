'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";

const SwiperComponent: React.FC = () => {

  const content = [
    {
      title: "Web Apllication Penetration Testing",
      description: "Penetration testing is a method of evaluating the security of computer systems, networks, and applications. It involves attempting to breach security controls to identify vulnerabilities and weaknesses that could be exploited by malicious hackers.",
    },
    {
      title: "Types of penetration testing",
      description: "There are several types of penetration testing, including:",
    },
    {
      title: "White-box testing",
      description: "White-box testing involves testing the internal workings of a system or application without access to its source code. It is typically performed by a skilled tester who has a deep understanding of the system's architecture and can identify vulnerabilities that may not be apparent from outside.",
    },
    {
      title: "Black-box testing",
      description: "Black-box testing, also known as gray-box testing, is a type of penetration testing that involves testing the internal workings of a system or application without access to its source code. It is typically performed by a skilled tester who has a deep understanding of the system's architecture and can identify vulnerabilities that may not be apparent from outside.",
    },
    {
      title: "Grey-box testing",
      description: "Grey-box testing, also known as black-box testing, is a type of penetration testing that involves testing the internal workings of a system or application without access to its source code. It is typically performed by a skilled tester who has a deep understanding of the system's architecture and can identify vulnerabilities that may not be apparent from outside.",
    },   
    {
      title: "Grey-box testing",
      description: "Grey-box testing, also known as black-box testing, is a type of penetration testing that involves testing the internal workings of a system or application without access to its source code. It is typically performed by a skilled tester who has a deep understanding of the system's architecture and can identify vulnerabilities that may not be apparent from outside.",
    },  
  ];


  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 text-white p-5 text-center container overflow-hidden">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-5xl">
        <h1 className="mb-2">What are the different types of <span className="text-primary-yellow">penetration testing</span>?</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-14 space-y-8 w-full px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl">
          <Swiper
            effect={"cards"}
            grabCursor={true}

            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[EffectCards,Autoplay]}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[400px] "

          >
           { content.map((item, index) => (
            <SwiperSlide className="flex items-center justify-center  bg-black border text-white text-xl font-bold p-4 rounded-lg" key={index}>
              <div className="flex flex-col items-center justify-center mt-5 ">
                <h2 className="text-2xl font-bold text-primary-yellow ">{item.title}</h2>
                <p className="text-md text-white m-10 pb-10">{item.description}</p>
              </div>          
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
