import { assets } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="px-4 py-10 sm:px-8 lg:mb-12 text-white pb-10 rounded-3xl w-[95%] mx-auto border-t border-gray-600">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
            <div>
              <div className="flex items-center gap-2">

                <Image src={assets.whitelogo} alt="Logo" width={80}   />

              </div>
              <p className="mt-3 text-gray-300 text-sm">
              CyberProbex specializes in Network Security, API Security, Mobile & Web Application Security Audits, ISO 27001 Compliance, and vCISO Services. We help businesses strengthen their security posture with cutting-edge solutions and expert assessments.              </p>

              <button className="hover:opacity-300 transition flex gap-5 mt-4">
              <Image src={assets.logoX} className="w-5" alt="twitter" />
              <Image src={assets.logoX} className="w-5" alt="twitter" />
              <Image src={assets.logoX} className="w-5" alt="twitter" />
        </button>

    
            </div>

            <div>
              <h3 className="font-semibold text-primary-light">Pentest</h3>
              <ul className="mt-3 space-y-2 text-primary-white">
                <li className="hover:text-[#b1d450] cursor-pointer">Pentest Platform</li>
                <li className="hover:text-[#b1d450] cursor-pointer">DAST Scanner</li>
                <li className="hover:text-[#b1d450] cursor-pointer">API Security</li>
                <li className="hover:text-[#b1d450] cursor-pointer">Web Pentest</li>
                <li className="hover:text-[#b1d450] cursor-pointer">Mobile Pentest</li>
                <li className="hover:text-[#b1d450] cursor-pointer">Network Pentest</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-light">Services</h3>
              <ul className="mt-3 space-y-2 text-primary-white">
                <li className="hover:text-[#b1d450] cursor-pointer">Cloud Security</li>
                <li className="hover:text-[#b1d450] cursor-pointer">Compliance</li>
                <li className="hover:text-[#b1d450] cursor-pointer">Threat Detection</li>
                <li className="hover:text-[#b1d450] cursor-pointer">SOC Monitoring</li>
                <li className="hover:text-[#b1d450] cursor-pointer">Risk Assessment</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-light">Company</h3>
              <ul className="mt-3 space-y-2 text-primary-white">

              <li className="hover:text-primary-hover cursor-pointer"><Link href='/'>Home</Link></li>
                <li className="hover:text-primary-hover cursor-pointer"><Link href='/about'>About Us</Link></li>
                <li className="hover:text-primary-hover cursor-pointer"><Link href='/services'>Services</Link></li>
              
                <li className="hover:text-primary-hover cursor-pointer"><Link href='/contact'>Contact</Link></li>

              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
            <p>Copyright © 2025 Astra. All Rights Reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-primary-hover">User Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-primary-hover">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
