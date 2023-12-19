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
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "components/ui/select";
interface IProp {}
const FormSchema = z.object({
   user_email: z
      .string()
      .min(2, {
         message: "Please enter a valid email.",
      })
      .email(),
   name: z.string({
      required_error: "Name is required.",
   }),

   business_type: z.string({
      required_error: "Business Name is required.",
   }),
   message: z
      .string()
      .min(4, {
         message: "Message must be at least 4 characters.",
      })
      .max(160, {
         message: "Message must not be longer than 16 characters.",
      }),
});
const GetStartedForm = () => {
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
            "Hi,i just signed up to join the pool when you launch!, please notify me when you launch",
      },
   });

   async function onSubmit(data: z.infer<typeof FormSchema>) {
      setFormIsLoading(true);

      try {
         // const data = await emailjs.sendForm(
         //    "service_f2ja3b8",
         //    "template_6z8o098",
         //    formRef.current as HTMLFormElement,
         //    "30meubG4UgtRoKoLr",
         // );
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
   const BUSINESS_TYPES = [
      { text: "Main Contractor", value: "Main Contractor" },
      { text: "Subcontractor", value: "Subcontractor" },
      { text: "Supplier", value: "Supplier" },
      { text: "Other", value: "Other" },
   ];

   return (
      <div className=" my-8 flex flex-col items-center  justify-center gap-[2rem]   md:flex-row">
         <section className="flex flex-col items-center gap-6 md:w-1/2 ">
            <div>
               <h3 className="mb-4 max-w-[60rem] text-center text-[1.1rem] font-[600] leading-[130%] tracking-[0.02rem] text-secondary-2 transition-all duration-500 ease-in-out md:text-[1.6rem] md:leading-[2rem] md:tracking-[0.0225rem] ">
                  <TextFormat
                     text={`Ready to Transform Your Construction Projects?`}
                     keyword={"Construction"}
                     keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                  />
               </h3>

               <h4 className="max-w-[38.875rem] text-center text-[0.8rem] font-[500] leading-[2.2rem] text-secondary-2 md:text-[1rem] md:leading-[2rem] xxl:max-w-[45.875rem]  xxl:text-[1.3rem]">
                  Join buildCap Today!
               </h4>
            </div>

            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex w-full flex-col gap-4"
                  ref={formRef}
               >
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem>
                           <div className="relative">
                              <FormControl>
                                 <Input
                                    className="py-7 text-lg transition-all duration-300 ease-in-out  placeholder:text-lg  placeholder:text-gray-300 focus-within:placeholder:text-secondary-2 focus:bg-[#DBF1FF] "
                                    placeholder="Name"
                                    {...field}
                                 />
                              </FormControl>
                           </div>
                           <FormMessage className="mt-1 text-base" />
                        </FormItem>
                     )}
                  />
                  <section className="  grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr] ">
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
                        name="business_type"
                        render={({ field }) => (
                           <FormItem>
                              <div className="relative">
                                 <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    {...field}
                                 >
                                    <FormControl>
                                       <SelectTrigger className="py-7 text-lg text-gray-500 transition-all duration-300  ease-in-out  placeholder:text-lg focus-within:text-secondary-2 focus:bg-[#DBF1FF] ">
                                          <SelectValue placeholder="Business Type" className="  " />
                                       </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-primary-1">
                                       {BUSINESS_TYPES.map((type) => (
                                          <SelectItem
                                             className="py-3 text-lg text-white"
                                             value={type.value}
                                             key={type.value}
                                          >
                                             {type.text}
                                          </SelectItem>
                                       ))}
                                    </SelectContent>
                                 </Select>
                              </div>
                              <FormMessage className="mt-1 text-base" />
                           </FormItem>
                        )}
                     />
                  </section>
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

                  <div className=" mt-4 gap-6">
                     <button
                        disabled={formIsLoading}
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-[6px] bg-primary-1 px-6 py-4 transition-all duration-200 ease-in-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                     >
                        <span className="font-[500] leading-[1.5rem] tracking-[0.02875rem] text-white disabled:cursor-not-allowed disabled:opacity-50">
                           {formIsLoading ? <Spinner /> : "Sign Up Now"}
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
            {/* <a
               href="mailto:support@jointhepool.com"
               className="font-semibold text-center md:text-lg underline text-primary-1"
            >
               Or Contact Us
            </a> */}
         </section>
         <div className=" hidden w-1/2 rounded-md bg-cover bg-center filter  transition-all  duration-300 ease-in-out   hover:cursor-pointer md:block">
            <img
               src={url("/images/modal.jpg")}
               className="w-full rounded-md  object-cover md:h-[350px]"
               alt=""
            />
         </div>
      </div>
   );
};

export default GetStartedForm;
