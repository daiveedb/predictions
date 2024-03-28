import React, { SetStateAction } from "react";

const GameDropDown = ({ name, price }: { name: string; price: number }) => {
  const gameDetails = {
    "Booster pack": [
      " Access to over 20 odds of expertly picks per day",
      "Access to two set of Experts ACCA",
      "Access to over 30 Leagues Tips forecast",
      "Risk limit management",
      "Get picks sent to you via sms",
    ],
    "Mega boom pack": [
      "Access to over 50 odds of expertly picks per day",
      "Access to two set of Experts ACCA",
      "Access to over 45 Leagues Tips forecast ",
      "Risk limit management",
      "Get picks sent to you via sms",
    ],
    "Rollover pack": [
      "Access to over 10 odds of expertly picks per day",
      "Access to two set of Experts ACCA",
      "Access to over 20 Leagues Tips forecast ",
      "Risk limit management",
      "Get picks sent to you via sms",
    ],
    "Starter pack": [
      "Access to over 4 odds of expertly picks per day",
      "Access to one set of Experts ACCA",
      "Access to over 10 Leagues Tips forecast",
      "Risk limit management",
      "Get picks sent to you via sms",
    ],
  };
  return (
    <div className="w-full bg-[#2A245D] p-3 rounded-md text-white">
      <p className="capitalize ">{name} Details</p>
      <p className="text-[10px] py-2">
        These are list of what you will be enjoying for{" "}
        <span className="font-semibold">
          {name} of {price}
        </span>
      </p>
      <div className="bg-[#FFFFFF1A] rounded-md p-2">
        {/* @ts-ignore */}
        {gameDetails[name].map((item: string, index: number) => {
          return (
            <div key={index}>
              <p className="text-xs sm:text-sm py-1">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameDropDown;
