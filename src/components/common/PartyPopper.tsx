import { useEffect } from "react";
import { celebrate } from "../confetti/celebrate";

export const PartyPopper = ({ days }: { days: number }) => {
  useEffect(() => {
    celebrate();
  }, [days]);

  return (
    <div
      onClick={() => celebrate()}
      className="absolute -right-16 xl:-right-20 bottom-2 text-2xl hover:scale-125 cursor-pointer opacity-50 hover:opacity-100"
    >
      🎉
    </div>
  );
};
