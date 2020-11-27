//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res);
        wx.request({
          url:'http://127.0.0.1/loginWeChat',
          data: {
            'code': res.code, //对应返回值的code信息
            'from': 'wx0f98fbf2c9817919',
          },
          success: function (res) { //后台如果成功会返回一个res(里面包含openid))
            console.log(res.data)
            console.log(res.data.result,'jnk')
            //将SESSIONID保存到地storage
            wx.setStorageSync("user",res.data.openid)
            wx.setStorageSync('user_information', res.data)
            wx.request({
              url: 'http://127.0.0.1/cjry/list?limit=10&page=0',
              success:res=>{
                for(var i=0;i<res.data.data.length;i++){
                  if (res.data.data[i].openid == wx.getStorageSync('user')) {
                    wx.switchTab({
                      url: '/pages/index/index',
                    })
                  }else{
                    wx.showModal({ //显示模态对话框
                      title: '提示', //提示的标题
                      content: '请先注册', //提示的内容
                      showCancel: false, //是否显示取消按钮
                      confirmText: '确定', //确定按钮的文字，最多四个字符
                      confirmColor: '#576B95', //确定按钮文字的颜色
                      success: function (res) {
                        wx.navigateTo({ //保存当前页面，跳转到应用内的某个页面
                          url: '/pages/register/userlogin',
                        })
                      }

                    })

                  }
                }
              

              }
            })
           

          }

        })
      }
    })
     
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
   
})