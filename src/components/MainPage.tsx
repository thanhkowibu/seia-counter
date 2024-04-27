import { BackGround } from "./common/BackGround";
import { RoundAvt } from "./common/RoundAvt";
import { DayCount } from "./common/Time/DayCount";
import { DigitalClock } from "./common/Time/DigitalClock";

export const MainPage = () => {
  return (
    <div>
      <BackGround />
      <div className="h-[80svh] flex flex-col items-center justify-center gap-12">
        <DayCount />
        <RoundAvt />
        <DigitalClock />
      </div>
    </div>
  );
};
