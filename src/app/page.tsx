import Hero from "@/components/Hero";
import "./globals-land.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="land-scope">
      <Navbar />
      <Hero />
    </div>
  );
}
