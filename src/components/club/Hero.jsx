import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ logo, motto, quote, colour ,text}) => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center p-10 overflow-hidden"
      style={{ backgroundColor: colour , color:text}}
    >
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Club Logo"
        className="mb-12 h-50 object-contain drop-shadow-lg relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -8, 0], // gentle float
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          },
        }}
      />

      {/* Motto */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold mb-6 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <Typewriter
          words={[motto]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </motion.h1>

      {/* Quote */}
      <motion.p
        className="italic text-lg md:text-3xl text-center leading-relaxed relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        “{quote}”
      </motion.p>
    </section>
  );
};

export default Hero;
