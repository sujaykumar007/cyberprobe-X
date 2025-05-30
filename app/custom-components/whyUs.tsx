import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function About() {
  const WhyUs = [
    {
      title: "Continuous Penetration Testing",
      desc: "CyberProbeX employs a proven methodology combining automated scanning with expert manual testing.",
    },
    {
      title: "Actionable Insights",
      desc: "Benefit from comprehensive reporting, actionable remediation advice, and continuous support, tailored to strengthen your security posture against evolving threats.",
    },
    {
      title: "Competitive Pen Test Prices",
      desc: "Our prices are highly competitive without sacrificing quality, keeping you protected.",
    },
    {
      title: "Certified Security Experts",
      desc: "Our Pen test teams are qualified by industry-recognized certification bodies, including CREST.",
    },
  ];

  return (
   
    <div className="flex flex-col lg:flex-row items-center lg:justify-around xl:justify-between  px-4 md:py-12 text-center container md:[w-60%] sm:[w-80%]">
    
      {/* Text Section */}
      <div className="text-center  w-full md:w-[30%]  mb-10 md:mb-0 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
        <h1 className="flex justify-center gap-x-4 font-extrabold leading-tight text-white ">
          Why <span className=" font-extrabold   text-primary-yellow">CyberProbeX </span>
        </h1>   
      </div>

      {/* Carousel Section */}
      <div className="w-full max-w-[90%] sm:max-w-[40%] md:max-w-[60%] lg:max-w-[50%] ">
        <Carousel className="container ">
          <CarouselContent className="flex">
            {WhyUs.map((service, index) => (
              <CarouselItem 
                key={index} 
                className="min-w-[50%] sm:min-w-[30%] md:min-w-[40%] lg:min-w-[33.33%]"
              >
                <Card className="bg-black text-white shadow-lg p-5 sm:p-6 m-3">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl text-primary-yellow font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-md px-3 sm:px-6 pb-4 sm:pb-6">
                    {service.desc}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

    </div>
   
  );
}
