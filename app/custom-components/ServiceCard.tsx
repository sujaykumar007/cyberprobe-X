import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
 
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



const services = [
  {
    id: 1,
    name: "Cyber Insurance Advisory & Consultancy",
    description: "Gap analysis against regional grameworks( SAMA,NESA,PDPL,CBB etc )",
    description1: "Compliance roadmap development and implemtation guidance",
  },
  {
    id: 2,
    name: "vCISO",
    description: "Strategic security roadmap development and implementation oversight",
    description1:'Security governance farmework design and contionuous security posture improvement'
  },
  {
    id: 3,
    name: "vDPO",
    description: "Strategic security roadmap development and implementaion oversight",
    description1:'Security governance framework design and continuous security posture improvement'
  },
  {
    id: 4,
    name: "Regulatory Compliance",
    description: "Gap analysis against regional grameworks( SAMA,NESA,PDPL,CBB etc )",
    description1:"Compliance roadmap development and implemtation guidance"
  },
  {
    id: 5,
    name: "Regulatory Assessment",
    description: "Incident response and advanced thread hunting",
    descriprion1:'Evidence collection and chain of custody managment'
  },
  {
    id: 6,
    name: "IS027001 Certification",
    description: "ISMS framework development and implementation",
    descriprion1:"Pre-certification readliness assessment and audit support"
  },
  {
    id: 7,
    name: "Penetration Testing",
    description: "Security control implementation guidance",
    descriprion1:"Mitigation strategy development and execution support"
  },
  {
    id: 8,
    name: "PCI DSS Cmpliance",
    description: "Gap assessment against latest PCI DSS requirements",
    descriprion1:"Remediation planning and certification Preparation"
  },
  {
    id: 9,
    name: "web application Pentestisting",
    description: "Identifying and fixing security vulnerabilities in web applications",
  },
  {
    id: 10,
    name: "Cloud Penetration Testing",
    description: "Assessing cloud environments for misconfigurations and security risks.",
  },
  {
    id: 11,
    name: "API Pentestisting",
    description: "Securing APIs by identifying vulnerabilities that could lead to data breaches.",
  },
  {
    id: 12,
    name: "Network Pentestisting",
    description: "Evaluating network infrastructure to detect and mitigate security flaws",
  },
  {
    id: 13,
    name: "Mobile application Pentestisting",
    description: "Testing mobile applications for vulnerabilities in storage, communication, and authentication",
  },
  {
    id: 14,
    name: "IoT Pentestisting",
    description: "Uncovering security weaknesses in IoT devices and their ecosyste",
  },
];


export function ServiceCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">  
   { services.map((service, index) => (
      <Card className="relative w-[550px] py-12 overflow-hidden  bg-black border-opacity-35 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl">{service.name}</CardTitle>
          <CardDescription className="text-gray-300">
            {service.description}
          </CardDescription>
          <CardDescription>
            {service.description1}
          </CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <BorderBeam duration={8} size={100} />
      </Card>
    ))}
    
    </div>
  );
}
