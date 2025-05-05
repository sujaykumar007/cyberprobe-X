import { ShineBorder } from "@/components/magicui/shine-border";
import Image from "next/image";

export default function Approach() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-black px-4 py-10">
      {/* Text Section */}
      <div className="w-full max-w-4xl text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-white">
          Our Approach to <br />
          <span className="text-primary-yellow">Penetration Testing</span>
        </h1>
        <p className="text-white text-lg font-normal mt-3">
          While every penetration test is uniquely designed to meet your specific needs,
          we adhere to a structured and proven methodology to ensure reliable and consistent results.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center mt-6 lg:mt-0">
        <Image
          src="/icons/approch.png"
          alt="Penetration Testing Illustration"
          width={500}
          height={500}
          className="w-full max-w-2xl mx-auto"
        />
      </div>
    </div>
  )
}
