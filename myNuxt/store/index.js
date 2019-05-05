import list from "./module/list";
import detail from "./module/list";
import shopCar from "./module/list";
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store =()=>{
  return new Vuex.Store({
    modules: {
      list,
      detail,
      shopCar
    }
  })
}

export default store
