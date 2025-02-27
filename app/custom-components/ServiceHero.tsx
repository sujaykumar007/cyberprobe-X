import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function ServiceHero() {
    const services = [
        {
          id: 1,
          name: "web application Pentestisting",
          description: "Identifying and fixing security vulnerabilities in web applications",
        },
        {
          id: 2,
          name: "Cloud Penetration Testing",
          description: "Assessing cloud environments for misconfigurations and security risks.",
        },
        {
          id: 3,
          name: "API Pentestisting",
          description: "Securing APIs by identifying vulnerabilities that could lead to data breaches.",
        },
        {
          id: 4,
          name: "Network Pentestisting",
          description: "Evaluating network infrastructure to detect and mitigate security flaws",
        },
        {
          id: 5,
          name: "Mobile application Pentestisting",
          description: "Testing mobile applications for vulnerabilities in storage, communication, and authentication",
        },
        {
          id: 6,
          name: "IoT Pentestisting",
          description: "Uncovering security weaknesses in IoT devices and their ecosyste",
        },
      ];
      

  return (
    <div className="w-full px-5 md:max-h-full  flex flex-col gap-y-20 items-center justify-center bg-black ">
       
    <ShineBorder
      className=" rounded-lg bg-black h-[1100px] md:h-[750px]  lg:h-[530px]"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
         <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold py-10 text-white items-center justify-center">
              Major  services
        </h1>
      <div className=" grid md:grid-cols-3 grid-cols-1 h-[500px] w-full gap-6 lg:h-[250px] lg:flex-row my-10 px-10">
        {services.map((advantage, index) => (
          <MagicCard
            key={index}
            className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-white text-lg bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition"
            gradientColor="#262626"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-500">{advantage.name}</h3>
            {/* <p className="text-md opacity-80">{advantage.desc}</p> */}
          </MagicCard>
        ))}
      </div>
    </ShineBorder>  
    </div>
  );
}
