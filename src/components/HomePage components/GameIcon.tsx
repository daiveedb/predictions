import Image from "next/image";
import React from "react";

export interface gameIconProps {
  id: number;
  game: string;
  imgSrc: string;
  url: string;
}
const GameIcon: React.FunctionComponent<gameIconProps> = ({
  id,
  game,
  imgSrc,
  url,
}) => {
  return (
    <div className="w-full">
      <div className="relative game-icon lg:h-[150px] w-[120px] h-[120px] lg:w-[150px]">
        <Image alt="image of a game" src={imgSrc} fill />
        <div className="absolute top-2 right-2 bg-white text-black rounded-full p-2 text-xs">
          Play
        </div>
      </div>
    </div>
  );
};

export default GameIcon;
