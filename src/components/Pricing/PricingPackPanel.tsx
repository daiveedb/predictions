import React from "react";
import PricingPackCard from "./PricingPackCard";

export interface PricingPackPanelProps {
  list: PricingPackProps[];
  category: string;
}
export interface PricingPackProps {
  name: string;
  id: number;
  price: number;
  benefits: string[];
}
const PricingPackPanel: React.FunctionComponent<PricingPackPanelProps> = ({
  list,
  category,
}) => {
  return (
    <div className="grid grid-cols-2 gap-5 w-full">
      {list.map((item: PricingPackProps, index: number) => {
        return (
          <PricingPackCard
            key={index}
            cardDetails={{ ...item }}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default PricingPackPanel;
