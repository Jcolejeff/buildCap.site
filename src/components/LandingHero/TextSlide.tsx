import React from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";
import { useRef } from "react";
import { url } from "lib/utils";
import { RatIcon, StarIcon, Stars } from "lucide-react";
import TextFormat from "lib/helpers/TextFormat";
const HeroSlide = () => {
   const slideRef = useRef<SlideshowRef>(null);
   const responsiveSettings = [
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 300,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
   ];

   const reviews = [
      {
         color: "text-[#ffc504]",
         text: `Contractors.`,
         date: "15 may 2023",
      },
      {
         color: "text-[#EB6802]",
         text: `Subcontractors.`,
         date: "25 june 2023",
      },
      {
         color: "text-primary-1 ",
         text: `Suppliers.`,
         date: " 10 February 2023",
      },
   ];

   return (
      <span>
         <Slide
            vertical={true}
            arrows={false}
            ref={slideRef}
            slidesToScroll={1}
            slidesToShow={1}
            indicators={false}
            cssClass=""
            duration={2500}
            //    responsive={responsiveSettings}
         >
            {reviews.map((item, index) => {
               return (
                  <h1
                     className={`font-[700] ${item.color} max-w-[80rem] text-center text-[2rem]  leading-[130%] tracking-[0.02rem] text-secondary-2 transition-all duration-500 ease-in-out md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[3.4rem] xxl:text-[5rem] xxl:leading-[5rem]`}
                  >
                     <TextFormat
                        text={item.text}
                        keyword={item.text}
                        keywordClassName={`${item.color} transition-all duration-500 ease-in-out `}
                     />
                  </h1>
               );
            })}
         </Slide>
      </span>
   );
};

export default HeroSlide;
