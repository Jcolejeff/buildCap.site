import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import TextFormat from "lib/helpers/TextFormat";
interface CardProps {
   name: string;
   index: number;
   description: string;
   tags: any;
   image: string;
   live_url_link: string;
   source_code_link: string;
}

const Card = ({
   name,
   index,
   description,
   tags,
   image,
   live_url_link,
   source_code_link,
}: CardProps) => {
   return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
         <Tilt
            options={{
               max: 45,
               scale: 1,
               speed: 450,
            }}
            className="bg-tertiary p-12 pb-20 rounded-2xl w-full border border-white/90"
         >
            {/* <div className="relative h-[230px] w-full">
               <img src={image} alt={name} className="object-cover rounded-2xl h-full w-full" />

              
            </div> */}
            <div className="mt-5">
               <h3 className="text-white font-bold text-[24px]">{name}</h3>
               <p className="text-secondary text-[14px]">{description}</p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
               {tags.map((tag: any, index: number) => (
                  <li
                     key={`experience-point-${index}`}
                     className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                     {tag.name}
                  </li>
               ))}
            </ul>
            {/* <div className="mt-4 flex flex-wrap gap-2">
               {tags.map((tag: any) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color} `}>
                     #{tag.name}
                  </p>
               ))}
            </div> */}
         </Tilt>
      </motion.div>
   );
};
const InfoAboutCompany = () => {
   return (
      <section className="flex">
         <motion.div variants={textVariant(0.1)}>
            <div className="gap-6 flex h-full justify-center items-center 2xl:gap-8 flex-col">
               <p className=" font-[16px] mt-4 leading-[30px]">buildCap PRODUCTS</p>
               <h5 className="font-[700] text-white text-center text-[1.6rem] md:text-[3rem] leading-[130%] md:leading-[4rem] tracking-[0.02rem] md:tracking-[0.0225rem] transition-all duration-500 ease-in-out md:max-w-[80rem] lg:ml-[-0.2rem]">
                  <TextFormat
                     text={`Free your business from the broken repayment chain`}
                     keyword={"business"}
                     keywordClassName=" 
                     text-secondary-1 transition-all duration-500 ease-in-out"
                  />
               </h5>
            </div>
         </motion.div>

         <div className=" flex w-full flex-wrap gap-7 justify-center">
            {projects.map((project, index) => (
               <Card key={`project-${index}`} index={index} {...project} />
            ))}
         </div>
      </section>
   );
};

export default SectionWrapper(InfoAboutCompany, "work");
