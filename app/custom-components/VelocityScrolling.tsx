import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function VelocityScrolling() {
  return (
    
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
    
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-7xl overflow-hidden overflow-y-hidden">
        <VelocityScroll className="text-white text-sm">
        Our offensive security approach transforms reactive protection into proactive resilience, safeguarding your most valuable digital assets .
        </VelocityScroll>
      </div>

    
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black hidden sm:block"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black hidden sm:block"></div>
    
    </div>
   

  );
}
