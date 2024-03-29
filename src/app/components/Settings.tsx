import Image from "next/image";
import settingSvg from "../../../public/assets/icon-settings.svg";

export default function Settings() {
  return (
    <Image src={settingSvg} alt="setting svg" className="hover:fill-[red]" />
  );
}
