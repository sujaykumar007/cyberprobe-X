import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="w-full px-4 md:px-8 py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
        {/* Text Section */}
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold">FAQs</h1>
          <h1 className="text-primary-yellow text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3">
            A Dedication to Supporting All
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mt-3">
            Aspects of Your Life.
          </h1>
          <div className="mt-4">
            <p>Can't find what you are looking for?</p>
            <p>Let's Talk: Engage with Us in a Conversation Tailored Just for You.</p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primary-yellow">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary-yellow">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other components' aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary-yellow">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
