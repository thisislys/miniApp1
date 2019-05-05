// pages/create/create.js
let idx = 0;
let array = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: []
  },
  create: function() {
    wx.navigateTo({
      url: '../home/home?ticket=' + (++idx),
    })
  },
  seller: function() {
    wx.navigateTo({
      url: '../seller/seller?data='+JSON.stringify(array),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /**
     *去重
     */
    var hash = {};
    array = JSON.parse(options.data).filter(item => item.flag).concat(array);
    array = array.reduce(function (item, next) {
      hash[next.id] ? '' : hash[next.id] = true && item.push(next);
      return item
    }, []) 
    this.setData({
      array
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})