import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";


export function ScrollAnimation() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden" style={{color:'var(--primary-dark)' }}>
      <VelocityScroll defaultVelocity={4} numRows={2}>Penetration Testing</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
