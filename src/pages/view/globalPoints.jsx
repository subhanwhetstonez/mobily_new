import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const GlobalPoints = () => {
  return (
    <div className="bg-[#EDF7FF] w-[100%] font-bold flex flex-col p-[5%] ">
      <div className="text-[#005FA6] text-[36px] mb-4">
        Global Points of presence
      </div>
      <AnimatedDiv
        subtitle={"Global reach to key countries in Europe, Asia, GCC, Africa"}
      />
      <img
        src="/pages/globalPoints.svg"
        className="h-[779px] w-[581] flex items-center justify-center"
      />{" "}
    </div>
  );
};

export default GlobalPoints;
