const WXAPI = require('apifm-wxapi')
WXAPI.init('wxapi')

Page({
  data: {
    username: '',
    phonenum: '',
    password: '',
    repwd: ''
  },

  // 获取输入账号
  username: function(e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码
  password: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 获取第二次输入密码
  repwd: function(e) {
    this.setData({
      repwd: e.detail.value
    })
  },
  // 获取输入手机号码
  phonenum: function(e) {
    this.setData({
      phonenum: e.detail.value
    })
  },
  // 注册
  region: function() {
    if (this.data.phonenum.length == 0 || this.data.password.length == 0 || this.data.repwd.length == 0 || this.data.username.length == 0) {
      wx.showToast({
        title: '请输入信息',
        icon: 'loading',
        duration: 2000
      })
    } else if (this.data.repwd != this.data.password) {
      wx.showToast({
        title: '密码有误',
        icon: 'loading',
        duration: 2000
      })
    } else {
      // 数据保存到数据库
      WXAPI.register_username({
        username: this.data.username,
        pwd: this.data.password
      }).then(res => {
        console.log(res)
        if (res.code == 0) {
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: res.msg,
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  }
})
// 注册
//   region: function (){
//   wx.navigateTo({
//     url: '/pages/index/region',
//   })
// }



// // pages/region/region.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     username:'',
//     password: '',
//     repassword:'',
//     phone: ''
//   },
// //  
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })