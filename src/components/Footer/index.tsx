import { Input } from "components/ui/input";
import { capitalizeFirstLetter } from "lib/helpers";
import { Icon } from "astro-icon";
import { url } from "lib/utils";
import { FooterLinksData } from "./data";
interface IFooter {}

const Footer = ({}: IFooter) => {
   return (
      <div className="w-full bg-primary-2  flex flex-col  max-w-[1700px] container px-container-base lg:px-container-lg xl:px-container-xl overflow-x-hidden relative pt-[10rem]">
         <div className="grid grid-cols-1 md:flex  md:justify-between  gap-[4rem] md:gap-[5.57rem] pb-12 md:pb-[8.29rem] border-b border-b-secondary-8/40">
            <div className="  gap-8  flex  flex-col  ">
               <div className="">
                  <a href="/" className="flex items-center gap-4">
                     <img src={url("/images/logo.png")} alt="" className="w-12" />
                     <p className="font-bold text-2xl">Build Cap</p>
                  </a>
               </div>
            </div>
            {FooterLinksData?.map((i, idx) => (
               <div key={idx}>
                  <h6 className="font-[700] text-[19px] text-xl  leading-[2rem] tracking-[-0.0125rem] mb-[1.25rem]">
                     {capitalizeFirstLetter(i?.data?.category)}
                  </h6>
                  <p className="text-secondary-8 text-[14px]  tracking-[0.00625rem] mb-4">
                     {i?.body}
                  </p>
                  <ul className="flex flex-col gap-[0.83rem] ">
                     {i?.data?.links?.map((i: any, idx: any) => (
                        <li
                           key={idx}
                           className=" hover:text-secondary-3 transition-colors duration-300 ease-in-out cursor-pointer text-[17px]  tracking-[0.00625rem]"
                        >
                           <a href={i?.url}>{i?.title}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
         <div className=" py-6 pt-9 gap-8 md:gap-0 flex flex-col-reverse md:flex-row justify-between">
            <p className="  font-semibold leading-[2rem] tracking-[0.00625rem]">
               Copyright © {new Date().getFullYear()} AI Assistant All Rights Reserved
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
