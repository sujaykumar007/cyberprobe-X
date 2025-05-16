"use client"

import { MagicCard } from "@/components/magicui/magic-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ServiceHero() {
  const router = useRouter()

  const services = [
    { id: 9, name: "Web Application Pentesting", description: "Identifying and fixing security vulnerabilities in web applications",routeName:"web-application-pentesting" },
    { id: 10, name: "Cloud Penetration Testing", description: "Assessing cloud environments for misconfigurations and security risks.",routeName:"web-application-pentesting" },
    { id: 11, name: "API Pentesting", description: "Securing APIs by identifying vulnerabilities that could lead to data breaches.",routeName:"web-application-pentesting" },
    { id: 12, name: "Network Pentesting", description: "Evaluating network infrastructure to detect and mitigate security flaws",routeName:"web-application-pentesting" },
    { id: 13, name: "Mobile Application Pentesting", description: "Testing mobile applications for vulnerabilities in storage, communication, and authentication",routeName:"web-application-pentesting" },
    { id: 14, name: "IoT Pentesting", description: "Uncovering security weaknesses in IoT devices and their ecosystem",routeName:"web-application-pentesting" },
  ]

  return (
    <div className="w-screen h-[70%] flex flex-col items-center justify-center bg-black">
      {/* Title with animation */}
      <motion.h1
        className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white text-center pb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Core Services
      </motion.h1>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full w-7xl px-10 py-10 h-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <MagicCard
              className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-white text-lg bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition w-full"
              gradientColor="#262626"
            >
              {/* Image first, then text */}
              <div className="flex flex-col items-center">
                <Image
                  src={`/icons/${service.id}.png`}
                  alt="icon"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white mb-4"
                />
                <h3 className="text-xl font-semibold text-primary-yellow">
                  {service.name}
                </h3>
              </div>
              <div className="mt-4 ">
              <Button onClick={() => router.push(`/knowMore/${service.routeName}`)} >Know More</Button>
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
