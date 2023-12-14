import React, { useEffect } from "react";
import { cn } from "lib/utils";
const Features = () => {
   const sections = [
      {
         heading: "Scalability",
         paragraph:
            "Our advanced Build Cap allows your business to effortlessly expand its capabilities as your need to grow ensuring flexibility and adaptability for the future.",
         img: " /images/landing-page/scale.svg",
      },
      {
         heading: "Facile Integration",
         paragraph:
            "Incorporating our Build Cap into your app’s navigation not only enriches the user experience but also opens doors to increased efficiency, engagement, and user satisfaction. ultimately benefiting your business.",
         img: " /images/landing-page/scale.svg",
      },
      {
         heading: "Customizable Workflow",
         paragraph:
            "Our Build Cap offers the flexibility of customizable workflows, empowering your business to tailor its functionalities to suit your unique processes and preference.",
         img: " /images/landing-page/scale.svg",
      },
   ];
   const [index, setIndex] = React.useState(0);
   const [active, setActive] = React.useState(sections[index]);

   return (
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
                        ` border h-[4px]       w-20 bg-white transition-all duration-500 ease-in-out rounded-lg opacity-50 cursor-pointer ${
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
                  <article
                     onClick={() => {
                        setActive(item);
                     }}
                     className={cn(
                        `px-5 py-12 border transition-all duration-500 ease-in-out rounded-lg opacity-50 cursor-pointer ${
                           item.heading === active.heading && "opacity-100"
                        }`,
                     )}
                     key={key}
                  >
                     <div className="flex flex-col gap-4  px-2">
                        <h3 className="font-semibold text-2xl">{item.heading}</h3>
                        <p className="text-[1.1rem] leading-[130%] md:leading-[2rem] tracking-[0.02rem] md:tracking-[0.0225rem]">
                           {item.paragraph}
                        </p>
                     </div>
                  </article>
               );
            })}
         </section>
      </div>
   );
};

export default Features;
