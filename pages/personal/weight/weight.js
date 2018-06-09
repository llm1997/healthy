var app = getApp()
var network = require("../../../utils/util.js")
Page({
  data: {
    showTopTips: false,
    weight:"",
    BP:"",
    height:"",
    advice:[],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' }
    ],


    time: "",

    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,

    countries: ["中国", "美国", "英国"],
    countryIndex: 0,

    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,

    isAgree: false
  },
  onLoad: function () {//初始化
    var timestamp = Date.parse(new Date());
    var date1 = new Date(timestamp);
    //年  
    var Y = date1.getFullYear();
    //月  
    var M = (date1.getMonth() + 1 < 10 ? '0' + (date1.getMonth() + 1) : date1.getMonth() + 1);
    //日  
    var D = date1.getDate() < 10 ? '0' + date1.getDate() : date1.getDate();
    var date = Y + "-" + M + "-" + D;

    var hour = date1.getHours();
    var minute = date1.getMinutes();
    var time=hour+":"+minute;

    var that = this
    that.setData({
      date: date,
      time:time
    })
  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  bindDateChange: function (e) {//改变日期
    this.setData({
      date: e.detail.value
    })
  },
  weightInput: function (e) {//改变体重
    this.setData({
      weight: e.detail.value
    })
  },
  heightInput: function (e) {//改变身高
    this.setData({
      height: e.detail.value
    })
  },
  BPInput: function (e) {//改变血压
    this.setData({
      BP: e.detail.value
    })
  },

  loginBtnClick: function (e) {//获取
     var that=this;
    console.log("用户名：" + that.data.weight);
    console.log("用户名：" + that.data.height);
    that.getIllInfo("加载数据")
  },
  bindTimeChange: function (e) {//改变时间
    this.setData({
      time: e.detail.value
    })
  },

  /**
   * 测试数据
   */
  getIllInfo: function (message) {
    var that = this;

    var data = {
      weight: that.data.weight,
      height: that.data.height
    };
    var url = "https://llmsx.top/illperson";

    network.requestLoading(url, data, message, function (res) {
      console.log(res)

      that.setData({
        advice: res
      })
      console.log(that.data.reason)
    }, function (res) {
      wx.showToast({
        title: '加载数据失败',
      })

    })
  },  
});