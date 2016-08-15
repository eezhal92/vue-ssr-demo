import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    notes: {
      items: [],
      fetched: false
    }
  },
  actions: actions,
  mutations: mutations
})

export default store
