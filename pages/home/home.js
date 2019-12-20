//获取当前对象
const app = getApp()
console.log(app.globalData.name)
//拿到后，可以在本页面使用，在其他页面进行共享
Page({
  data:{
    students:[{
      name:"jame",
      age:18
    },
    {
      name:"kobe",
      age:20
    },
    {
      name:"echo", 
      age:29
    }],
    imagePath: "",
    counter: 0,
    isActive:false
  },
  // handleBtnClick(){
  //   this.setData({
  //     counter:this.data.counter + 1
  //   })
  //  },
  //  handleMinusClick(){
  //    this.setData({
  //      counter : this.data.counter -1
  //    })
  //  },
  // handleImage(){
  //   wx.chooseImage({
  //     success: (res) => {
  //       const path = res.tempFilePaths[0] 
  //       this.setData({
  //         imagePath:path
  //       })
  //     },
  //   })
  // },
  // //页面初次渲染执行的，只渲染一次
  // onReady:function(){
  //   //在onShow后执行
  //   console.log("onReady")
  // },
  // handleLazyLoad:function(){
  //   console.log("懒加载图片")
  // },
  // handleInput(event){
  //   console.log(event.detail)
  // },
  // handleFocus(event){
  //   console.log("获取焦点")
  // },
  // handleBlur(){
  //   console.log("失去焦点")
  // },
  handleChangeColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleClickBtn1(){
    console.log("按钮被惦记了")
  }
})