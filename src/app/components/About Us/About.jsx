"use client";
import React from "react";
import TypeWriiter from "./TypeWriiter";
import DragCloseDrawerExample from "./DragCloseDrawerExample";
import { motion } from "framer-motion";
import StarField from "../Performance/LazyStarField";

const aboutHighlights = ["Full-stack web", "AI projects", "Product thinking"];

const About = () => {
  return (
    <motion.div
      id="about"
      className="about h-[100vh] w-[100vw] bg-black-900 flex flex-col items-center justify-center relative"
    >
      <StarField className="canva absolute inset-0 z-0" count={260} speed={0.6} />

      <motion.h1
        initial={{ y: -200 , opacity:0 }}
        whileInView={{ y: 0 , opacity:1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, type: "spring" , stiffness:100 }}
        id="about-heading"
        className="about-txt text-[4.5vw] font-black uppercase tracking-[0.12em] text-slate-200"
      >
        KNOW MORE ABOUT ME 
      </motion.h1>
      <motion.div
        initial={{ y: -50 , opacity: 0 }}
        whileInView={{ y: 0 , opacity:1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay:0.5, type: "spring" ,stiffness:200 }}
        className="hidden md:block"
      >
        <TypeWriiter />
      </motion.div>
      <br />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="about-mobile-story relative z-10 md:hidden"
      >
        <p className="about-mobile-kicker">Developer Profile</p>
        <h2>Building useful products with clean engineering.</h2>
        <p>
          I am Vansh Sharma, a BTech student at VIT who enjoys turning ideas
          into full-stack products, polished interfaces, and practical AI
          experiments.
        </p>
        <div className="about-mobile-tags">
          {aboutHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="about-mobile-note">
          <p>
            I work across React, Tailwind, Express, databases, and model-driven
            projects. I like building things that feel clear, fast, and useful
            from the first tap.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0,  y: -50 }}
        whileInView={{ opacity: 1,  y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1, type: "spring" , stiffness:300 }}
        className="relative z-10 hidden md:block"
      >
        <DragCloseDrawerExample />
      </motion.div>
    </motion.div>
  );
};

export default About;
