
import { Header } from "./components/Header";
import Testing from "./components/Testing";
import Integrations from "./components/design";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12 bg-blue-500 w-[95%] h-screen rounded-3xl mt-4 md:mt-8 lg:mt-20 overflow-hidden">
        <Header />
      </div>
      <div>
      <Testing />
      </div>
      <Integrations />
      
        
    
    </div>
  );
}
