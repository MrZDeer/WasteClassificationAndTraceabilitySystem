Page({
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      '../../images/pic1.jpg',
      '../../images/pic2.jpg',
      '../../images/pic3.jpg'
    ],
    routers: [
      {
        name: '绑定垃圾袋',
        icon: '../../images/shaomiao.png',
        bind:'getQRCode',

      },
      {
        name: '投放记录',
        url: '../chaxun/tou',
        icon: '../../images/记录.png'

      },
      {
        name: '违规记录',
        url: '../chaxun/wei',
        icon: '../../images/weigui.png'

      },
      {
        name: '有害垃圾',
        url: '../you/youhai',
        icon: '../../images/youhai.png'

      },
      {
        name: '回收垃圾',
        url: '../you/hui',
        icon: '../../images/huishou.png'

      },
      {
        name: '厨余湿垃圾',
        url: '../you/chu',
        icon: '../../images/chuyu.png'

      },
    ],
    xuanchuan:[
      {
        name: '疫情期间,垃圾分类不打烊',
        na: '垃圾分类有困难？看这里',
        url: '../budayang/budayang',
        icon: '../../images/垃圾桶.png'
      },
      {
        name: '垃圾分类,一招记住',
        na: '你笑了吗？',
        url: '../laugh/laugh',
        icon: '../../images/shu.png'
      }

    ],


  },
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },


  getQRCode: function () {
    var that = this;

    wx.scanCode({        //扫描API
      success: function (res) {
        console.log(res.result);    //输出回调信息
        var codes = JSON.parse(res.result);
        wx.setStorageSync('code',codes);
        var cod = wx.getStorageSync('code');
        console.log(cod.ercode);
        wx.request({
          url: 'http://127.0.0.1/wechat/uploadercode',
          data:{
            openid:wx.getStorageSync('user'),
            ercode:cod.ercode
          },
          success:res=>{
            console.log(res)
            wx.showToast({
              title: '绑定成功',
              duration: 2000
            })
          }
        })
       
      }
    })
  },

})