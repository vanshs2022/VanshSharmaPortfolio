"use client";

import dynamic from "next/dynamic";

const LazyStarField = dynamic(() => import("./StarField"), {
  ssr: false,
});

export default LazyStarField;
