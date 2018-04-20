// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    password: ""
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

  },
  userNameInput(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  passWdInput(e) {
    this.setData({
      password: e.detail.value
    })
  },
  toHome(e) {
    let { userName, password } = this.data;
    let nameRe = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if (nameRe.test(userName) && password) {
      wx.setStorage({
        key: 'username',
        data: userName,
      })
      wx.switchTab({
        url: '/pages/contract/contract',
      })
      wx.showToast({
        "title": "登录成功",
        "icon": "success",
        "mask": true
      })
    }else{
      wx.showToast({
        "title":"格式有误",
        "icon":"fail",
        "mask":true
      })
    }
  }
})