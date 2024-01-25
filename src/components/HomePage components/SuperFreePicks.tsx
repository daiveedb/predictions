"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import cn from "@/utils/classNames";
import YesterdayPicksTable from "./YesterdayPicksTable";
import { superFreePicks } from "@/dummydata";
import TodayPicksTable from "./TodayPicksTable";
import FootballImage from "@/app/icons/FootballImage";

const SuperFreePicks = () => {
  const days = ["yesterday", "today"];
  return (
    <div className="p-10 bg-gradient-to-b from-transparent to-cardBg_blue rounded-2xl rounded-tr-none relative border-[0.2px] border-[#FFFFFF54]">
      <p className="home-header">Super Free Picks</p>
      <p className="text-helperText ">
        Our expert analysis and predictions for upcoming sporting events
      </p>

      <div className="p-10 px-4">
        <Tab.Group defaultIndex={1}>
          <Tab.List className={"flex gap-x-4 mb-5"}>
            {days.map((item: string, index: number) => {
              return (
                <Tab key={index} className={"outline-none"}>
                  {({ selected }) => (
                    <div
                      className={cn("tab-button bg-[#FFFFFF33]", {
                        "bg-white text-main_darker_blue ": selected,
                      })}
                    >
                      <p className="capitalize">{item}</p>
                    </div>
                  )}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <YesterdayPicksTable tableData={superFreePicks.yesterday} />
            </Tab.Panel>
            <Tab.Panel>
              <TodayPicksTable tableData={superFreePicks.today} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <FootballImage className="absolute  top-4 right-4" />
    </div>
  );
};

export default SuperFreePicks;
