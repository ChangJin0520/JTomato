// JTomato index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '富强 民主 文明 和谐\n自由 平等 公正 法治\n爱国 敬业 诚信 友善',
    isDisable: false,
    workFlag: true,
    workTime: 1 * 60,
    easeTime: 1 * 60,
    time: 25 * 60
  },
  onLoad: function() {},
  startClock: function(e) {
    this.setData({
      isDisable: true,
      time: this.data.workFlag ? this.data.workTime : this.data.easeTime,
      workFlag: !this.data.workFlag
    })

    let _interval = setInterval(() => {
      let timeNow = this.data.time - 1

      this.setData({
        time: timeNow
      })

      if (timeNow < 1) {
        this.setData({
          isDisable: false
        })

        clearInterval(_interval)

        const bgm = wx.getBackgroundAudioManager()
        bgm.title = 'coins'
        bgm.src = 'https://636a-cjyun-4a3784-1258142464.tcb.qcloud.la/music/coins.mp3?sign=b0f8110b451a63d3347c50b16d33a115&t=1543162379'
      }
    }, 100)
  }
})