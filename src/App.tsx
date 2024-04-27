import { useEffect } from "react";
import pictureApi from "./api/modules/pictures.api";

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
  return <>Seia</>;
}

export default App;
