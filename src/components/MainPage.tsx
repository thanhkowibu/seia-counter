import { useEffect, useState } from "react";
import { BackGround } from "./common/BackGround";
import { RoundAvt } from "./common/RoundAvt";
import { DayCount } from "./common/Time/DayCount";
import { DigitalClock } from "./common/Time/DigitalClock";
import calculateGapTime from "./common/Time/calculateGapTime";

export const MainPage = () => {
  const [timegap, setTimegap] = useState(calculateGapTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimegap(calculateGapTime());
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
    <div>
      <BackGround />
      <div className="h-[80svh] mt-16 flex flex-col items-center justify-center gap-12">
        <RoundAvt />
        <DayCount days={timegap.days + 1} />
        <DigitalClock
          days={timegap.days}
          hours={timegap.hours}
          minutes={timegap.minutes}
          seconds={timegap.seconds}
        />
      </div>
    </div>
  );
};
