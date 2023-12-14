import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "components/ui/form";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "components/ui/select";

const FormSchema = z.object({
   type: z.string(),
});
interface IPrices {
   title: string;
   prices: string[];
}
interface Iprops {
   changeIndex: (index: number) => void;
   pricesOptions: IPrices[];
}

export default function CurrencyChange({ changeIndex, pricesOptions }: Iprops) {
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         type: pricesOptions[0].title,
      },
   });

   function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log("");
   }

   return (
      <div className=" ">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6    w-fit">
               <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                     <FormItem>
                        <Select
                           onValueChange={(value) => {
                              field.onChange(value);
                              if (value === pricesOptions[0].title) {
                                 changeIndex(0);
                              } else if (value === pricesOptions[1].title) {
                                 changeIndex(1);
                              } else if (value === pricesOptions[2].title) {
                                 changeIndex(2);
                              }
                           }}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger className="capitalize text-xl px-10 py-6">
                                 <SelectValue
                                    placeholder="Select Payment Method"
                                    className="capitalize text-xl"
                                 />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {pricesOptions.map((item: IPrices) => (
                                 <SelectItem
                                    key={item.title}
                                    value={item.title}
                                    className="capitalize text-xl"
                                 >
                                    {item.title}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </form>
         </Form>
      </div>
   );
}
