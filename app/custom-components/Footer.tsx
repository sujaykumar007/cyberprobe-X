import { assets } from "../assets/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="px-4 py-10 sm:px-8 lg:mb-12 text-white pb-10 rounded-3xl w-[95%] mx-auto border-t border-gray-600">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
            <div>
              <div className="flex items-center gap-2">
                <Image src={assets.newlogo} alt="Logo" width={100}  />
              </div>
              <p className="mt-3 text-gray-300 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ex facere facilis, totam cum voluptas animi quod consectetur mollitia quam eos dolor cupiditate excepturi perspiciatis sunt repudiandae blanditiis accusantium dignissimos!
              </p>
              <div className="flex gap-3 mt-4">
              <Image 
  src={assets.whatsapp} 
  alt="likedin" 
  className="w-8 transition duration-200  hover:invert"
/>
                <Image 
  src={assets.xlogo} 
  alt="likedin" 
  className="w-8 transition duration-200  hover:invert"
/>

<Image 
  src={assets.facebook} 
  alt="likedin" 
  className="w-8 transition duration-200  hover:invert"
/>
<Image 
  src={assets.linkedinlogo} 
  alt="likedin" 
  className="w-8"
/>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-primary-light">Pentest</h3>
              <ul className="mt-3 space-y-2 text-primary-white">
                <li className="hover:text-primary-hover cursor-pointer">Pentest Platform</li>
                <li className="hover:text-primary-hover cursor-pointer">DAST Scanner</li>
                <li className="hover:text-primary-hover cursor-pointer">API Security</li>
                <li className="hover:text-primary-hover cursor-pointer">Web Pentest</li>
                <li className="hover:text-primary-hover cursor-pointer">Mobile Pentest</li>
                <li className="hover:text-primary-hover cursor-pointer">Network Pentest</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-light">Services</h3>
              <ul className="mt-3 space-y-2 text-primary-white">
                <li className="hover:text-primary-hover cursor-pointer">Cloud Security</li>
                <li className="hover:text-primary-hover cursor-pointer">Compliance</li>
                <li className="hover:text-primary-hover cursor-pointer">Threat Detection</li>
                <li className="hover:text-primary-hover cursor-pointer">SOC Monitoring</li>
                <li className="hover:text-primary-hover cursor-pointer">Risk Assessment</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-light">Company</h3>
              <ul className="mt-3 space-y-2 text-primary-white">
                <li className="hover:text-primary-hover cursor-pointer">About Us</li>
                <li className="hover:text-primary-hover cursor-pointer">Careers</li>
                <li className="hover:text-primary-hover cursor-pointer">Blog</li>
                <li className="hover:text-primary-hover cursor-pointer">Contact</li>
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
