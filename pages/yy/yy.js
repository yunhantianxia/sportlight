// pages/yy/yy.js
var app = getApp()
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showcurrentTab0:true,
    showcurrentTab1: false,
    showcurrentTab2: false,
    showcurrentTab3: false,
    currentTab: 0,
    slideMin:0,
    slideMax:100,
    sliderBgColor:'#ff0',
    activeColor:'#f00',
    sex:1,  //默认选中小哥哥； 
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 1, 1],
    showData:false, 
    slideMax: 80,
    TouchClick: false,
    sliderValue: 50,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  ChangeshowData(){
    var that = this;
    that.setData({
      showData:!that.data.showData,
    })
  },
  slider3change: function (res) {
    var that = this;
    console.log(res)
    that.setData({
      TouchClick: false
    })
  },
  changeMove: function (res) {
    var that = this;
    // console.log(res)
    that.setData({
      TouchClick: true
    })

    var offsetX;
    offsetX = (15 / (this.data.slideMax / 2) * res.detail.value) - 16
    console.log("offset: " + offsetX)
    var sliderLeft = Math.round(700 / this.data.slideMax * res.detail.value + offsetX);
    console.log(sliderLeft)
    this.setData({
      sliderValue: res.detail.value,
      sliderLeft: sliderLeft,
    })
  },
  selectSex(el){
    var sex = el.currentTarget.dataset.sex;
    this.setData({
      sex:sex
    })
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
      
    }
  },
  next(el){
    var that = this;
    var curTab = el.currentTarget.dataset.current;
    var int = curTab+1;
    console.log(curTab)
    switch(curTab){
      case 0:
        that.setData({
          showcurrentTab1:true,
          currentTab: curTab*1+1,
        })
        break;
      case 1:
        that.setData({
          showcurrentTab2: true,
          currentTab: curTab*1 + 1,
        })
        break;
      case 2:
        that.setData({
          showcurrentTab3: true,
          currentTab: curTab*1 + 1,
        })
        break;
      default:

    }
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