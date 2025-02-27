'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";

const SwiperComponent: React.FC = () => {

  const content = [
    {
      id: 1,
      name: "Cyber Insurance Advisory & Consultancy",
      description: "Gap analysis against regional frameworks (SAMA, NESA, PDPL, CBB, etc.)",
      description1: "Compliance roadmap development and implementation guidance"
    },
    {
      id: 2,
      name: "vCISO",
      description: "Strategic security roadmap development and implementation oversight",
      description1: "Security governance framework design and continuous security posture improvement"
    },
    {
      id: 3,
      name: "vDPO",
      description: "Strategic security roadmap development and implementation oversight",
      description1: "Security governance framework design and continuous security posture improvement"
    },
    {
      id: 4,
      name: "Regulatory Compliance",
      description: "Gap analysis against regional frameworks (SAMA, NESA, PDPL, CBB, etc.)",
      description1: "Compliance roadmap development and implementation guidance"
    },
    {
      id: 5,
      name: "Regulatory Assessment",
      description: "Incident response and advanced threat hunting",
      description1: "Evidence collection and chain of custody management"
    },
    {
      id: 6,
      name: "ISO 27001 Certification",
      description: "ISMS framework development and implementation",
      description1: "Pre-certification readiness assessment and audit support"
    },
    {
      id: 7,
      name: "Penetration Testing",
      description: "Security control implementation guidance",
      description1: "Mitigation strategy development and execution support"
    },
    {
      id: 8,
      name: "PCI DSS Compliance",
      description: "Gap assessment against latest PCI DSS requirements",
      description1: "Remediation planning and certification preparation"
    },
    {
      id: 9,
      name: "Web Application Penetration Testing",
      description: "Identifying and fixing security vulnerabilities in web applications"
    },
    {
      id: 10,
      name: "Cloud Penetration Testing",
      description: "Assessing cloud environments for misconfigurations and security risks."
    },
    {
      id: 11,
      name: "API Penetration Testing",
      description: "Securing APIs by identifying vulnerabilities that could lead to data breaches."
    },
    {
      id: 12,
      name: "Network Penetration Testing",
      description: "Evaluating network infrastructure to detect and mitigate security flaws"
    },
    {
      id: 13,
      name: "Mobile Application Penetration Testing",
      description: "Testing mobile applications for vulnerabilities in storage, communication, and authentication"
    },
    {
      id: 14,
      name: "IoT Penetration Testing",
      description: "Uncovering security weaknesses in IoT devices and their ecosystem"
    }
  ]


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

            autoplay={{ delay: 1000, disableOnInteraction: false }}
            modules={[EffectCards,Autoplay]}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[300px]"

          >
           { content.map((item, index) => (
            <SwiperSlide className="flex items-center justify-center  bg-black border text-white text-xl font-bold md:p-8 rounded-lg" key={index}>
              <div className="flex flex-col items-center justify-center my-5 md:my-10">
                <h2 className="text-2xl font-bold text-primary-yellow ">{item.name}</h2>
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
