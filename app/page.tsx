
import { Header } from "./components/Header";
import Testing from "./components/Testing";
import { ScrollAnimation } from "./components/velocityAnimation";



export default function Home(){
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12 w-[95%] h-screen rounded-3xl mt-4 md:mt-8 lg:mt-20 overflow-hidden"  style={{ backgroundColor: "var(--primary-blue)"}}>
        <Header />
      </div>
      <div className="mt-10 mb-10">
        <ScrollAnimation />
      </div>
      <div>
      <Testing />
      </div>
    </div>
  );
}
