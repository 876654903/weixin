// pages/checkBill/checkBill.js
Page({

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

  },

})