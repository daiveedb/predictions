"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import cn from "@/utils/classNames";
import YesterdayPicksTable, {
  YesterdayPicksProps,
} from "./YesterdayPicksTable";
import TodayPicksTable, { TodayPicksProps } from "./TodayPicksTable";
import FootballImage from "@/app/icons/FootballImage";

export interface PicksTableProps {
  tablist: string[];
  list1: TodayPicksProps[];
  list2: TodayPicksProps[];
  classNames?: string;
  title?: string;
  subtitle?: string;
  tableHeadColor?: string;
}
const SuperFreePicks: React.FunctionComponent<PicksTableProps> = ({
  tablist = ["today,tomorrow"],
  list1,
  list2,
  classNames,
  title = "Super Free Picks",
  subtitle = "Our expert analysis and predictions for upcoming sporting events",
  tableHeadColor = "bg-[#0E1746]",
}) => {
  return (
    <div
      className={cn(
        "p-10 px-3 lg:px-10 bg-gradient-to-b mt-5 from-transparent to-cardBg_blue rounded-2xl rounded-tr-none relative border-[0.2px] border-[#FFFFFF54]",
        classNames
      )}
    >
      <p className="home-header md:px-10">{title}</p>
      <p className="text-helperText md:px-10">{subtitle}</p>

      <div className="md:p-10 p-4  px-0">
        <Tab.Group defaultIndex={0}>
          <Tab.List
            className={cn("flex gap-x-4 mb-3 p-2 rounded-md", tableHeadColor)}
          >
            {tablist.map((item: string, index: number) => {
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
          <Tab.Panels className={"overflow-scroll"}>
            <Tab.Panel>
              <TodayPicksTable
                tableHeadColor={tableHeadColor}
                tableData={list2}
              />
            </Tab.Panel>
            <Tab.Panel>
              <TodayPicksTable
                tableHeadColor={tableHeadColor}
                tableData={list1}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <FootballImage className="absolute hidden md:block  top-4 right-4" />
    </div>
  );
};

export default SuperFreePicks;
