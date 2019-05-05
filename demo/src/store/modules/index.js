let state = {
  info: [],
  now:{}
}

let mutations = {
  getInfo(state, payload) {
    console.log(payload, 'payload')
    state.info = [...state.info, payload]
    state.now = payload

  },
  getNow(state,payload){
    console.log(payload, 'payload')
    state.now.count = [...state.now.count, payload]

  }
}

let actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
