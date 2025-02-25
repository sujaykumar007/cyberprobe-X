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
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
          <span className="text-primary-yellow">Defense</span> Starts with <span className="text-primary-yellow">Offence</span>
        
        </h1>
      </div>
    </header>
  );
};

