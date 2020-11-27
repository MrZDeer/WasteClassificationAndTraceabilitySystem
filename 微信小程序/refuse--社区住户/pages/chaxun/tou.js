// pages/chaxun/tou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
wx.request({
  url: 'http://127.0.0.1/record/list?limit=10&page=0',
  success: res => {
   console.log(res.data.data)
   var uopenid=wx.getStorageSync('user');
   for (let i = 0; i < res.data.data.length;i++){
      if (res.data.data[i].openid==uopenid){
        this.setData({
          listData: this.data.listData.concat(res.data.data[i]),/*向原数组添加数组*/
        })
         }

   }
    
   
   
  },
  
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