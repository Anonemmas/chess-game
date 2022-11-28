import Image from "next/image";
import { ReactElement } from "react";
import Background from "@assets/background.png";

export default function Layout({
  children,
  theme,
}: {
  children: ReactElement | Array<ReactElement>;
  theme?: "light" | "dark";
}) {
  return (
    <div
      className={`fixed ${
        theme !== "dark" ? "light" : ""
      } overflow-auto inset-0 ${
        theme === "light" ? "bg-white" : theme === "dark" ? "bg-dark" : "white"
      }`}
    >
      {/* <div className="fixed inset-0 -z-10">
        <Image src={Background} alt="" fill unoptimized />
      </div> */}
      <div className={`h-full w-[85%] mx-auto mt-[25px] `}>{children}</div>
    </div>
  );
}
