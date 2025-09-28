"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div 
      className={cn("flex items-center gap-4 px-6 py-4 rounded-2xl glass-elegant border-elegant", className)}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
        {items.map((item, idx) => (
          <a
            key={item.title}
            href={item.href}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -8 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.div>
            
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 2, scale: 0.6 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg glass-elegant border-elegant text-xs font-mono text-primary whitespace-nowrap"
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
          </a>
        ))}
    </motion.div>
  );
};