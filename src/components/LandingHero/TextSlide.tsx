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
         color: "orange-text-gradient",
         text: `Contractors`,
         date: "15 may 2023",
      },
      {
         color: "header__hero--heading-gradient",
         text: `Subcontractors`,
         date: "25 june 2023",
      },
      {
         color: "blue-text-gradient ",
         text: `Suppliers`,
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
                     className={`font-[700] ${item.color} text-center    text-[2rem] md:text-[3rem] tracking-[0.02rem] md:tracking-[0.0225rem] transition-all duration-500 ease-in-out max-w-[80rem]`}
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
