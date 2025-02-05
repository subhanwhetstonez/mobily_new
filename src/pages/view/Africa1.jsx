import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const Africa1 = () => {
  return (
    <div>
      <div className="relative flex flex-col gap-10 px-[4vw] pt-[3vw] bg-[#edf7ff] z-10">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">Africa1 (New)</p>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-1">
            <AnimatedDiv title={"10,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div className="col-span-2">
            <AnimatedDiv
              title={"60 Tbps"}
              subtitle={"Initial System Design Capacity"}
            />
          </div>
          <div className="col-span-2">
            <AnimatedDiv
              title={"200 Gbps"}
              subtitle={"Wave Length Techmology"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[-150px] z-0">
        <video autoPlay loop muted playsInline>
          <source src="/pages/003.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Africa1;
