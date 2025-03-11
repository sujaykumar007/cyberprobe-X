import { ShineBorder } from "@/components/magicui/shine-border";
import { ArrowBigRight } from "lucide-react";

export default function Approach() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:justify-between bg-black gap-10 md:gap-40">
      
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold py-10 text-white w-full sm:w-[80%] md:w-[60%] text-center sm:text-left">
        Our Approach to <br /> <span className="text-primary-yellow">Penetration Testing</span>
        <span className="text-white md:text-lg text-lg text-balance font-normal mt-3 block md:hidden">
          While every penetration test is uniquely designed to meet your specific needs,
          we adhere to a structured and proven methodology to ensure reliable and consistent results.
        </span>
        <span className="text-white md:text-lg text-lg text-balance font-normal mt-3 hidden md:block">
          While every penetration test is uniquely designed to meet your specific needs, 
          we adhere to a structured and proven methodology to ensure reliable and consistent results.
        </span>
      </h1>

      <ShineBorder
        className="rounded-lg bg-black p-6 md:p-10 h-auto md:h-[750px] lg:h-[390px] w-full sm:w-[80%] md:w-[40%]"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <ul className="text-white text-lg w-full flex flex-col gap-y-4">
          <li className="flex gap-x-2"><span className="text-primary-yellow">1.</span> Defining scope and objectives</li>
          <li className="flex gap-x-2"><span className="text-primary-yellow">2.</span> Intelligence gathering & reconnaissance</li>
          <li className="flex gap-x-2"><span className="text-primary-yellow">3.</span> Mapping & identifying active services</li>
          <li className="flex gap-x-2"><span className="text-primary-yellow">4.</span> Vulnerability assessment & risk analysis</li>
          <li className="flex gap-x-2"><span className="text-primary-yellow">5.</span> Exploiting vulnerabilities to assess real-world impact</li>
          <li className="flex gap-x-2"><span className="text-primary-yellow">6.</span> Post-exploitation & lateral movement analysis</li>
          <li className="flex gap-x-2"><span className="text-primary-yellow">7.</span> Comprehensive reporting & strategic debrief</li>
        </ul>
      </ShineBorder>

    </div>
  );
}
