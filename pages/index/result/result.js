// pages/index/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var illName = options.illName;
    var url = "https://llmsx.top/illsousouall?illName=" + illName
    that.getIllData(url)
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
  
  },


  /**
   * 
   * 跳转详情
   */
  onPostTab: function (event) {
    var illId = event.currentTarget.dataset.illid;
    wx.navigateTo({
      url: '../article/article?illId=' + illId,
    })
  },

  /**
   * 疾病
   */
  getIllData: function (url) {
    var that = this;
    wx.request({
      url: url,
      data: {},
      header: {
        "Content-Type": "application/xml"
      },
      method: 'GET',
      success: function (res) {
        console.log("success")
        console.log(res)
        that.setData({
          findill: res
        })
      },
      fail: function (res) {
        console.log("fail")
      },
      complete: function () {

      }
    })
  },
})