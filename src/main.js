import Vue from 'vue'
import App from './App'
import {router} from './route/router'
import store from './store/store'
import './assets/css/bootstrap.min.css'
import Vuex from 'vuex'
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router, // 将router对象传给vue，这样就可以通过this.$router获取到router对象了
  template: '<App/>',
  components: {App}
})
