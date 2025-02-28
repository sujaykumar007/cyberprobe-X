"use client"
import { useEffect, useState, useRef } from "react"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { Card } from "@/components/ui/card"

export default function Stats() {
  const advantages = [
    {
      title: "Global Cybersecurity Job Openings",
      value: 3.5,
      number: " Million",
      desc: "We possess deep regional expertise and understanding of local regulations, ensuring compliance and effective cybersecurity strategies tailored to your needs.",
    },
    {
      title: "Global Cybercrime Costs",
      desc: "Expected annually by 2025, underscoring the financial impact of security breaches.",
      value: 6,
      number: " Trillion",
    },
    {
      title: "Breaches Due to Human Error",
      desc: "Emphasizing the importance of practical security training for employees.",
      value: 95,
      number: "%",
    },
  ]

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className="w-full px-5 max-h-full flex flex-col gap-y-10 items-center justify-center bg-black">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white">
        Key <span className="text-primary-yellow">Cybersecurity </span> Stats
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[100%] gap-10 my-10 px-10 text-white">
        {advantages.map((advantage, index) => (
          <Card
            key={index}
            className="cursor-pointer gap-4 flex flex-col items-center justify-center py-14 px-6 text-center text-white text-lg bg-black rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-primary-yellow">{advantage.title}</h3>
            <h1 className="text-4xl font-semibold mb-2 text-white">
              {isVisible && <NumberTicker value={advantage.value} />}
              {advantage.number}
            </h1>
            <p className="text-md opacity-80">{advantage.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
