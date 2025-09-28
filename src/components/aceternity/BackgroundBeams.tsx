"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "m-373 -197c0 0 69 381 523 508 454 127 523 492 523 492",
    "m-373 -197c0 0 69 381 523 508 454 127 523 492 523 492",
  ];
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, index) => (
          <motion.path
            key={`path-${index}`}
            d={path}
            stroke={`url(#gradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 5,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
        <defs>
          {paths.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`gradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="hsl(264 100% 75%)" />
              <stop offset="50%" stopColor="hsl(195 100% 70%)" />
              <stop offset="100%" stopColor="hsl(340 100% 70%)" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};