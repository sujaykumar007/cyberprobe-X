"use client"

import { BorderBeam } from "@/components/magicui/border-beam"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    id: 1,
    name: "Cyber Insurance Advisory & Consultancy",
    description: "Gap analysis against regional frameworks (SAMA, NESA, PDPL, CBB, etc.)",
    description1: "Compliance roadmap development and implementation guidance"
  },
  {
    id: 2,
    name: "vCISO",
    description: "Strategic security roadmap development and implementation oversight",
    description1: "Security governance framework design and continuous security posture improvement"
  },
  {
    id: 3,
    name: "vDPO",
    description: "Strategic security roadmap development and implementation oversight",
    description1: "Security governance framework design and continuous security posture improvement"
  },
  {
    id: 4,
    name: "Regulatory Compliance",
    description: "Gap analysis against regional frameworks (SAMA, NESA, PDPL, CBB, etc.)",
    description1: "Compliance roadmap development and implementation guidance"
  },
  {
    id: 5,
    name: "Regulatory Assessment",
    description: "Incident response and advanced threat hunting",
    description1: "Evidence collection and chain of custody management"
  },
  {
    id: 6,
    name: "ISO 27001 Certification",
    description: "ISMS framework development and implementation",
    description1: "Pre-certification readiness assessment and audit support"
  },
  {
    id: 7,
    name: "Penetration Testing",
    description: "Security control implementation guidance",
    description1: "Mitigation strategy development and execution support"
  },
  {
    id: 8,
    name: "PCI DSS Compliance",
    description: "Gap assessment against latest PCI DSS requirements",
    description1: "Remediation planning and certification preparation"
  },
  {
    id: 9,
    name: "Web Application Penetration Testing",
    description: "Identifying and fixing security vulnerabilities in web applications"
  },
  {
    id: 10,
    name: "Cloud Penetration Testing",
    description: "Assessing cloud environments for misconfigurations and security risks."
  },
  {
    id: 11,
    name: "API Penetration Testing",
    description: "Securing APIs by identifying vulnerabilities that could lead to data breaches."
  },
  {
    id: 12,
    name: "Network Penetration Testing",
    description: "Evaluating network infrastructure to detect and mitigate security flaws"
  },
  {
    id: 13,
    name: "Mobile Application Penetration Testing",
    description: "Testing mobile applications for vulnerabilities in storage, communication, and authentication"
  },
  {
    id: 14,
    name: "IoT Penetration Testing",
    description: "Uncovering security weaknesses in IoT devices and their ecosystem"
  }
]

export function ServiceCard() {
  return (
    <div className="flex flex-col items-center gap-8 w-full px-4 overflow-hidden">
      {services.map((service, index) => {
          const ref = useRef(null)
          const isInView = useInView(ref, { once: false, margin: "-50px" })
        const isEven = service.id % 2 === 0

        return (
          <motion.div
            key={service.id}
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : isEven ? -100 : 100 }}
            transition={{ duration: 0.9, delay: index * 0.1 }}
            className={`w-full max-w-[300px] md:max-w-[550px] flex items-center md:${isEven ? "justify-start self-start" : "justify-end self-end"} justify-center`}
          >
            <Card className="relative py-12 overflow-hidden bg-black border-opacity-35 border-gray-700 w-full">
              <CardHeader>
                <CardTitle className="text-white text-2xl">{service.name}</CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
                {service.description1 && (
                  <CardDescription>{service.description1}</CardDescription>
                )}
              </CardHeader>
              <CardContent></CardContent>
              <BorderBeam duration={8} size={100} />
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
