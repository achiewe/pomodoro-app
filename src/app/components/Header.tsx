import Image from "next/image";
import logoSvg from "../../../public/assets/logo.svg";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col w-full justify-center items-center mb-[50px]">
      <Image src={logoSvg} alt="logo svg" />
    </header>
  );
}
