import Link from "next/link";
import "../styles/colors.css";

export const Header = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/vedieo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col text-white items-center justify-center bg-black bg-opacity-70 gap-y-12">
        <h1 className="text-white text-5xl md:text-8xl font-bold drop-shadow-lg">
          <span className="text-primary-yellow">Defense</span> Starts with <span className="text-primary-yellow">Offense</span>
        </h1>
        <h1 className="leading-[1.75] text-xl md:text-2xl font-semibold text-gray-400">
         "Our offensive security approach transforms reactive protection into proactive resilience, <br />safeguarding your most valuable digital assets "
        </h1>
        <Link href="/contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl ml-4 relative overflow-hidden group transition-colors duration-500  hover:text-black `}>
                    <span className="relative z-10">Book a Pentest</span>
                    <span className="absolute inset-0 bg-[#b1d450] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
                </Link>
      </div>
    </header>
  );
};

