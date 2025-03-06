import "../styles/colors.css";

;

export const Header = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/vedieo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col text-white items-center justify-center bg-black bg-opacity-70 gap-y-12">
        <h1 className="text-white text-5xl md:text-8xl font-bold drop-shadow-lg">
          <span className="text-primary-yellow">Defense</span> Starts with <span className="text-primary-yellow">Offense</span>
        </h1>
        <h1 className="leading-[1.75] text-xl md:text-2xl font-semibold text-gray-400">
         "Our offensive security approach transforms reactive protection into proactive resilience, <br />safeguarding your most valuable digital assets "
        </h1>
      </div>
    </header>
  );
};

