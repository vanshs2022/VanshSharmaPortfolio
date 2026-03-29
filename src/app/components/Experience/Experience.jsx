"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const experiences = [
  {
    company: "Incedo Inc.",
    role: "Software Engineering Intern",
    duration: "Jan 2026 - Present",
    logo: "/incedo.png",
    status: "Current",
  },
  {
    company: "SRIB",
    role: "Research Intern",
    duration: "Jul 2025 - Jan 2026",
    logo: "/SRIB.png",
    status: "Previous",
  },
  {
    company: "BLS International",
    role: "Software Engineer Intern",
    duration: "May 2025 - Jun 2025",
    logo: "/BLS.png",
    status: "Previous",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience relative flex min-h-screen w-[100vw] items-center justify-center px-6 py-24"
    >
      <div className="canva absolute inset-0 z-0">
        <Canvas>
          <Stars radius={28} count={280} factor={1.6} fade speed={0.6} />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="experience-intro mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">
            Professional Journey
          </p>
          <h2 className="text-4xl font-black text-slate-100 md:text-6xl">
            Experience
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
            Roles that shaped my approach to software engineering, research, and
            product execution.
          </p>
        </motion.div>

        <div className="experience-shell relative overflow-hidden rounded-[36px] border border-white/8 bg-[rgba(9,11,16,0.7)] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_36%)]" />
          <div className="relative z-10 space-y-8">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="experience-entry grid gap-6 border-b border-white/8 pb-8 last:border-b-0 last:pb-0 md:grid-cols-[170px_24px_minmax(0,1fr)]"
              >
                <div className="flex flex-col justify-start">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500">
                    {item.status}
                  </p>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                    {item.duration}
                  </p>
                </div>

                <div className="experience-rail relative hidden md:block">
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/8 to-transparent" />
                  <span className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full border border-white/15 bg-white/80 shadow-[0_0_0_6px_rgba(255,255,255,0.04)]" />
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 md:p-7">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="experience-logo-wrap flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-3 shadow-[0_12px_40px_rgba(0,0,0,0.2)] md:h-20 md:w-20">
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={120}
                          height={120}
                          className="experience-logo h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-100 md:text-3xl">
                          {item.company}
                        </h3>
                        <p className="mt-1 text-base text-slate-300 md:text-lg">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                      {item.status}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
