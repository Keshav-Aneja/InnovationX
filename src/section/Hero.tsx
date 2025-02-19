import PrimaryButton from "../components/PrimaryButton";
import Pipeline from "../components/Pipeline";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <motion.img
        src="/images/floater1.webp"
        alt=""
        className="w-40 md:w-80 absolute bottom-12 right-4 floater delay-300"
      />
      <img
        src="/images/floater2.webp"
        alt=""
        className="w-32 md:w-80 absolute top-24 md:top-12 left-0 md:left-4 floater"
      />
      <div className="--content text-white w-fit mx-auto h-full flex flex-col justify-center items-center gap-4 -mt-32 md:-mt-12 relative">
        <motion.h1
          className="text-5xl md:text-8xl font-grotesk font-medium"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          viewport={{ once: true }}
        >
          JOIN OUR
        </motion.h1>
        <div className="w-full absolute top-[25%] md:top-[40%] left-[60%] md:left-[80%]">
          <Pipeline label="" small={true} color={"#ff7a01"}>
            <p className="text-xs text-[#e0e0e0]">-BUILD-THE-FUTURE-</p>
          </Pipeline>
        </div>
        <motion.h1
          className="text-5xl md:text-8xl font-groteskb"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          viewport={{ once: true }}
        >
          TRIBE
        </motion.h1>
        <motion.h1
          className="text-4xl md:text-8xl font-grotesk font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          viewport={{ once: true }}
        >
          InnovationX 2.0
        </motion.h1>
        <div className="w-full absolute bottom-[25%] md:bottom-[28%] right-[5%] md:right-[10%]">
          <Pipeline label="" small={true}>
            <p className="text-xs text-[#e0e0e0]">-DESIGNERS-DEVELOPERS</p>
          </Pipeline>
        </div>
        <div className="mt-6">
          <PrimaryButton label="REGISTER NOW" link="https://vtop.vit.ac.in" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
