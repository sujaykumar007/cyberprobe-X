import { CheckCircle } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
export default function AreasOfExpertise() {
  const expertiseList = [
    "Onsite, remote, and in-lab data acquisition from almost all types of digital storage devices.",
    "Forensic data extraction from faulty and difficult-to-access storage devices.",
    "Computer Forensics (Windows, Mac, Linux, etc.).",
    "Mobile Device Forensics (Android and iOS devices – smartphones, tablets, GPS devices, Kindle, Media devices, SIM cards, etc.).",
    "Cloud Forensics (Apple, AWS, Dropbox, Facebook, Instagram, Twitter, WhatsApp, G Suite, Microsoft Azure, Office 365, OneDrive, Slack, etc.).",
    "Email Forensics (MS Exchange, Outlook, G Suite, Gmail, Office 365, etc.).",
    "Drone Forensics.",
    "IoT Forensics.",
    "Memory Forensics (Windows, Mac, Linux).",
    "Database Forensics (MSSQL, MySQL, etc.).",
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12">
      {/* Wrapping inside a div for better styling */}
      <div className="relative w-full md:w-3/4 p-6 md:p-8 rounded-lg bg-gray-900 text-white">
        {/* Border Beam Effect */}
        <BorderBeam style={{ borderWidth: "2px" }} className="absolute inset-0 rounded-lg border-[#b1d450]" />


        {/* Content */}
        <h2 className="text-2xl font-extrabold mb-6 text-center md:text-left text-[#b1d450]">
          Our Areas Of Expertise Include:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left relative">
          {expertiseList.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className=" text-[#b1d450] w-6 h-6 flex-shrink-0" />
              <p className="text-white text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
