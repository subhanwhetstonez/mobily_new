import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const DataCenter = () => {
  return (
    <div className="bg-[#EDF7FF] p-[5%] w-[100%] font-bold flex flex-col">
      <div className="text-[#005FA6] text-[42px] mb-8">Data Centers</div>
      <AnimatedDiv
        subtitle={"14 Tier-certified Data centers across the kingdom"}
      />
      <img
        src="/pages/dataCenter.svg"
        className="flex items-center justify-center"
      />
    </div>
  );
};

export default DataCenter;
