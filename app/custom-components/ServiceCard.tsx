
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
import Image from "next/image"
import { useRef } from "react"

const services = [

  {
    id: 1,
    name: "Cyber Advisory & Consultancy",
    description: "Gap analysis against regional frameworks (SAMA, NESA, PDPL, CBB, etc.)",
    description1: "Transform security from a barrier into a business enabler with our strategic cyber advisory services. We analyze your unique threat landscape, design resilient security architecture, and develop roadmaps that align with your business objectives. Our consultants bridge the gap between technical security and organizational strategy, ensuring your cybersecurity investments deliver measurable business value and competitive advantage."
  },
  {
    id: 2,
    name: "vCISO",
    description: "Strategic security roadmap development and implementation oversight",
    description1: "Access executive-level security leadership without the full-time overhead through our vCISO service. Our experienced security leaders integrate seamlessly with your team, providing strategic guidance, board-level reporting, and program oversight tailored to your organization's maturity level. We develop and execute security roadmaps that align with your business goals, filling critical security leadership gaps while building internal capabilities."
  },
  {
    id: 3,
    name: "vDPO",
    description: "Strategic security roadmap development and implementation oversight",
    description1: "Ensure privacy compliance and build customer trust with our Virtual Data Protection Officer service. Our seasoned privacy professionals help you navigate complex data protection regulations across multiple jurisdictions, implementing practical privacy frameworks and response procedures. We transform privacy from a compliance burden into a competitive differentiator, protecting your reputation while enabling responsible data innovation."
  },
  {
    id: 4,
    name: "Regulatory Compliance",
    description: "Gap analysis against regional frameworks (SAMA, NESA, PDPL, CBB, etc.)",
    description1: "Navigate complex regulatory frameworks with confidence through our specialized compliance services. We translate dense regulatory requirements into practical implementation plans tailored to your organization's specific context. Our experts help you build sustainable compliance programs that satisfy auditors while enhancing your security posture, turning compliance from a checkbox exercise into a strategic asset that builds trust with customers and partners."
  },
  {
    id: 5,
    name: " Cyber Risk Assessment",
    description: "Incident response and advanced threat hunting",
    description1: "Gain unprecedented visibility into your organization's security landscape with our comprehensive risk assessment methodology. We identify, analyze, and prioritize risks based on your business context, moving beyond generic vulnerability scanning to deliver actionable intelligence. Our assessments provide a clear hierarchy of remediation priorities, helping you allocate resources efficiently and demonstrate due diligence to stakeholders."
  },
  {
    id: 6,
    name: "ISO 27001 Certification",
    description: "ISMS framework development and implementation",
    description1: "Achieve internationally recognized security credentials with our ISO 27001 certification services. We demystify the certification process by translating complex requirements into practical security controls that work within your organizational context. Our structured methodology takes you from initial gap analysis through implementation and successful certification, building a sustainable information security management system that delivers ongoing business value beyond the certificate."
  },
  {
    id: 7,
    name: "PCI DSS Compliance",
    description: "Gap assessment against latest PCI DSS requirements",
    description1: "Secure payment ecosystems and reduce breach risk with our specialized PCI DSS compliance services. We guide you through the entire compliance journey—from gap assessment and remediation to documentation and validation—creating a sustainable program that exceeds audit requirements. Our pragmatic approach focuses on both technical controls and business processes, minimizing scope where possible while maintaining robust cardholder data protection."
  }
]

const ServiceCardItem = ({ service, index }: { service: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const isEven = (index + 1) % 2 === 0;
  // const number = (index + 1).toString().padStart(2, "0")  


  return (
    <motion.div
      key={service.id}
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : isEven ? -100 : 100 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full gap-4 px-4 md:px-8"
    >
      {isEven ? (
        <div className="flex justify-center w-full">
          <Card className="relative py-8 md:py-12 overflow-hidden bg-black border-opacity-35 border-gray-700 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CardHeader>
              <Image
                src={`/icons/${service.id}.png`}
                alt="icon"
                width={100}
                height={100}
                className="rounded-full border-2 mb-6 border-white"
              />
             <CardTitle className=" block md:hidden text-primary-yellow text-xl md:text-2xl">{service.name}</CardTitle> 
             <CardDescription className="block md:hidden text-gray-300 text-sm md:text-base">{service.description}</CardDescription> 
              {service.description1 && <CardDescription className="text-sm md:text-base md:text-white ">{service.description1}</CardDescription>}
            </CardHeader>
           
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      ) : (
        <div className="hidden md:flex justify-center">
          <span className="text-primary-yellow text-6xl font-bold ">{service.name}</span>
        </div>
      )}

      {isEven ? (
        <div className="hidden md:flex justify-center">
          <span className="text-primary-yellow text-6xl font-bold o">{service.name}</span>
        </div>
      ) : (
        <div className="flex justify-center w-full">
          <Card className="relative py-8 md:py-12 overflow-hidden bg-black border-opacity-35  border-gray-700 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CardHeader>
              <Image
                src={`/icons/${service.id}.png`}
                alt="icon"
                width={80}
                height={80}
                className="rounded-full border-2 mb-6 border-white"
              />
            <CardTitle className=" block md:hidden text-primary-yellow text-xl md:text-2xl">{service.name}</CardTitle> 
            <CardDescription className="block md:hidden text-gray-300 text-sm md:text-base">{service.description}</CardDescription> 
              {service.description1 && <CardDescription className="text-sm md:text-base md:text-white">{service.description1}</CardDescription>}
            </CardHeader>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      )}
    </motion.div>
  );
};

export function ServiceCard() {
  return (
    <div className="grid grid-cols-1 gap-8 w-full px-4 pb-16 md:px-12 overflow-x-hidden">
      {services.map((service, index) => (
        <ServiceCardItem key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}

