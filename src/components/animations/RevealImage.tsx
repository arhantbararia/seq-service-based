"use client";

import { motion } from "framer-motion";

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
}

export function RevealImage({ src, alt, className = "", imageClassName = "", delay = 0 }: RevealImageProps) {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a sharp, premium feel
        delay 
      }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 1.5, 
          ease: [0.22, 1, 0.36, 1],
          delay 
        }}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imageClassName}`}
        loading="lazy"
      />
    </motion.div>
  );
}
