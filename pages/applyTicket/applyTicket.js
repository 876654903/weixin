// pages/applyTicket/applyTicket.js
Page({


  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '申请发票'
    })
  },
// 弹窗
  data: {
    showModal: false,
  },


  showDialogBtn() {

    this.setData({

      showModal: true

    })

  },

  hideModal: function () {

    this.setData({

      showModal: false

    });

  },

  onConfirm: function () {

    this.hideModal();

  },

  onCancel: function () {

    this.hideModal();

  }
})