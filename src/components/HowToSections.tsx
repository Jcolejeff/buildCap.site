import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TextFormat from "lib/helpers/TextFormat";

const Card = ({ experience, index }: { experience: any; index: number }) => {
   return (
      <VerticalTimelineElement
         className=""
         contentStyle={{ background: "#1d1836", color: "#fff" }}
         contentArrowStyle={{ borderRight: "7px solid #232631" }}
         // date={experience.date}
         iconStyle={{ background: experience.iconBg }}
         icon={
            <div className="flex h-full w-full items-center justify-center">
               {/* <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="h-[60%] w-[60%] object-contain"
               /> */}
               <p className={`text-xl font-bold ${index == 1 ? "text-white" : "text-black"}`}>
                  {index + 1}
               </p>
            </div>
         }
      >
         <article className="p-4 lg:p-8 xxl:p-12">
            <div>
               <h3 className="text-[17px] font-bold text-white lg:text-[20px] xxl:text-[26px]">
                  {experience.title}
               </h3>
            </div>

            <ul className="ml-5 mt-5 list-disc space-y-2">
               {experience.points.map((point: any, index: number) => (
                  <li
                     key={`experience-point-${index}`}
                     className="text-white-100 pl-1 text-[16px] tracking-wider"
                  >
                     {point}
                  </li>
               ))}
            </ul>
         </article>
      </VerticalTimelineElement>
   );
};

const HowToSections = () => {
   return (
      <>
         <motion.div variants={textVariant(0.1)}>
            <div className="flex h-full flex-col items-center justify-center gap-6 2xl:gap-8">
               <h5 className="text-center text-[1.6rem] font-[700] leading-[130%] tracking-[0.02rem] text-white transition-all duration-500 ease-in-out md:max-w-[80rem] md:text-[2.6rem] md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[3rem] lg:leading-[4rem]">
                  <TextFormat
                     text={`Empower Your Subcontractors`}
                     keyword={"Subcontractors"}
                     keywordClassName=" 
                     text-secondary-1 transition-all duration-500 ease-in-out"
                  />
                  🤝
               </h5>
               <p className=" mt-4 font-[16px] leading-[30px] md:text-lg">
                  Let's find out how buildCAP can help you achieve your goals.
               </p>
            </div>
         </motion.div>

         <div className="mt-20 flex flex-col">
            <VerticalTimeline>
               {experiences.map((experience, index) => (
                  <Card key={index} experience={experience} index={index} />
               ))}
            </VerticalTimeline>
         </div>
      </>
   );
};

export default SectionWrapper(HowToSections, "work");
