import React from "react";

const InternetGateways = () => {
  return (
    <div className="grid gap-10 pt-[6%] bg-[#edf7ff]">
      <div className="px-[4%]">
        <p className="text-[#005FA6] font-[700] text-[2vw]">
          Internet Gateways
        </p>
      </div>
      <div className="flex justify-center pb-[6%]">
        <img src="/pages/gatewaymap.svg" />
      </div>
    </div>
  );
};

export default InternetGateways;
