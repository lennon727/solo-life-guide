const { getAllContent } = require('../../utils/content')
const { getFavorites } = require('../../utils/storage')

Page({
  data: {
    favorites: []
  },

  onShow() {
    const favoriteIds = getFavorites()
    const contentMap = new Map(getAllContent().map((item) => [item.id, item]))
    const favorites = favoriteIds
      .map((id) => contentMap.get(id))
      .filter(Boolean)
    this.setData({ favorites })
  },

  goHome() {
    wx.switchTab({ url: '/pages/home/index' })
  }
})
