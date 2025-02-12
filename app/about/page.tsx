import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselItem, CarouselContent, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function About() {
  const services = [
    {
      title: "Penetration Testing",
      desc: [
        "Identify security vulnerabilities in your web and mobile applications.",
        "Simulated cyber-attacks to evaluate security strength.",
        "Detailed risk assessment and mitigation strategies."
      ]
    },
    {
      title: "Vulnerability Assessment",
      desc: [
        "Comprehensive scanning to identify potential security risks.",
        "Regular security audits and compliance checks.",
        "Automated and manual analysis of system weaknesses."
      ]
    },
    {
      title: "Security Compliance",
      desc: [
        "Ensure adherence to industry-standard security regulations.",
        "Guidance on GDPR, HIPAA, and ISO compliance.",
        "Regular reports and updates for security governance."
      ]
    },
    {
      title: "Security Compliance",
      desc: [
        "Ensure adherence to industry-standard security regulations.",
        "Guidance on GDPR, HIPAA, and ISO compliance.",
        "Regular reports and updates for security governance."
      ]
    }
  ];

  return (
    <div className="w-[95%] py-24 md:py-32 px-4 md:px-12 mx-auto">
      {/* Main Container */}
      <div className="w-full min-h-[600px] flex flex-col items-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-800 text-white px-6 md:px-12 relative">
        
        {/* Heading and Description */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full md:w-[70%] text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cyberprob X</h1>
          <p className="text-lg md:text-2xl font-semibold">
            Security consultancy focusing on bringing the benefits of Penetration Testing
          </p>
        </div>    

        {/* Cards Section */}
        <div className="mt-60 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10 md:px-12 md:pb-0">
          <Card className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <CardHeader className="flex items-center">
              <CardTitle className="text-2xl font-sans font-semibold">Detect</CardTitle>
            </CardHeader>
            <CardContent className="text-lg ml-8">
              We use expert-led tools to detect vulnerabilities, identifying risks in infrastructure, applications, and networks.
            </CardContent>
          </Card>

          <Card className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <CardHeader className="flex items-center">
              <CardTitle className="text-2xl font-sans font-semibold">Protect</CardTitle>
            </CardHeader>
            <CardContent className="text-lg ml-8">
              Protect your business with continuous scanning, dark-web monitoring, and 24/7 defense against Advanced Persistent Threats.
            </CardContent>
          </Card>

          <Card className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <CardHeader className="flex items-center">
              <CardTitle className="text-2xl font-sans font-semibold">Respond</CardTitle>
            </CardHeader>
            <CardContent className="text-lg ml-8">
              Ensure security with our responsive services. Let Pentest People craft an Incident Response plan to minimize cyberattack damage.
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20  mt-10 px-4 md:px-12  rounded-3xl bg-[radial-gradient(hsl(200,70%,73%,60%),hsl(227,100%,80%,40%),hsl(var(--background))_60%)]">
        
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-12 text-black ">Our Services</h2>
     
        <Carousel className="max-w-4xl mx-auto ">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="px-4 md:px-6">
                <Card className="bg-white text-black shadow-lg ">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-md px-6 pb-6">
                    <ul className="list-disc pl-4">
                      {service.desc.map((point, idx) => (
                        <li key={idx} className="mb-2">{point}</li>
                      ))}
                    </ul>
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
