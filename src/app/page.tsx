import Hero from "@/components/Hero";
import "./globals-land.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="land-scope">
      <Navbar />
      <Hero />
      <div className="h-dvh"></div>
    </main>
  );
}
