"use client";

import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiBriefcase, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

export const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="contact relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-zinc-50 md:px-8"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={32} count={450} factor={2} fade speed={0.8} />
        </Canvas>
      </div>
      <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300 md:text-sm md:tracking-[0.45em]">
          Contact
        </p>
        <h2 className="text-3xl font-black text-slate-100 md:text-6xl">
          Let&apos;s Build Something Impactful
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-400 md:text-lg">
          I&apos;m open to internships, entry-level software roles, and
          meaningful collaborations where product quality and engineering craft
          both matter.
        </p>
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.05,
        }}
        className="contact-detail relative z-10 mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-4 md:gap-6"
      >
        <HeaderBlock />
        <SocialsBlock />
        <LocationBlock />
        <OpportunityBlock />
      </motion.div>
      <Footer />
      <div className="footer-heading absolute bottom-0 w-full text-center">
        Copyright @ 2026 Vansh Sharma Portfolio | All rights reserved
      </div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      whileHover={{
        scale: 1.03,
      }}
      className={twMerge(
        "contact-all col-span-4 rounded-[28px] border border-white/10 bg-[rgb(3,7,18)] p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="contact-connect col-span-12 row-span-2 md:col-span-7">
    <h1 className="mb-8 text-3xl font-medium leading-tight md:text-4xl">
      <span className="text-zinc-400">
        Thoughtful products need thoughtful engineering. I&apos;d love to
        connect for internships, software roles, and ambitious projects.
      </span>
    </h1>
    <div className="flex flex-wrap gap-3">
      <Link
        href="mailto:work.vanshs@gmail.com"
        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/20"
      >
        <FiMail />
        work.vanshs@gmail.com
      </Link>
      <Link
        href="https://www.linkedin.com/in/vansh-sharma-0b4676267/"
        target="_blank"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
      >
        Connect on LinkedIn <FiArrowRight />
      </Link>
    </div>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      className="youtube col-span-6 md:col-span-2"
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="https://leetcode.com/u/vns444555/"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <div className="flex h-12 w-12 items-center justify-center">
          <Image src={"/leetcode.png"} alt="Leetcode Logo" width={36} height={36} />
        </div>
      </Link>
    </Block>
    <Block
      className="github col-span-6 bg-green-600 md:col-span-2"
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="https://uni-colab.vercel.app/explore/profile/6878b01e5d578f0ae974f703"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <div className="flex h-12 w-12 items-center justify-center">
          <Image
            src={"/unicolab_contact.png"}
            alt="UniCoLab Logo"
            width={44}
            height={44}
            className="h-auto w-auto object-contain"
          />
        </div>
      </Link>
    </Block>
    <Block
      className="linkedin col-span-6 bg-zinc-50 md:col-span-2"
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="https://www.linkedin.com/in/vansh-sharma-0b4676267/"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <div className="flex h-12 w-12 items-center justify-center">
          <FaLinkedinIn />
        </div>
      </Link>
    </Block>
    <Block
      className="twitter col-span-6 bg-blue-500 md:col-span-2"
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="https://github.com/vanshs2022"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <div className="flex h-12 w-12 items-center justify-center">
          <SiGithub />
        </div>
      </Link>
    </Block>
  </>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">India</p>
    <p className="text-center text-sm text-slate-500">
      Available for remote and hybrid opportunities
    </p>
  </Block>
);

const OpportunityBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Currently Focused On
        </p>
        <p className="text-xl font-semibold text-slate-100">
          Building scalable web experiences and growing as a full-stack engineer.
        </p>
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
        <FiBriefcase />
        Software Engineering Intern
      </div>
    </div>
  </Block>
);

const Footer = () => {
  return (
    <footer className="relative z-10 mt-12">
      <p className="text-center text-zinc-400">
        Made with care by{" "}
        <Link
          href="https://www.linkedin.com/in/vansh-sharma-0b4676267/"
          className="text-red-300 hover:underline"
        >
          Vansh Sharma
        </Link>
      </p>
    </footer>
  );
};

export default Contact;
