import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const LandingStation = () => {
  return (
    <div className="bg-[#EDF7FF] w-[100%] font-bold flex flex-col p-[5%] ">
      <div className="text-[#005FA6] text-[36px] mb-4">Landing Stations</div>

      <AnimatedDiv
        title={"4 Diverse "}
        subtitle={"Landing station in the kingdom"}
      />
      <img
        src="/pages/LandingStation.svg"
        className="flex items-center justify-center"
      />
    </div>
  );
};

export default LandingStation;
