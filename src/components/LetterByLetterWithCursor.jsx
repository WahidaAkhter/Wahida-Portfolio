import React from "react";
import { motion } from "framer-motion";

export default function LetterByLetterWithCursor() {
  const text = "A Passionate Web Developer";
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      className="text-2xl text-blue-400 font-mono flex flex-wrap max-w-lg  border-blue-400 pr-1 animate-blink-caret whitespace-pre"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
