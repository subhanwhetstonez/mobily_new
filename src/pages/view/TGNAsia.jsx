import React from "react";
import AnimatedDiv from "../testpages/AnimatedDiv";

const TGNAsia = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 px-[4vw] pt-[6vw]">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">TGN-Euro Asia</p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <AnimatedDiv title={"25,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv title={"25,000 Km"} subtitle={"Submarine Cable"} />
          </div>
        </div>
      </div>
      <div>
        <img src="/pages/TGNAsiamap.svg" width={"100%"} />
      </div>
    </div>
  );
};

export default TGNAsia;
