import Link from "next/link";
import { CaretLeft, User } from "phosphor-react";
import Board from "./Board";

export default function JoinedGameComponent() {
  return (
    <div className="flex relative text-white mt-[4%] justify-center">
      <Link
        href="/games"
        className="group flex gap-3 items-center absolute left-0 top-0"
      >
        <CaretLeft className="w-4 h-4 mt-[2px] group-hover:-translate-x-2 ease-in-out duration-300" />
        Go Back
      </Link>
      <div className="board-container flex flex-col gap-6 justify-self-center min-w-[662px]">
        <div className="opponent flex justify-between ">
          <div className="user flex items-center gap-4">
            <div className="bg-[#383531] w-fit h-fit pt-2 px-[6px] pb-0">
              <User className="w-7 h-7 text-[#BDBDBD]" weight="fill" />
            </div>
            <p>Opponent</p>
          </div>
          <p className="rounded-md bg-[#383531] px-4 flex items-center">
            00:00:00
          </p>
        </div>
        <Board />
        <div className="player1 flex justify-between ">
          <div className="user flex items-center gap-4">
            <div className="bg-[#383531] w-fit h-fit pt-2 px-[6px] pb-0">
              <User className="w-7 h-7 text-[#BDBDBD]" weight="fill" />
            </div>
            <p>My Avatar</p>
          </div>
          <p className="rounded-md bg-[#383531] px-4 flex items-center">
            00:00:00
          </p>
        </div>
      </div>
    </div>
  );
}
