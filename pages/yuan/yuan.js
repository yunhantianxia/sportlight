// pages/yuan/yuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  containerTap: function (res) {
    console.log(res.touches[0]);
    // var x = res.touches[0].pageX + 180;
    var x = 367;
    // var y = res.touches[0].pageY + 300;
    var y = 628;
    this.setData({
      rippleStyle: ''
    });
    this.setData({
      rippleStyle: 'top:' + y + 'rpx;left:' + x + 'rpx;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
    });
  },
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