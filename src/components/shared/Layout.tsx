import { ReactElement } from "react";

export default function Layout({
  children,
  theme,
}: {
  children: ReactElement | Array<ReactElement>;
  theme?: "light" | "dark";
}) {
  return (
    <div
      className={`fixed overflow-auto inset-0 ${
        theme === "light" ? "bg-white" : theme === "dark" ? "bg-dark" : "white"
      }`}
    >
      <div className={`h-full w-[85%] mx-auto mt-[25px] `}>{children}</div>
    </div>
  );
}
