import {
  manu,
  lunbo,
  nav,
  list,
  detail
} from '@/api/index.js';

const state = {
  active: 0,
  lunbos: [],
  navs: [],
  lists: [],
  page_size: 20,
  p: 1,
  hasMore: true,
  manus: [],
  details: {}
}

const mutations = {
  lb(state, payload) {
    state.lunbos = payload;
  },
  dh(state, payload) {
    state.navs = payload;
  },
  lbs(state, payload) {
    // state.lists = payload;
    if (payload.lists) {
      if (payload.lists.length === state.page_size * state.p) {
        state.hasMore = true
      } else {
        state.hasMore = false
      }
    }
    for (let key in payload) {
      state[key] = payload[key]
    }
  },
  //菜单
  cd(state, payload) {
    state.manus = payload.data.entry;
  },
  //详情
  xq(state, payload) {
    state.details = payload.data.message_info;
  }
}

const actions = {
  //轮播
  async getLunbo({
    commit
  }, payload) {
    let result = await lunbo();
    commit('lb', result)
  },
  //导航
  async getNav({
    commit
  }, payload) {
    let result = await nav();
    commit('dh', result)
  },
  //列表
  async getList({
    commit,
    state
  }, payload) {
    return new Promise(async (resolve, reject) => {
      let params = {};
      if (state.active) {
        params.status = state.active - 2;
      }
      params.p = state.p;
      params.page_size = state.page_size;
      let result = await list(params);
      if (state.p === 1) {
        commit('lbs', {
          lists: result.data
        })
      } else {
        commit('lbs', {
          lists: [...state.lists, ...result.data]
        })
      }
      resolve();
    })
  },
  //功能菜单
  async getManu({
    commit
  }, payload) {
    let result = await manu();
    commit('cd', result)
  },
  //详情
  async getDetail({
    commit
  }, payload) {
    let result = await detail(payload);
    commit('xq', result);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
