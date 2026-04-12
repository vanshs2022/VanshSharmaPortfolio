"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const StarField = ({
  radius = 32,
  count = 260,
  factor = 2,
  speed = 0.6,
  className = "",
  style,
}) => {
  const rootRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "240px" }
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={className} style={style} aria-hidden="true">
      {isVisible && (
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: "low-power" }}
        >
          <Stars radius={radius} count={count} factor={factor} fade speed={speed} />
        </Canvas>
      )}
    </div>
  );
};

export default StarField;
