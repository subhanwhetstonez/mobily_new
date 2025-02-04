import React from "react";

const Tower = () => {
  return (
    <div className="bg-[#EDF7FF]  w-[100%] font-bold flex flex-col">
      <div className="text-[#005FA6] text-[3vw] px-[5%] pt-[5%]">Towers</div>
      <div className="flex justify-between pl-[5%]">
        <img
          src="/pages/tower_content.svg"
          className="flex items-center justify-center"
        />
        <img
          src="/pages/tower.svg"
          className=" flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default Tower;
