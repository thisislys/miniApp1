import {
    keyWord
} from '@/api/index';

const state = {
  l_keyWord:{}
}

const mutations = {
  keyWords(state,payload){
    state.l_keyWord=payload
  }
}

const actions = {
 async getkeyWords({commit},payload){
   let result=await keyWord(payload);
   commit('keyWords',result.data)
 }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
