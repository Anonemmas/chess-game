import { TabList, Tab, TabPanels, TabPanel, Tabs } from "@chakra-ui/react";
import { Plus, CalendarBlank, CaretDown } from "phosphor-react";
import { useState } from "react";
import CreateRoom from "./CreateRoom";
import { AvailableGames, CompletedGames } from "./Games";

export default function GamesComponent() {
  const [activeGames, setActiveGames] = useState<number>(1);
  const availableActive = activeGames === 1;
  const completedActive = activeGames === 2;
  return (
    <>
      <div className="mt-16 flex flex-col">
        <div className="filters flex justify-end gap-3">
          <button className="rounded-lg flex items-center text-sm px-3 py-2 gap-2 font-semibold text-black border border-chess-gray">
            <CalendarBlank className="w-4 h-4" weight="bold" />
            MAY 18 - MAY 24
            <CaretDown className="w-3 h-3" weight="bold" />
          </button>
          <CreateRoom />
        </div>
        <div className="tabs text-sm flex gap-8 items-center">
          <div
            className={`pb-3 cursor-pointer duration-100 ease-in border-b-[3px] ${
              availableActive
                ? "border-black pr-4 font-medium"
                : "border-transparent"
            }`}
            onClick={() => setActiveGames(1)}
          >
            Available Games
          </div>
          <div
            className={`pb-3 cursor-pointer duration-100 ease-in border-b-[3px] ${
              completedActive
                ? "border-black pr-4 font-medium"
                : "border-transparent"
            }`}
            onClick={() => setActiveGames(2)}
          >
            Completed Games
          </div>
        </div>
        <div className="tables relative">
          <div
            className={`absolute inset-0 ease-out duration-300 bg-white ${
              !availableActive ? "opacity-0 z-0" : "opacity-1 z-10"
            }`}
          >
            {" "}
            <AvailableGames />
          </div>{" "}
          <div
            className={`absolute inset-0 ease-out duration-300 bg-white ${
              !completedActive ? "opacity-0 z-0" : "opacity-1 z-10"
            }`}
          >
            <CompletedGames />
          </div>
        </div>
      </div>
    </>
  );
}
