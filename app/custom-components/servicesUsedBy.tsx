import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Apoorva Verma",
    position: "COO, Rattle",
    text: "As a security specialist, I've used a handful of pen-testing software, but I stayed with Astra a few years back",
    avatar: "/avatars/apoorva.png",
    rating: 4,
  },
  {
    name: "Richard Ganpatsingh",
    position: "CTO, Intelligent Health",
    text: "Astra Pentest was the solid support via Slack, making communication easy and efficient. The platform itself is user-friendly, and the Jira integration greatly streamlined issue resolution",
    avatar: "/avatars/richard.png",
    rating: 4,
  },
  {
    name: "Clinton Skakun",
    position: "CEO, DedupeIy",
    text: "As a security specialist, I've used a handful of pen-testing software, but I stayed with Astra a few years back",
    avatar: "/avatars/clinton.png",
    rating: 4,

  },
  {
    name: "Ankur Rawal",
    position: "CTO, Zenduty",
    text: "We are impressed with Astra's dashboard and its amazing ‘automated and scheduled’ scanning capabilities. Integrating these scans into our CI/CD pipeline was a breeze and saved us a lot of time.",
    avatar: "/avatars/ankur.png",
    rating: 5,
  },
  {
    name: "Michal Pěkný",
    position: "CTO, LutherOne",
    text: "Astra's exceptional manual penetration testing and efficient automated tools have provided invaluable insights into our application's security, making them our trusted partner.",
    avatar: "/avatars/michal.png",
    rating: 5,
  },
  {
    name: "Michal Pěkný",
    position: "CTO, LutherOne",
    text: "Astra's exceptional manual penetration testing and efficient automated tools have provided invaluable insights into our application's security, making them our trusted partner.",
    avatar: "/avatars/michal.png",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 mt-12 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white" >Loved by engineering & security teams globally</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-lg rounded-2xl bg-white">
              <CardContent>
                <p className="text-gray-700 italic">“{testimonial.text}”</p>
                <div className="mt-4 flex items-center space-x-3">
                  {/* {testimonial.avatar && (
                    <Avatar src={testimonial.avatar} className="w-10 h-10" />
                  )} */}
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                {testimonial.rating && (
                  <div className="mt-3 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                )}
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
