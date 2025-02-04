import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const TGNAsia = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 px-[4vw] pt-[6vw] bg-[#edf7ff]">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">TGN-Euro Asia</p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <AnimatedDiv title={"15,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv
              title={"100 Gbps"}
              subtitle={"Wave Length Techmology"}
            />
          </div>
        </div>
      </div>
      <div>
        <video autoPlay loop muted playsInline>
          <source src="/pages/008.mp4" />
        </video>
      </div>
    </div>
  );
};

export default TGNAsia;
