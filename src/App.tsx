import { useEffect } from "react";
import pictureApi from "./api/modules/pictures.api";
import { MainPage } from "./components/MainPage";
import { SeiaGallery } from "./components/SeiaGallery";

function App() {
  useEffect(() => {
    const getPictures = async () => {
      const { res, err } = await pictureApi.getList({
        page: 1,
      });
      if (err) console.log(err);
      if (res) console.log(res.data);
    };
    getPictures();
  }, []);
  return (
    <>
      <MainPage />
      <SeiaGallery />
    </>
  );
}

export default App;
