import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
  const data = [
    {
      image: "/unicolab_logo.png",
      link: "https://uni-colab.vercel.app/",
      name: "UniCoLab",
      summary:
        "A collaboration platform that connects talent with people looking for teammates, ideas, and project opportunities.",
      stack: "Next.js, Tailwind CSS, Express.js, MongoDB",
      outcome:
        "Designed to make discovery and collaboration smoother for students and builders.",
    },
    {
      image: "/steganography.png",
      link: "https://steganographytool-fexw.onrender.com/",
      name: "Steganography Tool",
      summary:
        "A secure utility for hiding encrypted text inside images for safer message transfer across the internet.",
      stack: "Python, Flask",
      outcome:
        "Focused on practical encryption workflows with a simple web interface.",
    },
    {
      image: "/TraveInGlobe.png",
      link: "https://traveln-globe.vercel.app/",
      name: "TraveInGlobe",
      summary:
        "A travel booking interface built to deliver a smooth and engaging browsing experience for destination discovery.",
      stack: "React.js, CSS",
      outcome:
        "One of my earliest frontend builds, focused on responsive UI and visual flow.",
    },
  ];

  return (
    <div className="project relative min-h-screen" id="project">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas style={{ zIndex: 0 }}>
          <Stars radius={34} count={550} factor={2} fade speed={0.8} />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 mx-auto w-[88%] max-w-6xl py-20"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
            Featured Work
          </p>
          <h2 className="text-4xl font-black text-slate-100 md:text-6xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
            A few projects that reflect how I approach product thinking,
            frontend polish, and full-stack implementation.
          </p>
        </div>
        {data.map((project, index) => (
          <Card
            key={index}
            heading={project.name}
            detail={project.summary}
            image={project.image}
            link={project.link}
            stack={project.stack}
            outcome={project.outcome}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
