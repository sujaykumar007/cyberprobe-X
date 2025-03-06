
export function VelocityScrolling() {
  return (
    
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
    
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-7xl overflow-hidden overflow-y-hidden">
      
      </div>

    
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black hidden sm:block"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black hidden sm:block"></div>
    
    </div>
   

  );
}
