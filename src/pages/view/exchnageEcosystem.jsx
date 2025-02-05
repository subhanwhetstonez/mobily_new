import React from "react";

const EcoSystem = () => {
  return (
    <div className="bg-[#EDF7FF]  w-[100%] font-bold flex flex-col">
      <div className="text-[#005FA6] text-[34px] px-[5%] py-[2%]">
        Equinix Jeddah Internet Exchange
      </div>
      <div
        className="text-[#005FA6] w-[287px] h-[90px] bg-[#FFFFFF] text-[24px] font-semibold 
                flex items-center justify-center mb-12 mx-[5%] my-[2%] px-[5px]"
      >
        Exchange Ecosystem
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <img
          src="/pages/ecosystem/content.svg"
          className="flex items-center justify-center mx-[5%]"
        />
        <img
          src="/pages/ecosystem/network.svg"
          className="flex items-center justify-center mx-[5%]"
        />
        <img
          src="/pages/ecosystem/cloud.svg"
          className="flex items-center justify-center mx-[5%]"
        />
        <img
          src="/pages/ecosystem/enterprise.svg"
          className="flex items-center justify-center mx-[5%]"
        />
        <img
          src="/pages/ecosystem/financial.svg"
          className="flex items-center justify-center mx-[5%]"
        />
      </div>
    </div>
  );
};

export default EcoSystem;
