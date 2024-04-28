import { motion, AnimatePresence } from "framer-motion";
export const CountdownItem = ({ num, text }: { num: string; text: string }) => {
  return (
    <div className="roboto-slab-400 w-1/3 h-28 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              ease: "backInOut",
              duration: "0.65",
            }}
            className="block text-4xl lg:text-5xl font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base quicksand-400">
        {text}
      </span>
    </div>
  );
};
