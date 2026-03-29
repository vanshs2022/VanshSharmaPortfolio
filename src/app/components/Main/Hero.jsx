"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import BubbleText from "./BubleText";
import Link from "next/link";

const COLORS_TOP = ["#3f3f46", "#09090b", "#18181b", "#09090b"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 10px 40px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="home"
      className="main relative grid min-h-[100vh] w-[100vw] place-content-center overflow-hidden bg-gray-950 px-4 py-20 text-gray-200 md:px-6 md:py-24"
    >
      <div className="hero-shell relative z-10 mx-auto flex max-w-5xl flex-col items-center rounded-[28px] border border-white/10 bg-slate-950/35 px-5 py-8 text-center shadow-[0_25px_120px_rgba(2,6,23,0.7)] backdrop-blur-xl md:rounded-[32px] md:px-16 md:py-16">
        <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-slate-200 md:text-xs md:tracking-[0.35em]">
          Software Engineering Intern at Incedo Inc.
        </div>
        <BubbleText />
        <motion.p className="mt-5 max-w-3xl text-center text-base leading-7 text-slate-300 md:text-xl md:leading-8">
          I build full-stack web products with a strong focus on clean user
          experiences, thoughtful engineering, and practical problem solving.
        </motion.p>
        <motion.p className="mt-4 max-w-[18rem] text-xs uppercase tracking-[0.28em] text-slate-500 md:mt-3 md:max-w-2xl md:text-base md:tracking-[0.3em]">
          Next.js • React • Node.js • MongoDB • Tailwind CSS
        </motion.p>
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:w-auto md:gap-4">
          <motion.div
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900/80 px-5 py-3 text-sm font-semibold text-gray-50 transition-colors hover:bg-black sm:w-fit"
          >
            <FiDownload />
            <Link
              href="https://drive.google.com/file/d/1P_-ae_ILGyehvtsald41inWsIS99yVAt/view"
              target="_blank"
            >
              View Resume
            </Link>
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.div>
          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10 sm:w-fit"
          >
            <FiMail />
            Let&apos;s Connect
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={28} count={320} factor={1.7} fade speed={0.6} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default AuroraHero;
