const FAVORITES_KEY = 'solo_life_favorites_v1'
const CHECKLIST_KEY = 'solo_life_checklists_v1'

function getFavorites() {
  return wx.getStorageSync(FAVORITES_KEY) || []
}

function isFavorite(id) {
  return getFavorites().includes(id)
}

function toggleFavorite(id) {
  const current = getFavorites()
  const next = current.includes(id)
    ? current.filter((itemId) => itemId !== id)
    : [id, ...current]

  wx.setStorageSync(FAVORITES_KEY, next)
  return next.includes(id)
}

function getChecklistState(id) {
  const allStates = wx.getStorageSync(CHECKLIST_KEY) || {}
  return allStates[id] || []
}

function toggleChecklistItem(id, key) {
  const allStates = wx.getStorageSync(CHECKLIST_KEY) || {}
  const current = allStates[id] || []
  const next = current.includes(key)
    ? current.filter((itemKey) => itemKey !== key)
    : [...current, key]

  allStates[id] = next
  wx.setStorageSync(CHECKLIST_KEY, allStates)
  return next
}

module.exports = {
  getFavorites,
  isFavorite,
  toggleFavorite,
  getChecklistState,
  toggleChecklistItem
}
