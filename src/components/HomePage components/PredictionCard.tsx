import React from "react";

export interface predictionCardProps {
  betCategory: string;
}
const PredictionCard: React.FunctionComponent<predictionCardProps> = ({
  betCategory,
}) => {
  return (
    <div className="bg-[#191533] rounded-lg p-5 flex justify-center items-center border border-[#4F4C66]">
      {betCategory}
    </div>
  );
};

export default PredictionCard;
