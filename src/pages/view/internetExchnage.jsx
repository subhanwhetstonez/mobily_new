import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const InternetExchange = () => {
  return (
    <div>
      <div className="relative  w-[100%] font-bold flex flex-col z-10">
        <div className="text-[#005FA6] text-[34px] px-[5%] pt-[2%]">
          Equinix Jeddah Internet Exchange
        </div>
        <div className="justify-between items-center p-[5%]">
          <div
            className="text-[#005FA6] w-[250px] h-[80px] bg-[#FFFFFF] text-[22px] font-semibold 
                flex items-center justify-center mb-8"
          >
            Internet Exchange
          </div>
          <div className="">
            <AnimatedDiv
              title={"Located at Mobily JED 1,  A neutral Data Center"}
            />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center mt-[-140px]">
        <video autoPlay loop muted playsInline>
          <source src="/pages/002.mp4" />
        </video>
      </div>
    </div>
  );
};

export default InternetExchange;
