export const GalleryTitle = () => {
  return (
    <div className="text-md xl:text-xl py-2 text-white roboto-slab-400 indent-12 flex justify-between">
      <span
        onClick={() => window.scrollTo({ top: 560, behavior: "smooth" })}
        className="cursor-pointer opacity-80 hover:opacity-100 hover:underline"
      >
        Một số art Seia để ngắm trong lúc đợi ẻm playable
      </span>
      <span
        onClick={() =>
          window.open("https://bluearchive.fandom.com/wiki/Yurizono_Seia")
        }
        className="cursor-pointer opacity-80 hover:opacity-100 hover:underline mr-12 hidden xl:block"
      >
        Seiawho ?? Xem thêm tại đây
      </span>
    </div>
  );
};
