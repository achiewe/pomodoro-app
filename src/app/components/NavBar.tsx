import React from "react";

export default function NavBar() {
  return (
    <div className="w-[327px] flex flex-row items-center gap-[10px] rounded-[25px] bg-[#161932] p-[5px]">
      <div className="bg-[#161932] w-[106px] flex justify-center items-center h-[48px] rounded-[25px]">
        <h3 className="text-[12px] leading-[17.77px] font-bold text-[#D7E0FF]">
          pomodoro
        </h3>
      </div>
      <div className="bg-[#161932] w-[106px] flex justify-center items-center h-[48px] rounded-[25px]">
        <h3 className="text-[12px] leading-[17.77px] font-bold text-[#D7E0FF]">
          short break
        </h3>
      </div>
      <div className="bg-[#161932] w-[106px] flex justify-center items-center h-[48px] rounded-[25px]">
        <h3 className="text-[12px] leading-[17.77px] font-bold text-[#D7E0FF]">
          long break
        </h3>
      </div>
      <circle></circle>
    </div>
  );
}
