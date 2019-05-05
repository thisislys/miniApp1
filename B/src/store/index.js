
import Vue from 'vue'
import Vuex from 'vuex'
import data from '../../static/mock/data.json';
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    data
  },
  plugins:[createLogger()]
})

export default store
