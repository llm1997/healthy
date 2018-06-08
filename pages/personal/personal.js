var app = getApp()
Page({
    data: {
        userInfo: {},
        list:[
            {
                list_tool:[
                    {
                        img:"../../images/mine_2.png",
                        name:"健康查询",
                        url: "weight/weight"
                    },   
                ]        
            }
        ]
    },
    goPage: function (event) {
      console.log(event.currentTarget.dataset.log);
      wx.navigateTo({
        url: event.currentTarget.dataset.url
      })
    },
    onLoad: function () {
        // wx.showNavigationBarLoading();
        var that = this;
        console.log("aaa")
        //调用应用实例的方法获取全局数据
        that.setData({
            userInfo:app.globalData.userInfo
        })
        
    }
})
