import { ShineBorder } from "@/components/magicui/shine-border";
import Image from "next/image";

export default function Approach() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black px-4 py-10">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-white">
          Our Approach to <br />
          <span className="text-primary-yellow">Penetration Testing</span>
        </h1>
        <p className="text-white text-lg font-normal mt-3 block md:hidden">
          While every penetration test is uniquely designed to meet your specific needs,
          we adhere to a structured and proven methodology to ensure reliable and consistent results.
        </p>
        <p className="text-white text-lg font-normal mt-3 hidden md:block">
          While every penetration test is uniquely designed to meet your specific needs,
          we adhere to a structured and proven methodology to ensure reliable and consistent results.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center mt-6">
        <Image
          src="/icons/approch.png"
          alt="Penetration Testing Illustration"
          width={500}
          height={500}
          className="w-full max-w-md mx-auto"
        />
      </div>

      {/* Methodology List */}
      {/* <ShineBorder className="rounded-lg bg-black p-6 md:p-10 w-[90%] sm:w-[80%] md:w-[35%]">
        <ul className="text-white text-lg w-full flex flex-col gap-y-4">
          <li className="flex gap-x-2">
            <span className="text-primary-yellow">1.</span> Defining scope and objectives
          </li>
          <li className="flex gap-x-2">
            <span className="text-primary-yellow">2.</span> Intelligence gathering & reconnaissance
          </li>
          <li className="flex gap-x-2">
            <span className="text-primary-yellow">3.</span> Mapping & identifying active services
          </li>
          <li className="flex gap-x-2">
            <span className="text-primary-yellow">4.</span> Vulnerability assessment & risk analysis
          </li>
          <li className="flex gap-x-2">
            <span className="text-primary-yellow">5.</span> Exploiting vulnerabilities to assess real-world impact
          </li>
          <li className="flex gap-x-2">
            <span className="text-primary-yellow">6.</span> Post-exploitation & lateral movement analysis
          </li>
          <li className="flex gap-x-2">
            <span className="text-primary-yellow">7.</span> Comprehensive reporting & strategic debrief
          </li>
        </ul>
      </ShineBorder> */}
    </div>
  );
}
