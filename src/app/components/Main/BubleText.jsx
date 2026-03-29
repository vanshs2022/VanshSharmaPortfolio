"use client";
import React from "react";
import styles from "./bubble.module.css";
import { motion } from "framer-motion";

const BubbleText = () => {
  return (
    <div className="header">
      <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
        My Name Is
      </span>
      <div>
        <motion.h2
          className="harshit h-[fit-content] w-auto whitespace-nowrap text-center font-semibold text-slate-100"
        >
          {"VANSH SHARMA".split("").map((child, idx) => (
            <span className={styles.hoverText} key={idx}>
              {child}
            </span>
          ))}
        </motion.h2>
        
      </div>
    </div>
  );
};

export default BubbleText;
