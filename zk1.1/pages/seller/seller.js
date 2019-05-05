// pages/seller/seller.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      id: "0",
      flag: false,
      img: '../../img/goods.jpg',
      tit: '小城外婆肴',
      pic: 456,
      type: "上地 私房菜",
      distance: 535
    }, {
      id: "1",
      flag: false,
      img: '../../img/goods.jpg',
      tit: '洋房涮肉羊蝎子',
      pic: 456,
      type: "上地 私房菜",
      distance: 535
    }, {
      id: "2",
      flag: false,
      img: '../../img/goods.jpg',
      tit: '椰子养生火锅',
      pic: 456,
      type: "上地 私房菜",
      distance: 535
    }, {
      id: "3",
      flag: false,
      img: '../../img/goods.jpg',
      tit: '潇湘府',
      pic: 456,
      type: "上地 私房菜",
      distance: 535
    }, {
      id: "4",
      flag: false,
      img: '../../img/goods.jpg',
      tit: '一家有态度的汤馆',
      pic: 456,
      type: "上地 私房菜",
      distance: 535
    }, {
      id: "5",
      flag: false,
      img: '../../img/goods.jpg',
      tit: '王婆大虾',
      pic: 456,
      type: "上地 私房菜",
      distance: 535
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../create/create?data=' + [JSON.stringify(this.data.array)]
    })
  },
  click: function(e) {
    let idx = e.target.dataset.item.id;
    let array = this.data.array;
    array[idx].flag = !array[idx].flag;
    this.setData({
      array
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.data) {
      let array = this.data.array;
      let newData = JSON.parse(options.data);
      newData.forEach(v => {
        array = array.filter(item => item.id != v.id);
      })
      array = array.concat(newData).sort(function(a, b) {
        return a.id - b.id
      })
      this.setData({
        array
      })
    }
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