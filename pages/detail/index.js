const { getContentById } = require('../../utils/content')
const {
  isFavorite,
  toggleFavorite,
  getChecklistState,
  toggleChecklistItem
} = require('../../utils/storage')

Page({
  data: {
    item: null,
    favorite: false,
    checkedKeys: []
  },

  onLoad(options) {
    const item = getContentById(options.id)
    if (!item) {
      wx.showToast({ title: '内容不存在', icon: 'none' })
      setTimeout(() => wx.navigateBack(), 800)
      return
    }

    const checkedKeys = getChecklistState(item.id)
    this.setData({
      item: this.decorateChecklist(item, checkedKeys),
      favorite: isFavorite(item.id),
      checkedKeys
    })
    wx.setNavigationBarTitle({ title: item.typeMeta.name })
  },

  decorateChecklist(item, checkedKeys) {
    return {
      ...item,
      sections: item.sections.map((section, sectionIndex) => ({
        ...section,
        items: (section.items || []).map((text, itemIndex) => {
          const key = `${sectionIndex}-${itemIndex}`
          return {
            text,
            key,
            checked: checkedKeys.includes(key)
          }
        })
      }))
    }
  },

  toggleFavorite() {
    const favorite = toggleFavorite(this.data.item.id)
    this.setData({ favorite })
    wx.showToast({
      title: favorite ? '已收藏' : '已取消收藏',
      icon: 'none'
    })
  },

  toggleCheck(event) {
    const key = event.currentTarget.dataset.key
    const checkedKeys = toggleChecklistItem(this.data.item.id, key)
    const rawItem = getContentById(this.data.item.id)
    this.setData({
      checkedKeys,
      item: this.decorateChecklist(rawItem, checkedKeys)
    })
  },

  onShareAppMessage() {
    const { item } = this.data
    return {
      title: item ? item.title : '一人生活手册',
      path: item ? `/pages/detail/index?id=${item.id}` : '/pages/home/index'
    }
  }
})
