"use client";
import { useGetFreePicks } from "@/api/getFreePicks";
import { useGetSubscriptions } from "@/api/getSubscriptions";
import { useGetUpcomingMatches } from "@/api/getUpcomingMatches";
import Hero from "@/components/HomePage components/Hero";
import OtherGames from "@/components/HomePage components/OtherGames";
import PredictionPlan from "@/components/HomePage components/PredictionPlan";
import SuperFreePicks from "@/components/HomePage components/SuperFreePicks";
import Testimonies from "@/components/HomePage components/Testimonies";
import UpcomingFixtures from "@/components/HomePage components/UpcomingFixtures";
import { superFreePicks } from "@/dummydata";
import moment from "moment";
import { useEffect } from "react";
import ReactLoader from "react-loading";

export default function Home() {
  const { data: freePicksData, isLoading } = useGetFreePicks();
  const today = moment(Date.now()).format("YYYY-MM-DD");
  const tomorrow = moment(Date.now()).add(1, "days").format("YYYY-MM-DD");

  return (
    <div>
      <div className="relative bg-[radial-gradient(#00205B,#05022B,#05022B)]">
        <Hero />
        {freePicksData && (
          <SuperFreePicks
            tablist={["Today", "Tomorrow"]}
            list1={freePicksData?.all_prediction[today]}
            list2={freePicksData?.all_prediction[tomorrow]}
          />
        )}
        {isLoading && (
          <div className="flex justify-center items-center w-full py-20">
            <ReactLoader type="spin" width={80} height={80} color="white" />
          </div>
        )}
      </div>
      <UpcomingFixtures />
      <PredictionPlan />
      <OtherGames />
      <Testimonies />
    </div>
  );
}
