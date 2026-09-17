import type { Metadata } from "next";
import "./globals.css";
import { dmSerifText, modernNegra, monaSans } from "./fonts";

export const metadata: Metadata = {
  title: "Juice App",
  description: "Juice App Landing Page with GSAP for event driven animation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSerifText.variable} ${monaSans.variable} ${modernNegra.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
