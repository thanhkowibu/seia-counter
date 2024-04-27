import publicClient from "../client/client";

const pictureEndpoints = {
  list: ({ page }: { page: number }) =>
    `posts.json?page=${page}&tags=seia_%28blue_archive%29+1girl+rating%3Ageneral+parent%3Anone+child%3Anone+limit%3A18`,
  count: `counts/posts.json?page=1&tags=seia_%28blue_archive%29+1girl+rating%3Ageneral+parent%3Anone+child%3Anone+limit%3A18`,
};

const pictureApi = {
  getList: async ({ page }: { page: number }) => {
    try {
      const res = await publicClient.get(pictureEndpoints.list({ page }));
      return { res };
    } catch (err) {
      return { err };
    }
  },
  count: async () => {
    try {
      const res = await publicClient.get(pictureEndpoints.count);
      return { res };
    } catch (err) {
      return { err };
    }
  },
};
export default pictureApi;
