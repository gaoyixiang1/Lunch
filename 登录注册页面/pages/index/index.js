const WXAPI = require('apifm-wxapi')
WXAPI.init('wxapi')

Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '请输入信息',
        icon: 'loading',
        duration: 2000
      })
    } else {
      // 这里修改成跳转的页面
      WXAPI.login_username({
        username: this.data.phone,
        pwd: this.data.password,
        deviceId: 'wxapp',
        deviceName: 'Lunch'
      }).then(res => {
        console.log(res)
        if (res.code == 0) {
          wx.showToast({
            title: '登录成功',
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