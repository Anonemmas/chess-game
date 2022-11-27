import {
  tableEntries,
  tableHeaders,
} from "@components/utils/availablegamesConstants";

export default function AvailableGames() {
  return (
    <>
      <div className="grid grid-cols-7 font-semibold bg-white gap-y-4 gap-x-6 text-sm p-10">
        <>
          {tableHeaders.map((header) => (
            <div key={header} className="col-span-1 last:col-span-2 pb-2">
              {header}
            </div>
          ))}
          {tableEntries.map((entry) => (
            <div
              className="col-span-full grid grid-cols-7 gap-4 pb-2 pt-3 gap-x-6 border-b border-[#f2f2f2] last:border-b-0 font-semibold"
              key={entry.id}
            >
              <div className="col-span-1 self-center">{entry.id}</div>
              <div className="col-span-1 self-center">{entry.limit}</div>
              <div className="col-span-1 self-center">{entry.fee} ETH</div>
              <div className="col-span-1 self-center">{entry.players}</div>
              <div className="col-span-1 self-center">{entry.date}</div>
              <div className="flex justify-center items-center gap-3 col-span-2">
                <button className="bg-primary-blue rounded-lg cursor-pointer flex items-center px-4 font-semibold py-2 gap-2 text-sm text-white">
                  Request to join
                </button>
                <button className="bg-white border border-primary-blue text-primary-blue rounded-lg flex items-center px-8 font-semibold py-2 gap-2 text-sm">
                  Spectate
                </button>
              </div>
            </div>
          ))}
        </>
      </div>
    </>
  );
}
