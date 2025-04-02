

import WhyUs from "./custom-components/whyUs";
import SwiperComponent from "./custom-components/swiper";
import SwiperComponents from "./custom-components/swiperComponents";
import Advantage from "./custom-components/Advantage";
import { Training } from "./custom-components/Training";
import ContactForm from "./custom-components/ContactForm";
import HeaderBelowText from "./custom-components/HeaderBelowText";
import { Header } from "./custom-components/Header";
import Approach from "./custom-components/approach";


export default function Home(){  
 
  return (
    <div className="w-full pb-40 h-full flex flex-col gap-y-10 md:gap-y-10 items-center justify-center bg-black ">
      
      <div className="text-center  w-[100%]  rounded-3xl  overflow-hidden mt-20 md:mt-0 pt-10 md:pt-0">
      <Header/>
      </div>

      <div className="lg:w-[100%] md:w-[90%] container gap-y-20 "> 
        <HeaderBelowText />
      </div>
     

      <div className="lg:w-[100%] md:w-[90%] container gap-y-20 ">
        <WhyUs />
      </div>
     
      <div className="lg:w-[100%] md:w-[90%] container gap-y-20 md:mb-16">
      <SwiperComponents/>
      </div>

       
      <div className="lg:w-[100%] md:w-[90%] container gap-y-20 md:mb-24">
        <Approach/>
      </div>
       
      <div className=" lg:w-[100%] md:w-[90%] flex flex-col items-center justify-center text-center px-4 container gap-y-10 md:mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-5xl font-extrabold  text-white">
        Comprehensive <span className="text-primary-yellow">Cybersecurity</span> Services
        </h1>
        <div>
      <SwiperComponent/>
      </div>
      </div>


      <div className="lg:w-[100%] md:w-[90%] container gap-y-20 md:mb-12">
        <Advantage/>
      </div>

      <div className="lg:w-[100%] md:w-[90%] container gap-y-20"> 
    <Training/>
      </div>

      <div className="md:w-[70%] w-[90%]  container">
      <div className="text-center pb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-yellow">Get in Touch</h1>
          <p className="text-xl md:text-3xl font-semibold text-white">With Our Team</p>
        </div>
        <ContactForm />
      </div>
    
    </div>
  );
}