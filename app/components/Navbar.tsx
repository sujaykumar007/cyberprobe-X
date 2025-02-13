'use client'

import { assets } from "../assets/assets";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link'

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
   
    const sideMenuRef = useRef<HTMLUListElement | null>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(0rem)";
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(16rem)";
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white  backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-medium text-lg ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                 <div className="font-medium text-lg">
                    signin
                 </div>
<a
  href="#contact"
  className="hidden lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl ml-4 relative overflow-hidden group"
>
  <span className="relative z-10">Speak to sales</span>
  <span className="absolute inset-0 bg-[rgb(57,124,247)] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
</a>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_bar} alt='' className='w-6' />
                </button>
            </div>

            {/* Mobile menu */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.logo} alt='' className='w-5 cursor-pointer' />
                </div>
                <li><a onClick={closeMenu} href="#top">Home</a></li>
                <li><a onClick={closeMenu} href="#about">About me</a></li>
                <li><a onClick={closeMenu} href="#services">Services</a></li>
                <li><a onClick={closeMenu} href="#work">My Work</a></li>
            </ul>
        </nav>
    );
}
