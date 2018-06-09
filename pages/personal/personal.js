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
                    {
                       img:"../../images/green_tri.png",
                        name:"健康时讯",
                        url: ""
                    }, 
                    {
                      img: "../../images/gouwu.png",
                      name: "周边药店",
                      url: ""
                    },
                    {
                      img: "../../images/label.png",
                      name: "周边医院",
                      url: ""
                    },      
                    {
                      img: "../../images/friends.png",
                      name: "联系我们",
                      url: ""
                    },   
                    {
                      img: "../../images/setting.png",
                      name: "设置",
                      url: ""
                    },   
                    
                ]   
                     
            }
        ]
    },
    goPage: function (event) {
     
      wx.navigateTo({
        url: event.currentTarget.dataset.url
      })
    },
    onLoad: function () {
      
    }
})
