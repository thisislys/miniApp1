import {
  index,
  banner
} from '@/api/index';

const state = {
  l_banner: {},
  l_index: [],
  pageNum: 1,
  pageSize: 20,
  hasMore: true,
  status: 1,
  bid: 0,
  orderBy: 0,
}

const mutations = {
  indexs(state, payload) {
    if (payload.l_index || payload.l_index.length) {
      state.l_index = payload.l_index
      if (payload.l_index === state.pageSize * state.pageNum) {
        state.hasMore = true
      } else {
        state.hasMore = false
      }
    }
    // for (let key in payload) {
    //   state[key] = payload[key]
    // }
  },
  banners(state, payload) {
    state.l_banner = payload
  }
}

const actions = {
  async getIndexs({
    commit,
    state
  }, payload) {
    // console.log(payload)
    let params = {};
    params.status = state.status
    params.bid = state.bid
    params.orderBy = state.orderBy
    params.pageSize = state.pageSize
    state.pageNum = payload.pageNum ? payload.pageNum : state.pageNum
    params.pageNum = payload.pageNum ? payload.pageNum : state.pageNum
    params.cateTag = payload.cateTag
    params.fixedFlower = payload.fixedFlower
    params.isNew = payload.isNew
    params.isLocal = payload.isLocal
    let result = await index(params);
    if (state.pageNum === 1) {
      commit('indexs', {
        l_index: result.data.recommends
      })
      // console.log(state.l_index)
    } else {
      commit('indexs', {
        l_index: [...state.l_index, ...result.data.recommends]
    })
    // console.log(state.l_index)

  }
  },
  async getBanners({
    commit
  }, payload) {
    let result = await banner(payload);
    commit('banners', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
