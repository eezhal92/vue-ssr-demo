import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Notes from '../components/Notes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehaviour: () => ({ y: 0 }),
  routes: [
    { path: '/', component: resolve => require(['../components/Home.vue'], resolve) },
    { path: '/notes', component: resolve => require(['../components/Notes.vue'], resolve) },
    { path: '*', redirect: '/' },
  ]
})
