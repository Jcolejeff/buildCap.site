import { url } from "lib/utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./data";

const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
   },
   mobile: {
      breakpoint: { max: 740, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
   },
};

const TestimonialsSection = () => {
   const CustomArrowLeft = ({ onClick }: any) => {
      return (
         <button
            onClick={onClick}
            className="absolute left-[2%] z-10  bottom-[32%] text-lg bg-white text-primary-1 p-2 px-3 rounded-full hover:bg-gray-700"
         >
            &larr;
         </button>
      );
   };

   const CustomArrowRight = ({ onClick }: any) => {
      return (
         <button
            onClick={onClick}
            className="absolute right-[2%] z-10  bottom-[32%] text-lg bg-white text-primary-1 p-2 px-3 rounded-full hover:bg-gray-700"
         >
            &rarr;
         </button>
      );
   };

   return (
      <div className="flex flex-col  gap-[5.5rem]">
         <Carousel
            customLeftArrow={<CustomArrowLeft />}
            customRightArrow={<CustomArrowRight />}
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            customTransition="all 3"
            transitionDuration={500}
            containerClass="carousel-container  transition-all duration-500 ease-in-out "
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={""}
            dotListClass="custom-dot-list-style   transition-all duration-500 ease-in-out "
            itemClass="carousel-item-padding-40-px   transition-all duration-500 ease-in-out "
            className="h-[35 rem]"
         >
            {data?.map((i, idx) => (
               <div
                  key={idx}
                  className="px-8 py-8 h-full md:mx-[1.375rem]  transition-all duration-500 ease-in-out  bg-primary-1 rounded-[1.13rem] flex flex-col justify-between "
               >
                  <div>
                     <h6 className="text-white text-[1.5rem] font-[600] leading-[150%] -tracking-[0.035rem] mb-[1.45rem]">
                        {i?.data?.shortSentence}
                     </h6>
                     <p className="text-secondary-11 text-[1.2rem] leading-[150%] font-[500] -tracking-[0.03rem] mb-[3.33rem] overflow-ellipsis">
                        {i?.data?.longSentence}
                     </p>
                  </div>

                  <div className="flex items-center justify-center gap-[1.89rem] border-t border-t-secondary-12/[0.2] pt-[4rem]">
                     <div className="h-[6rem] w-[6rem] rounded-[23px] overflow-hidden">
                        <img
                           src={url(i?.data?.image)}
                           alt={i?.data?.image}
                           className="w-full h-full bg-center bg-cover"
                        />
                     </div>
                     <div className="flex flex-col">
                        <h5 className="text-white text-[1.7rem] font-jakarta font-[700] leading-[150%] -tracking-[0.05113rem]">
                           {i?.data?.name}
                        </h5>
                        <span className="text-secondary-13  leading-[150%] -tracking-[0.0265rem]">
                           {i?.data?.works}
                        </span>
                     </div>
                  </div>
               </div>
            ))}
         </Carousel>
      </div>
   );
};

export default TestimonialsSection;
