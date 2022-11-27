import Image from "next/image";
import {
  BlackBishop,
  BlackKing,
  BlackKnight,
  BlackQueen,
  BlackRook,
  BlackPawn,
  WhiteBishop,
  WhiteKing,
  WhiteKnight,
  WhitePawn,
  WhiteQueen,
  WhiteRook,
} from "@components/shared/Pieces";

export default function Board() {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return (
    <div className="w-[660px] h-[663px] relative bg-white outline outline-[8px] outline-[#333333] grid grid-rows-8 grid-cols-8">
      <div className="letters bottom-0 absolute grid grid-cols-8 inset-0 items-end">
        {letters.map((letter, index) => (
          <div
            className={`letter col-span-1 pl-1 font-bold ${
              index % 2 !== 0 ? "text-[#a88b67]" : "text-[#e8dbb8]"
            }`}
            key={index}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="numbers right-0 absolute grid grid-rows-8 inset-0 justify-end">
        {[8, 7, 6, 5, 4, 3, 2, 1].map((number, index) => (
          <div
            className={`number row-span-1 pr-1 font-bold ${
              index % 2 !== 0 ? "text-[#a88b67]" : "text-[#e8dbb8]"
            }`}
            key={number}
          >
            {number}
          </div>
        ))}
      </div>
      {[...new Array(4)].map((_, index) => (
        <div
          className="grid col-span-8 row-span-2 grid-cols-8 grid-rows-2"
          key={index}
        >
          {[...new Array(4)].map((_, index) => (
            <div key={index} className="grid col-span-2 grid-cols-2">
              <div className="white-tile bg-[#e8dbb8] col-span-1 row-span-1"></div>
              <div className="white-tile bg-[#a88b67] col-span-1 row-span-1"></div>
            </div>
          ))}
          {[...new Array(4)].map((_, index) => (
            <div key={index} className="grid col-span-2 grid-cols-2">
              <div className="white-tile bg-[#a88b67] col-span-1 row-span-1"></div>
              <div className="white-tile bg-[#e8dbb8] col-span-1 row-span-1"></div>
            </div>
          ))}
        </div>
      ))}
      <div className="white absolute bottom-0 z-10 grid grid-cols-8 grid-rows-8 items-center justify-center inset-0 translate-y-[75%]">
        {[...new Array(8)].map((_, index) => (
          <div key={index} className=" relative w-10 h-10 justify-self-center">
            <Image src={WhitePawn} alt="Dark pawn" fill unoptimized />
          </div>
        ))}
        {[
          WhiteRook,
          WhiteKnight,
          WhiteBishop,
          WhiteQueen,
          WhiteKing,
          WhiteBishop,
          WhiteKnight,
          WhiteRook,
        ].map((piece, index) => (
          <div key={index} className=" relative w-16 h-14 justify-self-center">
            <Image src={piece} alt={`${piece}`} fill unoptimized />
          </div>
        ))}
      </div>
      <div className="black absolute bottom-0 z-10 grid grid-cols-8 grid-rows-8 items-center justify-center inset-0">
        {[
          BlackRook,
          BlackKnight,
          BlackBishop,
          BlackQueen,
          BlackKing,
          BlackBishop,
          BlackKnight,
          BlackRook,
        ].map((piece, index) => (
          <div key={index} className=" relative w-16 h-14 justify-self-center">
            <Image src={piece} alt={`${piece}`} fill unoptimized />
          </div>
        ))}
        {[...new Array(8)].map((_, index) => (
          <div key={index} className=" relative w-10 h-10 justify-self-center">
            <Image src={BlackPawn} alt="Dark pawn" fill />
          </div>
        ))}
      </div>
    </div>
  );
}
