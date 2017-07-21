import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from '../App.vue'
import home from '../page/home/index.vue'
import item from '../page/item/index.vue'
import score from '../page/score/index.vue'
import login from '../components/login.vue'
const routes = [
  {
    path: '/',
    components: {
      default: app,
      a: login
    },
    children: [
      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path: '/item',
        name: 'item',
        component: item
      },
      {
        path: '/ss',
        name: 'score',
        component: score
      }
    ]
  }
]
var router = new VueRouter({routes})
export {router}
