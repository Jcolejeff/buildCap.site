import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "components/ui/accordion";
import arrow from "assets/arrow-left.svg";
import { url } from "lib/utils";
import { FAQdata } from "./data";
interface IFaq {}

const Faq = () => {
   return (
      <div
         id="faq"
         className="bg-primary-1 flex flex-col max-w-[1700px] container px-container-base lg:px-container-lg xl:px-container-xl overflow-x-hidden relative  py-[10rem]"
      >
         <div className="flex flex-col justify-center items-center sm:text-center lg:px-8 px-6 gap-6">
            <p className="text-2xl font-bold tracking-tight text-center text-white lg:text-4xl">
               Frequently asked questions
            </p>
            <p className="leading-8 text-center text-white font-medium text-lg">
               Answers to the questions in your mind. Get in touch with us for
               <br />
               more information.
            </p>
            <div className="w-12 h-[0.15rem] bg-primary-1"></div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[9.38rem] gap-y-4 md:gap-y-[2rem]">
            {FAQdata?.map((i, idx) => (
               <Accordion key={idx} type="single" collapsible>
                  <AccordionItem value={i?.slug}>
                     <AccordionTrigger className="border-b border-gray-50/25  ">
                        <span className=" font-normal text-white  text-start text-[1.17rem] leading-[1.5rem] opacity-[0.90]  hover:underline">
                           {i?.data?.question}
                        </span>
                     </AccordionTrigger>
                     <AccordionContent>
                        <p className="  font-normal text-white opacity-90  text-lg">
                           {i?.data?.answer}
                        </p>
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            ))}
         </div>{" "}
      </div>
   );
};

export default Faq;
