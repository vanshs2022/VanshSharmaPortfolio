"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

const Example = (props) => {
  return (
    <Link
      href={props.link}
      target="_blank"
      className="grid w-full place-content-center px-2 py-6 text-slate-900 md:px-4 md:py-8"
    >
      <TiltCard rer={props.image} title={props.title} />
    </Link>
  );
};

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 10;

const TiltCard = (props) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[22rem] w-[18rem] rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-300/80 via-slate-200 to-white shadow-[0_24px_60px_rgba(15,23,42,0.35)]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 flex flex-col items-center justify-center rounded-[22px] bg-white px-5 py-6 shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(75px)",
          }}
          className="flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4"
        >
          <Image
            src={props.rer}
            alt={props.title}
            width={220}
            height={140}
            className="h-full w-full object-contain"
          />
        </div>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="mt-5 text-center text-xl font-bold text-slate-800"
        >
          {props.title}
        </p>
      </div>
    </motion.div>
  );
};

export default Example;
