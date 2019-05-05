import {
  list
} from '@/api/index';

const state = {
  l_list: {},
  pageNum: 1,
  pageSize: 10,
  userId: 0,
  isShow: true
}

const mutations = {
  lists(state, payload) {
    if (payload.l_list || payload.l_list.length) {
    state.l_list = payload.l_list
    if (payload.l_list.length === state.pageNum * state.pageNum) {
        isShow = true
      } else {
        isShow = false
      }
    }

  }
}

const actions = {
  async getlists({
    commit,
    state
  }, payload) {
    let obj = {};
    obj.pageNum = payload.pageNum
    obj.kw = payload.kw
    obj.pageSize = state.pageSize
    obj.userId = 0
    let result = await list(obj);
    if (payload.pageNum == 1) {
      commit('lists', {
        l_list: result.data.list
      })
    } else {
      commit('lists', {
        l_list: [...state.l_list,...result.data.list]
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
