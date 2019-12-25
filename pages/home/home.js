import {
  getMultiData,
  getTopData
} from "../../service/home.js"

//拿到后，可以在本页面使用，在其他页面进行共享
Page({
  data:{
      bannerList:{},
      recommondList:{},
      popularList:{},
      articles:{
        "pop":{
          page:0,
          list:[]
        },
        "news":{
          page:0,
          list:[]
        },
        "important":{
          page:0,
          list:[]
        }
      }
  },
  onLoad:function(options){
    this._getMultiData()
    this._getTopData()

  },
  _getMultiData(){
    getMultiData().then(res => {
      const banners = res.data.banners
      const recommonds = res.data.recommonds
      this.setData({
        bannerList: banners,
        recommondList: recommonds,
      })
    })
  },
  _getTopData(){
    getTopData(0, "pop").then(res => {
      console.log(res)
    })
  },
  handleTabClick(event){
    console.log(event.detail.title)
      
  }
})