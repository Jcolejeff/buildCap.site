import TextFormat from "lib/helpers/TextFormat";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import { url } from "lib/utils";

import { cn } from "lib/utils";
interface IProps {}

const LandingPageHero = () => {
   return (
      <section className="w-full pt-[3rem]        md:pt-[5rem] container px-container-base lg:px-container-lg xl:px-container-xl  relative max-w-[1700px]">
         <div className="w-full flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[3.5rem] md:gap-[2.75rem]  justify-center  relative ">
            <div className=" gap-6 flex justify-center items-center  2xl:gap-8 flex-col">
               <div className="flex items-center gap-4 bg-secondary-1/25 py-3 px-6 rounded-full ">
                  <img src="images/landing-page/zcomb.svg" alt="" />
                  <p className=" font-[600] text-sm md:text-lg">Backed by Z Combinator</p>
                  <img src="images/landing-page/arrow.svg" alt="" />
               </div>
               <h1 className="font-[700] text-secondary-2 text-center    text-[2.3rem] md:text-[4.4rem] leading-[130%] md:leading-[5rem] tracking-[0.02rem] md:tracking-[0.0225rem] transition-all duration-500 ease-in-out max-w-[80rem] lg:ml-[-0.2rem]">
                  <TextFormat
                     text={`Financial solutions built for subcontractors`}
                     keyword={"The Pool"}
                     keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                  />
               </h1>
               <Fade bottom>
                  <h2 className="font-[500] text-center text-secondary-2 text-[1.18rem] md:text-[1.3rem] xxl:text-[1.3rem] leading-[2.2rem] md:leading-[2rem] max-w-[38.875rem]  xxl:max-w-[45.875rem]">
                     Empowering you to do the best work of your life with efficiency, speed and
                     accuracy.
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
                  className="flex flex-col rounded-lg items-end justify-end w-full h-full min-h-[40.375rem] max-h-[42rem] 2xl:min-h-[44.375rem] 2xl:max-h-[50rem] relative"
                  style={{
                     background: `linear-gradient(rgba(184, 181, 181, 0.2), rgba(187, 181, 181, 0.3)), url(
                        '/images/hero.jpg'
                     )`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                  }}
               >
                  <div className="bg-white    px-4 items-center gap-4 py-2 shadow-1 md:shadow-2 absolute  md:relative flex  top-[73%] md:top-[-10%] left-[10%] md:left-[10%] rounded-md">
                     <h4 className="text-[1rem] md:text-[1.2rem] font-[600] leading-[2.25rem] tracking-[0.02875rem]  ">
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