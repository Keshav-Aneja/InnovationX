import { motion } from "framer-motion";
interface Props {
  img: string;
  title: string;
  index: number;
  description: string;
}
const TrackCard = ({ img, title, index, description }: Props) => {
  return (
    <motion.div
      className="border-style w-[80%] md:w-[30%] aspect-square p-4 border-dashed flex flex-col gap-4 text-white  mb-8 relative group hover:border-light transition-all duration-200 ease-linear  hover:scale-[98%] group"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, delay: (index * 0.25) % 0.5 }}
      viewport={{ once: true }}
    >
      <div className="group-hover:opacity-[100%] opacity-0 w-full h-full absolute top-0 left-0 bg-[#04001e] p-4 z-[100] transition-all duration-200 ease-linear text-white/80 ">
        <h1 className="text-lg md:text-xl font-semibold mb-3">{title}</h1>
        <p className="text-[0.6rem] md:text-sm">{description}</p>
      </div>
      <span className="w-8 h-8 flex justify-center items-center font-grotesk  text-2xl absolute -top-4 -left-4 group-hover:scale-150 transition-all duration-200 ease-linear group-hover:text-bright">
        +
      </span>
      <span className="w-8 h-8 flex justify-center items-center font-grotesk  text-2xl absolute -top-4 -right-4 group-hover:scale-150 transition-all duration-200 ease-linear group-hover:text-bright">
        +
      </span>
      <span className="w-8 h-8 flex justify-center items-center font-grotesk  text-2xl absolute -bottom-4 -right-4 group-hover:scale-150 transition-all duration-200 ease-linear group-hover:text-bright">
        +
      </span>
      <span className="w-8 h-8 flex justify-center items-center font-grotesk  text-2xl absolute -bottom-4 -left-4 group-hover:scale-150 transition-all duration-200 ease-linear group-hover:text-bright">
        +
      </span>
      <div className="w-full h-[80%]  rounded-xl p-8 flex justify-center">
        <img src={`/images/${img}`} alt={title} className="h-full w-auto" />
      </div>
      <div className="title font-grotesk text-xl md:text-2xl font-medium md:font-bold text-center">
        {title}
      </div>
    </motion.div>
  );
};

export default TrackCard;
