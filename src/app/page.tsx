import Hero from "@/components/Hero";
import "./globals-land.css";
import Navbar from "@/components/Navbar";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";
import Art from "@/components/Art";

export default function Home() {
  return (
    <main className="land-scope">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}
