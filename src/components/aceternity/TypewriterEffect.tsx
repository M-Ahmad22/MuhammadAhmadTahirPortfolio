"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseDuration = isDeleting ? 1000 : 3000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word.text) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else if (!isDeleting) {
        // Typing character by character
        setCurrentText(word.text.substring(0, currentText.length + 1));
      } else {
        // Deleting character by character
        setCurrentText(word.text.substring(0, currentText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words]);

  const currentWord = words[currentWordIndex];

  return (
    <div className={cn("text-left", className)}>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display">
        <span className={cn("text-primary", currentWord.className)}>
          {currentText}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-[3px] h-8 md:h-12 lg:h-16 bg-primary ml-1",
            cursorClassName
          )}
        />
      </div>
    </div>
  );
};