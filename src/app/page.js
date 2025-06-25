"use client"
import React from "react";
import Navbar from "./Navbar";
import AuroraHero from "./components/Main/Hero"
import About from "./components/About Us/About";
import { Contact } from "./components/Contact Us/Contact";
import Projects from "./components/Projects/Projects";
import Marquee from "./components/Marquee/Marquee";

import Skill from "./components/Skills/Skill";

const page = () => {
  return (
    <div className="app relative">
      <Navbar />             
      <AuroraHero />
      <Marquee name={"ABOUT ME"}/>
      <About />
      <Marquee name={"PROJECTS"}/>
      <Projects />
      {/* <Skill /> */}
      <Marquee name={"CONTACT"}/>
      <Contact />
    </div>
  );
};

export default page;
