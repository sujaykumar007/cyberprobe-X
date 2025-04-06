import Image from "next/image";
import fingerprint from "../assets/Blueiamge.png"
import Link from "next/link";

export default function DigitalForensics() {
  return (
    <div className="relative w-full h-[50vh] flex items-center justify-center">
    
      <Image 
        src={fingerprint} 
        alt="contact"  
        className="w-full h-full opacity-20 rounded-2xl object-cover" 
        width={500} 
        height={800}
      />

      {/* Centered Text */}
      <div className="absolute top-1/3 transform -translate-y-1/2 text-center 
                text-2xl md:text-4xl lg:text-5xl xl:text-6xl 
                drop-shadow-lg font-extrabold z-10 animate-color-change">
      
        Digital Forensics
      </div>

      {/* Buttons Container */}
      <div className="absolute bottom-0 mb-[-20px] text-white">
        <Link 
          href="/contact" 
          className="lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl relative overflow-hidden group transition-colors duration-500 lg:hover:text-black"
        >
          <span className="relative z-10">Contact Us</span>
          <span className="absolute inset-0 bg-none lg:bg-[#b1d450]  scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
}
