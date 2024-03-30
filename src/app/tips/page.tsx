"use client";
import { useGetFreePicks } from "@/api/getFreePicks";
import ButtonWithIcon from "@/components/General/ButtonWithIcon";
import SuperFreePicks from "@/components/HomePage components/SuperFreePicks";
import { superFreePicks } from "@/dummydata";
import moment from "moment";
import Link from "next/link";
import React from "react";
import ReactLoader from "react-loading";
import UpRightArrow from "../icons/UpRightArrow";
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

      <div className="py-5 w-max mx-auto flex justify-center flex-col items-center">
        <p className="text-5xl font-medium">Subscribe to VIP plan</p>
        <p className="text-sm py-1 pb-4">
          Get expert analysis and predictions for upcoming sporting events
        </p>
        <Link href={"/pricing"}>
          <ButtonWithIcon
            title="Subscribe to VIP plan"
            classNames="bg-yellow-400 text-xs md:text-base hidden sm:block rounded-full text-black py-2"
            icon={<UpRightArrow />}
          />
        </Link>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center w-full py-20">
          <ReactLoader type="spin" width={80} height={80} color="white" />
        </div>
      )}
      {freePicksData && (
        <SuperFreePicks
          tablist={["Today", "Tomorrow"]}
          list1={freePicksData?.all_prediction[today] || []}
          list2={freePicksData?.all_prediction[tomorrow] || []}
        />
      )}
    </div>
  );
};

export default Page;
