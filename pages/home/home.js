import {
  getMultiData,
  getTopData
} from "../../service/home.js"

const types = ["pop","newest","important"]
//拿到后，可以在本页面使用，在其他页面进行共享
Page({
  data:{
      bannerList:{},
      recommondList:{},
      popularList:{},
      articles:{
        pop:{
          page:0,
          list:[]
        },
        newest:{
          page:0,
          list:[]
        },
        important:{
          page:0,
          list:[]
        }
      },
    currentType:"pop"
  },
  onLoad:function(options){
    //轮播图和推荐
    this._getMultiData()
    //获取热门，最新，精选内容
    this._getTopData("pop")
    this._getTopData("newest")
    this._getTopData("important")

  },
  //----------------网络请求------------------
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
  _getTopData(type){
    const pageNo = this.data.articles[type].page + 1

    getTopData(pageNo, type).then(res => {
      // console.log(res)
      const list = res.data.list
      const oldList = this.data.articles[type].list
      oldList.push(...list)

      const typeKey = `articles.${type}.list`
      const pageKey = `articles.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]:pageNo
      })
      
    })
  },
  //----------------绑定事件------------------
  handleTabClick(event){
    const index = event.detail.index
    this.setData({
      currentType: types[index]
    })
  },
  onReachBottom(){
    // this._getTopData(this.data.currentType)
    wx.showToast({
      title: '(..•˘_˘•..) 我是有底线的~',
      icon: "none",
      mask: true
    })
  }
})