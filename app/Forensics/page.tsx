

import AreasOfExpertise from "./check";
import DigitalForensics from "./DigitalForensics";
import QuestionsofDigital from "./qutionsofdigital";

export default function Contact() {
  return (
    <div className="w-full bg-black">
      
      <div className="relative w-full md:py-10 px-4 md:px-12 bg-black bg-cover bg-center bg-no-repeat mb-20">
        <DigitalForensics />
      </div>

     
      <div className="w-full md:py-10 px-4 md:px-12 bg-black bg-cover bg-center bg-no-repeat mb-10">
        <QuestionsofDigital />
      </div>

   
      <div className="w-full md:py-10 px-4 md:px-12 bg-black bg-cover bg-center bg-no-repeat pb-20">
        <AreasOfExpertise />
      </div>
    </div>
  );
}
