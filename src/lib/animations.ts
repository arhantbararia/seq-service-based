"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const animations = {
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
  stagger: 0.1,
};
