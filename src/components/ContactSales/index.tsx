import React from "react";
import ContactUsForm from "./HowCanWeHelp";
import { url } from "lib/utils";
interface ContactSalesProps {
   email?: string;
   phone?: string;
}

const ContactSales: React.FC<ContactSalesProps> = ({ email, phone }) => {
   const sections = [
      {
         heading: "Email",
         paragraph: "Our amiable team is here to help you.",
         info: "hello@assistance.io",
         img: "/images/contact/sms.svg",
      },
      {
         heading: "Live Chat",
         paragraph: "Our amiable team is here to help you.",
         info: "Start new chat",
         img: "/images/contact/sms.svg",
      },
      {
         heading: "Location",
         paragraph: "Come say Hi at our headquarter.",
         info: "Landmark Leisure Beach, Oniru Estate",
         img: "/images/contact/sms.svg",
      },
      {
         heading: "Phone",
         paragraph: "Mon-Fri from 10am to 6pm.",
         info: "+234 809 891 9012",
         img: "/images/contact/sms.svg",
      },
   ];
   return (
      <section className="w-full container px-container-base lg:px-container-lg xl:px-container-xl relative max-w-[1700px]">
         <div className="flex flex-col items-center gap-4 mb-[2rem] ">
            <h2 className=" text-center text-3xl  md:text-[3rem] font-black  ">
               Chat with our amiable team
            </h2>
            <h3 className=" text-center  opacity-[0.85] mb-16   text-base md:text-2xl leading-7">
               We are here to help you. Please fill the form below or contact us
            </h3>
         </div>
         <div className="grid gap-16 md:grid-cols-2">
            <section className="grid gap-16 md:gap-8 md:grid-cols-[1fr_1fr] place-items-start  rounded-lg w-full">
               {sections.map((item, index: number) => {
                  return (
                     <article className="flex flex-col     gap-4   rounded-lg" key={index}>
                        <img src={url(item.img)} alt="" className="w-12" />

                        <h3 className="font-semibold text-2xl">{item.heading}</h3>
                        <p className="text-[1.3rem] leading-[130%] md:leading-[2rem] tracking-[0.02rem] md:tracking-[0.0225rem]">
                           {item.paragraph}
                        </p>
                        <p className="font-semibold md:text-2xl">{item.info}</p>
                     </article>
                  );
               })}
            </section>
            <ContactUsForm />
         </div>
      </section>
   );
};

export default ContactSales;
