// pages/contract/contract.js
import $http from '../../services/http.js'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive:null,
    datalist: [{
        "id": 0,
        "icon": "iconfont hetong",
        "title": "212699",
        "teachCenter": "北京西坝河",
        "price": "￥13786.00",
        "date": "2017-01-01",
        "btnTitle": "申请发票",
        "isClick":false
      }, {
        "id": 1,
        "icon": "iconfont hetong",
        "title": "212699",
        "teachCenter": "北京西坝河",
        "price": "￥13786.00",
        "date": "2017-01-01",
        "btnTitle": "查看发票",
        "isClick": false
      }, {
        "id": 2,
        "icon": "iconfont hetong",
        "title": "212699",
        "teachCenter": "北京西坝河",
        "price": "￥13786.00",
        "date": "2017-01-01",
        "btnTitle": "申请发票",
        "isClick": true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  changeColor(e){
    let {id} = e.currentTarget.dataset    
    this.setData({
      isActive:id
    })
    wx.showModal({
      content: '合同金额与收款金额不符，无法开票，请与校区前台联系',
      showCancel:false,
      confirmText:"知道了"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    $http.get('/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1', {}, (res) => {
      console.log(res)
    })
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