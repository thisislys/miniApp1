import Vue from 'vue'
import App from './App'
import store from '@/store/index';
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store=store;
console.log(store,Vue.prototype)

const app = new Vue(App)
app.$mount()
