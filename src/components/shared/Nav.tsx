import Bishop from "@assets/bishop.png";
import Image from "next/image";

export default function Nav({ theme }: { theme?: "dark" | "light" }) {
  return (
    <div
      className={`uppercase font-bold text-2xl border-b pb-4 ${
        theme === "dark" ? "text-white" : "text-black"
      } flex items-center gap-2`}
    >
      Chess <Image src={Bishop} alt="logo" width={40} height={40} unoptimized />{" "}
      Games
    </div>
  );
}
