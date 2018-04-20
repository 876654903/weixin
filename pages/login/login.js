// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    telCondition:true,
    telConditionText:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindKeyInput: function (e) {
   
   if(e.detail.value==''){
      this.setData({
        telCondition: false
      })
    } else if (!/\d/.test(e.detail.value) || e.detail.value.length > 11) {
      this.setData({
        telCondition: true,
        telConditionText: "您输入的格式有误！"
      })

    }

    
    this.setData({
      inputValue: e.detail.value
    })
  
  },
  //点击按钮
  loginIn(){

    if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.data.inputValue))) {  
      this.setData({
        telCondition: true,
        telConditionText: "您输入的格式有误！"
      })
      return false;
    } 

    wx.navigateTo({
      url: '/pages/checkBill/checkBill'
    })
    wx.setStorage({
      key: "userInfo",
      data: this.data.inputValue
    })


  },
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