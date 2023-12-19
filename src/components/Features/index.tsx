import React, { useEffect } from "react";
import { cn } from "lib/utils";
import TextFormat from "lib/helpers/TextFormat";
import { motion } from "framer-motion";
import { styles } from "../../style";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../../utils/motion";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
const Features = () => {
   const sections = [
      {
         heading: "Hassle-Free Financing",
         paragraph: "Quick and easy access to funds for your construction materials.",
         img: " /images/landing-page/scale.svg",
      },
      {
         heading: "B2B Payments Made Easy",
         paragraph: "Pay your suppliers directly with buildCap.",
         img: " /images/landing-page/scale.svg",
      },
      {
         heading: "Secure Transactions",
         paragraph: "Safe and direct payments to suppliers.",
         img: " /images/landing-page/scale.svg",
      },
      {
         heading: "Boost Your Business",
         paragraph: "Take on more projects with reliable financial support.",
         img: " /images/landing-page/scale.svg",
      },
   ];
   const [index, setIndex] = React.useState(0);
   const [active, setActive] = React.useState(sections[index]);

   return (
      <>
         <motion.div variants={textVariant(0.1)}>
            <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8">
               <h1 className="text-center text-[1.6rem] font-[700] leading-[130%] tracking-[0.02rem] text-white transition-all duration-500 ease-in-out md:max-w-[90rem] md:leading-[4rem] md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[2.6rem] xxl:text-[3rem]">
                  <TextFormat
                     text={`Why Choose buildCap `}
                     keyword={"buildCap"}
                     keywordClassName=" 
                     text-secondary-1 transition-all duration-500 ease-in-out"
                  />
               </h1>
            </div>
         </motion.div>

         <div className=" mt-8">
            {/* <div className="flex w-full justify-center">
            <img src={active.img} alt="" className="w-full" />
         </div> */}
            <div className="mt-8 flex w-full justify-center gap-4">
               {sections.map((item, key) => {
                  return (
                     <div
                        onClick={() => {
                           setActive(item);
                        }}
                        className={cn(
                           ` h-[4px] w-20       cursor-pointer rounded-lg border bg-white transition-all duration-500  ease-in-out ${
                              item.heading === active.heading && "opacity-100"
                           }`,
                        )}
                        key={key}
                     ></div>
                  );
               })}
            </div>
            <section className="mt-12 grid grid-cols-1 gap-[3rem] rounded-lg md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4">
               {sections.map((item, key) => {
                  return (
                     <motion.div key={key} variants={fadeIn("left", "spring", key * 0.5, 0.75)}>
                        <Tilt
                           options={{
                              max: 45,
                              scale: 1,
                              speed: 450,
                           }}
                           className="bg-tertiary w-full rounded-2xl border border-white/90 px-2  xxl:p-5"
                        >
                           <article
                              onClick={() => {
                                 setActive(item);
                              }}
                              className={cn(
                                 `cursor-pointer rounded-lg px-2  py-12 transition-all duration-500 ease-in-out  xxl:px-5 ${
                                    item.heading === active.heading && "opacity-100"
                                 }`,
                              )}
                           >
                              <div className="flex flex-col gap-4  px-2">
                                 <h3 className=" font-semibold md:text-base">{item.heading}</h3>
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
         </div>
      </>
   );
};

export default SectionWrapper(Features, "features");
