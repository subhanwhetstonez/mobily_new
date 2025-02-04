import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const GlobalPoints = () => {
  return (
    <div className="bg-[#EDF7FF] w-[100%] font-bold flex flex-col p-[5%] ">
      <div className="text-[#005FA6] text-[36px] mb-4">
        Global Points of presence
      </div>
      <img
        src="/pages/globalPOintsCard.svg"
        className="flex items-center justify-center w-[20%]"
      />

      <AnimatedDiv
        subtitle={"Global reach to key countries in Europe, Asia, GCC, Africa"}
      />
    </div>
  );
};

export default GlobalPoints;
