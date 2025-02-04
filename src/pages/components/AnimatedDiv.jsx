import React from "react";

const AnimatedDiv = ({ title, subtitle }) => {
  return (
    <div className="w-fit bg-[#DBF0FF] border-b-[#005FA6] border-b-4 rounded-md py-[2vh] px-[6vw]">
      <p className="text-[#001424] text-[40px] font-[600]">{title}</p>
      <p className="text-[#001424] text-[26px] font-[500]">{subtitle}</p>
    </div>
  );
};

export default AnimatedDiv;
