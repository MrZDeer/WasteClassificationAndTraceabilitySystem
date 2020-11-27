// pages/chaxun/tou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record:{},
    date:'',
    time:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  

  onLoad: function (options){
    var na =wx.getStorageSync('code_info');
    console.log(na)
    this.setData({ 
      record:na,
    })
  },
  bindsubmit: function (e) {
   var times=this.data.time+':00'
   var datas=this.data.date+' '+times
        wx.request({
          url: 'http://127.0.0.1/wgrecord/addItem',
          data:{
            openid: wx.getStorageSync('user'),
            time:datas
          },
          success:res=>{
            wx.showToast({
              title: '设置违规成功',
              icon: 'success',
              duration: 1000
            })
          }
        })
          wx.switchTab({
            url: '/pages/index/index',
          })
  },

sub:function(e){
  wx.switchTab({
    url: '/pages/index/index',
  })
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