import { CountdownItem } from "./CountdownItem";

export const DigitalClock = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
}) => {
  return (
    <div className="w-[90%] max-w-xl relative flex flex-col items-center border-2 border-white p-1 text-white">
      <div className="w-full h-40 xl:h-48 flex items-center">
        <CountdownItem num={hours} text="giờ" />
        <CountdownItem num={minutes} text="phút" />
        <CountdownItem num={seconds} text="giây" />
      </div>
      <div className="absolute bottom-1 text-base font-semibold drop-shadow-xl">
        đến ngày thứ {days + 2}
      </div>
    </div>
  );
};
