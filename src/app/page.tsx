import Hero from "@/components/Hero";
import "./globals-land.css";
import Navbar from "@/components/Navbar";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="land-scope">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}
