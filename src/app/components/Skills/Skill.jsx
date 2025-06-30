"use client";
import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import DivOrigami from "./LogoOrigami";

const Skill = () => {
  return (
    <div className="skill h-[100vh] w-[100vw]  flex flex-col items-center justify-center relative">
      <div className=" canva absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <div className="flex items-center gap-[40px]">
        <DivOrigami />
      </div>
    </div>
  );
};

export default Skill;
