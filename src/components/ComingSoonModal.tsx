import { Dialog, DialogContent, DialogTrigger } from "components/ui/dialog";

import { useState, useEffect } from "react";
import { url } from "lib/utils";
import { Button } from "components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "lib/utils";
import { useRef } from "react";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
   FormLabel,
   FormDescription,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Spinner from "components/ui/spinner";
import TextFormat from "lib/helpers/TextFormat";

interface IProp {}
const FormSchema = z.object({
   user_email: z
      .string()
      .min(2, {
         message: "Please enter a valid email.",
      })
      .email(),
   message: z
      .string()
      .min(4, {
         message: "Message must be at least 4 characters.",
      })
      .max(160, {
         message: "Message must not be longer than 16 characters.",
      }),
});
const ComingSoonModal = () => {
   const [modalOpen, setModalOpen] = useState<boolean>(false);
   const formRef = useRef<HTMLFormElement | null>(null);
   const [phoneCountry, setPhoneCountry] = useState("");
   const [formIsLoading, setFormIsLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [message, setMessage] = useState({ text: "", isError: false });

   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         user_email: "",
         message:
            "Hi,i just signed up to join the buildCap when you launch!, please notify me when you launch",
      },
   });

   async function onSubmit(data: z.infer<typeof FormSchema>) {
      setFormIsLoading(true);

      try {
         const data = await emailjs.sendForm(
            "service_k08w62w",
            "template_fsbxx8c",
            formRef.current as HTMLFormElement,
            "X3OkpMZncUC0S79v4",
         );
         // setMessage({ text: data?.text, isError: false });
         toast.info("Thanks for signing up, We will notify you when we launch!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
         setTimeout(() => {
            setModalOpen(false);
         }, 3000);

         setSuccess(true);
      } catch (error: any) {
         setMessage({ text: error?.error, isError: true });

         toast.error("Error sending message, please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
      }

      setFormIsLoading(false);
   }

   useEffect(() => {
      // Check if the modal has been opened in this session
      const hasOpenedInSession = sessionStorage.getItem("modalHasOpenedInSession");

      if (!hasOpenedInSession) {
         // Check if the modal has been opened before in any session
         const hasOpened = localStorage.getItem("modalHasOpened");

         if (!hasOpened) {
            // If the modal has not been opened before in any session, open it and set modalHasOpened to true in localStorage
            localStorage.setItem("modalHasOpened", "true");
         }

         // Set modalHasOpenedInSession to true in sessionStorage whether or not it has been opened before in any session
         sessionStorage.setItem("modalHasOpenedInSession", "true");
         setModalOpen(true); // Open the modal for the first visit or refresh on the homepage
      }
   }, []);
   return (
      <Dialog onOpenChange={(i: boolean) => setModalOpen(i)} open={modalOpen}>
         <DialogTrigger>
            {" "}
            {/* <button className="p-4 border border-red-500 m-8 rounded-[0.5rem] bg-none  flex items-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out">
               <div className="flex flex-col items-start">
                  <span className=" text-lg font-[500] opacity-90 leading-[1.5rem] tracking-[0.02875rem]">
                     Play this video
                  </span>
               </div>
            </button> */}
         </DialogTrigger>
         <DialogContent className=" bg-white max-w-full overflow-x-hidden   sm:w-[80vw] md:!max-w-[900px]  overflow-auto">
            <div className=" flex flex-col md:flex-row justify-center  items-center my-8   gap-[2rem]">
               <section className="md:w-1/2 flex flex-col items-center gap-6 ">
                  <div>
                     <h2 className="text-center font-bold text-2xl"></h2>
                     <h1 className="font-[600] text-secondary-2 text-center text-[1.7rem] md:text-[2.5rem] leading-[130%] md:leading-[5rem] tracking-[0.02rem] md:tracking-[0.0225rem] transition-all duration-500 ease-in-out max-w-[40rem] lg:ml-[-0.2rem]">
                        <TextFormat
                           text={`We are still building`}
                           keyword={"building"}
                           keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                        />
                     </h1>

                     <h2 className="font-[500] text-center text-secondary-2 text-[1.18rem] md:text-[1.3rem] xxl:text-[1.3rem] leading-[2.2rem] md:leading-[2rem] max-w-[38.875rem]  xxl:max-w-[45.875rem]">
                        Sign up to our mailing list to be the first to know when we launch!
                     </h2>
                  </div>

                  <Form {...form}>
                     <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-4"
                        ref={formRef}
                     >
                        <section className="   ">
                           <FormField
                              control={form.control}
                              name="user_email"
                              render={({ field }) => (
                                 <FormItem>
                                    <div className="relative">
                                       <FormControl>
                                          <Input
                                             className="py-7 bg-white text-lg placeholder:text-gray-400 placeholder:text-lg    transition-all duration-200 ease-in-out"
                                             {...field}
                                             placeholder="Enter your email "
                                          />
                                       </FormControl>
                                    </div>
                                    <FormMessage className="text-base mt-1" />
                                 </FormItem>
                              )}
                           />
                           <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormControl>
                                       <Input
                                          className=" bg-white hidden text-lg placeholder:text-gray-400 placeholder:text-lg    transition-all duration-200 ease-in-out"
                                          {...field}
                                          placeholder="Enter your message "
                                       />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </section>

                        <div className=" mt-4 gap-6">
                           <button
                              disabled={formIsLoading}
                              type="submit"
                              className="px-6 w-full py-4 bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50"
                           >
                              <span className="text-white font-[500] leading-[1.5rem] tracking-[0.02875rem] disabled:cursor-not-allowed disabled:opacity-50">
                                 {formIsLoading ? <Spinner /> : "Notify me"}
                              </span>
                           </button>

                           <span
                              className={`${
                                 message.isError ? "text-red-500" : "text-green-700"
                              } text-[16px] text-center transition-opacity duration-200 ease-in-out`}
                           >
                              {message.text}
                           </span>
                        </div>
                     </form>
                  </Form>
                  <a
                     href="mailto:support@jointheBuildCAP.com"
                     className="font-semibold text-center md:text-lg underline text-primary-1"
                  >
                     Or Contact Us
                  </a>
               </section>
               <div className=" hidden md:block rounded-md transition-all duration-300 ease-in-out  w-1/2  bg-center bg-cover   filter hover:cursor-pointer">
                  <img
                     src={url("/images/landing-page/modal.webp")}
                     className="w-full object-cover  md:h-[350px] rounded-md"
                     alt=""
                  />
               </div>
            </div>
         </DialogContent>
      </Dialog>
   );
};

export default ComingSoonModal;
