"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface SkillItem {
  icon: React.ReactNode;
  name: string;
}

interface TimelineEntry {
  title: string;
  content: SkillItem[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref.current]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto p-4 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg font-semibold md:text-4xl text-black dark:text-white max-w-4xl">
          Skills
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
      {data.map((item, index) => (
          <div key={index} className="flex flex-col items-end min-w-80 pr-4 pt-10 md:pt-40 md:gap-10">
            {/* Timeline Circle and Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className=" text-xl pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="flex items-center min-w-fit w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-[#e1dbdb] dark:bg-zinc-800 px-3 py-6 rounded-lg gap-3 md:gap-4 w-full max-w-4xl">
                {item.content.map((skill, idx) => (
                  <div key={idx} className="w-full break-words flex flex-col items-center gap-2 p-2">
                    <div className="flex items-center justify-center">
                      {skill?.icon}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
                      {skill?.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Scroll Progress Indicator */}
        <div
          style={{ height }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] mask-image-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
