import React from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";
import { useRef } from "react";
import { url } from "lib/utils";
import { RatIcon, StarIcon, Stars } from "lucide-react";
const ReviewSlide = () => {
   const slideRef = useRef<SlideshowRef>(null);
   const responsiveSettings = [
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 3,
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
   const buttonStyle = {
      width: "30px",
      background: "none",
      border: "0px",
   };

   const properties = {
      prevArrow: (
         <button style={{ ...buttonStyle }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
               <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
            </svg>
         </button>
      ),
      nextArrow: (
         <button style={{ ...buttonStyle }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
               <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
            </svg>
         </button>
      ),
   };
   const images = [
      "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
   ];

   const reviews = [
      {
         img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
         text: ` “buildCAP app is absolutely amazing! It's incredibly user-friendly and has completely transformed how I handle my finances."`,
         date: "15 may 2023",
      },
      {
         img: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
         text: ` “I have been using this app for a while now and I can say that it has made my life so much easier. I can now manage my finances with ease.`,
         date: "25 june 2023",
      },
      {
         img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",

         text: `buildCAP app is absolutely amazing! It's incredibly user-friendly and has completely transformed how I handle my finances.`,
         date: " 10 February 2023",
      },
   ];

   return (
      <section className=" pb-12 ">
         <div className="w-full    ">
            <Slide
               // vertical
               arrows={false}
               ref={slideRef}
               slidesToScroll={1}
               slidesToShow={3}
               indicators={true}
               cssClass="py-4"
               duration={4000}
               {...properties}
               responsive={responsiveSettings}
            >
               {reviews.map((item, index) => {
                  return (
                     <article
                        className="h-full rounded-[2rem] border bg-white px-8 py-24 shadow-lg xl:mx-16 "
                        key={index}
                     >
                        <div className="space-y-2">
                           <div className="flex justify-between">
                              <div className="flex gap-2">
                                 <StarIcon className="w-4 fill-current text-orange-400/80" />
                                 <StarIcon className="w-4 fill-current text-orange-400/80" />
                                 <StarIcon className="w-4 fill-current text-orange-400/80" />
                                 <StarIcon className="w-4 fill-current text-orange-400/80" />
                                 <StarIcon className="w-4 fill-current text-orange-400/80" />
                              </div>
                              <img src={item.img} alt="" className="h-10 w-10 rounded-full" />
                           </div>
                           <div>
                              <p className="text-base font-semibold ">{item.text}</p>
                           </div>
                           <p className="text-sm">{item.date}</p>
                        </div>

                        {/* <span>Slide {index + 1}</span> */}
                     </article>
                  );
               })}
            </Slide>
            <div className="my-4 flex items-center justify-center gap-6 lg:my-14">
               <button
                  className=" rounded-full border border-white p-2  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-sm lg:p-3"
                  type="button"
                  onClick={() => slideRef?.current?.goBack()}
               >
                  <img src={url("/images/left-arrow.png")} alt="" />
               </button>
               <button
                  className=" rounded-full border border-white p-2  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-sm lg:p-3"
                  type="button"
                  onClick={() => slideRef?.current?.goNext()}
               >
                  <img src={url("/images/right-arrow.png")} alt="" />
               </button>
            </div>
         </div>
      </section>
   );
};

export default ReviewSlide;
