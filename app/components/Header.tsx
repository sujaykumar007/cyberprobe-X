import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { assets } from "../assets/assets";
import { NumberTicker } from "@/components/magicui/number-ticker";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white px-4 py-12 text-center space-y-8">
      
      {/* ✅ Optimized Heading with Responsive Font Sizes */}
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-5xl">
        <h1 className="mb-2">Find and fix every single</h1>
        <h1 className="text-yellow-400">Vulnerability in your web app</h1>
        <h1>with <span className="text-yellow-400">Astra Pentest</span></h1>
      </div>

      {/* ✅ Button with Smooth Hover Effect */}
      <button className="px-6 py-3 bg-yellow-500 rounded-full drop-shadow-lg flex items-center text-black text-lg sm:text-xl font-semibold transition hover:bg-yellow-400 hover:scale-105 duration-300">
        <span>Let's Secure Your Web App</span>
        <FiArrowRight className="text-2xl ml-2" />
      </button>

      {/* ✅ Stats Section - Centered & Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg sm:text-xl md:text-2xl font-medium w-full max-w-3xl mt-6">
        <div className="flex flex-col items-center">
        <span className="text-yellow-500 font-bold text-2xl sm:text-3xl">
            <NumberTicker value={100} className="text-yellow-500 text-2xl sm:text-3xl font-bold" />+M
          </span>
          <span className="text-gray-300">Clients Secured</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-500 font-bold text-2xl sm:text-3xl">
            <NumberTicker value={100} className="text-yellow-500 text-2xl sm:text-3xl font-bold" />+M
          </span>
          <span className="text-gray-300">Attacks Prevented</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-500 font-bold text-2xl sm:text-3xl">4.6/5</span>
          <span className="text-gray-300">Rating</span>
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
