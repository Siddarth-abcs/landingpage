import Image from "next/image";
import Navbar from "./components/Pages/Navbar";
import Planat from "./components/Pages/Planat";
import DiscussProject from "./components/Pages/DiscussProject";
import OurTeam from "./components/Pages/OurTeam";
import FAQ from "./components/Pages/FAQ";
import Footer from "./components/Pages/Footer";
import Industries from "./components/Pages/Industries";
import HeroSection from "./components/Pages/HeroSection";
import DevelopmentStage from "./components/Pages/DevelopmentStage";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Planat />
      <Industries />
      <DiscussProject />
      <DevelopmentStage />
      <OurTeam />
      <FAQ />
      <Footer />
    </div>
  );
}
