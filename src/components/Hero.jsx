import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/wahida.jpeg";
import LetterByLetterWithCursor from "../components/LetterByLetterWithCursor";

const Hero = () => {
  return (
    <section className="w-full text-white flex items-center justify-center px-6 pb-20 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Wahida</h1>

          <LetterByLetterWithCursor />

          <p className="text-lg text-gray-300">
            I'm a passionate Web Developer who enjoys turning ideas into clean, functional, and user-friendly websites. With an eye for detail and a love for responsive design, I build sites that not only look great but perform smoothly across all devices. I'm always eager to learn new tools,
            solve real problems, and create meaningful digital experiences.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={heroImage}
            alt="Wahida"
            className="w-80 h-80 rounded-lg object-cover border-4 border-stone-900 shadow-lg"
          />
        </motion.div>
        <div>
          <a
            href="/wahida_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-block bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            View My Resume
          </a>
        </div>
      </div>


    </section>
  );
};

export default Hero;
