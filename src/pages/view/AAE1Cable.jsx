import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const AAE1Cable = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 px-[4vw] pt-[6vw]">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">
            TGN-Gulf Cable
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <AnimatedDiv title={"25,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv title={"4/5"} subtitle={"Number of Fiber Pair"} />
          </div>
          <div>
            <AnimatedDiv title={"80"} subtitle={"Initial Design WL per FB"} />
          </div>
          <div>
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
