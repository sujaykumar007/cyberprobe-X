import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";


import Navbar from "./custom-components/Navbar";
import Footer from "./custom-components/Footer";
import ChatBot from "./custom-components/ChatBot";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-geist-popins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add the weights you need
});

export const metadata: Metadata = {
  title: "CyberProbeX",
  description: "Generated by CyberProbeX",
 icons: {
      icon: "/CPX.png",
    },
  keywords: [

    
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
    
      </head>
      <body
        className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
       
        <Footer></Footer>
        <script src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2025/03/10/09/20250310091526-8VRBLBG7.js"></script>
      </body>
    </html>
  );
}
