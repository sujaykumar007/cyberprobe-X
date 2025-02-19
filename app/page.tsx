
import { Header } from "./custom-components/Header";

import Testing from "./custom-components/Testing";
import { VelocityScrolling } from "./custom-components/VelocityScrolling";
import WhyUs from "./custom-components/whyUs";
import SwiperComponent from "./custom-components/swiper";


export default function Home(){  
 
  return (
    <div className="w-full max-h-full flex flex-col items-center justify-center bg-black ">
      <div className={`text-center mb-10 w-[95%]  rounded-3xl mt-16 md:mt-8 lg:mt-20 overflow-hidden `}  style={{ backgroundColor: "var(--primary-blue)"}}>
        <Header />
      </div>
      <div className="mb-10" style={{ marginTop: -40 }}>
        <VelocityScrolling />
      </div>
      <div className="w-[100%] container">
        <WhyUs />
      </div>
      <div>
      <Testing />
      </div>
      <div>
      <SwiperComponent/>
      </div>
    </div>
  );
}
