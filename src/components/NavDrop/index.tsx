import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   NavigationMenuViewport,
} from "components/ui/navigation-menu";
import { capitalizeFirstLetter } from "lib/helpers";
import { url } from "lib/utils";
interface INavDrop {
   darkNavBg?: boolean;
}

const NavDrop = ({ darkNavBg }: INavDrop) => {
   const toolsData = [
      {
         category: "features",
         data: [
            {
               title: "Automated Lead Generation",
               desc: "Automate your lead generation process and get more leads with our AI powered chatbot.",
               link: "/features/automated-lead-generation",
            },
            {
               title: "Automated Customer Support",
               desc: "Automate your customer support process and get more leads with our AI powered chatbot.",
               link: "/features/automated-customer-support",
            },
            {
               title: "Automated Sales",
               desc: "Automate your sales process and get more leads with our AI powered chatbot.",
               link: "/features/automated-sales",
            },
            {
               title: "Automated Marketing",
               desc: "Automate your marketing process and get more leads with our AI powered chatbot.",
               link: "/features/automated-marketing",
            },
         ],
      },
      {
         category: "use-cases",
         data: [
            {
               title: "Automated Lead Generation",
               desc: "Automate your lead generation process and get more leads with our AI powered chatbot.",
               link: "/features/automated-lead-generation",
            },
            {
               title: "Automated Customer Support",
               desc: "Automate your customer support process and get more leads with our AI powered chatbot.",
               link: "/features/automated-customer-support",
            },
            {
               title: "Automated Sales",
               desc: "Automate your sales process and get more leads with our AI powered chatbot.",
               link: "/features/automated-sales",
            },
            {
               title: "Automated Marketing",
               desc: "Automate your marketing process and get more leads with our AI powered chatbot.",
               link: "/features/automated-marketing",
            },
         ],
      },
   ];

   return (
      <>
         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <span className=" lg:text-[1.15rem] block px-4   font-[400] leading-[1.5rem] tracking-[0.005rem] cursor-pointer">
                     <a href={url("/")}>Overview</a>
                  </span>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <span
                     className={` lg:text-[1.15rem] block px-4  font-[400]  leading-[1.5rem] tracking-[0.005rem] cursor-pointer `}
                  >
                     <a href={url("/#features")}>Features</a>
                  </span>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <span
                     className={` lg:text-[1.15rem] block px-4  font-[400]  leading-[1.5rem] tracking-[0.005rem] cursor-pointer `}
                  >
                     <a href={url("/pricing")}>Pricing </a>
                  </span>
               </NavigationMenuItem>

               <NavigationMenuItem>
                  <span
                     className={`  lg:text-[1.15rem] block px-4  font-[400]  leading-[1.5rem] tracking-[0.005rem] cursor-pointer `}
                  >
                     <a href={url("/contact-us")}>Contact Us</a>
                  </span>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <NavigationMenuTrigger
                     className={` text-[1rem] bg-transparent font-[500] leading-[1.5rem] tracking-[0.005rem] ${
                        darkNavBg ? "text-black text-opacity-[0.85]" : "text-secondary-2"
                     }`}
                  >
                     Tools
                  </NavigationMenuTrigger>
                  {/* bigger drop needs to be built when data and use case exists for other category types defined */}
                  <NavigationMenuContent className="!w-[15.8125rem] p-[1.5rem] flex flex-col gap-[1.5rem]">
                     {toolsData[0]?.data.map((i: any, idx: number) => (
                        <NavigationMenuItem key={idx} className="list-none group cursor-pointer">
                           <a
                              href={url(i?.link)}
                              className="text-[1.1rem]k group-hover:!text-secondary-2  group-hover:!text-gray-400 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out"
                           >
                              <p className="font-semibold">{capitalizeFirstLetter("jeff")}</p>
                              <p className="text-base">a new way</p>
                           </a>
                        </NavigationMenuItem>
                     ))}
                  </NavigationMenuContent>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </>
   );
};

export default NavDrop;
