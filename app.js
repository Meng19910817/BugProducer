import request from "/utils/network.js"
App({
  globalData:{
    token:""
  },
  onLaunch: function () {
    //登录
    wx.login({
      success: (res) => {
          console.log(res)
          //code只有五分钟有效期
          const code = res.code
        wx.request({
          url: 'http://bug.mynatapp.cc/login/wxm',
          method:'post',
          data:{
            code: code
          },
          success:(res)=>{
            console.log(res)
            // if(res.data.flag){
            //     this.globalData.token =res.data.data.token
            // }
          }
        })
      }
    })  
  }
})
