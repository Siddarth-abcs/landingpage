import Image from "next/image";
import Navbar from "./components/Pages/Navbar";
import HeroSection from "./components/Pages/HeroSection";
import Planat from "./components/Pages/Planat";
import Industries from "./components/Pages/Industries";
import DiscussProject from "./components/Pages/DiscussProject";
import DevelopmentStage from "./components/Pages/DevelopmentStage";
import OurTeam from "./components/Pages/OurTeam";
import FAQ from "./components/Pages/FAQ";
import Footer from "./components/Pages/Footer";
import { TracingBeam } from "./components/ui/tracing-beam";

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
