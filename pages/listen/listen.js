// pages/listen/listen.js
import {
  getListeningArticles
} from "../../service/listen.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: {
      page:0,
      list:[]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.category)
    this._getRecommondArticleByCategory(options.category)
  },
  _getRecommondArticleByCategory(category){
    const pageNo = this.data.articles.page + 1
    getListeningArticles(category, pageNo).then(res=>{
          console.log(res)
      wx.showLoading({
        title: '╭(●｀∀´●)╯加载中...',
      })
      if (res.data.list.length == 0){
        wx.hideLoading()
        wx.showToast({
          title: '( ‘-ωก̀ )没有数据呀...',
          icon:"none",
          duration:5000
        })
      } else {
        wx.hideLoading()
        const list = res.data.list
        const oldList = this.data.articles.list
        oldList.push(...list)
        this.setData({
          "articles.list": oldList
        })
      }
          
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '(..•˘_˘•..) 我是有底线的~',
      icon: "none",
      mask: true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})