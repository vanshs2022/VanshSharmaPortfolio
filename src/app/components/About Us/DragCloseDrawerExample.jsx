import React from "react";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { useDragControls } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";

const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid h-[20px] w-[fit-content]  place-content-center bg-neutral-950 z-[999] ">
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
      >
        Find Out
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 ">
          <h2 className="text-4xl font-bold text-slate-400">
            Building Ideas Into Impact: A Developer’s Creative Journey
          </h2>
          <p>
            I'm Vansh Sharma, a BTech student at Vellore Institute of
            Technology, driven by a passion for tech-powered problem-solving. My
            journey blends software development, artificial intelligence, and
            design into purposeful creation. Whether it's building full-stack
            applications or experimenting with deep learning models, I’m
            constantly exploring how technology can make ideas come alive.
          </p>
          <p>
            I specialize in web development using tools like React, Tailwind,
            and Express. On the AI side, I’ve worked with YOLOv10, CNNs, and
            ResNet on projects involving bacterial detection and waterborne
            contaminant identification. I enjoy diving deep into custom
            datasets, training models, and solving real-world challenges with
            efficient code and creative thinking.
          </p>
          <p>
            I actively participate in hackathons, lead student initiatives, and
            collaborate with peers to build innovative solutions under tight
            deadlines. My roles often span backend logic, database design, and
            team communication, where I bring both structure and creativity to
            the table.
          </p>
          <p>
            This portfolio is a window into my world — one where code,
            collaboration, and curiosity meet. I believe growth comes from
            staying hands-on, learning fast, and taking ownership. Thanks for
            stopping by — let’s build something meaningful.
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default DragCloseDrawerExample;
