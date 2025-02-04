import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const SMW = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 px-[4vw] pt-[6vw] bg-[#edf7ff]">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">SMW6 (New)</p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <AnimatedDiv title={"19,200 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv
              title={"120 Tbps"}
              subtitle={"Initial System Design Capacity"}
            />
          </div>
          <div>
            <AnimatedDiv
              title={"200 Gbps"}
              subtitle={"Wave Length Techmology "}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <video autoPlay loop muted playsInline>
          <source src="/pages/004.mp4" />
        </video>
      </div>
    </div>
  );
};

export default SMW;
