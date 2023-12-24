import { Input } from "components/ui/input";
import { capitalizeFirstLetter } from "lib/helpers";
import { Icon } from "astro-icon";
import { url } from "lib/utils";
import { FooterLinksData } from "./data";
interface IFooter {}

const Footer = ({}: IFooter) => {
   return (
      <div className="container relative  flex w-full  max-w-[1700px] flex-col overflow-x-hidden bg-primary-20 px-container-base pt-[10rem] lg:px-container-lg xl:px-container-xl">
         <div className="grid grid-cols-1 gap-[4rem]  border-b  border-b-secondary-8/40 pb-12 md:flex md:justify-between md:gap-[5.57rem] md:pb-[8.29rem]">
            <div className="  flex  flex-col  gap-8  ">
               <div className="">
                  <a href="/" className="flex items-center gap-4">
                     <img
                        src={url("/images/n-logo.png")}
                        alt=""
                        className="w-24 object-contain lg:w-32"
                     />
                  </a>
               </div>
            </div>
            {FooterLinksData?.map((i, idx) => (
               <div key={idx}>
                  <h6 className="mb-[1.25rem] text-[19px] text-xl  font-[700] leading-[2rem] tracking-[-0.0125rem]">
                     {capitalizeFirstLetter(i?.data?.category)}
                  </h6>
                  <p className="mb-4 text-[14px]  tracking-[0.00625rem] text-secondary-8">
                     {i?.body}
                  </p>
                  <ul className="flex flex-col gap-[0.83rem] ">
                     {i?.data?.links?.map((i: any, idx: any) => (
                        <li
                           key={idx}
                           className="flex cursor-pointer items-center text-[17px] tracking-[0.00625rem] transition-colors duration-300 ease-in-out  hover:text-secondary-3"
                        >
                           <a href={i?.url}>{i?.title} </a>
                           {i?.soon && (
                              <span className="ml-2 whitespace-nowrap rounded-full bg-green-500 px-2 py-1 text-[8px] capitalize text-white ">
                                 coming soon
                              </span>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
         <div className=" flex flex-col-reverse justify-between gap-8 py-6 pt-9 md:flex-row md:gap-0">
            <p className="  font-semibold leading-[2rem] tracking-[0.00625rem]">
               Copyright © {new Date().getFullYear()} Buildcap technologies ltd All Rights Reserved
            </p>
            <div className="flex w-1/2   gap-8">
               <img src={url("/images/footer/fb.svg")} alt="" />
               <img src={url("/images/footer/insta.svg")} alt="" />
               <img src={url("/images/footer/link.svg")} alt="" />
               <img src={url("/images/footer/x.svg")} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Footer;
