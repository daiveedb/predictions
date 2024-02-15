"use client";
import PhoneInput from "@/components/Pricing/PhoneInput";
import PricingPackPanel from "@/components/Pricing/PricingPackPanel";
import { predictionPacks } from "@/dummydata";
import cn from "@/utils/classNames";
import { Tab } from "@headlessui/react";
import React, { useState } from "react";

const page = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col items-center justify-center mb-5">
        <p className="font-wix text-5xl font-bold">
          Flexible Plans - Flexible Pricing
        </p>
        <p className="text-helperText">
          Explore our premium plan options and get our top expert predictions to
          join other global winners.
        </p>
      </div>
      <div className="p-5 w-full bg-cardBg_blue flex justify-center items-center rounded-md mb-3">
        <div className="w-[40%]">
          <PhoneInput />
        </div>
      </div>
      <div className="p-5 w-full bg-cardBg_blue flex-col flex justify-center items-center rounded-md mb-3">
        <p className="text-white font-semibold text-3xl">
          Choose your preferred plan
        </p>
        <div className="py-5">
          <Tab.Group defaultIndex={1}>
            <Tab.List className={"mb-5 flex justify-center"}>
              <Tab className={"outline-none z-10"}>
                {({ selected }) => (
                  <div
                    className={cn(
                      "p-3 px-5 rounded-md bg-white text-sm text-black transition-all",
                      {
                        "bg-black text-white scale-[1.15] text-md font-bold ":
                          selected,
                      }
                    )}
                  >
                    <p className="capitalize">weekly</p>
                  </div>
                )}
              </Tab>
              <Tab className={"outline-none"}>
                {({ selected }) => (
                  <div
                    className={cn(
                      "p-3 px-5 rounded-md bg-white text-sm text-black transition-all",
                      {
                        "bg-black text-white z-10 text-md scale-[1.15] font-bold ":
                          selected,
                      }
                    )}
                  >
                    <p className="capitalize">monthly</p>
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <PricingPackPanel
                  list={predictionPacks.weekly}
                  category="week"
                />
              </Tab.Panel>
              <Tab.Panel>
                <PricingPackPanel
                  list={predictionPacks.monthly}
                  category="month"
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default page;
