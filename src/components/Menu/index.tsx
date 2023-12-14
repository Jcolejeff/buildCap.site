import menuIcon from "assets/menuIcon.svg";
import { useState } from "react";
import { useLockBodyScroll } from "lib/hooks/useLockBodyScroll";

import { createPortal } from "react-dom";
import { url } from "lib/utils";

interface INavDrop {}

const Menu = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   useLockBodyScroll(menuOpen);
   const ServicesData = [
      { title: "Home", link: "/" },
      { title: "Hire", link: "/hire" },
      { title: "Join The Pool", link: "/join" },
   ];
   const CompanyData = [
      // { title: "About Us", link: "/about-us" },
      { title: "Contact Us", link: "/contact-us" },
      { title: "Terms of Service", link: "/Terms-of-use-The-pool.pdf" },
      { title: "Privacy Policy", link: "/Privacy-Policy-pool.pdf" },
   ];

   return (
      <>
         <div
            onClick={() => setMenuOpen(true)}
            className="grid place-items-center relative z-[100] rounded-[3.5rem] w-[3rem] h-[3rem] border border-[#E8E7EA] cursor-pointer
   bg-slate-100 active:bg-transparent transition-colors ease-in-out duration-300
      "
         >
            {/* <img src={url(menuIcon?.src)} alt="" /> */}
            <img src={url("/svgs/menuIcon.svg")} alt="" />
         </div>
         {createPortal(
            <div
               className={`fixed h-full z-[100] ${
                  menuOpen ? `translate-x-0` : `!-translate-x-full`
               } transition-transform duration-300 ease-in-out  w-[100vw] overflow-auto top-0 bottom-0 right-0 left-0 bg-white z-10 flex flex-col px-container-base`}
            >
               <div className="w-full flex items-center justify-between border-b border-b-gray-300 lg:border-b-secondary-1 pb-[0.75rem] md:pb-[1rem] pt-[1.5rem]">
                  <a href="/" className="flex items-center gap-4">
                     <img src={url("/images/logo.png")} alt="" className="w-8 md:w-12" />
                     <p className="font-bold text-sm md:text-2xl">Build Cap</p>
                  </a>

                  <svg
                     onClick={() => setMenuOpen(false)}
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-x"
                  >
                     <path d="M18 6 6 18" />
                     <path d="m6 6 12 12" />
                  </svg>
               </div>
               <div className="py-[2rem] flex flex-col gap-[1.5rem]">
                  <div className="flex flex-col gap-[1rem]">
                     <h4 className="text-secondary-2 font-[700]">Documentation</h4>
                     {ServicesData.map((i, idx) => (
                        <span key={idx} className="list-none group cursor-pointer">
                           <span className="text-[15px] !text-secondary-5 group-hover:!text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out">
                              <a href={url(`${i?.link}`)}>{i?.title}</a>
                           </span>
                        </span>
                     ))}
                  </div>
                  <div className="flex flex-col gap-[1rem]">
                     <h4 className="text-secondary-2 font-[700]">Company </h4>
                     {CompanyData.map((i, idx) => (
                        <span key={idx} className="list-none group cursor-pointer">
                           <span className="text-[15px] !text-secondary-5 group-hover:!text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out">
                              <a href={url(`${i?.link}`)}>{i?.title}</a>
                           </span>
                        </span>
                     ))}
                  </div>
               </div>

               <div className="flex items-center justify-center  mt-14   gap-4 transition-all duration-500 ease-in-out mb-5 md:mb-0 md:ml-[-6px]">
                  <a href="#" className="">
                     <div className="flex items-center  gap-2 justify-center bg-primary-1 py-2 px-4 pr-6 rounded-lg">
                        <div>
                           <a className="text-white text-base font-semibold tracking-wider block px-6 py-2">
                              Sign Up
                           </a>
                        </div>
                     </div>
                  </a>
                  <a href="#" className="">
                     <div className="flex items-center gap-2 justify-center bg-primary-1  py-2 px-4 pr-6 rounded-lg">
                        <div>
                           <a className="text-white text-base font-semibold tracking-wider block px-6 py-2">
                              Login
                           </a>
                        </div>
                     </div>
                  </a>
               </div>
            </div>,
            document.body,
         )}
      </>
   );
};

export default Menu;
