// import Fa from "react-icons/fa";

const Benefits = () => {
   const techniques = [
      {
         title: `Lorem ipsum dolor sit amet `,
         text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio voluptates quibusdam dolores quia labore fugit inventore magni aperiam, quam ipsam ex officiis corporis sequi a fugiat unde, voluptatum officia libero. Voluptatum saepe inventore minus?`,
         // icon: FaUsers,
      },
      {
         title: `Lorem ipsum dolor sit amet `,
         text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio voluptates quibusdam dolores quia labore fugit inventore magni aperiam, quam ipsam ex officiis corporis sequi a fugiat unde, voluptatum officia libero. Voluptatum saepe inventore minus?`,
         // icon: FaUsers,
      },
      {
         title: `Lorem ipsum dolor sit amet `,
         text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio voluptates quibusdam dolores quia labore fugit inventore magni aperiam, quam ipsam ex officiis corporis sequi a fugiat unde, voluptatum officia libero. Voluptatum saepe inventore minus?`,
         // icon: FaUsers,
      },
   ];

   return (
      <div className="bg-gray-50 py-12 pt-6 pb-20">
         <div className="container px-4 md:px-20 xl:px-1">
            <h2 className="text-center font-bold text-2xl lg:text-4xl mb-14">
               Lorem, ipsum dolor. <span className="text-primary-1">SME</span> Business Suite?
            </h2>

            <div className="flex flex-col gap-8 md:gap-[7rem] md:flex-row justify-center ">
               {techniques.map((item, index) => (
                  <div
                     key={index}
                     className="  my-4 lg:my-0 bg-white rounded-2xl shadow-2xl p-8 text-center w-full md:w-1/3 transform transition-transform duration-200 hover:scale-105"
                  >
                     <div className="mb-6">
                        {/* <item.icon className="h-12 w-12 lg:h-12 lg:w-12 text-primary-1 m-auto" /> */}
                     </div>
                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                     <p className="text-md">{item.text}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Benefits;
