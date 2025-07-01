import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
  const data = [
    {
      image: "/unicolab_logo.png",
      link: "https://gaurfundation.vercel.app/",
      name: "UniCoLab",
      para: "UniCoLab is a platform with a goal of connect huge talent to its seekers, making collaborations and conquering the world with thier potential. This platform is built using Next.js, Tailwind CSS, Express.js and MongoDB.",
    },
    {
      image: "/twogood.png",
      link: "https://harshitgaur2205.github.io/twogoodclone.github.in/",
      name: "Steganography Tool",
      para: "This tool is for hiding of data inside the image in encrypted form for security of texts and message to be transferred over th4e internet. It is built using Python with the help of flask library for web hosting.",
    },
    {
      image: "/duofinal.png",
      link: "https://harshitgaur2205.github.io/project-2.github.in/",
      name: "DUO STUDIO CLONE",
      para: "This web page is a clone of an award-winning website and also contains some of my additional features. This project challenged me with new ways of adding animations and designs in a website using pure CSS, HTML, and JavaScript.",
    },
  ];

  return (
    <div className="project relative min-h-screen" id="project">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas style={{ zIndex: 0 }}>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative z-10 mx-auto w-[85%] py-12"
      >
        {data.map((x, index) => (
          <Card
            key={index}
            heading={x.name}
            detail={x.para}
            image={x.image}
            link={x.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
