import API from "@/shared/config/api/axios";
import { IArticle, IPostsParams } from "@/widgets/posts/interfaces";
import { AxiosResponse } from "axios";

export const apiGetPosts = (
  params: IPostsParams
): Promise<AxiosResponse<IArticle[]>> => {
  return API.get("/articles", {
    params: {
      ...params,
    },
  });
};
