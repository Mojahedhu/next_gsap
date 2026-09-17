import type { Metadata } from "next";
import "./globals.css";
import { dmSerifText, modernNegra, monaSans } from "./fonts";
import GsapSetup from "@/shared/GsapSetup";

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
      <body>
        <GsapSetup>{children}</GsapSetup>
      </body>
    </html>
  );
}
