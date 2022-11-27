import Bishop from "@assets/bishop.png";
import Image from "next/image";
import Link from "next/link";

export default function Nav({
  theme,
  address,
}: {
  theme?: "dark" | "light";
  address?: string;
}) {
  return (
    <div className="flex justify-between border-b pb-4 text-sm">
      <Link
        className={`uppercase font-bold text-lg  ${
          theme === "dark" ? "text-white" : "text-black"
        } flex items-center gap-2`}
        href={!address ? "/" : "/games"}
      >
        Chess{" "}
        <Image src={Bishop} alt="logo" width={40} height={40} unoptimized />{" "}
        Games
      </Link>
      {address && (
        <div className="status flex items-center font-semibold">
          <p className="balance flex items-center rounded-l-md text-white bg-primary-blue px-3 py-2">
            0.04 ETH
          </p>
          <p
            className={`address flex items-center rounded-r-md font-semibold ${
              theme === "dark"
                ? "bg-[#4E4D4B] text-white"
                : "bg-white text-black"
            } px-3 py-2`}
          >
            {`${address.slice(0, 5)}...${address.slice(address.length - 5)}`}
          </p>
        </div>
      )}
    </div>
  );
}
