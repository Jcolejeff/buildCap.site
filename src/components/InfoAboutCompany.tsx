import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
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
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
         >
            <div className="relative h-[230px] w-full">
               <img src={image} alt={name} className="object-cover rounded-2xl h-full w-full" />

               <div className="absolute inset-0 flex justify-end m-3 card-img__hover">
                  <div
                     onClick={() => window.open(source_code_link, "_blank")}
                     className="black-gradient w-10 h-10 mr-2 rounded-full flex justify-center items-center cursor-pointer"
                  >
                     <img
                        src={"/images/landing-page/zcomb.svg"}
                        alt={"github"}
                        className="h-1/2 w-1/2 object-contain"
                     />
                  </div>

                  <div
                     onClick={() => window.open(live_url_link, "_blank")}
                     className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                     <img
                        src={"/images/landing-page/zcomb.svg"}
                        alt={"website link"}
                        className="h-1/2 w-1/2 object-contain"
                     />
                  </div>
               </div>
            </div>
            <div className="mt-5">
               <h3 className="text-white font-bold text-[24px]">{name}</h3>
               <p className="text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
               {tags.map((tag: any) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color} `}>
                     #{tag.name}
                  </p>
               ))}
            </div>
         </Tilt>
      </motion.div>
   );
};
const InfoAboutCompany = () => {
   return (
      <>
         <motion.div variants={textVariant(0.1)}>
            <h3 className={`${styles.sectionHeadText}`}>
               <span className="section__gradient">Yeah, I work hard </span> 💼{" "}
            </h3>
            <p className="text-secondary font-[16px] mt-4 leading-[30px]">
               Each project is unique. Here are some of my recent works.
            </p>
         </motion.div>

         <div className="my-20 flex flex-wrap gap-7 justify-between">
            {projects.map((project, index) => (
               <Card key={`project-${index}`} index={index} {...project} />
            ))}
         </div>
      </>
   );
};

export default SectionWrapper(InfoAboutCompany, "work");
