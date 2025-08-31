import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const texts = ["Code", "Connect", "Create"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [texts.length]);

  const doodleColors = [
    "#c2410c", // orange
    "#ef4444", // red
    "#c2410c", // yellow
    "#ef4444", // green
  ];

  const textVariants = {
    initial: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
      },
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const imageFloatVariants = {
    float: {
      y: ["0%", "10%", "-10%", "0%"],
      x: ["0%", "-5%", "5%", "0%"],
      rotate: [0, 5, -5, 0],
      transition: {
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      },
    },
  };

  const calculateParallax = (strength) => {
    const container = document.getElementById("main-container");
    if (!container) return { x: 0, y: 0 };
    const rect = container.getBoundingClientRect();
    const x = (mousePosition.x - (rect.left + rect.width / 2)) * strength;
    const y = (mousePosition.y - (rect.top + rect.height / 2)) * strength;
    return { x, y };
  };

  // Variants for the IIITDMK Coding Clubs text
  const mainTitleVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 0.2, // Slight delay to appear after the background
      },
    },
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 8px rgba(255,255,255,0.7)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <div
      id="main-container"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${doodleColors[0]}, ${doodleColors[1]}, ${doodleColors[2]}, ${doodleColors[3]})`,
        backgroundSize: "400% 400%",
        animation: "colorShift 15s ease infinite",
      }}
    >
      <style>{`
        @keyframes colorShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes sparkle {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0); opacity: 0; }
        }
      `}</style>

      {/* Background grid lines for a tech-y, organized feel */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute w-full h-full bg-repeat"
          style={{
            backgroundImage:
              "linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Confetti when text changes */}
      <AnimatePresence>
        <motion.div
          key={`confetti-${currentText}`}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 1, transition: { duration: 0.8 } }}
          exit={{ opacity: 0, scale: 0 }}
          className="absolute z-20 w-full h-full pointer-events-none"
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor:
                  doodleColors[Math.floor(Math.random() * doodleColors.length)],
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `fall ${2 + Math.random() * 3}s ease-out forwards`,
              }}
            />
          ))}
          <style>{`
            @keyframes fall {
              from { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
              to { transform: translateY(100vh) rotate(720deg) scale(0); opacity: 0; }
            }
          `}</style>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0">
        {/* Abstract, non-blurry shapes with Parallax */}
        <motion.div
          className="absolute w-24 h-24 bg-blue-500 rounded-full shadow-2xl"
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ ...shapeVariants.pulse, scale: 1.2 }}
          style={{
            top: "10%",
            left: "15%",
            x: calculateParallax(0.05).x,
            y: calculateParallax(0.05).y,
          }}
        />
        <motion.div
          className="absolute w-16 h-16 bg-red-500 rounded-lg shadow-2xl"
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ ...shapeVariants.pulse, scale: 1.2 }}
          transition={{ delay: 0.8 }}
          style={{
            bottom: "20%",
            right: "10%",
            x: calculateParallax(0.03).x,
            y: calculateParallax(0.03).y,
          }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-yellow-500 rounded-full shadow-2xl"
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ ...shapeVariants.pulse, scale: 1.2 }}
          transition={{ delay: 1.1 }}
          style={{
            top: "30%",
            right: "25%",
            x: calculateParallax(0.02).x,
            y: calculateParallax(0.02).y,
          }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-green-500 shadow-2xl"
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ ...shapeVariants.pulse, scale: 1.2 }}
          transition={{ delay: 1.4 }}
          style={{
            bottom: "10%",
            left: "30%",
            transform: "rotate(45deg)",
            x: calculateParallax(0.04).x,
            y: calculateParallax(0.04).y,
          }}
        />

        {/* Floating placeholder images with Parallax */}
        <motion.img
          src="/gdg.jpg"
          alt="GDG Logo"
          className="absolute rounded-full shadow-lg"
          variants={imageFloatVariants}
          animate="float"
          style={{
            top: "5%",
            left: "70%",
            width: "100px",
            height: "100px",
            x: calculateParallax(0.04).x,
            y: calculateParallax(0.04).y,
          }}
        />
        <motion.img
          src="/dw.jpg"
          alt="Dataworks Logo"
          className="absolute rounded-lg shadow-lg"
          variants={imageFloatVariants}
          animate="float"
          transition={{ ...imageFloatVariants.float.transition, delay: 1 }}
          style={{
            bottom: "5%",
            left: "15%",
            width: "80px",
            height: "80px",
            x: calculateParallax(0.06).x,
            y: calculateParallax(0.06).y,
          }}
        />
      </div>

      {/* IIITDMK Coding Clubs Text (Professional Theme) */}
      <motion.h1
        className="relative z-10 text-6xl md:text-7xl font-extrabold text-center mb-4 leading-tight text-white"
        variants={mainTitleVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 300, damping: 10 },
        }}
        style={{
          // Professional drop shadow for a subtle lift
          textShadow: "0 4px 15px rgba(0,0,0,0.4)",
        }}
      >
        IIITDMK
        <br />
        Coding Clubs
      </motion.h1>

      <div className="relative z-10 h-20 w-full max-w-lg flex flex-col items-center justify-center mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={texts[currentText]}
            className="absolute text-5xl md:text-6xl font-bold"
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {texts[currentText]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sparkle effect on cursor */}
      <motion.div
        className="absolute w-2 h-2 rounded-full pointer-events-none"
        style={{
          background: "white",
          boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.8)",
          top: mousePosition.y - 4,
          left: mousePosition.x - 4,
          transform: "translate(-50%, -50%)",
          animation: "sparkle 0.5s ease-out forwards",
        }}
      />
    </div>
  );
};

export default Home;
