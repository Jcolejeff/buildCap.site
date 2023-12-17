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
         heading: "Digital Receipts",
         paragraph:
            "Go green with our digital receipts – a modern, eco-friendly solution for seamless transaction records.",
      },
      {
         image: "/images/receipts/iconTwo.svg",
         heading: "Paperless Tracking",
         paragraph:
            "Ditch the paper clutter. Easily track and manage your expenses with our efficient paperless receipt system.",
      },
      {
         image: "/images/receipts/icon.svg",
         heading: "Instant Confirmation",
         paragraph:
            "Receive instant confirmation of your transactions with our swift digital receipt system. No more waiting!.",
      },
      {
         image: "/images/receipts/iconFour.svg",
         heading: "Organized Records",
         paragraph:
            "Keep your financial records organized effortlessly. Our receipts make tracking and managing expenses a breeze.",
      },
   ];
   return (
      <div>
         <p className="text-[1rem] md:text-[1.2rem] md:leading-[1.7rem] tracking-[0.00563rem] max-w-[37.75rem] mb-3">
            BuildCAP is a business management, finance and marketing tool that helps your business
            be more organized and grow!
         </p>
         <div className="hidden md:flex gap-4">
            <a
               href="#"
               className={cn(
                  "md:w-fit px-6  py-4  justify-center items-center rounded-md bg-primary-1 shadow-1 hover:opacity-90 active:opacity-100 transition-opacity duration-300 ease-in-out hidden md:flex md:px-16 ",
               )}
            >
               <span className="text-white font-[500] leading-[1.5rem] tracking-[0.02875rem]">
                  Get Started
               </span>
            </a>
            <a
               href={url("request-demo")}
               className={cn(
                  "md:w-fit px-6  py-4  justify-center items-center rounded-md border-primary-1 border  hover:opacity-90 active:opacity-100 transition-opacity duration-300 ease-in-out hidden md:flex md:px-12 ",
               )}
            >
               <span className="font-[500] leading-[1.5rem] tracking-[0.02875rem]">
                  Request a Demo
               </span>
            </a>
         </div>
         <section className="grid md:mt-20 md:grid-cols-[1fr_1fr] gap-[3rem] rounded-lg">
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
                        <article className="shadow-md px-5 py-8 md:py-12 gap-12 justify-between  flex flex-col  items-start border-[1px] rounded-2xl">
                           <img src={url(item.image)} alt="" />
                           <div className="flex flex-col gap-4  px-2">
                              <h3 className="font-semibold text-2xl">{item.heading}</h3>
                              <p className="text-[1.1rem] leading-[130%] md:leading-[2rem] tracking-[0.02rem] md:tracking-[0.0225rem]">
                                 {item.paragraph}
                              </p>
                           </div>
                        </article>
                     </Tilt>
                  </motion.div>
               );
            })}
         </section>
      </div>
   );
};

export default SectionWrapper(InfoGrid, "infoGrid");
