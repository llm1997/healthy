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
    flag:1
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
   * 自定义函数
   */
  // getData: function () {
  //   var that=this;
  //   console.log("123");
  //   var url ="http://47.104.213.74:8080/todopost";
  //   network.requestLoading(url, that.data.params, '正在加载数据', function (res) {
  //       //res就是我们请求接口返回的数据
  //        console.log(res)
  //     }, function () {
  //        wx.showToast({
  //           title: '加载数据失败',
  //        })
  //     });
  // },

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
    // var data = {
    //   id:'2',
    //   name: '头疼',
    //   desc: '真的是一种可怕的疾病，病情严重可使患者丧失生活和工作能力',
    //   page: that.data.page
    // };
    var data = {
      page: that.data.page
    };
    // var url = "http://47.104.213.74:8080/illpost";
    if(that.data.flag==1)
    {
      var url = "https://llmsx.top/waikeill";
    }
    else if(that.data.flag==2)
    {
      var url = "https://llmsx.top/neikeill";
    }
    else if (that.data.flag ==3)
    {
      var url = "https://llmsx.top/fukeill";
    }
    else if (that.data.flag ==4)
    {
      var url = "https://llmsx.top/erkeill";
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
          console.log(that.data.contentlist[0].name)
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