import React from "react";
import blueCheck from "assets/blueCheck.svg";
import CurrencyChange from "./CurrenyChange";

const PriceList = () => {
   // const [dollarPrices, setDollarPrices] = React.useState(["$5", "$10", "$40"]);
   // const [nairaPrices, setNairaPrices] = React.useState(["₦2,000", "₦4,000", "₦16,000"]);
   interface IPrices {
      title: string;
      prices: string[];
   }

   const [prices, setPrices] = React.useState<IPrices[]>([
      {
         title: "$ USD",
         prices: ["$50", "$100", "$150"],
      },
      {
         title: "₦ NGN",
         prices: ["₦30,000", "₦60,000", "₦100,000"],
      },
   ]);
   const [index, setIndex] = React.useState(0);

   const pricingOptions = [
      {
         title: "Business",
         price: prices[index].prices[0],
         for: "Ideal for growing businesses that need more customers",
         features: ["Customizable assistant", "Basic Support", "One Integration", "Email support"],
      },
      {
         title: "Business Pro",
         price: prices[index].prices[1],
         for: "For large organization with specific needs",
         features: [
            "Customizable assistant",
            "Priority support",
            "Three Integration",
            "Email support",
         ],
      },
      {
         title: "Business Max",
         price: prices[index].prices[2],
         for: "For large organization with specific needs",
         features: [
            "Customizable assistant",
            "Priority support",
            "One Integration",
            "Email support",
            "Unlimited integrations",
            "Unlimited integrations",
         ],
      },
   ];
   return (
      <section className="w-full md:py-[4.5rem] md:pt-[2.5rem] container px-container-base lg:px-container-lg xl:px-container-xl overflow-x-hidden relative max-w-[1700px] bg-primary-2">
         <div className="w-full flex flex-col gap-[2.5rem]">
            <CurrencyChange
               pricesOptions={prices}
               changeIndex={(index) => {
                  setIndex(index);
               }}
            />
            <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-[2rem] xxl:gap-[5rem]  min-h-[40vh]  ">
               {pricingOptions.map((option, index) => (
                  <div
                     className={`flex pb-[6rem]  rounded-md border-4 flex-col gap-[1.75rem]  bg-white  w-full lg:max-w-[25.375rem]
                     ${index === 1 ? "border-primary-1" : ""}
                     `}
                     key={index}
                  >
                     <div className="p-[1.5rem] py-[2.5rem] flex   flex-col gap-[2.5rem]  bg-slate-100">
                        <div className="flex flex-col gap-4">
                           <h6 className="text-secondary-2 text-[1.8325rem] font-[700] leading-[2.39025rem]">
                              {option.title}
                           </h6>
                        </div>
                        <p>
                           <span className="text-secondary-7 text-xl leading-[1.5rem]">
                              {option.for}
                           </span>
                        </p>
                        <p className="text-secondary-2 leading-[1.61113rem] font-bold text-4xl">
                           {option.price}{" "}
                           <span className="text-sm capitalize text-gray-500">/ {"  "}month</span>
                        </p>
                        <button
                           className={`w-full h-[3.625rem] md:h-[4rem] rounded-[0.5rem] border-[2.7px] border-primary-1  hover:opacity-90 active:opacity-100 transition-opacity duration-300 ease-in-out
                          ${index === 1 ? "bg-primary-1 text-white" : ""}
                        `}
                        >
                           <span className=" font-[500] leading-[1.5rem] tracking-[0.02875rem]">
                              <a href="#">Get Started</a>
                           </span>
                        </button>
                     </div>
                     <div className=" px-[1.5rem] flex   flex-col gap-[1.75rem]">
                        <p>
                           <span className="text-secondary-7 text-xl font-bold leading-[1.5rem]">
                              What's included in {option.title}?
                           </span>
                        </p>
                        <div className="flex flex-col gap-[1.5rem]">
                           {option.features.map((feature, index) => (
                              <div className="flex items-center gap-[1rem]" key={index}>
                                 {/* Assuming you still want to use the blueCheck image for each feature */}
                                 <img className="w-[1rem]" src={blueCheck} alt="" />
                                 <span className="text-secondary-7 leading-[1.5rem]">
                                    {feature}
                                 </span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default PriceList;
