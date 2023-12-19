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
         contentStyle={{ background: "#1d1836", color: "#fff", padding: "4rem" }}
         contentArrowStyle={{ borderRight: "7px solid #232631" }}
         // date={experience.date}
         iconStyle={{ background: experience.iconBg }}
         icon={
            <div className="flex justify-center items-center w-full h-full">
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
         <div>
            <h3 className="text-white text-[17px] md:text-[26px] font-bold">{experience.title}</h3>
         </div>

         <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point: any, index: number) => (
               <li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-[16px] pl-1 tracking-wider"
               >
                  {point}
               </li>
            ))}
         </ul>
      </VerticalTimelineElement>
   );
};

const HowToSections = () => {
   return (
      <>
         <motion.div variants={textVariant(0.1)}>
            <div className="gap-6 flex h-full justify-center items-center 2xl:gap-8 flex-col">
               <h5 className="font-[700] text-white text-center text-[1.6rem] md:text-[3rem] leading-[130%] md:leading-[4rem] tracking-[0.02rem] md:tracking-[0.0225rem] transition-all duration-500 ease-in-out md:max-w-[80rem] lg:ml-[-0.2rem]">
                  <TextFormat
                     text={`Empower Your Subcontractors`}
                     keyword={"Subcontractors"}
                     keywordClassName=" 
                     text-secondary-1 transition-all duration-500 ease-in-out"
                  />
                  🤝
               </h5>
               <p className=" font-[16px] md:text-lg mt-4 leading-[30px]">
                  Let's find out how buildCap can help you achieve your goals.
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
