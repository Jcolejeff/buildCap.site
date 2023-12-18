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
      <div className=" flex flex-col md:flex-row justify-center  items-center my-8   gap-[2rem]">
         <section className="md:w-1/2 flex flex-col items-center gap-6 ">
            <div>
               <h3 className="font-[600] text-secondary-2 text-center text-[1.7rem] md:text-[2rem] leading-[130%] md:leading-[3rem] tracking-[0.02rem] md:tracking-[0.0225rem] transition-all duration-500 ease-in-out max-w-[60rem] mb-4 ">
                  <TextFormat
                     text={`Ready to Transform Your Construction Projects?`}
                     keyword={"building"}
                     keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                  />
               </h3>

               <h4 className="font-[500] text-center text-secondary-2 text-[1.18rem] md:text-[1.3rem] xxl:text-[1.3rem] leading-[2.2rem] md:leading-[2rem] max-w-[38.875rem]  xxl:max-w-[45.875rem]">
                  Join BuildCAP Today!
               </h4>
            </div>

            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full flex flex-col gap-4"
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
                                    className="py-7 text-lg focus-within:placeholder:text-secondary-2 placeholder:text-gray-300 placeholder:text-lg  focus:bg-[#DBF1FF]  transition-all duration-300 ease-in-out "
                                    placeholder="Name"
                                    {...field}
                                 />
                              </FormControl>
                           </div>
                           <FormMessage className="text-base mt-1" />
                        </FormItem>
                     )}
                  />
                  <section className="  grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 ">
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
                                       <SelectTrigger className="py-7 text-lg focus-within:text-secondary-2 text-gray-500 placeholder:text-lg  focus:bg-[#DBF1FF]  transition-all duration-300 ease-in-out ">
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
                              <FormMessage className="text-base mt-1" />
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
                                 className=" bg-white hidden text-lg placeholder:text-gray-400 placeholder:text-lg    transition-all duration-200 ease-in-out"
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
                        className="px-6 w-full py-4 bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50"
                     >
                        <span className="text-white font-[500] leading-[1.5rem] tracking-[0.02875rem] disabled:cursor-not-allowed disabled:opacity-50">
                           {formIsLoading ? <Spinner /> : "Sign Up Now"}
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
            {/* <a
               href="mailto:support@jointhepool.com"
               className="font-semibold text-center md:text-lg underline text-primary-1"
            >
               Or Contact Us
            </a> */}
         </section>
         <div className=" hidden md:block rounded-md transition-all duration-300 ease-in-out  w-1/2  bg-center bg-cover   filter hover:cursor-pointer">
            <img
               src={url("/images/modal.jpg")}
               className="w-full object-cover  md:h-[350px] rounded-md"
               alt=""
            />
         </div>
      </div>
   );
};

export default GetStartedForm;
