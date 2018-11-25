// JTomato index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '富强 民主 文明 和谐自由 平等 公正 法治爱国 敬业 诚信 友善',
    buttonShow: true,
    time: 11 * 60
  },
  onLoad: function () {},
  startClock: function (e) {
    this.setData({
      buttonShow: !this.data.buttonShow
    })
    let _interval = setInterval(() => {
      let timeNow = this.data.time - 1

      this.setData({
        time: timeNow
      })

      if (timeNow < 1) {
        clearInterval(_interval)
        this.setData({
          buttonShow: !this.data.buttonShow
        })
      }
    }, 20)
  }
})
