import request from "./network.js"

export function getMultiData(){
  return request({
     url : "/home/multidata"
  })
}

export function getTopData(pageNo, type){
  return request({
    url: "/articles/top",
    data:{
      pageNo:pageNo,
      type:type
    }
  })
}