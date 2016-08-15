import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Notes from '../pages/Notes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehaviour: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/done', component: Notes },
    { path: '*', redirect: '/' },
  ]
})
