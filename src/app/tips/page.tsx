"use client";
import { useGetFreePicks } from "@/api/getFreePicks";
import SuperFreePicks from "@/components/HomePage components/SuperFreePicks";
import { superFreePicks } from "@/dummydata";
import moment from "moment";
import React from "react";
import ReactLoader from "react-loading";
const Page = () => {
  const { data: freePicksData, isLoading } = useGetFreePicks();
  const today = moment(Date.now()).format("YYYY-MM-DD");
  const tomorrow = moment(Date.now()).add(1, "days").format("YYYY-MM-DD");
  return (
    <div className="sm:p-10">
      {/* <SuperFreePicks
        title="Golden pack pro tips"
        classNames="bg-gradient from-transparent to-transparent border-none"
        tablist={["yesterday", "today"]}
        list1={superFreePicks.today}
        list2={superFreePicks.yesterday}
        tableHeadColor="bg-darkGray"
      /> */}
      {isLoading && (
        <div className="flex justify-center items-center w-full py-20">
          <ReactLoader type="spin" width={80} height={80} color="white" />
        </div>
      )}
      {freePicksData && (
        <SuperFreePicks
          tablist={["Today", "Tomorrow"]}
          list1={freePicksData?.all_prediction[today]}
          list2={freePicksData?.all_prediction[tomorrow]}
        />
      )}
    </div>
  );
};

export default Page;
