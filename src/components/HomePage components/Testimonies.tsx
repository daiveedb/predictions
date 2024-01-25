import OutlineLikeIcon from "@/app/icons/OutlineLikeIcon";
import OutlineStar from "@/app/icons/OutlineStar";
import { socialIcons } from "@/dummydata";
import React from "react";

const Testimonies = () => {
  return (
    <div className="my-10 p-10">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-4xl font-semibold">
            <span className="text-helperTitle">See what other</span> <br />
            punters are saying
          </p>
        </div>
        <div className="flex gap-x-4 justify-between items-end">
          <div className="grid grid-cols-5 gap-2">
            {socialIcons.map((item: any) => {
              return (
                <div
                  className="p-2 justify-center items-center flex w-10 h-10 rounded-full bg-[#FFFFFF33]"
                  key={item.id}
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
          <div>
            <button className="bg-cardBg_blue rounded-md border border-[#4F4C66] p-3">
              Let&apos;s hear from you
            </button>
          </div>
        </div>
      </div>
      <div className="p-10 flex justify-between gap-x-5">
        <div className="p-7 rounded-2xl bg-cardBg_blue">
          <OutlineStar />
          <p className="py-2 text-3xl tracking-tighter font-medium">
            Steady Cashout
          </p>
          <p className="text-helperText text-sm">
            Thank you predict Wiser, your predictions have really been top
            notch. I have lost count of tickets i have won with your expert tips
            prediction. MORE WINS TO COME!!
          </p>
        </div>
        <div className="p-7 rounded-2xl bg-cardBg_blue">
          <OutlineLikeIcon />
          <p className="py-2 text-3xl tracking-tighter font-medium">
            Easy Picks
          </p>
          <p className="text-helperText text-sm">
            I no longer bother about forecasting games myself as your tips have
            proven to be highly professionally done and has earned me alot of
            winnings. Thank you Predict Wiser
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
