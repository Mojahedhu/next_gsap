// src/app/fonts.ts
import { DM_Serif_Text, Mona_Sans, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Optimize Google Fonts
export const dmSerifText = DM_Serif_Text({
  weight: ["400"], // DM Serif Text only supports 400 weight
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif", // CSS Variable name
  display: "swap",
});

export const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
  display: "swap",
});

// 2. Optimize Local Font (Modern Negra)
export const modernNegra = localFont({
  src: "../../public/fonts/Modern Negra Demo.ttf", // Path relative to this file
  variable: "--font-modern-negra",
  display: "swap",
});
