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
        name: '扫描垃圾袋',
        icon: '../../images/shaomiao.png',
        url:'',
        bind:'getQRCode',

      },
      {
        name: '设置违规',
        url: '../chaxun/tou',
        icon: '../../images/记录.png'

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
    

  
    qRCodeMsg: ''


  },
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },


  getQRCode: function () {
    var _this = this;

    wx.scanCode({        //扫描API
      success: function (res) {
        console.log(res);    //输出回调信息
        var codes = JSON.parse(res.result);
        wx.setStorageSync('code', codes);
        var cod = wx.getStorageSync('code');
        var cid=JSON.stringify(cod.id);
        var cercode=cod.ercode;
         var c=String(cercode);
        console.log(cid)
        console.log(c)
        wx.request({
          url: 'http://127.0.0.1/cjry/detail',
          data:{
            id:cid,
            ercode:c,
          },
          success:res=>{
            
              wx.setStorageSync('code_info', res.data.data[0]);
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