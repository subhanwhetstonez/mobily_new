import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const AAE1Cable = () => {
  return (
    <div className="bg-[#edf7ff]">
      <div className="flex flex-col gap-14 px-[4vw] pt-[6vw]">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">
            TGN-Gulf Cable
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <AnimatedDiv title={"25,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div className="col-span-2">
            <AnimatedDiv title={"4/5"} subtitle={"Number of Fiber Pair"} />
          </div>
          <div className="col-span-1">
            <AnimatedDiv title={"80"} subtitle={"Initial Design WL per FB"} />
          </div>
          <div className="col-span-2">
            <AnimatedDiv
              title={"100 bps"}
              subtitle={"Wavelength Technology "}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <video autoPlay loop muted playsInline>
          <source src="/pages/007.mp4" />
        </video>
      </div>
    </div>
  );
};

export default AAE1Cable;
