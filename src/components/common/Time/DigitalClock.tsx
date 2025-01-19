export const DigitalClock = () => {
  return (
    <div className="w-[90%] max-w-xl relative flex flex-col items-center border-2 border-white p-1 text-white">
      <div className="w-full h-full xl:h-48 flex flex-col items-center justify-center gap-12">
        <div className="w-full text-center relative font-semibold text-2xl">
          Ngày đầu treo ảnh: <span className="font-bold">20/04/2024</span>
        </div>
        <div className="w-full text-center relative font-semibold text-3xl">
          Số ngày treo ảnh: <span className="font-bold">275 ngày</span>
        </div>
      </div>
    </div>
  );
};
