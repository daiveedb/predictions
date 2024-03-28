import FootballImage from "@/app/icons/FootballImage";
import React from "react";
import moment from "moment";

export interface fixtureCardProps {
  fixture_date: string;
  home_team: string;
  away_team: string;
  league_name: string;
}
const FixtureItemCard: React.FunctionComponent<fixtureCardProps> = ({
  fixture_date,
  home_team,
  away_team,
  league_name,
}) => {
  return (
    <div className="p-5 py-7 bg-[#191533] rounded-lg shadow">
      <div className="flex justify-between items-center font-montserrat text-helperText text-xs">
        <div className="flex gap-x-2 items-center">
          <FootballImage width={20} height={20} />
          <p>{league_name}</p>
        </div>
        <p>{moment(fixture_date).format("MMM Do YY (LT)")}</p>
      </div>
      <div className=" flex justify-between">
        <p className="flex-[3]">{home_team}</p>
        <p className="flex-1 flex justify-center">vs</p>
        <p className="flex-[3] flex justify-end">{away_team}</p>
      </div>
    </div>
  );
};

export default FixtureItemCard;
