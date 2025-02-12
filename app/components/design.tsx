import Image from "next/image";
import { assets } from "../assets/assets";

export const Integrations = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6 container">
      <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">
        SecurePortal Integrates With Your <br />
        <span className="font-bold">Workflow</span> Applications
      </h2>

      <div className="relative flex flex-col items-center justify-evenly w-full mt-12 h-96">
        
        <div className="flex flex-row justify-between w-full mb-6">
          <div className="flex  justify-evenly container">
            <Image src={assets.logo} alt="Jira Software" width={140} height={40} />
         

       
            <Image src={assets.logo} alt="Microsoft Teams" width={150} height={50} />
          </div>
        </div>

       
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <Image src={assets.logo} alt="Slack" width={150} height={40} />
          </div>
          <div className="flex items-center">
            <Image src={assets.logo} alt="Slack" width={150} height={40} />
          </div>
          <div className="flex items-center">
            <Image src={assets.logo} alt="Slack" width={150} height={40} />
          </div>
        </div>
        <svg className="absolute top-4/3 right-20 w-1/4 h-auto" viewBox="0 20 200 200">
          <path d="M10,80 C60,10 140,10 140,80" stroke="black" fill="transparent" strokeWidth="1.5"/>
        </svg>

        <svg className="absolute top-1/3 left-10 w-1/3 h-auto" viewBox="0 0 200 100">
          <path d="M10,80 C60,10 140,10 190,80" stroke="black" fill="transparent" strokeWidth="1.5"/>
        </svg>

       
         <svg className="absolute top-1/3 left-20 w-1/3 h-auto" viewBox="0 0 200 100">
          <path d="M10,80 C60,10 140,150 180,80" stroke="black" fill="transparent" strokeWidth="2.5"/>
        </svg>

        <svg className="absolute top-1/3 right-20 w-1/3 h-auto" viewBox="20 10 200 100">
          <path d="M10,80 C60,10 140,10 190,80" stroke="black" fill="transparent" strokeWidth="1.5"/>
        </svg>
        

      </div>
    </div>
  );
};

export default Integrations;

 