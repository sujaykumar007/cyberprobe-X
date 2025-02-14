
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { assets } from "../assets/assets";
import "../styles/colors.css"
export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white px-4 py-12 text-center space-y-8">
      
     
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-5xl">
        <h1 className="mb-2">Find and fix every single</h1>
        <h1 style={{color:'var(--primary-yellow)'}}>Vulnerability in your web app</h1>
        <h1>with <span style={{color:'var(--primary-yellow)'}}>Cyberprobe-X</span></h1>
      </div>

      <button className="px-6 py-3 rounded-full drop-shadow-lg flex items-center text-black text-lg sm:text-xl font-semibold transition duration-300 hover:scale-105 hover:bg-[var(--primary-hover)]"
  style={{ backgroundColor: "var(--primary-yellow)" }}>
  <span>Lets Secure Your Web App</span>
  <FiArrowRight className="text-2xl ml-2" />
</button>



      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg sm:text-xl md:text-2xl font-medium w-full max-w-3xl mt-6">
        <div className="flex flex-col items-center">
          <span className="font-bold text-2xl sm:text-3xl" style={{color:'var(--primary-darkyellow)' }}>3000+</span>
          <span style={{color:'var(--primary-gray)' }}>Clients Secured</span>
        </div>
        <div className="flex flex-col items-center">
          <span className= "font-bold text-2xl sm:text-3xl" style={{color:'var(--primary-darkyellow)' }}>21M+</span>
          <span style={{color:'var(--primary-gray)' }}>Attacks Prevented</span>
        </div>
        <div className="flex flex-col items-center">
          <span className= "font-bold text-2xl sm:text-3xl" style={{color:'var(--primary-darkyellow)' }}>4.6/5</span>
          <span style={{color:'var(--primary-gray)' }}>Rating</span>
        </div>
      </div>

      {/* ✅ Image Section - Fully Responsive */}
      <div className="w-full flex items-center justify-center mt-10 overflow-hidden relative">
        <Image
          src={assets.dashbord}
          alt="Dashboard Preview"
          className="w-full max-w-[90%] sm:max-w-3xl lg:max-w-4xl object-cover object-top rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};
