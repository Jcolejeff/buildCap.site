import { cn, url } from "lib/utils";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

const InfoGrid = () => {
   const data = [
      {
         image: "/images/receipts/iconOne.svg",
         heading: "Connect with Main Contractors on buildCAP",
         paragraph:
            "Start by linking with your main contractor on buildCAP and get your project rolling!.",
      },
      {
         image: "/images/receipts/iconTwo.svg",
         heading: "Upload your project details to the buildCAP platform",
         paragraph:
            "Easily upload your project agreement and material requirements for swift approval.",
      },
      {
         image: "/images/receipts/icon.svg",
         heading: "Get Your Materials Financed",
         paragraph:
            "Receive direct financing for your materials, ensuring no delays in your project.",
      },
   ];
   return (
      <div>
         <p className="mb-12 max-w-[37.75rem] text-[1.4rem] font-semibold tracking-[0.00563rem] md:text-[1.6rem] md:leading-[1.7rem]">
            How it works for Subcontractors
         </p>

         <section className="grid gap-[3rem] rounded-lg md:mt-12 md:gap-[1rem] lg:grid-cols-[1fr_1fr]">
            {data.map((item: any, index: number) => {
               return (
                  <motion.div variants={fadeIn("down", "spring", index * 0.5, 0.75)}>
                     <Tilt
                        options={{
                           max: 45,
                           scale: 1,
                           speed: 950,
                        }}
                        className=""
                     >
                        <article className="flex flex-col items-start justify-between gap-4 rounded-2xl border-[1px]  px-5 py-8  shadow-md xxl:gap-12 xxl:py-12">
                           <img src={url(item.image)} alt="" className="w-12 xl:w-12" />
                           <div className="flex flex-col gap-2 px-2  xxl:gap-4">
                              <h3 className="font-semibold md:text-base ">{item.heading}</h3>
                              <p className="text-[0.8rem] text-sm leading-[130%] tracking-[0.02rem] md:leading-[2rem] md:tracking-[0.0225rem]">
                                 {item.paragraph}
                              </p>
                           </div>
                        </article>
                     </Tilt>
                  </motion.div>
               );
            })}
         </section>
         <div className="mt-12 hidden items-center  gap-4 md:flex">
            <a
               href="#contact"
               className={cn(
                  "hidden items-center  justify-center  rounded-md bg-primary-1 px-6 py-4 shadow-1 transition-opacity duration-300 ease-in-out hover:opacity-90 active:opacity-100 md:flex md:w-fit lg:px-16 ",
               )}
            >
               <span className="font-[500] leading-[1.5rem] tracking-[0.02875rem] text-white">
                  Get Started
               </span>
            </a>
            <a
               href="#contact"
               className={cn(
                  "hidden items-center  justify-center  rounded-md border border-primary-1 px-6 py-4  transition-opacity duration-300 ease-in-out hover:opacity-90 active:opacity-100 md:flex md:w-fit lg:px-12 ",
               )}
            >
               <span className="font-[500] leading-[1.5rem] tracking-[0.02875rem]">
                  Request a Demo
               </span>
            </a>
         </div>
      </div>
   );
};

export default SectionWrapper(InfoGrid, "infoGrid");
