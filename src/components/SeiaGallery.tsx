import pictureApi from "@/api/modules/pictures.api";
import { GalleryPicType } from "@/types/app.types";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FocusedPic } from "./common/FocusedPic";
import { SeiaPic } from "./common/SeiaPic";
import { Loader } from "./common/Loader";
import { ScrollTopBtn } from "./ScrollTopBtn";
import { GalleryTitle } from "./common/GalleryTitle";

const PAGE_NUMBER = 0;

export const SeiaGallery = () => {
  const [data, setData] = useState<GalleryPicType[] | null>(null);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);

  const [focusedPic, setFocusPic] = useState({ src: "", i: -1, link: "" });
  const [isHovered, setIsHovered] = useState(-1);
  const [maxPage, setMaxPage] = useState(9999);

  const [showScrollTop, setShowScrollTop] = useState(false);

  // fetch images whenever PAGE_NUMBER changes
  useEffect(() => {
    const getPics = async () => {
      const { res, err } = await pictureApi.getList({ page });
      if (res) {
        // console.log(res.data);
        setData((prev) => {
          const prevIds = new Set(prev?.map((image) => image.id));
          const newData = res?.data.filter(
            (image: GalleryPicType) => !prevIds.has(image.id)
          );
          return [...(prev || []), ...newData];
        });
        setLoading(false);
      }
      if (err) console.log(err);
    };
    getPics();
  }, [page]);

  // fetch number of pages
  useEffect(() => {
    const getCountPages = async () => {
      const { res, err } = await pictureApi.count();
      if (res) {
        setMaxPage(Math.ceil(res.data.counts.posts / 18));
      }
      if (err) console.log(err);
    };
    getCountPages();
  }, []);

  // increment PAGE_NUMBER when scroll to bottom
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    const viewportWidth = window.innerWidth;

    const isBottom =
      viewportWidth < 1536
        ? scrollTop + clientHeight >= scrollHeight - 1 // change scroll offset for mobile device
        : scrollTop + clientHeight >= scrollHeight;

    if (!loading && isBottom) {
      setPage((prevPage) => {
        if (prevPage < maxPage) {
          setLoading(true);
          return prevPage + 1;
        }
        return prevPage;
      });
    }
    setShowScrollTop(scrollTop > 170); // show scroll top button if view > 170
  };

  // handle zoom in to view focused image
  const viewImage = (src: string, index: number, link: string) => {
    setFocusPic({ src, i: index, link });
  };

  const changeImage = (action: string) => {
    if (action === "close") {
      viewImage("", -1, "");
    }
    if (action === "next") {
      if (data && focusedPic.i !== -1 && focusedPic.i < data.length - 1) {
        viewImage(
          data[focusedPic.i + 1].large_file_url,
          focusedPic.i + 1,
          data[focusedPic.i + 1].pixiv_id
            ? `https://www.pixiv.net/en/artworks/${
                data[focusedPic.i + 1].pixiv_id
              }`
            : data[focusedPic.i + 1].source
        );
      }
    }
    if (action === "prev") {
      if (data && focusedPic.i !== -1 && focusedPic.i > 0) {
        viewImage(
          data[focusedPic.i - 1].large_file_url,
          focusedPic.i - 1,
          data[focusedPic.i - 1].pixiv_id
            ? `https://www.pixiv.net/en/artworks/${
                data[focusedPic.i - 1].pixiv_id
              }`
            : data[focusedPic.i - 1].source
        );
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#808080] to-[#d3d1c9]">
      <AnimatePresence>{showScrollTop && <ScrollTopBtn />}</AnimatePresence>

      <GalleryTitle />

      <AnimatePresence>
        {focusedPic.src && (
          <FocusedPic
            focusedPic={focusedPic}
            changeImage={changeImage}
            maxIndex={data?.length ? data.length - 1 : 0}
          />
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 justify-items-center">
        {data?.map((image, index) => (
          <SeiaPic
            key={image.id}
            image={image}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            index={index}
            viewImage={viewImage}
          />
        ))}
      </div>

      <div className="p-3">
        <Loader loading={loading} page={page} maxPage={maxPage} />
      </div>
    </div>
  );
};
