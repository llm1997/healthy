// pages/test/test.js
var network = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    pageSize: 5,
    hasMoreData: true,
    contentlist:[],
    flag:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
   
    var that = this
    that.getIllInfo('正在加载数据...')
    var addr = options.addr
    that.setData({
      flag: options.addr
    })
   console.log("操作"+that.data.flag)
    that.getIllData()
   
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },



  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    this.data.page = 1
    this.getIllInfo('正在刷新数据')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.hasMoreData) {
      this.getIllInfo('加载更多数据')
    } else {
      wx.showToast({
        title: '没有更多数据',
      })
    }
  },


/**
 * 点击获取数据
 */
getIllData:function(){
  if (this.data.hasMoreData)
    {
      this.getIllInfo("正在加载..");
    }
  else
  {
    wx.showToast({
      title: '没有更多数据',
    })
  }
  

  
  
},

/**
 * 测试数据
 */
  getIllInfo: function (message) {
    var that = this;
   
    var data = {
      page: that.data.page
    };
    if(that.data.flag==1)
    {
      var url = "https://llmsx.top/waikeill";
      console.log("进入外科" + that.data.flag )
    }
    if(that.data.flag==2)
    {
      var url = "https://llmsx.top/neikeill";
      
    }
    else if (that.data.flag ==3)
    {
      var url = "https://llmsx.top/pifuill";
    }
    else if (that.data.flag ==4)
    {
      var url = "https://llmsx.top/erkeill";
    }
    else if (that.data.flag == 5) {
      var url = "https://llmsx.top/toubuill";
    }
    else if (that.data.flag == 6) {
      var url = "https://llmsx.top/xiongbuill";
    }
    else if (that.data.flag == 7) {
      var url = "https://llmsx.top/fubuill";
    }
    else if (that.data.flag == 8) {
      var url = "https://llmsx.top/xiazhiill";
    }
    else if (that.data.flag == 9) {
      var url = "https://llmsx.top/springill";
    }
    else if (that.data.flag == 10) {
      var url = "https://llmsx.top/summerill";
    }
    else if (that.data.flag == 11) {
      var url = "https://llmsx.top/fallill";
    }
    else if (that.data.flag == 12) {
      var url = "https://llmsx.top/winterill";
    }
    network.requestLoading(url, data, message, function (res) {
      console.log(res)
      var contentlistTem = that.data.contentlist;
        if (that.data.page == 1) {
          contentlistTem = []
        }
        var content = res;
        console.log("大小" + content.length)
        if (res==null||content.length < that.data.pageSize) {
          that.setData({
            contentlist: contentlistTem.concat(content),
            hasMoreData:false
          })
         
        } else {
          console.log("here")
          that.setData({
            contentlist: contentlistTem.concat(content),
            hasMoreData: true,
            page:that.data.page+1
          })
        }

    }, function (res) {
      wx.showToast({
        title: '加载数据失败',
      })

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
  }
})