import TextFormat from "lib/helpers/TextFormat";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import HeroSlide from "./TextSlide";
import { url } from "lib/utils";

import { cn } from "lib/utils";
interface IProps {}

const LandingPageHero = () => {
   const [index, setIndex] = useState(0);

   return (
      <section className="w-full pt-[3rem]        md:pt-[5rem] container px-container-base lg:px-container-lg xl:px-container-xl  relative max-w-[1700px]">
         <div className="w-full flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[0.5rem] md:gap-[2.75rem]  justify-center  relative ">
            <div className=" gap-6 flex justify-center items-center  2xl:gap-8 flex-col">
               <div className="flex items-center gap-4 bg-secondary-1/5 border py-3 px-6 rounded-full ">
                  <img src="images/landing-page/zcomb.svg" alt="" />
                  <p className=" font-[600] text-sm md:text-lg">Backed by Z Combinator</p>
                  <img src="images/landing-page/arrow.svg" alt="" />
               </div>
               <div>
                  <h1 className="font-[700] text-secondary-2 text-center    text-[2rem] md:text-[3rem] leading-[130%] md:leading-[4rem] tracking-[0.02rem] md:tracking-[0.0225rem] transition-all duration-500 ease-in-out max-w-[80rem] lg:ml-[-0.2rem]">
                     <TextFormat
                        text={`Financial solutions built for`}
                        keyword={"The BuildCAP"}
                        keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                     />
                  </h1>
                  <HeroSlide />
               </div>

               <Fade bottom>
                  <h2 className="font-[500] text-center text-secondary-2 text-[1.18rem] md:text-[1.3rem] xxl:text-[1.3rem] leading-[2.2rem] md:leading-[2rem] max-w-[38.875rem]  xxl:max-w-[45.875rem]">
                     Revolutionizing Construction Financing for Subcontractors in Nigeria
                  </h2>
               </Fade>

               <div className="flex items-center   gap-4 transition-all duration-500 ease-in-out mb-5">
                  <a href="h" className="">
                     <div className="flex items-center justify-center bg-black px-4 py-3 md:py-4 md:px-4 rounded-lg">
                        <p className="text-white  text-sm md:text-[1.1rem] font-bold tracking-wider">
                           Get Started
                        </p>
                     </div>
                  </a>
               </div>
            </div>

            <section>
               {/* <div className="flex flex-col   rounded-lg  md:justify-center w-full h-full relative  ">
                  <img
                     src="/images/hero.jpg"
                     className="z-20  md:mt-12 w-full h-full object-cover object-center  "
                  />
               </div> */}
               <div
                  className="flex flex-col rounded-lg items-center justify-center md:items-end md:justify-end w-full h-full min-h-[30rem] md:min-h-[40.375rem] max-h-[42rem] 2xl:min-h-[44.375rem] 2xl:max-h-[50rem] relative "
                  style={{
                     background: ` url(
                        '/images/bg.svg'
                     )`,
                     backgroundSize: "contain",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                  }}
               >
                  <img src="/images/hero-bg.png" className="z-20   w-full h-full object-cover   " />
                  <div className="bg-white  z-50   px-4 items-center gap-4 py-2 shadow-1 md:shadow-2 absolute  md:relative flex  top-[70%] md:top-[-6%] left-[20%] md:left-[-8%] rounded-md">
                     <h4 className="text-[0.7rem] md:text-[1.2rem] font-[600] leading-[2.25rem] tracking-[0.02875rem]  ">
                        Your funds has been successfully transferred
                     </h4>

                     <img src={url("/images/products/Success.svg")} alt="" className="" />
                  </div>
               </div>
            </section>
         </div>
      </section>
   );
};

export default LandingPageHero;
