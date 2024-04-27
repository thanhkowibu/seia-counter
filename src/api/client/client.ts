import axios from "axios";

const baseURL = "https://danbooru.donmai.us/";

const publicClient = axios.create({
  baseURL,
});
export default publicClient;
