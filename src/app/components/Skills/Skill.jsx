"use client";

import React from "react";
import StarField from "../Performance/LazyStarField";

const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Angular", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: [".NET Core", "Node.js", "Express.js", "CodeIgniter 4", "REST APIs"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "PHP"],
  },
  {
    title: "Data & Tools",
    items: ["AWS", "MongoDB", "MySQL", "Git", "GitHub", "Responsive Design"],
  },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="skill relative flex min-h-screen w-[100vw] flex-col items-center justify-center px-4 py-20 md:px-6"
    >
      <StarField className="canva absolute inset-0 z-0" count={240} speed={0.6} />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300 md:text-sm md:tracking-[0.45em]">
            Core Strengths
          </p>
          <h2 className="text-3xl font-black text-slate-100 md:text-6xl">
            Skills & Tools
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 md:text-lg">
            I enjoy building polished interfaces, dependable backend services,
            and end-to-end products that feel intuitive to use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[28px] border border-white/10 bg-slate-950/45 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {group.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
