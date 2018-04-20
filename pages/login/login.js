// pages/login/login.js
import $http from '../../service/$http.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    security: ''
  },
  formSubmit(e){ //form标签内的提交事件
    console.log(e.detail.value)  //获取提交事件，事件对象的值
    let { phone, security } = e.detail.value;
    //清空输入的内容      
    
    //匹配正则 
    let re  = /^1[3|4|5|8][0-9]\d{4,8}$/;
    //判断如果输入的phone,不是正则的格式,则提示输入有误  
    if(!re.test(phone)){ //正则.test(字符串)
      console.log('手机号输入有误')
      
    }else{
      console.log('登录成功')
      // wx.switchTab({
      //   url: '/pages/index/index'   //跳转首页
      // })
      wx.setStorage({  //将登录信息存储在storage中
        key: 'phone',
        data: phone
      })
    }
    $http.get('/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1',{},(res) => {
      console.log(res)
    })
   
  },
  toLogin(){
    console.log(1)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload test')
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