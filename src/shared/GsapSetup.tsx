"use client";

import gsap from "gsap";
import { SplitText } from "gsap/all";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins safely on the client side
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function GsapSetup({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
