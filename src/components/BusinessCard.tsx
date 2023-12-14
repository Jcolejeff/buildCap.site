import Fade from "react-reveal/Fade";

interface Iprops {
   adImage: string;
   price: string;
   title: string;
   description: string;
   link?: string;
   location: string;
   expiryDate?: string;
}

const BusinessCard = ({
   adImage,
   description,
   location,
   price,
   title,
   link = `/a7f1477dc36041aabd2c40d5c8598e3f`,
}: Iprops) => {
   return (
      <div className="flex flex-col shadow-1 mb-4 justify-between w-full rounded-[8px] cursor-pointer h-max group">
         <div
            className="relative w-full  mb-[1rem] rounded-[8px] rounded-b-none  border-b-warning-1 overflow-hidden 
          cursor-cardCursor
        after:w-full after:h-full after:absolute after:bg-transparent hover:after:bg-black/10 after:transition-all after:duration-300 after:top-0 after:left-0 transition-all ease-in-out duration-300
        "
         >
            <img
               src={adImage ? adImage : "/images/landing-page/businessImage.png"}
               className="w-full h-full max-h-[250px] object-cover transition-transform duration-500 ease-in-out bg-top bg-cover group-hover:scale-105"
            />
         </div>
         <div className="px-6 pb-4">
            <div className="flex items-center justify-between w-full ">
               <h5 className="text-[14px] xxl:text-lg  leading-[21px] tracking-[0.1px] font-[500] ">
                  {title}
               </h5>
               <span className="text-white text-[14px] leading-[21px] tracking-[0.1px] font-[300] "></span>
            </div>

            <p className="mb-2  text-[13px]  xxl:text-base leading-[22px] tracking-[0.1px] font-[300]">
               {description}
            </p>
         </div>
      </div>
   );
};

export default BusinessCard;
