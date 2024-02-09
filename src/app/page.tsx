"use client";
import Hero from "@/components/HomePage components/Hero";
import OtherGames from "@/components/HomePage components/OtherGames";
import PredictionPlan from "@/components/HomePage components/PredictionPlan";
import SuperFreePicks from "@/components/HomePage components/SuperFreePicks";
import Testimonies from "@/components/HomePage components/Testimonies";
import UpcomingFixtures from "@/components/HomePage components/UpcomingFixtures";
import { superFreePicks } from "@/dummydata";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   document.body.requestFullscreen();
  // }, []);
  return (
    <div>
      <div className="relative bg-[radial-gradient(#00205B,#05022B,#05022B)]">
        <Hero />
        <SuperFreePicks
          tablist={["yesterday", "today"]}
          list1={superFreePicks.today}
          list2={superFreePicks.yesterday}
        />
      </div>
      <UpcomingFixtures />
      <PredictionPlan />
      <OtherGames />
      <Testimonies />
    </div>
  );
}
