import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function Advantage() {
  const advantages = [
    {
      title: "Regional Expertise",
      desc: "We possess deep regional expertise and understanding of local regulations, ensuring compliance and effective cybersecurity strategies tailored to your needs.",
    },
    {
      title: "Experienced Team",
      desc: "Our experienced team holds international certifications, bringing global best practices to your organization's cybersecurity initiatives.",
    },
    {
      title: "Proven Track Record",
      desc: "We have a proven track record with similar organizations, demonstrating our ability to deliver comprehensive yet practical security solutions that drive real business value.",
    },
  ];

  return (
    <div className="w-full px-5 max-h-full flex flex-col gap-y-20 items-center justify-center bg-black ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold  text-white">
        The <span className="text-primary-yellow">CyberProbeX </span> Advantage
        </h1>
    <ShineBorder
      className=" rounded-lg bg-black h-[900px] md:h-[700px] lg:h-[400px]"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
        
      <div className=" grid md:grid-cols-3 grid-cols-1 h-[500px] w-full gap-6 lg:h-[250px] lg:flex-row my-10 px-10">
        {advantages.map((advantage, index) => (
          <MagicCard
            key={index}
            className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-white text-lg bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition"
            gradientColor="#262626"
          >
            <h3 className="text-xl font-semibold mb-2 text-primary-yellow">{advantage.title}</h3>
            <p className="text-md opacity-80">{advantage.desc}</p>
          </MagicCard>
        ))}
      </div>
    </ShineBorder>
    </div>
  );
}
