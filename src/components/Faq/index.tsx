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
         className="container relative flex max-w-[1700px] flex-col overflow-x-hidden bg-primary-1 px-container-base py-[10rem] lg:px-container-lg  xl:px-container-xl"
      >
         <div className="flex flex-col items-center justify-center gap-6 px-6 sm:text-center lg:px-8">
            <p className="text-center text-2xl font-bold tracking-tight text-white lg:text-4xl">
               Frequently asked questions
            </p>
            <p className="text-center text-lg font-medium leading-8 text-white">
               Answers to the questions in your mind. Get in touch with us for
               <br />
               more information.
            </p>
            <div className="h-[0.15rem] w-12 bg-primary-1"></div>
         </div>
         <div className="grid grid-cols-1 gap-x-[9.38rem] gap-y-4 md:grid-cols-2 md:gap-y-[2rem]">
            {FAQdata?.map((i, idx) => (
               <Accordion key={idx} type="single" collapsible>
                  <AccordionItem value={i?.slug}>
                     <AccordionTrigger className="border-b border-gray-50/25  ">
                        <span className=" text-start text-[1.17rem]  font-normal leading-[1.5rem] text-white opacity-[0.90]  hover:underline">
                           {i?.data?.question}
                        </span>
                     </AccordionTrigger>
                     <AccordionContent>
                        <p className="  mt-3 text-lg font-normal text-white/90  opacity-90">
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
