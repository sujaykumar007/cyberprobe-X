import Image from "next/image"
import { assets } from "../assets/assets"
import "../styles/colors.css"
import { NumberTicker } from "@/components/magicui/number-ticker"

export const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10  text-white px-4 py-12 text-center">
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-5xl">
        <h1 className="mb-2">Find and fix every single</h1>
        <h1 className="text-[var(--primary-yellow)]">Vulnerability in your web app</h1>
        <h1>
          with <span className="text-[var(--primary-yellow)]">Cyberprobe-X</span>
        </h1>
      </div>

      {/* ✅ Statistics Section - Responsive */}
      <div className="w-full flex flex-col  items-center justify-center mt-14 space-y-8">
        <div className="grid grid-cols-3  sm:grid-cols-3 gap-6 text-sm sm:text-xl md:text-2xl font-medium w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl sm:text-3xl text-[var(--primary-darkyellow)]">
              <NumberTicker value={100} />+M
            </span>
            <span className="text-[var(--primary-gray)]">Clients Secured</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl sm:text-3xl text-[var(--primary-darkyellow)]">
              <NumberTicker value={100} />+M
            </span>
            <span className="text-[var(--primary-gray)]">Attacks Prevented</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl sm:text-3xl text-[var(--primary-darkyellow)]">
              <NumberTicker value={4} />/5
            </span>
            <span className="text-[var(--primary-gray)]">Rating</span>
          </div>
        </div>

        {/* ✅ Image Section - Now Always Below Stats */}
        <div className="w-full flex justify-center">
          <Image
            src={assets.dashbord}
            alt="Dashboard Preview"
            className="w-full max-w-[90%] sm:max-w-3xl lg:max-w-4xl object-cover object-top rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

  {/* <button className="px-6 py-3 rounded-full drop-shadow-lg flex items-center text-black text-lg sm:text-xl font-semibold transition duration-300 hover:scale-105 hover:bg-[var(--primary-hover)]"
  style={{ backgroundColor: "var(--primary-yellow)" }}>
  <span>Lets Secure Your Web App</span>
  <FiArrowRight className="text-2xl ml-2" />
</button> */}