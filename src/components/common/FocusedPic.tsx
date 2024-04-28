import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const FocusedPic = ({
  focusedPic,
  changeImage,
  maxIndex,
}: {
  focusedPic: {
    src: string;
    i: number;
    link: string;
  };
  changeImage: (action: string) => void;
  maxIndex: number;
}) => {
  return (
    <motion.div
      className="bg-black/80 z-50 fixed inset-0 flex justify-between items-center overflow-hidden"
      onClick={() => changeImage("close")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FaChevronLeft
        className={cn(
          "text-white h-12 ml-4 xl:ml-64 opacity-30 hover:opacity-80 cursor-pointer",
          { "opacity-0 hover:opacity-0 cursor-default": focusedPic.i === 0 }
        )}
        onClick={(e) => {
          e.stopPropagation();
          changeImage("prev");
        }}
      />
      <div className="relative">
        <motion.img
          src={focusedPic.src}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.7, opacity: 0.5 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 27,
            },
          }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="max-h-[85vh] max-w-[80vw] select-none"
        />
        <div
          onClick={(e) => {
            e.stopPropagation();
            window.open(focusedPic.link);
          }}
          className="absolute -bottom-6 justify-center text-sm text-white quicksand-400 opacity-75 hover:opacity-100 hover:underline cursor-pointer select-none"
        >
          Xem bài viết gốc
        </div>
      </div>
      <FaChevronRight
        className={cn(
          "text-white h-12 mr-4 xl:mr-64 opacity-30 hover:opacity-80 cursor-pointer",
          {
            "opacity-0 hover:opacity-0 cursor-default":
              focusedPic.i === maxIndex,
          }
        )}
        onClick={(e) => {
          e.stopPropagation();
          changeImage("next");
        }}
      />
    </motion.div>
  );
};
