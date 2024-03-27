import React from "react";
import ButtonWithIcon from "../General/ButtonWithIcon";
import UpRightArrow from "@/app/icons/UpRightArrow";
import { predictionOptions } from "@/dummydata";
import PredictionCard from "./PredictionCard";
import Link from "next/link";

const PredictionPlan = () => {
  return (
    <div className="p-4 sm:p-10 bg-cardBg_blue rounded-3xl">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Prediction Options
          </p>
          <p className="text-helperText text-xs">
            Our expert analysis and predictions for upcoming sporting events
          </p>
        </div>
        <Link href={"/pricing"}>
          <ButtonWithIcon
            title="Subscribe to VIP plan"
            classNames="bg-yellow-400 text-xs md:text-base hidden sm:block rounded-full text-black py-2"
            icon={<UpRightArrow />}
          />
        </Link>
      </div>
      <div className="py-5 md:px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {predictionOptions.map((item: string, index: number) => {
          return <PredictionCard key={index} betCategory={item} />;
        })}
      </div>
      <Link href={"/pricing"}>
        <ButtonWithIcon
          title="Subscribe to VIP plan"
          classNames="bg-yellow-400 text-xs md:text-base sm:hidden rounded-full text-black py-3"
          icon={<UpRightArrow />}
        />
      </Link>
    </div>
  );
};

export default PredictionPlan;
