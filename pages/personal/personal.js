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
      
       
        
    }
})
