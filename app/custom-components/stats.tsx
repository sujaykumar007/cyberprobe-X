
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Stats() {
  const advantages = [
    {
      title: "Global Cybersecurity Job Openings",
      value:3.5,
      number:" Million",        
      desc: "We possess deep regional expertise and understanding of local regulations, ensuring compliance and effective cybersecurity strategies tailored to your needs.",
    },
    {
      title: "Global Cybercrime Costs",
      desc: "Expected annually by 2025, underscoring the financial impact of security breaches.",
      value:6,
      number:" Trillion"
    },
    {
      title: "Breaches Due to Human Error",
      desc: "Emphasizing the importance of practical security training for employees.",
      value:95,
      number:"%"
    },
  ];

  return (
    <div className="w-full px-5 max-h-full flex md:flex-row flex-col gap-10 items-center justify-center bg-black ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold  text-white">
        Key   <span className="text-primary-yellow">Cybersecurity </span> Stats
        </h1>
        
      <div className=" grid  grid-cols-1  w-full md:w-[50%] gap-4  lg:flex-row my-10 px-10 text-white">
        {advantages.map((advantage, index) => (
        //   <Card
        //     key={index}
        //     className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-white text-lg bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition"
        
        //   >
        //     <h3 className="text-xl font-semibold mb-2 text-primary-yellow">{advantage.title}</h3>
        //     <p className="text-md opacity-80">{advantage.desc}</p>
        //   </Card>
                        <Accordion type="single" collapsible key={index}>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-primary-yellow text-lg ">{advantage.title}</AccordionTrigger>
                    <AccordionContent className="text-gray-500 text-lg ">
                        <p className="text-4xl opacity-80 my-4 text-white"> {advantage.value} {advantage.number}</p>
                        
                   {advantage.desc}
                    </AccordionContent>
                </AccordionItem>
                </Accordion>

        ))}
      </div>
    </div>
  );
}
