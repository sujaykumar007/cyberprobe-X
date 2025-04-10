import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Traning() {
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
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary-yellow">
              What makes CyberprobeX different from other cybersecurity companies?
              </AccordionTrigger>
              <AccordionContent>
              Our philosophy is simple — “Defense Starts with Offense.” We combine offensive cybersecurity techniques with industry-standard compliance solutions to provide end-to-end protection for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary-yellow">
              How can CyberprobeX help with Risk Assessment?
              </AccordionTrigger>
              <AccordionContent>
              We conduct detailed risk assessments to identify vulnerabilities, assess their impact, and provide risk mitigation strategies to secure your digital assets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-primary-yellow">
              How are your services priced?
              </AccordionTrigger>
              <AccordionContent>
              Our pricing is customized based on the project scope, complexity, and region. Contact us for a free consultation and get a tailored quote.
              </AccordionContent>
            </AccordionItem> <AccordionItem value="item-5">
              <AccordionTrigger className="text-primary-yellow">
              Do you offer retainer services?
              </AccordionTrigger>
              <AccordionContent>
              Yes, we offer monthly, quarterly, and yearly retainer packages for ongoing security assessments and compliance management.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
