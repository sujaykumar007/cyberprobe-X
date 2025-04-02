import Link from "next/link";
import "../styles/colors.css";

export default function HeaderSection() {
  return (
    <header className="relative w-full min-h-screen overflow-hidden bg-[url('/fallback-image.jpg')] bg-cover bg-center">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/vedieo.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col text-white items-center justify-center bg-black bg-opacity-70 gap-y-12 z-10">
        <h1 className="text-white text-2xl md:text-6xl lg:text-7xl xl:text-8xl font-bold drop-shadow-lg text-center">
          <span className="text-primary-yellow">Defense</span> Starts with <span className="text-primary-yellow">Offense</span>
        </h1>
        <h2 className="leading-[1.75] text-xl md:text-2xl font-semibold text-gray-400 text-center px-4">
          "Our offensive security approach transforms reactive protection into proactive resilience, 
          safeguarding your most valuable digital assets."
        </h2>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl relative overflow-hidden group transition-colors duration-500 hover:text-black"
          >
            <span className="relative z-10">Book a Pentest</span>
            <span className="absolute inset-0 bg-[#b1d450] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
          </Link>

          <Link 
            href="/contact" 
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl relative overflow-hidden group transition-colors duration-500 hover:text-black"
          >
            <span className="relative z-10">Book a Free Consultation</span>
            <span className="absolute inset-0 bg-[#b1d450] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
          </Link> 
        </div>
      </div>
    </header>
  );
}
