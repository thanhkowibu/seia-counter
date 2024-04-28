import { GalleryPicType } from "@/types/app.types";
import { motion } from "framer-motion";
export const SeiaPic = ({
  image,
  isHovered,
  setIsHovered,
  index,
  viewImage,
}: {
  image: GalleryPicType;
  isHovered: number;
  setIsHovered: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  viewImage: (src: string, index: number, link: string) => void;
}) => {
  return (
    <motion.div
      key={image.id}
      onClick={() =>
        viewImage(
          image.large_file_url,
          index,
          image.pixiv_id
            ? `https://www.pixiv.net/en/artworks/${image.pixiv_id}`
            : image.source
        )
      }
      onHoverStart={() => setIsHovered(image.id)}
      onHoverEnd={() => setIsHovered(-1)}
      className="size-36 md:size-48 rounded-[0.5rem] shadow-lg cursor-pointer overflow-hidden bg-white flex flex-col relative group select-none"
    >
      <div className="bg-gradient-to-t z-10 from-black to-transparent absolute size-full translate-y-[100%] group-hover:translate-y-[40%] transition-transform duration-300" />
      <motion.img
        src={image.large_file_url}
        animate={{ scale: isHovered === image.id ? 1.05 : 1 }}
        transition={{ duration: 0.25 }}
        className="size-full object-cover"
      />
      <div className="absolute bottom-[0.125rem] z-20 w-full text-center font-semibold text-white translate-y-[75%] group-hover:translate-y-[0%] transition-transform duration-300">
        Yurizono Seia
      </div>
    </motion.div>
  );
};
