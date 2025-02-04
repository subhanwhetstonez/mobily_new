import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const InternetExchange = () => {
  return (
    <div className="bg-[#EDF7FF]  w-[100%] font-bold flex flex-col">
      <div className="text-[#005FA6] text-[40px] mb-5 px-[5%] py-[2%]">
        Equinix Jeddah Internet Exchange
      </div>
      <div className="flex justify-between items-center pr-[5%]">
        <div
          className="text-[#005FA6] w-[240px] h-[90px] bg-[#FFFFFF] text-[24px] font-semibold 
                flex items-center justify-center mb-10 mx-[5%] my-[2%]"
        >
          Internet Exchange
        </div>
        <div className="">
          <AnimatedDiv
            title={"Located at Mobily JED 1,  A neutral Data Center"}
          />
        </div>
      </div>
      <div className="relative flex justify-center">
        <video autoPlay loop muted playsInline>
          <source src="/pages/002.mp4" />
        </video>
      </div>{" "}
    </div>
  );
};

export default InternetExchange;
