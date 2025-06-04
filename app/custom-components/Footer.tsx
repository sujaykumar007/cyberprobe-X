import { Instagram, Linkedin } from "lucide-react";
import { assets } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="px-4 py-10 sm:px-8  text-white pb-10 rounded-3xl w-[95%] mx-auto border-t border-gray-600">
        <div className=" container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="w-full md:w-1/3  md:mb-0 flex items-center ">
            {/* <img
            src={phone}
            alt="Phone"
            className="border p-3 rounded-full mr-4"
          /> */}
            <div>
              <h2 className="text-xl font-bold">Give Us A Call</h2>
              <p className="md:text-lg text-md">+971 589788531</p>
            </div>
            <a
              href="https://wa.me/971589788531"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-green-500 hover:bg-green-600 p-2 md:px-4 md:py-3 rounded-full transition-all duration-300 hover:scale-110 flex items-center gap-2"
            >
              <FaWhatsapp size={20} className="text-white" />
              <span className="text-white font-medium  text-[15px] ">
                Chat with us
              </span>
            </a>
          </div>
          <br />
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center  gap-2">
                <Image src={assets.whitelogo} alt="Logo" width={80} />
              </div>
              <p className="mt-3 text-gray-300 text-sm">
                CyberProbex specializes in Network Security, API Security,
                Mobile & Web Application Security Audits, ISO 27001 Compliance,
                and vCISO Services. We help businesses strengthen their security
                posture with cutting-edge solutions and expert assessments.{" "}
              </p>

              <button className="hover:opacity-300 transition flex gap-5 mt-4">
                {/* <Link href="https://x.com/CyberprobeX" > <Image src={assets.logoX} className="w-8" alt=""/></Link> 
             <Link href="https://www.linkedin.com/company/cyberprobex/" > <Image src={assets.linkedin} className="w-8" alt=""/></Link> 
             <Link href="https://www.instagram.com/cyberprobex/" > <Image src={assets.instagram} className="w-8" alt=""/></Link>
             //   */}

                <Link href="https://x.com/CyberprobeX">
                  {" "}
                  <Image src={assets.logoX} className="w-7" alt="" />
                </Link>
                <Link href="https://www.linkedin.com/company/cyberprobex/">
                  {" "}
                  <Linkedin size={30} className="text-white" />
                </Link>
                <Link href="https://www.instagram.com/cyberprobex/">
                  {" "}
                  <Instagram size={30} className="text-white" />
                </Link>
              </button>
            </div>

            <div>
              <h3 className="font-semibold text-primary-light">Services</h3>
              <ul className="mt-3 space-y-2 text-primary-white">
                <li className="hover:text-[#b1d450] cursor-pointer">
                  {" "}
                  <Link href={"/services"}> Penetration Testing</Link>{" "}
                </li>
                <li className="hover:text-[#b1d450] cursor-pointer">
                  <Link href={"/services"}>Cyber Resilience Services</Link>
                </li>
                <li className="hover:text-[#b1d450] cursor-pointer">
                  <Link href={"/services"}>Digital Forensics</Link>
                </li>
                <li className="hover:text-[#b1d450] cursor-pointer">
                  <Link href={"/contact"}>Trainings</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-light">Company</h3>
              <ul className="mt-3 space-y-2 text-primary-white">
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="/services">Services</Link>
                </li>

                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="mr-4">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5050501399555!2d55.37514627537925!3d25.11861057776157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f9f1fbfb607%3A0x4db0a2f5f59532d9!2sIFZA%20Business%20Park!5e0!3m2!1sen!2sin!4v1748364533983!5m2!1sen!2sin"
                className="w-[350px] md:w-[500px] "
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
            <p>Copyright © 2025 CyberProbeX. All Rights Reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-primary-hover">
                User Terms & Conditions
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary-hover">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
