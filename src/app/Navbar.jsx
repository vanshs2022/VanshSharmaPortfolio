"use client";

import React, { useEffect, useState } from "react";
import Slidetabs from "./components/Navbar/SlideTabs";
import BubbleText from "./components/Navbar/BubbleText/BubbleText";
import SlideInNotifications from "./components/Main/SlideInNotifications";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={false}
      animate={{
        y: scrolled ? 0 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <BubbleText />
      <Slidetabs />
      <SlideInNotifications />
      <div className={`navbar-glow ${scrolled ? "navbar-glow-visible" : ""}`} />
    </motion.div>
  );
};

export default Navbar;
