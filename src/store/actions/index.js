import * as api from './../../api'
import * as types from './types'

import {
  ADD_NOTE,
  ADD_NOTES
} from './../mutations/types'

export default {
  [types.ADD_NOTE]: ({ commit }, payload) => {
    commit(ADD_NOTE, payload)
  },
  [types.FETCH_NOTES]: ({ commit, state, getters }) => {
    let notes = api.fetchNotes().then((notes) => commit(ADD_NOTES, { notes }))
  }
}
