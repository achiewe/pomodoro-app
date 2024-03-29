import Image from "next/image";
import logoSvg from "../../../public/assets/logo.svg";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col gap-[20px] w-full justify-center items-center">
      <Image src={logoSvg} alt="logo svg" />
    </header>
  );
}
