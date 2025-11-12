import { request } from "./request";

export const hotApi = {
  // 获取热榜列表
  getHotPostList() {
    return request.post("/api/hot/list", {});
  },
};
