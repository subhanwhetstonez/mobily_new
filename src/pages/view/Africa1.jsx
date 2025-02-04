import React from "react";
import AnimatedDiv from "./AnimatedDiv";

const Africa1 = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 px-[4vw] pt-[6vw]">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">Africa1 (New)</p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <AnimatedDiv title={"25,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv title={"25,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv title={"25,000 Km"} subtitle={"Submarine Cable"} />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img src="/pages/africa1map.svg" width={"90%"} />
      </div>
    </div>
  );
};

export default Africa1;
