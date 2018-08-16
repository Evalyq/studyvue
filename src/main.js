import Vue from 'vue'
import router from './router/index.js'
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './store'

Vue.use(VueResource)
router.beforeEach((to,from,next)=>{
  console.log('router.beforeEach')
  // console.log(to)
  // console.log(from)
  // console.log(to)
  next()
})
router.afterEach((to,from)=>{
  console.log('afterEach')
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
