import API from "@/shared/config/api/axios";
import { IArticle } from "@/widgets/posts/interfaces";
import { AxiosResponse } from "axios";

export const apiGetPost = (id: string): Promise<AxiosResponse<IArticle>> => {
  return API.get(`/articles/${id}`);
};
