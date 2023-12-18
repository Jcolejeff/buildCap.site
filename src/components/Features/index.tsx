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
            <div className="gap-6 flex justify-center items-center 2xl:gap-8 flex-col">
               <h1 className="font-[700] header__hero--heading-gradient text-center text-[1.6rem] md:text-[4.4rem] leading-[130%] md:leading-[5rem] tracking-[0.02rem] md:tracking-[0.0225rem] transition-all duration-500 ease-in-out md:max-w-[90rem] lg:ml-[-0.2rem]">
                  <TextFormat
                     text={`Why Choose buildCAP `}
                     keyword={"The BuildCAP"}
                     keywordClassName="header__hero--heading-gradient   transition-all duration-500 ease-in-out"
                  />
               </h1>
            </div>
         </motion.div>

         <div className=" mt-20">
            {/* <div className="flex w-full justify-center">
            <img src={active.img} alt="" className="w-full" />
         </div> */}
            <div className="flex mt-8 gap-4 w-full justify-center">
               {sections.map((item, key) => {
                  return (
                     <div
                        onClick={() => {
                           setActive(item);
                        }}
                        className={cn(
                           ` border h-[4px]       w-20 bg-white transition-all duration-500 ease-in-out rounded-lg  cursor-pointer ${
                              item.heading === active.heading && "opacity-100"
                           }`,
                        )}
                        key={key}
                     ></div>
                  );
               })}
            </div>
            <section className="grid mt-12 md:grid-cols-[1fr_1fr_1fr] gap-[3rem] rounded-lg">
               {sections.map((item, key) => {
                  return (
                     <motion.div key={key} variants={fadeIn("up", "spring", key * 0.5, 0.75)}>
                        <Tilt
                           options={{
                              max: 45,
                              scale: 1,
                              speed: 450,
                           }}
                           className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-gray-600"
                        >
                           <article
                              onClick={() => {
                                 setActive(item);
                              }}
                              className={cn(
                                 `px-5 py-12  transition-all duration-500 ease-in-out rounded-lg  cursor-pointer ${
                                    item.heading === active.heading && "opacity-100"
                                 }`,
                              )}
                           >
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
      </>
   );
};

export default SectionWrapper(Features, "features");
