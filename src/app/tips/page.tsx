import SuperFreePicks from "@/components/HomePage components/SuperFreePicks";
import { superFreePicks } from "@/dummydata";
import React from "react";

const page = () => {
  return (
    <div className="p-10">
      <SuperFreePicks
        title="Golden pack pro tips"
        classNames="bg-gradient from-transparent to-transparent border-none"
        tablist={["yesterday", "today"]}
        list1={superFreePicks.today}
        list2={superFreePicks.yesterday}
        tableHeadColor="bg-darkGray"
      />

      <SuperFreePicks
        tablist={["yesterday", "today"]}
        list1={superFreePicks.today}
        list2={superFreePicks.yesterday}
      />
    </div>
  );
};

export default page;
