import FootballImage from "@/app/icons/FootballImage";

import React from "react";
import FixtureItemCard, { fixtureCardProps } from "./FixtureItemCard";
import { useGetUpcomingMatches } from "@/api/getUpcomingMatches";

const UpcomingFixtures = () => {
  const { data: UpcomingMatches, isLoading: fixturesLoading } =
    useGetUpcomingMatches();
  return (
    <div className="md:p-10 py-10">
      <div className="flex gap-x-4 items-center">
        <p className="text-2xl md:text-4xl font-semibold">Upcoming Fixtures</p>
        <FootballImage height={40} width={40} />
      </div>
      <div className="py-5 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {UpcomingMatches?.all_prediction
          ?.slice(0, 8)
          .map((item: fixtureCardProps, index: number) => {
            return <FixtureItemCard key={index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default UpcomingFixtures;
