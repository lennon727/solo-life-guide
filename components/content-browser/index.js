const { getContentByType } = require('../../utils/content')

Component({
  properties: {
    type: String,
    eyebrow: String,
    title: String,
    lead: String
  },

  data: {
    allItems: [],
    visibleItems: [],
    tags: [],
    activeTag: '全部',
    query: ''
  },

  lifetimes: {
    attached() {
      this.loadContent()
    }
  },

  methods: {
    loadContent() {
      const allItems = getContentByType(this.properties.type)
      const tags = ['全部', ...new Set(allItems.flatMap((item) => item.tags))]
      this.setData({
        allItems,
        visibleItems: allItems,
        tags
      })
    },

    onQueryInput(event) {
      this.setData({ query: event.detail.value }, () => this.applyFilters())
    },

    clearQuery() {
      this.setData({ query: '' }, () => this.applyFilters())
    },

    selectTag(event) {
      this.setData({ activeTag: event.currentTarget.dataset.tag }, () => this.applyFilters())
    },

    applyFilters() {
      const { allItems, activeTag, query } = this.data
      const normalized = query.trim().toLowerCase()
      const visibleItems = allItems.filter((item) => {
        const matchesTag = activeTag === '全部' || item.tags.includes(activeTag)
        const text = [item.title, item.summary, item.verdict, ...item.tags].join(' ').toLowerCase()
        const matchesQuery = !normalized || text.includes(normalized)
        return matchesTag && matchesQuery
      })

      this.setData({ visibleItems })
    }
  }
})
