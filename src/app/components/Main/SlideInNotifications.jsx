"use client";

import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

const SlideInNotifications = () => {
  return (
    <div className="notification inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-slate-950/45 px-3 py-2 backdrop-blur-xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        Available for roles
      </div>
      <Link
        href="mailto:work.vanshs@gmail.com"
        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
      >
        <FiMail />
        Email Me
      </Link>
    </div>
  );
};

export default SlideInNotifications;
