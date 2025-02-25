import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MarqueeDemo} from "../custom-components/clients";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function About() {
  const services = [
    {
      id: 1,
      title: "VISION",
      desc: "To be the top cybersecurity partner by providing businesses with through security solutions, expert-led penetration testing, and proactive defensive tactics that help them fend off changing online threats.",
    },
    {
      id: 2,
      title: "MISSION",
      desc: "By providing professional penetration testing, risk assessments, and compliance assistance, CyberProbeX is dedicated to enhancing cybersecurity.  We guarantee that enterprises remain resilient against changing threats by offering ongoing protection and actionable information.",
    },
    
  ];

  const WhyUs = [
    {
      title: "Continuous Penetration Testing",
      desc: "CyberProbeX employs a proven methodology combining automated scanning with expert manual testing. ",
    },
    {
      title: "Actionable Insights",
      desc: "Benefit from comprehensive reporting, actionable remediation advice, and continuous support, tailored to strengthen your security posture against evolving threats.",
    },
    {
      title: "Competitive Pen Test Prices",
      desc: "Our prices are highly competitive without sacrificing quality, keeping you protected",
    },
    {
      title: "Certified Security Experts",
      desc: "Our Pen test teams are qualified by industry recognized certification bodies, including CREST",
    }
  ];

 

  return (
    <div className="w-[100%] py-24 md:py-32  md:px-12  bg-black">
      {/* Main Container */}
      <div className="w-full min-h-[600px] flex flex-col items-center rounded-3xl bg-black text-white px-6 md:px-12 relative">
        
        {/* Heading and Description */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full md:w-[70%] text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-yellow">Cyberprob X</h1>
          <p className="text-lg md:text-2xl font-semibold container px-4">
          Don't just assess risks—take control with CyberProbeX. From pen testing to compliance, we help secure your organization against evolving threats.
          </p>
        </div>    

        {/* Cards Section */}
        <div className="mt-60 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10 md:px-12 md:pb-0">
          {["Detect", "Protect", "Respond"].map((title, index) => (
            <Card key={index} className="bg-black text-white shadow-lg transition-transform duration-300 hover:-translate-y-3">
              <CardHeader className="flex items-center">
                <CardTitle className="text-2xl font-sans font-semibold text-primary-yellow">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-lg ml-8">
                {title === "Detect" && "We use expert-led tools to detect vulnerabilities, identifying risks in infrastructure, applications, and networks."}
                {title === "Protect" && "Protect your business with continuous scanning, dark-web monitoring, and 24/7 defense against Advanced Persistent Threats."}
                {title === "Respond" && "Ensure security with our responsive services. Let Pentest People craft an Incident Response plan to minimize cyberattack damage."}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

<div className="flex  items-center justify-center py-5">

      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-yellow">VISION & MISSION</h1>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center  w-full px-4 overflow-hidden  pb-16 ">



          {services.map((service, index) => (
            
             <div
             key={service.id}
             className={`w-full max-w-[300px] md:max-w-[550px] container mx-auto flex items-center md:${service.id % 2 === 0 ? "justify-start self-start" : "justify-end self-end"} justify-center`}
           >
            <Card key={index} className="bg-black text-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary-yellow">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-md  px-6 pb-6">
                {service.desc}
              </CardContent>
            </Card>
            </div>
          ))}

      </div>  



  {/* Why Us Section */}
<div className="px-4 md:ml-10 md:px-12 py-16 w-80% sm:max-[20%] md:max-[10%]  flex flex-col md:flex-row items-center justify-center overflow-hidden m-4 ">
  
  {/* Text Section */}
  <div className="text-center md:text-left w-full md:w-[40%] mb-10 md:mb-0">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
      Why Choose
    </h1>
    <h1 className="text-primary-yellow text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-3 sm:mt-4 ">
      CyberProbeX
    </h1>
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mt-3 sm:mt-4">
      Pen Testing
    </h1>
  </div>

  {/* Carousel Section */}
  <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] flex justify-center ">
    <Carousel className="w-full">
      <CarouselContent className="flex">
        {WhyUs.map((service, index) => (
          <CarouselItem 
            key={index} 
            className="min-w-full sm:min-w-[70%] md:min-w-[50%] lg:min-w-[33.33%]"
          >
            <Card className="bg-black text-white shadow-lg p-5 sm:p-6 m-5">
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

      {/* Services Section */}
      {/* <div className=" mt-10 px-4 md:px-12 rounded-3xl ">
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-12 text-primary-yellow"> Major Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white text-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-md  px-6 pb-6">
                {service.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
    <div className="text-center mt-14">
      <h1 className="font-bold text-5xl text-white mb-10">Our Clients</h1>
 <MarqueeDemo />
    </div>
    </div>
  );
}
