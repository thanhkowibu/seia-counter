import { intervalToDuration } from "date-fns";
const calculateGapTime = () => {
  const now = new Date();
  const startDate = new Date(2024, 3, 20, 0, 0, 0);
  const durationGap = intervalToDuration({ start: startDate, end: now });
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0); // set time to next day 00:00:00
  const durationTomorrow = intervalToDuration({ start: now, end: tomorrow });

  return {
    days: durationGap.days ?? 0,
    hours: (durationTomorrow.hours ?? 0).toString().padStart(2, "0"),
    minutes: (durationTomorrow.minutes ?? 0).toString().padStart(2, "0"),
    seconds: (durationTomorrow.seconds ?? 0).toString().padStart(2, "0"),
  };
};
export default calculateGapTime;
