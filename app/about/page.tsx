import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const services = [
    {
      title: "Penetration Testing Services",
      desc: "Assess and measure your cyber security through Penetration Testing to allow you to manage the identified issues",
    },
    {
      title: "Penetration Testing Services",
      desc: "Assess and measure your cyber security through Penetration Testing to allow you to manage the identified issues",
    },
    {
      title: "Penetration Testing Services",
      desc: "Assess and measure your cyber security through Penetration Testing to allow you to manage the identified issues",
    },
    {
      title: "Penetration Testing Services",
      desc: "Assess and measure your cyber security through Penetration Testing to allow you to manage the identified issues",
    },
    {
      title: "Penetration Testing Services",
      desc: "Assess and measure your cyber security through Penetration Testing to allow you to manage the identified issues",
    },
    {
      title: "Penetration Testing Services",
      desc: "Assess and measure your cyber security through Penetration Testing to allow you to manage the identified issues",
    },
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
          {["Detect", "Protect", "Respond"].map((title, index) => (
            <Card key={index} className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
              <CardHeader className="flex items-center">
                <CardTitle className="text-2xl font-sans font-semibold">{title}</CardTitle>
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

      {/* Services Section */}
      <div className="py-20 mt-10 px-4 md:px-12 rounded-3xl bg-[radial-gradient(hsl(200,70%,73%,60%),hsl(227,100%,80%,40%),hsl(var(--background))_60%)]">
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-12 text-black">Our Services</h2>

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
      </div>
    </div>
  );
}
