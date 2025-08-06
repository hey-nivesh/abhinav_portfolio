"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
   
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "black", 
    "black", 
    "black", 
  ];
  
  const linearGradients = useMemo(() => [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", 
    "linear-gradient(to bottom right, #ec4899, #6366f1)", 
    "linear-gradient(to bottom right, #f97316, #eab308)", 
  ], []);

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <div className="w-full">
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            <h1 className="text-white text-6xl font-bold text-center mb-8">EXPERIENCE</h1>
            {content.map((item, index) => (
              <div key={item.title + index} className="my-8">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-white"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg mt-4 max-w-sm text-white"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
            contentClassName,
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </div>
  );
};
