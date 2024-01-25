import Hero from "@/components/HomePage components/Hero";
import HomeSvgs from "@/components/HomePage components/HomeSvgs";
import OtherGames from "@/components/HomePage components/OtherGames";
import PredictionPlan from "@/components/HomePage components/PredictionPlan";
import SuperFreePicks from "@/components/HomePage components/SuperFreePicks";
import Testimonies from "@/components/HomePage components/Testimonies";
import UpcomingFixtures from "@/components/HomePage components/UpcomingFixtures";
import Logo from "@/components/Navigation/Logo";
import Navbar from "@/components/Navigation/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="relative bg-[radial-gradient(#00205B,#05022B,#05022B)]">
        <Hero />
        <SuperFreePicks />
      </div>
      <UpcomingFixtures />
      <PredictionPlan />
      <OtherGames />
      <Testimonies />
      <HomeSvgs />
    </div>
  );
}
