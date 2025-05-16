'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

interface PageData {
    title: string
    heading: string
    content: string
    subContent: string
    image: string
    image2: string
    heading2:string
    heading3:string
    image3:string
    extraSection?: {
      heading: string
      points: string[]
    }
  }
  
  const data: Record<string, PageData> = {
    'web-application-pentesting': {
      title: 'Web Application Pentesting',
      heading: 'What is a Web Application Penetration Test?',
      content: `Web Application Penetration Testing is a proactive security assessment designed to identify and exploit vulnerabilities within web applications, APIs, and associated backend systems. By simulating real-world attack scenarios, we uncover security flaws that could lead to data breaches, unauthorised access, and business disruptions.`,
      subContent: `This testing helps assess authentication mechanisms, session management, input validation, and overall security controls, ensuring your web applications can withstand cyber threats.`,
      image: '/web-hero-1.png',
      heading2:"Our Methodology",
      heading3:"Why Is Web Application Penetration Testing Important?",
      image2: '/web-hero-3.png',
      image3: '/web-hero-2.png',
      extraSection: {
        heading: 'When To Conduct Web Application Penetration Testing',
        points: [
          'Before launching new applications to production',
          'After significant updates or changes to existing applications',
          'During the development process as part of a secure development lifecycle',
          'Periodically (quarterly or bi-annually) for critical applications',
          'When implementing new security controls or technologies',
        ]
      }
    },
  }
  

const KnowMore: FC = () => {
  const params = useParams()
  const router = useRouter()
  const name = params?.name as string
  const pageData = data[name]

  if (!pageData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl">Page not found</h1>
      </div>
    )
  }

  return (
    <div className="w-full bg-black min-h-screen text-white p-4 sm:p-10 ">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 mb-28 mt-10 md:mt-0">
      <div className="flex-1">
        <h1 className="text-[#b1d450] text-4xl font-bold mb-6">
          {pageData.heading}
        </h1>
        <p className="text-white font-normal mb-4 text-lg">{pageData.content}</p>
        <p className="mb-6 text-lg">{pageData.subContent}</p>
        <button className="bg-[#b1d450] text-black font-bold py-2 px-4 rounded" onClick={() => router.push(`/contact`)}>
            GET IN TOUCH
        </button>
      </div>
      <div className='flex-1 md:ml-28'>
        <Image
          src={pageData.image}
          alt={pageData.title}
          width={600}
          height={400}          
        />
      </div>
    </div>
  
    <div className='h-full flex flex-col justify-center items-center mb-20'>
        <div className='text-[#b1d450] text-center text-4xl md:text-6xl font-bold mb-16'>
            {pageData.heading2}
        </div>
      <Image src={pageData.image2} alt="web-hero" width={1300} height={1000} />
    </div>

    <div className='h-full flex flex-col justify-center items-center mb-20'>
        <div className='text-[#b1d450] text-center text-2xl md:text-5xl font-bold mb-10 md:mb-20'>
            {pageData.heading3}
        </div>
      <Image src={pageData.image3} alt="web-hero" width={1200} height={1000} />
    </div>
    
  
    {pageData.extraSection && (
     <div className="max-w-5xl mx-auto text-white mb-24">
     <Card className="bg-[#111111] border border-[#1f1f1f] shadow-lg p-14">
       <CardHeader>
         <CardTitle className="text-2xl md:text-4xl text-[#b1d450] font-semibold text-center ">
         {pageData.extraSection.heading}
         </CardTitle>
       </CardHeader>
       <CardContent>
         <ul className="space-y-4 mt-4">
           {pageData.extraSection.points.map((point, index) => (
             <li key={index} className="flex items-start gap-3">
               <CheckCircle className="text-[#b1d450] w-6 h-6 shrink-0" />
               <span className="text-lg text-white">{point}</span>
             </li>
           ))}
         </ul>
       </CardContent>
     </Card>
   </div>
    )}
  </div>
  
  )
}

export default KnowMore
