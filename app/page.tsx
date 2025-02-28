

import { Header } from "./custom-components/Header";
import { VelocityScrolling } from "./custom-components/VelocityScrolling";
import WhyUs from "./custom-components/whyUs";
import SwiperComponent from "./custom-components/swiper";
import SwiperComponents from "./custom-components/swiperComponents";
import Advantage from "./custom-components/Advantage";
import Stats from "./custom-components/stats";
import { Training } from "./custom-components/Training";
import ContactForm from "./custom-components/ContactForm";
import { AccordionDemo } from "./custom-components/faq";



    
export default function Home(){  
 
  return (
    <div className="w-full pb-40 max-h-full flex flex-col gap-y-20 md:gap-y-32 items-center justify-center bg-black ">
      
      <div className={`text-center  w-[95%]  rounded-3xl  overflow-hidden mt-20 md:mt-0 pt-10 md:pt-0`}  style={{ backgroundColor: "var(--primary-blue)"}}>
        <Header />
      </div>
      <div style={{ marginTop: -40 }}>
        <VelocityScrolling />
      </div>
      <div className="w-[100%] container">
        <WhyUs />
      </div>
     
      <div className=" flex flex-col items-center justify-center text-center  px-4 container ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold pb-14 text-white">
        Comprehensive <span className="text-primary-yellow">Cybersecurity</span> Services
        </h1>
      <SwiperComponent/>
      </div>
      <div className="w-[100%] container gap-y-20">
      <SwiperComponents/>
      </div>
      <div className="w-[100%] container gap-y-20">
        <Advantage/>
      </div>
      <div className="w-[100%] container gap-y-20">
        <Stats/>
      </div>
      <div className="w-[100%] container gap-y-20"> 
    <Training/>
      </div>
      <div className="text-white w-[100%] conatiner">
 <AccordionDemo/>
      </div>
      <div className="md:w-[30%] w-[70%]  container">
      <div className="text-center pb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-yellow">Get in Touch</h1>
          <p className="text-xl md:text-3xl font-semibold text-white">With Our Team</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
