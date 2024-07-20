import Image from "next/image";
import Navbar from "./components/Pages/Navbar";
import HeroSection from "./components/Pages/HeroSection";
import Planat from "./components/Pages/Planat";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <Planat />
    </div>
  );
}
