import request from "./network.js"

export function getListeningArticles(category, pageNo) {
  return request({
    url: "/recommond/article/",
    data:{
      pageNo:pageNo,
      category:category
    }
  })
}