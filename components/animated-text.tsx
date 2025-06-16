"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string[];
  className?: string;
  delay?: number; // How long to show each word
  duration?: number; // Animation speed
}

export function AnimatedText({
  text,
  className,
  delay = 2000,
  duration = 300,
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % text.length);
    }, delay);
    return () => clearInterval(interval);
  }, [text.length, delay]);

  return (
    <div className={cn("relative h-10 w-full overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: duration / 1000 }}
        >
          {text[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
