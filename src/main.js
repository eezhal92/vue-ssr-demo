import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, store, router }
