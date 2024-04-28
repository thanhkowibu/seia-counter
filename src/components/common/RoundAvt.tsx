import avt from "../../assets/avt.jpg";
export const RoundAvt = () => {
  return (
    <div
      onClick={() =>
        window.open("https://twitter.com/nako775_/status/1781641527678439534")
      }
      className="rounded-full overflow-hidden size-20 xl:size-24 shadow-2xl cursor-pointer hover:border-4"
    >
      <img src={avt} alt="avt" className="object-cover" />
    </div>
  );
};
