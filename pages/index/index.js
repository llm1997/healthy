//index.js
//获取应用实例
const app = getApp()
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabs: ["科室查找", "部位查找", "季节疾病"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    findill:[],
    //搜索
    inputShowed: false,
    inputVal: ""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   // var url = "http://47.104.213.74:8080/ills";
    
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

    //导航
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 5,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    //获取数据
   // this.getIllData(url);
  },

  //导航点击
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },


  //搜索事件
  showInput: function () {
    this.setData({
      inputShowed: true
    }); 
    console.log(4)
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
    console.log(3)
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
    console.log(2)
  },
  inputTyping: function (e) {
    var that=this;
    this.setData({
      inputVal: e.detail.value
    });
    var url = "https://llmsx.top/illsousou?illName=" + that.data.inputVal;
    console.log(url)
    that.getIllData(url);
    
  },
  //搜索结束


  /**
   * 
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
          findill:res
        })
      },
      fail: function (res) {
        console.log("fail")
      },
      complete: function () {

      }
    })
  },

  /**
   * 
   * 跳转详情
   */
  onPostTab: function (event) {
    var illId = event.currentTarget.dataset.illid;
    wx.navigateTo({
      url: '../index/article/article?illId=' + illId,
    })
  },

  /**
   * 
   * 跳转详情
   */
  findMallTab: function (event) {
    var illName = this.data.inputVal;
    console.log(illName)
    wx.navigateTo({
      url: 'result/result?illName=' + illName,
    })
  },



cold:function(event){
  var illId = 1;
  wx.navigateTo({
    url: '../index/article/article?illId=' + illId,
  })
},
  insomnia: function (event) {
    var illId = 78;
    wx.navigateTo({
      url: '../index/article/article?illId=' + illId,
    })
  },
  depressive: function (event) {
  var illId = 79;
  wx.navigateTo({
    url: '../index/article/article?illId=' + illId,
  })
}
})

