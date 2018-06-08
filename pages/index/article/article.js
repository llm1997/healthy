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
    var illId = options.illId;
    var url = "http://47.104.213.74:8080/illdetail?illId=" +illId
    this.getIllDetail(url);
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
 * 请求疾病详情函数
 */
  getIllDetail: function (url) {
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
          arIlldetail:res
        })
        console.log(res.data.illname)
      },
      fail: function (res) {
        console.log("fail")
      },
      complete: function () {

      }
    })
  },
})