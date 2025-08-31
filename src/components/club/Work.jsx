import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Rocket } from "lucide-react"; // nice icons

const Work = ({ helpAreas = [], techStack = [], projects = [] }) => {
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col items-center justify-center bg-white py-20 px-6"
    >
      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-4 text-gray-800">What We Do</h2>
      <div className="w-24 h-1 bg-blue-500 mb-12 rounded"></div>

      {/* Help Areas */}
      {helpAreas.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-6 h-6 text-blue-500" />
            <h3 className="text-3xl font-semibold text-gray-800">
              Where We Help
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full max-w-4xl">
            {helpAreas.map((area, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer text-center"
              >
                <h4 className="text-xl font-bold text-gray-700">{area}</h4>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Tech Stack */}
      {techStack.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-green-500" />
            <h3 className="text-3xl font-semibold text-gray-800">Tech Stack</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full max-w-5xl">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition text-center"
              >
                <h4 className="text-xl font-bold text-gray-700">{tech.title}</h4>
                <p className="text-gray-500 mt-2">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="w-6 h-6 text-pink-500" />
            <h3 className="text-3xl font-semibold text-gray-800">Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition text-center"
              >
                <h4 className="text-xl font-bold text-gray-700">
                  {project.title}
                </h4>
                <p className="text-gray-500 mt-2">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Work;
