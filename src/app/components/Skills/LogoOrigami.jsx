"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHtml5, FaReact, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import expressLogo from "../../../../public/express.png";
import { DiMongodb, DiMysql, DiCodeigniter, DiGit } from "react-icons/di";
import "./flipcard.css";

const skills = [
  { icon: FaPython, className: "bg-yellow-300 text-neutral-900", type: "icon" },
  {
    icon: FaJava,
    className: "bg-red-300 text-neutral-900 rotate-y-180",
    type: "icon",
  },
  { icon: FaHtml5, className: "bg-orange-500 text-neutral-900", type: "icon" },
  {
    icon: IoLogoJavascript,
    className: "bg-yellow-300 text-neutral-900 rotate-y-180",
    type: "icon",
  },
  { icon: FaReact, className: "bg-cyan-300 text-neutral-900", type: "icon" },
  {
    icon: RiTailwindCssFill,
    className: "bg-white text-black rotate-y-180",
    type: "icon",
  },
  { icon: DiGit, className: "bg-red-300 text-neutral-900", type: "icon" },
  {
    icon: FaNodeJs,
    className: "bg-lime-300 text-neutral-900 rotate-y-180",
    type: "icon",
  },
  {
    icon: DiCodeigniter,
    className: "bg-green-300 text-neutral-900",
    type: "icon",
  },
  {
    icon: DiMongodb,
    className: "bg-emerald-200 text-black rotate-y-180",
    type: "icon",
  },
  { icon: DiMysql, className: "bg-indigo-300 text-neutral-900", type: "icon" },
  {
    icon: expressLogo,
    className: "bg-yellow-300 text-white rotate-y-180",
    type: "image",
  },
];

export default function DivOrigami() {
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 180);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % skills.length);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSkill = skills[index];
  const CurrentIcon = currentSkill.icon;
  const currentClass = currentSkill.className;

  return (
    <div className="w-[300px] h-[300px] perspective mx-auto mt-24">
      <div
        className="w-full h-full transition-transform duration-700 preserve-3d"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div
          className={`w-full h-full flex items-center justify-center text-6xl rounded-xl shadow-xl ${currentClass}`}
        >
          {currentSkill.type === "icon" ? (
            <CurrentIcon />
          ) : (
            <Image src={CurrentIcon} alt="Express" width={100} height={100} />
          )}
        </div>
      </div>
    </div>
  );
}
