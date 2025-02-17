import { Header } from "./custom-components/Header";
import Testing from "./custom-components/Testing";
import { VelocityScrolling } from "./custom-components/VelocityScrolling";


export default function Home(){
  return (
    <div className="w-full max-h-full flex flex-col items-center justify-center bg-black">
      <div className="text-center mb-10 w-[95%] h-screen rounded-3xl mt-4 md:mt-8 lg:mt-20 overflow-hidden"  style={{ backgroundColor: "var(--primary-blue)"}}>
        <Header />
      </div>
      <div className="mt-14 mb-14">
        <VelocityScrolling />
      </div>
      <div className="mb-10">
      <Testing />
      </div>
    </div>
  );
}
