import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function About() {
  return (
    <div className="w-[95%] py-24 md:py-32 px-4 md:px-12 mx-auto">
      {/* Main Container */}
      <div className="w-full min-h-[600px] flex flex-col items-center rounded-3xl bg-blue-500 text-white px-6 md:px-12 relative">
        
        {/* Heading and Description */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full md:w-[70%] text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cyberprob X</h1>
          <p className="text-lg md:text-2xl font-semibold">
            Security consultancy focusing on bringing the benefits of Penetration Testing
          </p>
        </div>    

        {/* Cards Section */}
        <div className="mt-60 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
  {/* Card 1 */}
  <Card className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
    <CardHeader className="flex items-center">
      <CardTitle className="text-2xl font-sans font-semibold">Detect</CardTitle>
    </CardHeader>
    <CardContent className="text-lg ml-8">
      We use expert-led tools to detect vulnerabilities, identifying risks in infrastructure, applications, and networks.
    </CardContent>
  </Card>

  {/* Card 2 */}
  <Card className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
    <CardHeader className="flex items-center">
      <CardTitle className="text-2xl font-sans font-semibold">Protect</CardTitle>
    </CardHeader>
    <CardContent className="text-lg ml-8">
      Protect your business with continuous scanning, dark-web monitoring, and 24/7 defense against Advanced Persistent Threats.
    </CardContent>
  </Card>

  {/* Card 3 */}
  <Card className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
    <CardHeader className="flex items-center">
      <CardTitle className="text-2xl font-sans font-semibold">Respond</CardTitle>
    </CardHeader>
    <CardContent className="text-lg ml-8">
      Ensure security with our responsive services. Let Pentest People craft an Incident Response plan to minimize cyberattack damage. Our five packages guarantee expert support during cyber incidents.
    </CardContent>
  </Card>
</div>

      </div>
    </div>
  )
}
