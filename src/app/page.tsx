import Hero from "@/components/HomePage components/Hero";
import OtherGames from "@/components/HomePage components/OtherGames";
import PredictionPlan from "@/components/HomePage components/PredictionPlan";
import Testimonies from "@/components/HomePage components/Testimonies";
import UpcomingFixtures from "@/components/HomePage components/UpcomingFixtures";
import Logo from "@/components/Navigation/Logo";
import Navbar from "@/components/Navigation/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <UpcomingFixtures />
      <PredictionPlan />
      <OtherGames />
      <Testimonies />
    </div>
  );
}
