import TransparentCircle from "@/app/icons/TransparentCircle";
import TransparentRectangle from "@/app/icons/TransparentRectangle";
import TransparentSquare from "@/app/icons/TransparentSquare";
import React from "react";

const HomeSvgs = () => {
  return (
    <>
      <div className="absolute top-32 -z-10 -left-4">
        <TransparentRectangle />
      </div>
      <div className="absolute top-40 -z-10 right-16">
        <TransparentSquare />
      </div>
      <div className="absolute top-3 -z-10 right-0">
        <TransparentCircle />
      </div>
    </>
  );
};

export default HomeSvgs;
