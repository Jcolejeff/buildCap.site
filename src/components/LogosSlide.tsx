import Marquee from "react-fast-marquee";
import { url } from "lib/utils";
const LogoMarquee = ({ images }: { images: string[] }) => {
   return (
      <Marquee gradient={false} autoFill={true}>
         {images.map((image: string, index: number) => (
            <div key={index} className="mr-20">
               <img src={url(image)} alt="Logo" className="w-[5rem] md:w-[9rem]" />
            </div>
         ))}
      </Marquee>
   );
};

export default LogoMarquee;
