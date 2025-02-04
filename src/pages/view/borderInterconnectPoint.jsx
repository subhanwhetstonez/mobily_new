import React from "react";

const BorderPage = () => {
  return (
    <div className="bg-[#EDF7FF] w-[100%] font-bold flex flex-col p-[5%] ">
      <div className="text-[#005FA6] text-[36px] mb-4">
        Terrestrial & Cross Borders
      </div>
      <div
        className="text-[#005FA6] w-[320px] h-[90px] bg-[#FFFFFF] text-[24px] font-semibold 
                    flex items-center justify-center mb-10"
      >
        Border Interconnect Point
      </div>
      <div className="text-[#005FA6] text-[65px] mb-14">
        KSA Terrestrial Crossing
      </div>
      <img
        src="/pages/fiberNetwork1.svg"
        className="h-[779px] w-[581] flex items-center justify-center"
      />
    </div>
  );
};

export default BorderPage;
