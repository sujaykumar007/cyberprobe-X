"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";
import {motion} from "framer-motion"

export default function About() {
  const services = [
    { id: 1, title: "VISION", desc: "To be recognized as the preeminent cybersecurity partner of choice, empowering organizations across global markets with comprehensive security intelligence, elite penetration testing expertise, and innovative defensive strategies that transform vulnerability into resilience in an ever-evolving threat landscape." },
    { id: 2, title: "MISSION", desc: "CyberProbeX is committed to fortifying organizational security postures through advanced penetration testing methodologies, strategic risk intelligence, and comprehensive compliance frameworks. We empower enterprises to navigate the evolving threat landscape with confidence by delivering actionable security insights, adaptive defense mechanisms, and sustainable resilience strategies that transform security from a barrier into a business enabler" }
  ];

  const WhyUs = [
    { title: "Continuous Penetration Testing", desc: "CyberProbeX employs a proven methodology combining automated scanning with expert manual testing." },
    { title: "Actionable Insights", desc: "Benefit from comprehensive reporting, actionable remediation advice, and continuous support, tailored to strengthen your security posture against evolving threats." },
    { title: "Competitive Pen Test Prices", desc: "Our prices are highly competitive without sacrificing quality, keeping you protected." },
    { title: "Certified Security Experts", desc: "Our Pen test teams are qualified by industry-recognized certification bodies, including CREST." }
  ];

  return (
    <div className="  w-full py-24 md:py-36 px-4 md:px-12 bg-black">
      <motion.div 
        initial={{ opacity: 0 ,x:-100}}
        animate={{ opacity: 1 ,x:0}}
        transition={{ duration: 0.5, delay: 0.5 }} 
        className="w-full  flex flex-col items-center rounded-3xl bg-black text-white px-6 md:px-12 relative"
      >
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full md:w-[80%] text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary-yellow">CyberProbeX</h1>
          <p className="text-sm md:text-lg font-light">
            CyberProbeX is a premier cybersecurity consultancy delivering advanced security solutions across UAE, 
            Saudi Arabia, UK, and India. We operate on the fundamental principle that proactive offense creates 
            the strongest defense—systematically identifying and neutralizing threats before they can be exploited.
          </p>
        </div>

        {/* Magic UI Number Ticker - Vulnerabilities Found */}
        <div className="mt-64 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Vulnerabilities Identified</h2>
          <NumberTicker value={35} className="text-5xl md:text-7xl font-bold text-primary-yellow" />
        </div>

        <div className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 mb-16">
          {["Detect", "Protect", "Respond"].map((title, index) => (
            <Card key={index} className="bg-black text-white shadow-lg transition-transform duration-300 hover:-translate-y-3">
              <CardHeader className="flex items-center">
                <CardTitle className="text-xl md:text-2xl font-semibold text-primary-yellow">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-lg">
                {title === "Detect" && "We use expert-led tools to detect vulnerabilities, identifying risks in infrastructure, applications, and networks."}
                {title === "Protect" && "Protect your business with continuous scanning, dark-web monitoring, and 24/7 defense against Advanced Persistent Threats."}
                {title === "Respond" && "Ensure security with our responsive services. Let Pentest People craft an Incident Response plan to minimize cyberattack damage."}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Vision & Mission Section */}
     {/* Vision & Mission Section */}
{services.map((service, index) => (
  <div
    key={index}
    className={`flex flex-col xl:flex-row justify-around items-center md:gap-y-10 mx-auto w-full md:w-full px-4 md:px-12 py-10 md:py-6 space-y-6 md:space-y-0 ${index === 0 ? 'mt-10 md:mt-24' : ''}`}
  >
    <span
      className={`text-primary-yellow text-5xl lg:text-6xl xl:text-8xl font-bold ${index % 2 === 0 ? 'xl:order-1' : 'xl:order-2'}`}
    >
      {service.title}
    </span>
    <Card
      className={`relative py-8 overflow-hidden bg-black border-opacity-35 border-gray-700 w-full max-w-xl ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
    >
      <CardHeader>
        <CardDescription className="text-gray-300 text-sm md:text-lg">{service.desc}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <BorderBeam duration={8} size={100} />
    </Card>
  </div>
))}

      {/* Why Us Section
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-36 w-full gap-x-8 md:w-[80%] mx-auto">
        <div className="text-center md:text-left w-full md:w-[40%] mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white flex gap-x-4">Why <span className="text-primary-yellow">CyberProbeX</span></h1>
        </div>
        
        <div className="w-full max-w-full md:max-w-[60%] flex justify-center">
          <Carousel className="w-full">
            <CarouselContent className="flex">
              {WhyUs.map((service, index) => (
                <CarouselItem key={index} className="min-w-full sm:min-w-[70%] md:min-w-[50%] lg:min-w-[33.33%]">
                  <Card className="bg-black text-white shadow-lg p-4 sm:p-6 m-3">
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl text-primary-yellow font-semibold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm px-2 sm:px-4 pb-2 sm:pb-4">{service.desc}</CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div> */}

      {/* Clients Section */}
      {/* <div className="text-center mt-14 px-4">
        <h1 className="font-bold text-3xl md:text-5xl text-white mb-10">Our Clients</h1>
        <MarqueeDemo />
      </div> */}
    </div>
  );
}
