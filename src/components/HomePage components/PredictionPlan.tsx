import React from "react";
import ButtonWithIcon from "../General/ButtonWithIcon";
import UpRightArrow from "@/app/icons/UpRightArrow";
import { predictionOptions } from "@/dummydata";
import PredictionCard from "./PredictionCard";

const PredictionPlan = () => {
  return (
    <div className="p-10 bg-cardBg_blue rounded-3xl">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-4xl font-semibold">Prediction Options</p>
          <p className="text-helperText text-xs">
            Our expert analysis and predictions for upcoming sporting events
          </p>
        </div>
        <ButtonWithIcon
          title="Subscribe to VIP plan"
          classNames="bg-yellow-400 rounded-full text-black py-2"
          icon={<UpRightArrow />}
        />
      </div>
      <div className="py-5 px-5 grid grid-cols-5 gap-2">
        {predictionOptions.map((item: string, index: number) => {
          return <PredictionCard key={index} betCategory={item} />;
        })}
      </div>
    </div>
  );
};

export default PredictionPlan;
