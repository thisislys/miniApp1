import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import index from './modules/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    index
  },
  plugins: [createLogger()]
})

export default store
