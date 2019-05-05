const state = {
  list: [],
  shop: [],
  count: 0,
  price:0
}
const mutations = {
  getList(state, payload) {
    state.list = payload;
  },
  shopList(state, payload) {
    state.shop = payload;
    let counts = 0,price=0;
    payload.map(item => {
      price+=item.count*item.price
      return counts += item.count * 1
    })
    state.count = counts
    state.price = price

  }
}
const actions = {
  async getLists({
    commit
  }, payload) {
    await fetch("../mock/data.json")
      .then(res => res.json())
      .then(data => {
        data.forEach(item => item.count = 0);
        commit('getList', data)
      });
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
