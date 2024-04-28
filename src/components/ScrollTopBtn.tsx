import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollTopBtn = () => {
  return (
    <motion.div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0 }}
      className="group z-50 fixed bottom-6 right-6 size-14 rounded-full backdrop-brightness-75 bg-slate-200/10 hover:bg-slate-100/30 cursor-pointer flex items-center justify-center"
    >
      <IoIosArrowUp className="object-fill scale-[2.0] opacity-50 text-white group-hover:opacity-100 select-none" />
    </motion.div>
  );
};
