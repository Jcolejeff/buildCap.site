import React from "react";

const HowItWorks = () => {
   return (
      <div className="mb-8 pb-12 px-8  py-12 bg-slate-50">
         <div className="max-w-7xl mx-auto">
            <p className="uppercase text-center">It's not rocket science</p>
            <p className="font-semibold text-xl my-2 mb-5 text-center">
               Here are the three simple steps needed to start your hiring process:
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 ">
               {/* Step 01 */}
               <div className="flex flex-col items-center space-y-8">
                  <div
                     className="my-8 mx-auto w-1/5 min-w-18 shadow-lg text-center rounded-lg p-4 border-dashed border-[#0a57ca] relative bg-[#0a57ca]"
                     style={{ outlineOffset: "1rem" }}
                  >
                     <p className="font-semibold text-2xl text-white">01</p>
                  </div>
                  <div className="text-center">
                     <p className="text-md font-semibold">Register Company</p>
                     <p>
                        We will need basic company information from you just to confirm that you are
                        a registered company.
                     </p>
                  </div>
               </div>

               {/* Divider */}
               <div className="hidden md:block border-[#0a57ca] border-t-2 mt-[-1.5rem] w-48 border-dashed" />

               {/* Step 02 */}
               <div className="flex flex-col items-center space-y-8">
                  <div
                     className="my-8 mx-auto w-1/5 min-w-18 shadow-lg text-center rounded-lg p-4 border-dashed border-[#0a57ca] relative bg-[#0a57ca]"
                     style={{ outlineOffset: "1rem" }}
                  >
                     <p className="font-semibold text-2xl text-white">02</p>
                  </div>
                  <div className="text-center">
                     <p className="text-md font-semibold"> Approval</p>
                     <p>
                        We will review your registration details and approve. If there are any
                        hiccups along the way we will be sure to let you know!
                     </p>
                  </div>
               </div>

               {/* Divider */}
               <div className="hidden md:block border-[#0a57ca] border-t-2 mt-[-1.5rem] w-48 border-dashed" />

               {/* Step 03 */}
               <div className="flex flex-col items-center space-y-8">
                  <div
                     className="my-8 mx-auto w-1/5 min-w-18 shadow-lg text-center rounded-lg p-4 border-dashed border-[#0a57ca] relative bg-[#0a57ca]"
                     style={{ outlineOffset: "1rem" }}
                  >
                     <p className="font-semibold text-2xl text-white">03</p>
                  </div>
                  <div className="text-center">
                     <p className="text-md font-semibold">Start your Search</p>
                     <p>
                        That's it! Following your approval you will have access to various Build
                        Caps of noteworthy candidates.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HowItWorks;
