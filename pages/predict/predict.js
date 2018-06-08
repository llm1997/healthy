var postsData = require("../../data/post-data.js")
var network = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */

  data: {
    inputShowed1: false,
    inputShowed2: false,
    inputShowed3: false,
    inputVal1: "",
    inputVal2: "",
    inputVal3: "",
    inputVal4: "",
    inputVal5: "",
    inputVal6: "",
    more_reason4: true,
    more_reason5: true,
    more_reason6: true,
    more_more: false,
    values:[]
  },

  // 一栏
  showInput1: function () {
    this.setData({
      inputShowed1: true
    });
  },
  hideInput1: function () {
    this.setData({
      inputVal1: "",
      inputShowed1: false
    });
  },
  clearInput1: function () {
    this.setData({
      inputVal1: ""
    });
  },
  inputTyping1: function (e) {
    this.setData({
      inputVal1: e.detail.value
    });
  },

  // 二栏
  showInput2: function () {
    this.setData({
      inputShowed2: true
    });
  },
  hideInput2: function () {
    this.setData({
      inputVal2: "",
      inputShowed2: false
    });
  },
  clearInput2: function () {
    this.setData({
      inputVal2: ""
    });
  },
  inputTyping2: function (e) {
    this.setData({
      inputVal2: e.detail.value
    });
  },
  // 三栏
  showInput3: function () {
    this.setData({
      inputShowed3: true
    });
  },
  hideInput3: function () {
    this.setData({
      inputVal3: "",
      inputShowed3: false
    });
  },
  clearInput3: function () {
    this.setData({
      inputVal3: ""
    });
  },
  inputTyping3: function (e) {
    this.setData({
      inputVal3: e.detail.value
    });
  },

  // 四栏
  showInput4: function () {
    this.setData({
      inputShowed4: true
    });
  },

  hideInput4: function () {
    this.setData({
      inputVal4: "",
      inputShowed4: false
    });
  },
  clearInput4: function () {
    this.setData({
      inputVal4: ""
    });
  },
  inputTyping4: function (e) {
    this.setData({
      inputVal4: e.detail.value
    });
  },

  // 五栏
  showInput5: function () {
    this.setData({
      inputShowed5: true
    });
  },
  hideInput5: function () {
    this.setData({
      inputVal5: "",
      inputShowed5: false
    });
  },
  clearInput5: function () {
    this.setData({
      inputVal5: ""
    });
  },
  inputTyping5: function (e) {
    this.setData({
      inputVal5: e.detail.value
    });
  },
  // 六栏
  showInput6: function () {
    this.setData({
      inputShowed6: true
    });
  },
  hideInput6: function () {
    this.setData({
      inputVal6: "",
      inputShowed6: false
    });
  },
  clearInput6: function () {
    this.setData({
      inputVal6: ""
    });
  },
  inputTyping6: function (e) {
    this.setData({
      inputVal6: e.detail.value
    });
  },

  // 点击搜索接收数据
  sInput: function (event) {
    var that=this;
    // wx.showModal({
    //   title:提示,
    //   content:请按顺序填写
    // })
    var condition1 = this.data.inputVal1;
    var condition2 = this.data.inputVal2;
    var condition3 = this.data.inputVal3;
    var condition4 = this.data.inputVal4;
    var condition5 = this.data.inputVal5;
    var condition6 = this.data.inputVal6;
    if (condition6.length > 0) {
      if (condition1.length > 0 && condition2.length > 0 && condition3.length > 0 && condition4.length > 0 && condition5.length > 0){
        that.data.values[0] = condition1
        that.data.values[1] = condition2
        that.data.values[2] = condition3
        that.data.values[3] = condition4
        that.data.values[4] = condition5
        that.data.values[5] = condition6
        that.getIllInfo( "加载数据");
      }else{
        wx.showToast({
          title: "请按顺序输入",
          duration: 1000,
          icon: 'none'
        })
      }
    } else if (condition5.length > 0) {
      if (condition1.length > 0 && condition2.length > 0 && condition3.length > 0 && condition4.length > 0 ) {
        that.data.values[0] = condition1
        that.data.values[1] = condition2
        that.data.values[2] = condition3
        that.data.values[3] = condition4
        that.data.values[4] = condition5
        that.getIllInfo("加载数据");
      } else {
        wx.showToast({
          title: "请按顺序输入",
          duration: 1000,
          icon: 'none'
        })
      }
    } else if (condition4.length > 0) {
      if (condition1.length > 0 && condition2.length > 0 && condition3.length > 0 ) {
        that.data.values[0] = condition1
        that.data.values[1] = condition2
        that.data.values[2] = condition3
        that.data.values[3] = condition4
        that.getIllInfo("加载数据");
      } else {
        wx.showToast({
          title: "请按顺序输入",
          duration: 1000,
          icon: 'none'
        })
      }
    } else if (condition3.length > 0) {
      if (condition1.length > 0 && condition2.length > 0 ) {
        that.data.values[0] = condition1
        that.data.values[1] = condition2
        that.data.values[2] = condition3
        that.getIllInfo("加载数据");
      } else {
        wx.showToast({
          title: "请按顺序输入",
          duration: 1000,
          icon: 'none'
        })
      }
    } else if (condition2.length > 0) {
      if (condition1.length > 0 ) {
        that.data.values[0] = condition1
        that.data.values[1] = condition2
        that.getIllInfo("加载数据");
      } else {
        wx.showToast({
          title: "请按顺序输入",
          duration: 1000,
          icon: 'none'
        })
      }
    } else if (condition1.length > 0) {
      Array[0] = condition1;
      that.getIllInfo("加载数据");
    }else {
      wx.showToast({
        title: "请输入病情",
        duration: 1000,
        icon: 'none'
        
      })
    }

   

    
  },

  // 增加症状
  moreTap: function (e) {
    var reason4 = this.data.more_reason4
    var reason5 = this.data.more_reason5
    var reason6 = this.data.more_reason6
    if (reason4) {
      this.setData({
        more_reason4: false,
        inputShowed4: false
      })
    } else if (reason5) {
      this.setData({
        more_reason5: false,
        inputShowed5: false
      })
    } else if (reason6) {
      this.setData({
        more_reason6: false,
        inputShowed6: false,
        more_more: true
      })
    }


  },
  // 病症四
  more_reason4Tap: function (e) {
    var more_reason_state6 = this.data.more_reason6
    var more_reason_state5 = this.data.more_reason5
    if (!more_reason_state6) {
      this.setData({
        more_reason6: true,
        more_more: false
      })
    } else if (!more_reason_state5) {
      this.setData({
        more_reason5: true,
        more_more: false
      })
    } else {
      this.setData({
        more_reason4: true,
        more_more: false
      })
    }

  },
  // 病症5
  more_reason5Tap: function (e) {
    var more_reason_state6 = this.data.more_reason6
    if (!more_reason_state6) {
      this.setData({
        more_reason6: true,
        more_more: false
      })
    } else {
      this.setData({
        more_reason5: true,
        more_more: false
      })
    }

  },
  // 病症6
  more_reason6Tap: function (e) {
    this.setData({
      more_reason6: true,
      more_more: false
    })
  },

  /**
   * 测试数据
   */
  getIllInfo: function (message) {
    var that = this;
   
    var data = {
      syptoms:that.data.values
    };
     var url = "https://llmsx.top/illpredict";
    
    network.requestLoading(url, data, message, function (res) {
      console.log(res)
 
        that.setData({
          reason:res
        })
        console.log(that.data.reason)
    }, function (res) {
      wx.showToast({
        title: '加载数据失败',
      })

    })
  },  
  onPostTab: function (event) {
    var illId = event.currentTarget.dataset.illid;
    wx.navigateTo({
      url: '../index/article/article?illId=' + illId,
    })
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