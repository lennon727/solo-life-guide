const {
  getAllContent,
  getFeaturedContent,
  searchContent
} = require('../../utils/content')

Page({
  data: {
    query: '',
    searching: false,
    searchResults: [],
    featured: [],
    categoryCounts: {
      food: 0,
      goods: 0,
      guide: 0
    }
  },

  onLoad() {
    const allContent = getAllContent()
    this.setData({
      featured: getFeaturedContent(6),
      categoryCounts: {
        food: allContent.filter((item) => item.type === 'food').length,
        goods: allContent.filter((item) => item.type === 'goods').length,
        guide: allContent.filter((item) => item.type === 'guide').length
      }
    })
  },

  onQueryInput(event) {
    const query = event.detail.value
    this.setData({ query })
    if (!query.trim()) {
      this.setData({ searching: false, searchResults: [] })
    }
  },

  submitSearch() {
    const query = this.data.query.trim()
    if (!query) return

    this.setData({
      searching: true,
      searchResults: searchContent(query)
    })
  },

  clearSearch() {
    this.setData({ query: '', searching: false, searchResults: [] })
  },

  openCategory(event) {
    const routes = {
      food: '/pages/eat/index',
      goods: '/pages/goods/index',
      guide: '/pages/guides/index'
    }
    wx.switchTab({ url: routes[event.currentTarget.dataset.type] })
  },

  onShareAppMessage() {
    return {
      title: '一人生活遇到问题，来这里查一查',
      path: '/pages/home/index'
    }
  }
})
