// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import datas from './modules/data'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    datas
  },
  plugins: [createLogger()]
})

export default store
