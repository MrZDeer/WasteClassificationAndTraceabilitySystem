// pages/register/register.js
const app = getApp() //引用app.js里面的方法
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '', //传递name至渲染层，渲染层可以通过wxml进行数据绑定
    idcard: '',
    address: '',
    openid:""
  },
  /*
  点击触发的函数
   */
  changename: function (e) {
    //console.log(e)
    this.setData({ //给name进行赋值
      name: e.detail.value
    })
   // console.log('name')//输出name的值
  },
  changeidcard: function (e) {
    //console.log(e)
    this.setData({ //给id进行赋值
      idcard: e.detail.value
    })
  //console.log('id',this.data.id)//输出id的值
  },

  changeaddress: function (e) {
    //console.log(e)
    this.setData({ //给address进行赋值
      address: e.detail.value
    })
   //console.log('address',this.data.address)//输出address的值
  },
  bindsubmit: function () {
    //判断是否输入内容
    if (!this.data.name || !this.data.idcard || !this.data.address) {
       wx.showModal({
         title: '填写有误',
         content: '姓名,身份证号,住址和单位不能为空',
         showCancel: false,
         confirmText: '确定'
       })
     } else if (!/^[\u4e00-\u9fa5]{1,4}$/.test(this.data.name)) {
       wx.showModal({
         title: '填写有误',
         content: '姓名必须为1-4位的汉字',
         showCancel: false,
         confirmText: '确定'
       })
     } else if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.data.idcard)) {
       wx.showModal({
         title: '填写有误',
         content: '身份证号必须为15位或18位',
         showCancel: false,
         confirmText: '确定'
       })
     }
     else if (!/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(this.data.address)) {
       wx.showModal({
         title: '填写有误',
         content: '住址必须为汉字，英文，数字，下划线，不能包含特殊字符',
         showCancel: false,
         confirmText: '确定'
       })
     } else{
      wx.request({ //向后台发送请求
        //开发者服务器接口地址,User是后台定义的一个方法
        url: 'http://127.0.0.1/wechat/register',
        data: {
          openid: wx.getStorageSync('user'), //获取本地的openid
          name: this.data.name, //获取注册时填入的信息
          idcard: this.data.idcard,
          address: this.data.address,
        },
        success:res => {
           console.log(res)
           wx.switchTab({
            url: '../index/index'
          })

        }
      
     })
     }
  },
     
    /*wx.request({ //向后台发送请求
      //开发者服务器接口地址,User是后台定义的一个方法
      url:'http://127.0.0.1/wechat/register',
      data: {
        openid: wx.getStorageSync('user'), //获取本地的openid
        globalData: JSON.stringify(app.globalData.userInfo), //让其变成JSON的格式传到后台，userInfo是在授权之后获取到的用户信息
        name: this.data.name, //获取注册时填入的信息
        idcard :this.data.idcard,
        address: this.data.address,
      },
      success: res =>{
        console.log(res);
        wx.setStorage({
          key: 'users',
          data: {
            name: res.data.name, //获取注册时填入的信息
            idcard: res.data.idcard,
            address: res.data.address,
            openid: wx.getStorageSync('user'),
          },
        })
      
      }
       
    })*/
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})