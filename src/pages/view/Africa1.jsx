import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const Africa1 = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 px-[4vw] pt-[6vw] bg-[#edf7ff]">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">Africa1 (New)</p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <AnimatedDiv title={"10,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv
              title={"60 Tbps"}
              subtitle={"Initial System Design Capacity"}
            />
          </div>
          <div>
            <AnimatedDiv
              title={"200 Gbps"}
              subtitle={"Wave Length Techmology"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <video autoPlay loop muted playsInline>
          <source src="/pages/003.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Africa1;
