"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
  import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { assets } from "../assets/assets";

const languages = [
  { code: "en", label: "En" },
  { code: "ar", label: "Ar" },
  { code: "fr", label: "Fr" },
  { code: "es", label: "Es" },
  { code: "hi", label: "Hi" },
  { code: "de", label: "De" },
];

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(languages.find((l) => l.code === lang) || languages[0]);
  
    setTimeout(() => {
      const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = lang;
        selectElement.dispatchEvent(new Event("change"));
      } else {
        console.error("Google Translate dropdown not found.");
      }
    }, 1000);
  };
  

  return (
    <>
      <nav
        className={`w-full pt-10 lg:pt-4 px-5 lg:px-16 xl:px-[10%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "bg-black backdrop-blur-lg shadow-md text-white" : "bg-white text-black"
        }`}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}
      >
       
        <Link href="/">
          <Image
            src={isScroll ? assets.whitelogo : assets.newlogo}
            alt="Logo"
            className="w-[100%] cursor-pointer h-10"
          />
        </Link>

     
        <ul className="hidden lg:flex items-center gap-6 lg:gap-10 rounded-full px-12 py-3 font-medium text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
        </ul>

        <div className="flex items-center gap-4 ">
     
         

          
          <Link
            href="/contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl ml-4 relative overflow-hidden group transition-colors duration-500 hover:text-black ${
              isScroll ? "text-white" : "text-black"
            }`}
          >
            <span className="relative z-10">Speak to Sales</span>
            <span className="absolute inset-0 bg-[#b1d450] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
          </Link>

       
          <button onClick={() => setIsMenuOpen(true)}>
            <Image
              src={isScroll ? assets.menubutton : assets.menu_bar}
              alt="Menu"
              className="w-6 block lg:hidden ml-3"
            />
          </button>
          <div className="relative hidden lg:block notranslate" lang="en"> 
  <Listbox value={selectedLanguage} onChange={(lang) => changeLanguage(lang.code)}>
    <div className="relative">
      <Listbox.Button
        className={`flex items-center justify-between w-20 px-4 py-2 rounded-lg text-lg border ${
          isScroll ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {selectedLanguage.label}
        <ChevronDown size={18} />
      </Listbox.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Listbox.Options
          className="absolute left-0 mt-2 w-full max-h-60 overflow-y-auto bg-white shadow-lg rounded-lg py-2 z-50 notranslate"
          lang="en"
        >
          {languages.map((lang) => (
            <Listbox.Option
              key={lang.code}
              value={lang}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200 text-black"
            >
              {lang.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
</div>
</div>

    
<ul
  className={`fixed top-0 right-0 w-64 h-screen bg-white shadow-lg py-20 px-10 transform transition-transform duration-500 ease-in-out z-[1000] ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="absolute right-6 top-6 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
    <span className="text-3xl">×</span>
  </div>

  <li className="text-lg font-medium text-gray-800 my-4">
    <Link onClick={() => setIsMenuOpen(false)} href="/">Home</Link>
  </li>
  <li className="text-lg font-medium text-gray-800 my-4">
    <Link onClick={() => setIsMenuOpen(false)} href="/about">About Us</Link>
  </li>
  <li className="text-lg font-medium text-gray-800 my-4">
    <Link onClick={() => setIsMenuOpen(false)} href="/services">Services</Link>
  </li>
  <li className="text-lg font-medium text-gray-800 my-4">
    <Link onClick={() => setIsMenuOpen(false)} href="/contact">Contact Us</Link>
  </li>

 
  <div className="relative  lg:block notranslate mt-6" lang="en"> 
  <Listbox value={selectedLanguage} onChange={(lang) => changeLanguage(lang.code)}>
    <div className="relative">
      <Listbox.Button
        className={`flex items-center justify-between w-20 px-4 py-2 rounded-lg text-lg border ${
          isScroll ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {selectedLanguage.label}
        <ChevronDown size={18} />
      </Listbox.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Listbox.Options
          className="absolute left-0 mt-2 w-full max-h-60 overflow-y-auto bg-white shadow-lg rounded-lg py-2 z-50 notranslate"
          lang="en"
        >
          {languages.map((lang) => (
            <Listbox.Option
              key={lang.code}
              value={lang}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200 text-black"
            >
              {lang.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
  </div>
</ul>

      </nav>
    </>
  );
}
