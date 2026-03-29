"use client";

import React from "react";
import Example from "./TiltCard";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="project-cards relative mb-8 flex w-full items-center justify-between gap-8 rounded-[28px] border border-white/10 bg-slate-950/45 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl md:rounded-[32px] md:p-8"
    >
      <Example image={props.image} title={props.heading} link={props.link} />
      <div className="project-heading flex flex-col items-center">
        <p className="w-full text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300 md:text-sm md:tracking-[0.3em]">
          Case Study
        </p>
        <h1 className="mt-3 w-full text-3xl font-bold text-slate-100 md:text-4xl">
          {props.heading}
        </h1>
        <p className="mt-4 w-full text-base leading-7 text-slate-300 md:text-lg md:leading-8">
          {props.detail}
        </p>
        <div className="mt-6 grid w-full gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Tech Stack
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{props.stack}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Outcome
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              {props.outcome}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
