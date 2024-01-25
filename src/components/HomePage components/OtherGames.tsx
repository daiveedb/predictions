import { otherGames } from "@/dummydata";
import React from "react";
import GameIcon, { gameIconProps } from "./GameIcon";

const OtherGames = () => {
  return (
    <div className="p-10 my-10 bg-cardBg_blue rounded-3xl w-full">
      <p className="text-4xl font-semibold w-[40%]">
        <span className="text-helperTitle">Make more</span> money <br /> with
        more fun games
      </p>
      <div className="grid grid-cols-5 gap-4 p-5 w-full py-10">
        {otherGames.map((item: gameIconProps) => {
          return <GameIcon key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default OtherGames;
