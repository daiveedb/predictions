import React from "react";
import { PricingPackProps } from "./PricingPackPanel";
import TickIcon from "@/app/icons/TickIcon";
import ButtonWithIcon from "../General/ButtonWithIcon";
import UpRightArrow from "@/app/icons/UpRightArrow";

interface PricingPackCardProps {
  cardDetails: PricingPackProps;
  category: string;
}
const PricingPackCard: React.FunctionComponent<PricingPackCardProps> = ({
  cardDetails,
  category,
}) => {
  const { name, id, price, benefits } = cardDetails;
  return (
    <div className="rounded-lg w-full bg-[#0E1746] border-[0.5px] border-[#696868]">
      <div className="rounded-t-lg bg-[#FFFFFF33] p-3 py-4 font-semibold">
        {name}
      </div>
      <div className="p-8 pr-20">
        <p className="py-2">
          <span className="text-predictYellow font-semibold text-2xl">
            ₦{price}
          </span>
          /{category}
        </p>
        <div className="py-4">
          {benefits.map((item: string, index: number) => {
            return (
              <div key={index} className="flex items-center gap-x-2 pb-1">
                <TickIcon />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <ButtonWithIcon
          icon={<UpRightArrow />}
          title="Subscribe"
          classNames="flex justify-center gap-x-2 rounded-md items-center text-black py-2 bg-predictYellow w-[70%]"
        />
      </div>
    </div>
  );
};

export default PricingPackCard;
