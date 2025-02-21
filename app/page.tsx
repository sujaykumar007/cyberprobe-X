import { Header } from "./custom-components/Header";
import { VelocityScrolling } from "./custom-components/VelocityScrolling";
import WhyUs from "./custom-components/whyUs";
import SwiperComponent from "./custom-components/swiper";
import SwiperComponents from "./custom-components/swiperComponents";
import Advantage from "./custom-components/Advantage";
import Stats from "./custom-components/stats";
import { Traning } from "./custom-components/Traning";


export default function Home(){  
 
  return (
    <div className="w-full pb-40 max-h-full flex flex-col gap-y-40 items-center justify-center bg-black ">
      <div className={`text-center  w-[95%]  rounded-3xl mt-16 md:mt-8 lg:mt-20 overflow-hidden `}  style={{ backgroundColor: "var(--primary-blue)"}}>
        <Header />
      </div>
      <div style={{ marginTop: -40 }}>
        <VelocityScrolling />
      </div>
      <div className="w-[100%] container">
        <WhyUs />
      </div>
     
      <div className=" flex flex-col gap-20" >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold  text-white">
        Comprehensive <span className="text-primary-yellow">Cybersecurity</span> Services
        </h1>
      <SwiperComponent/>
      </div>
      <div className="w-[100%] container">
      <SwiperComponents/>
      </div>
      <div className="w-[100%] container">
        <Advantage/>
      </div>
      <div className="w-[100%] container">
        <Stats/>
      </div>
      <div className="w-[100%] container">``
        <Traning />
      </div>
    </div>
  );
}
