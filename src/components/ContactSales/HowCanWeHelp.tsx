import { Button } from "components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "lib/utils";
import { ChevronDown, ChevronRightIcon } from "lucide-react";
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
import { Textarea } from "components/ui/textarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";
import useUserLocation from "lib/hooks/useUserLocation";

import $http from "lib/http";
import ProcessError from "lib/error";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Spinner from "components/ui/spinner";
import { DEMO_REQUEST_MAILING_LIST_ID, TIMBU_ORG_ID } from "lib/constants";
import { format } from "date-fns";
interface Iprops {
   title?: string;
   subTitle?: string;
   breadcrumb?: string;
   businessType?: string;
   closeForm?: () => void;
}

const FormSchema = z.object({
   user_email: z
      .string()
      .min(2, {
         message: "Please enter a valid email.",
      })
      .email(),

   // user_phone: z.string().min(2, {
   //    message: "Please enter a valid Number.",
   // }),

   user_name: z.string({
      required_error: "Name is required.",
   }),

   // phone_country_code: z.string(),
   // currency_code: z.string(),
   message: z
      .string()
      .min(4, {
         message: "Message must be at least 4 characters.",
      })
      .max(160, {
         message: "Message must not be longer than 16 characters.",
      }),
});

function ContactUsForm({ businessType, title, subTitle, breadcrumb }: Iprops) {
   const formRef = useRef<HTMLFormElement | null>(null);
   const [phoneCountry, setPhoneCountry] = useState("");
   const [formIsLoading, setFormIsLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [message, setMessage] = useState({ text: "", isError: false });

   const { location } = useUserLocation();

   const [phoneData, setPhoneData] = useState({
      phoneNumber: "",
      countryCode: "",
   });
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
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

         toast.info("Thanks for contacting us, we will get back to you shortly", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
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

   // const handleOnPhoneChange = (phone: any, countryData: any) => {
   //    setPhoneData((prev) => ({
   //       ...prev,
   //       phoneNumber: phone?.slice(countryData?.dialCode?.length),
   //       countryCode: countryData.dialCode,
   //    }));

   //    form.setValue("user_phone", phone);
   //    form.setValue("phone_country_code", `+${countryData?.dialCode}`);
   //    setPhoneCountry(countryData?.iso2);
   // };

   // useEffect(() => {
   //    if (businessType) {
   //       form.setValue("user_phone", location?.country_calling_code!);
   //       form.setValue("currency_code", location?.currency);
   //    }

   //    form.setValue("user_phone", location?.country_calling_code!);
   //    form.setValue("currency_code", location?.currency);
   // }, [location?.country_calling_code, location?.currency]);

   return (
      <div className=" flex flex-col bg-slate-200/50 p-4 py-8 md:px-12 md:py-6    w-full md:justify-self-end  md:rounded-[15px]">
         {/* <div className=" flex flex-col  mt-8 md:mt-10 gap-4 pb-[2rem] container px-container-xl lg:px-container-lg xl:px-container-xl overflow-x-hidden relative max-w-[1000px]    w-full  rounded-[15px]"> */}
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="w-full flex flex-col gap-4"
               ref={formRef}
            >
               {/* <section className=" grid grid-cols-1 gap-6  "></section> */}

               <section className="md:mt-6 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6  ">
                  <FormField
                     control={form.control}
                     name="user_name"
                     render={({ field }) => (
                        <FormItem>
                           <div className="relative">
                              <label className="block mb-4   rounded-full  text-xl">
                                 Full Name
                              </label>
                              <FormControl>
                                 <Input
                                    className="py-8  text-lg bg-slate-50  placeholder:text-gray-300 placeholder:text-lg    transition-all duration-200 ease-in-out "
                                    placeholder="Jane Doe"
                                    {...field}
                                 />
                              </FormControl>
                           </div>
                           <FormMessage className="text-xl mt-1" />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="user_name"
                     render={({ field }) => (
                        <FormItem>
                           <div className="relative">
                              <label className="block mb-4   rounded-full  text-xl">
                                 Full Name
                              </label>
                              <FormControl>
                                 <Input
                                    className="py-8  text-lg bg-slate-50  placeholder:text-gray-300 placeholder:text-lg   transition-all duration-200 ease-in-out "
                                    placeholder="Jane Doe"
                                    {...field}
                                 />
                              </FormControl>
                           </div>
                           <FormMessage className="text-xl mt-1" />
                        </FormItem>
                     )}
                  />

                  {/* <FormField
                     control={form.control}
                     name="user_phone"
                     render={({ field }) => (
                        <FormItem>
                           <div className="relative">
                              <label className="block mb-4   rounded-full  text-xl">
                                 Phone Number
                              </label>
                              <FormControl>
                                 <PhoneInput
                                    containerClass="phone-container"
                                    inputClass="py-8 bg-slate-50 text-lg   placeholder:text-gray-300 placeholder:text-lg  focus:border-0  transition-all duration-200 ease-in-out"
                                    placeholder="phone number"
                                    buttonClass="bg-[#DBF1FF] "
                                    inputStyle={{
                                       border: "1px solid #e4e2e2",
                                       width: "100%",
                                       backgroundColor: "#f4f9fc",
                                    }}
                                    onChange={(phone, country) =>
                                       handleOnPhoneChange(phone, country)
                                    }
                                    autoFormat={true}
                                    inputProps={{
                                       name: "user_phone",
                                       required: true,
                                    }}
                                    buttonStyle={{
                                       background: "white",
                                       paddingInline: "0.1rem",
                                       border: "1px solid #e4e2e2",
                                       borderRight: "none",
                                       backgroundColor: "#f4f9fc",
                                    }}
                                    dropdownStyle={{ height: "300px", maxHeight: "300px" }}
                                    dropdownClass="bg-white shadow-1"
                                    searchStyle={{
                                       width: "80%",
                                       border: "1px solid #e4e2e2",
                                       borderLeft: "none",
                                       borderRight: "none",
                                       borderTop: "none",
                                       borderBottom: "none",
                                       paddingBlock: "0.6rem",
                                       marginBottom: "0.1rem",
                                       backgroundColor: "#f4f9fc",
                                    }}
                                    value={field.value}
                                    country={phoneCountry || location.country_code}
                                    enableSearch={true}
                                    disableSearchIcon={true}
                                 />
                              </FormControl>
                              <FormMessage className="text-xl mt-1" />
                           </div>
                        </FormItem>
                     )}
                  /> */}
               </section>
               <FormField
                  control={form.control}
                  name="user_email"
                  render={({ field }) => (
                     <FormItem>
                        <div className="relative">
                           <label className="block mb-4  rounded-full  text-xl">Email</label>
                           <FormControl>
                              <Input
                                 className="py-8 bg-slate-50 text-lg  placeholder:text-gray-300 placeholder:text-lg  transition-all duration-200 ease-in-out"
                                 {...field}
                                 placeholder="youremail@gmail.com"
                              />
                           </FormControl>
                        </div>
                        <FormMessage className="text-xl mt-1" />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                     <FormItem>
                        <label className="block mb-4 rounded-full  text-xl">Message</label>
                        <FormControl>
                           <Textarea
                              rows={8}
                              className="resize-none bg-slate-50 px-[0.5rem] focus-within:border-0 text-secondary-2 placeholder:text-secondary-2/[0.38] text-xl mb-[2.5rem] py-4   placeholder:text-gray-300 placeholder:text-lg    "
                              {...field}
                              placeholder="Write here..."
                           />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
               <div className=" flex flex-col mt-4 items-center gap-6">
                  <button
                     disabled={formIsLoading}
                     type="submit"
                     className="px-6 w-full py-4 bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50"
                  >
                     <span className="text-white text-xl font-[500] leading-[1.5rem] tracking-[0.02875rem] disabled:cursor-not-allowed disabled:opacity-50">
                        {formIsLoading ? <Spinner /> : "Send Us a Message"}
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
      </div>
   );
}

export default ContactUsForm;
