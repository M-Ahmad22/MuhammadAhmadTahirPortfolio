"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  IconBrandReact, 
  IconBrandNodejs, 
  IconBrandPython, 
  IconBrandDocker,
  IconBrandAws,
  IconBrandGithub,
  IconBrandTypescript,
  IconBrandFlutter
} from "@tabler/icons-react";

export const FloatingIcons = () => {
  const icons = [
    { Icon: IconBrandReact, color: "text-blue-400", delay: 0 },
    { Icon: IconBrandNodejs, color: "text-green-400", delay: 0.5 },
    { Icon: IconBrandPython, color: "text-yellow-400", delay: 1 },
    { Icon: IconBrandDocker, color: "text-blue-500", delay: 1.5 },
    { Icon: IconBrandAws, color: "text-orange-400", delay: 2 },
    { Icon: IconBrandGithub, color: "text-gray-400", delay: 2.5 },
    { Icon: IconBrandTypescript, color: "text-blue-600", delay: 3 },
    { Icon: IconBrandFlutter, color: "text-cyan-400", delay: 3.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + (index % 3) * 30}%`,
            top: `${20 + Math.floor(index / 3) * 25}%`,
          }}
        >
          <Icon size={32} className="drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
};