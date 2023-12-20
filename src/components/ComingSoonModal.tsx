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
            "Hi,i just signed up to join the buildCAP when you launch!, please notify me when you launch",
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
         <DialogContent className=" max-w-full overflow-auto overflow-x-hidden   bg-white sm:w-[80vw]  md:!max-w-[900px]">
            <div className=" my-8 flex flex-col items-center  justify-center gap-[2rem]   md:flex-row">
               <section className="flex flex-col items-center gap-6 md:w-1/2 ">
                  <div>
                     <h2 className="text-center text-2xl font-bold"></h2>
                     <h1 className="max-w-[40rem] text-center text-[1.7rem] font-[600] leading-[130%] tracking-[0.02rem] text-secondary-2 transition-all duration-500 ease-in-out md:text-[2.5rem] md:leading-[5rem] md:tracking-[0.0225rem] lg:ml-[-0.2rem]">
                        <TextFormat
                           text={`We are still building`}
                           keyword={"building"}
                           keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                        />
                     </h1>

                     <h2 className="max-w-[38.875rem] text-center text-[1.18rem] font-[500] leading-[2.2rem] text-secondary-2 md:text-[1.3rem] md:leading-[2rem] xxl:max-w-[45.875rem]  xxl:text-[1.3rem]">
                        Sign up to our mailing list to be the first to know when we launch!
                     </h2>
                  </div>

                  <Form {...form}>
                     <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex w-full flex-col gap-4"
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
                                             className="bg-white py-7 text-lg transition-all duration-200    ease-in-out placeholder:text-lg placeholder:text-gray-400"
                                             {...field}
                                             placeholder="Enter your email "
                                          />
                                       </FormControl>
                                    </div>
                                    <FormMessage className="mt-1 text-base" />
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
                                          className=" hidden bg-white text-lg transition-all duration-200    ease-in-out placeholder:text-lg placeholder:text-gray-400"
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
                              className="group flex w-full items-center justify-center gap-2 rounded-[6px] bg-primary-1 px-6 py-4 transition-all duration-200 ease-in-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                           >
                              <span className="font-[500] leading-[1.5rem] tracking-[0.02875rem] text-white disabled:cursor-not-allowed disabled:opacity-50">
                                 {formIsLoading ? <Spinner /> : "Notify me"}
                              </span>
                           </button>

                           <span
                              className={`${
                                 message.isError ? "text-red-500" : "text-green-700"
                              } text-center text-[16px] transition-opacity duration-200 ease-in-out`}
                           >
                              {message.text}
                           </span>
                        </div>
                     </form>
                  </Form>
                  <a
                     href="mailto:support@jointhebuildCAP.com"
                     className="text-center font-semibold text-primary-1 underline md:text-lg"
                  >
                     Or Contact Us
                  </a>
               </section>
               <div className=" hidden w-1/2 rounded-md bg-cover bg-center filter  transition-all  duration-300 ease-in-out   hover:cursor-pointer md:block">
                  <img
                     src={url("/images/landing-page/modal.webp")}
                     className="w-full rounded-md  object-cover md:h-[350px]"
                     alt=""
                  />
               </div>
            </div>
         </DialogContent>
      </Dialog>
   );
};

export default ComingSoonModal;
