const state = {
  money: [{
      id: 0,
      money: 1000,
      count: 0
    },
    {
      id: 1,
      money: 200,
      count: 0
    },
    {
      id: 2,
      money: 500,
      count: 0
    },
    {
      id: 3,
      money: 900,
      count: 0
    }
  ]
}
const getters = {

}
const mutations = {
  increment: (state, payload) => {
    const obj = state
    obj.money[payload].count -= 1
  },
  decrement: (state, payload) => {
    const obj = state
    obj.money[payload].count += 1
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
