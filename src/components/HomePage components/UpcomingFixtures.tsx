import FootballImage from "@/app/icons/FootballImage";
import { upcomingFixtures } from "@/dummydata";
import React from "react";
import FixtureItemCard, { fixtureCardProps } from "./FixtureItemCard";

const UpcomingFixtures = () => {
  return (
    <div className="p-10">
      <div className="flex gap-x-4 items-center">
        <p className="text-4xl font-semibold">Upcoming Fixtures</p>
        <FootballImage height={40} width={40} />
      </div>
      <div className="py-5 px-5 grid grid-cols-3 gap-3">
        {upcomingFixtures.map((item: fixtureCardProps, index: number) => {
          return <FixtureItemCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default UpcomingFixtures;
