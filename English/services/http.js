let domin = 'https://m.douban.com';
let header = {
  'content-type': 'application/json' 
}
let $http = {
  get(url, data, cb) {
    wx.request({
      url: domin+url,
      data: data,
      method: 'get',
      header: header,
      success: function (res) {
        console.log(res)
      }
    })

  },
  post(url, data, cb) {
    wx.request({
      url: url,
      data: data,
      method: 'POST',
      header: header,
      success: function (res) {
        console.log(res)
      }
    })

  }
}

export default $http
