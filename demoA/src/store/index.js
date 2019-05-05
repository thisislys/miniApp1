import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import index from './modules/index'
import search from './modules/search'
import searchList from './modules/searchList'
console.log(search)
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    index,search,searchList
  },
  plugins: [createLogger()]
})

export default store
