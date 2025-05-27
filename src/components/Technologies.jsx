// src/components/Technologies.jsx
import { motion } from "framer-motion";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,

} from "react-icons/fa";
import {
    SiTailwindcss,
    SiBootstrap,
    SiFramer,

} from "react-icons/si";


const icons = [
    <FaHtml5 className="text-orange-500" />,
    <FaCss3Alt className="text-blue-600" />,
    <FaJs className="text-yellow-400" />,
    <FaReact className="text-cyan-400" />,
    <SiFramer className="text-purple-500" />,
    <SiTailwindcss className="text-sky-400" />,
    <SiBootstrap className="text-purple-600" />,


];



const Technologies = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 pb-12">
      <h1 className="text-white text-3xl sm:text-4xl font-bold pb-12 sm:pb-24">
        Technologies
      </h1>

      <div className="w-full max-w-6xl flex flex-wrap justify-center sm:justify-around gap-8 sm:gap-5">
        {icons.map((IconComponent, index) => (
          <motion.div
            key={index}
            className="text-4xl sm:text-6xl"
            animate={{
              y: [0, -10, 0], // move up 10px and back to 0
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.3, // stagger animation start
            }}
            whileHover={{ scale: 1.2 }} // scale up on hover
          >
            {IconComponent}
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default Technologies;
