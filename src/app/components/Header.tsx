import Image from "next/image";
import logoSvg from "../../../public/assets/logo.svg";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col gap-[20px] w-full justify-center items-center">
      <Image src={logoSvg} alt="logo svg" />
      <div className="w-[327px] flex flex-row items-center gap-[10px] rounded-[20px] bg-[#161932] p-[5px]">
        <div className="bg-[red] w-[106px] flex justify-center items-center h-[48px]">
          <h3> pomodoro</h3>
        </div>
      </div>
    </header>
  );
}
