                                               


import { Card } from "@/components/ui/card";

export function Training() {
  const advantages = [
    {
      title: "Ethical Hacking",
      desc: "Our ethical hacking courses combine theory with real-world scenarios, providing hands-on experience to combat emerging cyber threats effectively.",
    },
    {
      title: "SOC & SIEM Monitoring",
      desc: "Gain practical experience with real-world tools and threats through our SOC & SIEM monitoring training, enhancing your incident response capabilities.",
    },
    {
      title: "Cyber Tabletop Exercises",
      desc: "Practice incident response with our cyber tabletop exercises, preparing your organization for potential security breaches and minimizing their impact.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center bg-black py-12">
      <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-5xl font-extrabold text-white text-center">
        Practical Security Training By{" "}
        <span className="text-primary-yellow">CyberProbeX</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-6 mt-6">
        {advantages.map((advantage, index) => (
          <Card
            key={index}
            className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-white text-lg bg-black rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-primary-yellow">
              {advantage.title}
            </h3>
            <p className="text-md opacity-80">{advantage.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

