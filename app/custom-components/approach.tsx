import { ShineBorder } from "@/components/magicui/shine-border";

export default function Approach() {
  return (
    <div className="w-full flex flex-col  md:flex-row items-center justify-center   bg-black ">
      
      <h1 className="text-2xl sm:text-2xl md:text-4xl xl:text-5xl font-extrabold py-10 text-white w-full sm:w-[80%] md:w-[55%] xl:text-start xl:w-[60%] text-center sm:text-left">
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

      <ShineBorder className="rounded-lg bg-black p-6 md:p-10  w-[90%] sm:w-[80%] md:w-[35%]">
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
</ShineBorder>


    </div>
  );
}
