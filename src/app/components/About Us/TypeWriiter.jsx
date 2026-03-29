import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const TypeWriiter = () => {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Engineer", "Backend Engineer", "Full-Stack Developer"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 30,
  });
  return (
    <div
      id="amIa"
      className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center shadow-[0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl"
    >
      <h1 className="text-[clamp(1.25rem,2.6vw,2.4rem)] font-semibold tracking-[0.08em] text-slate-300">
        Building with the mindset of a{" "}
        <span className="text-white">{typeEffect}</span>
      </h1>
    </div>
  );
};

export default TypeWriiter;
