"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string[];
  className?: string;
  delay?: number;
  duration?: number;
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <div className={cn("relative h-8", className)}>
      {text.map((item, index) => (
        <motion.span
          key={index}
          className={cn(
            "absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r",
            index === 0
              ? "from-blue-500 to-purple-500"
              : index === 1
              ? "from-pink-500 to-orange-500"
              : "from-teal-500 to-green-500"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            y: currentIndex === index ? 0 : 20,
          }}
          transition={{ duration: duration / 1000 }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}