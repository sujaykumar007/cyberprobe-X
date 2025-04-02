import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { BorderBeam } from "@/components/magicui/border-beam";
  export default function QuestionsofDigital() {
    return (
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12">
        {/* Left Column - Title & Description */}
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-2xl font-extrabold py-6 text-[#b1d450] ">What is Digital Forensics?</h1>
          <p className="text-lg font-normal mt-3">
          Digital forensics is the application of investigation and analysis techniques to gather and preserve evidence from a particular computing device in a way that is suitable for presentation in a court of law.
          </p>
          <p className="text-lg font-normal mt-3">
          The goal of digital forensics is to perform a structured investigation and maintain a documented chain of evidence to find out exactly what happened on a computing device and who was responsible for it.
          </p>
          <p className="text-lg font-normal mt-3">
          Essentially, digital forensics is data recovery with legal compliance guidelines.
          <br></br>
          It should be noted that the use of digital forensics isn’t always tied to a crime.
          </p>
          <p className="text-lg font-normal mt-3">Importantly, the process should be clear and repeatable so that whoever undertakes the investigation arrives at the same conclusion.</p>
          <h1 className="text-2xl font-extrabold py-6 text-[#b1d450]">
            What Can You Expect From A Digital Forensic Investigation?
          </h1>
          <p className="text-lg font-normal mt-3">
          At CyberWhite, our experts can help you recover, extract, investigate and analyse evidence from working and non-working (mechanically failed), deleted and corrupted digital data storage devices, including cloud-hosted locations that may have been used during an incident, to determine and report the who, what, when, where, why and how of an incident.
          </p>
        </div>
  
        <div className="relative w-full md:w-1/2 text-white p-5 md:p-20 border-2 border-gray-700 rounded-lg">
      {/* BorderBeam Effect */}
      <BorderBeam style={{ borderWidth: "2px" }}  className="absolute inset-0 rounded-lg" />

      {/* Content */}
      <h3 className="font-semibold mb-4 text-[#b1d450]">
        Questions Addressed During A Typical Investigation:
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:text-[#b1d450]">Who was using the device? </AccordionTrigger>
          <AccordionContent>Who opened, executed, emailed, copied or deleted the data – to who was the data sent, and who else was involved or had access to the device or data?</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:text-[#b1d450]">What happened? </AccordionTrigger>
          <AccordionContent>What data was accessed, copied, sent, printed, screen captured, deleted, obfuscated, password protected or encrypted – what applications or devices were used, what programs were installed, deleted or uninstalled, what other data could have been affected, what websites, social media, online communication, forums, file storage sites etc. were visited, what was posted or uploaded, what was the sequence of the events?</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:text-[#b1d450]">When did this happen?</AccordionTrigger>
          <AccordionContent>When was the data accessed, copied, sent, printed, screen captured or deleted – when were the applications or devices used, installed, deleted or uninstalled?</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="hover:text-[#b1d450]">Where did this take place?</AccordionTrigger>
          <AccordionContent>Where else is the data located? Where was the data sent, uploaded, copied or printed to?</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="hover:text-[#b1d450]">Why did it happen?</AccordionTrigger>
          <AccordionContent>Are there any correspondence, metadata or activity logs that could assist in answering this question?</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" >
          <AccordionTrigger className="hover:text-[#b1d450]">How was it done?</AccordionTrigger>
          <AccordionContent>How was the data accessed or compromised, how did the data get on or off the device, how did the person communicate with other people?</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
      </div>
    );
  }
  