// components/w-view/w-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleListening(){
        wx.navigateTo({
          url: '/pages/listen/listen?category=L',
        })
    },
    handleSpeaking(){
      console.log("口语")
    }, 
    handleReading(){
      console.log("阅读")
    }, 
    handleWriting(){
      console.log("写作")
    }
  }
})
