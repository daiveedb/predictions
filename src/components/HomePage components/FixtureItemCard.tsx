import FootballImage from "@/app/icons/FootballImage";
import React from "react";

export interface fixtureCardProps {
  date: string;
  team1: string;
  team2: string;
  competition: string;
}
const FixtureItemCard: React.FunctionComponent<fixtureCardProps> = ({
  date,
  team1,
  team2,
  competition,
}) => {
  return (
    <div className="p-5 py-7 bg-[#191533] rounded-lg shadow">
      <div className="flex justify-between items-center font-montserrat text-helperText text-xs">
        <div className="flex gap-x-2 items-center">
          <FootballImage width={20} height={20} />
          <p>{competition}</p>
        </div>
        <p>{date}</p>
      </div>
      <div className=" flex justify-between">
        <p>{team1}</p>
        <p>vs</p>
        <p>{team2}</p>
      </div>
    </div>
  );
};

export default FixtureItemCard;
