import { PartyPopper } from "../PartyPopper";

export const DayCount = ({ days }: { days: number }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative text-white text-5xl roboto-slab-700 drop-shadow-lg">
        Ngày thứ {days}
        <PartyPopper days={days} />
      </div>
      <div className="text-white text-2xl xl:text-3xl roboto-slab-400 drop-shadow-lg">
        treo ảnh Seia đến khi Seia playable
      </div>
    </div>
  );
};
