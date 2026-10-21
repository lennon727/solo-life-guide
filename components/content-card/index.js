Component({
  properties: {
    item: {
      type: Object,
      value: null
    },
    compact: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    openDetail() {
      const { item } = this.properties
      if (!item || !item.id) return

      wx.navigateTo({
        url: `/pages/detail/index?id=${item.id}`
      })
    }
  }
})
