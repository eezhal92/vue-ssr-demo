import * as api from './../../api'
import * as types from './types'

import {
  ADD_NOTE,
  ADD_NOTES,
  MARK_NOTE,
  SET_FETCHED_FLAG
} from './../mutations/types'

export default {
  [types.FETCH_NOTES]: ({ commit, state, getters, dispatch }) => {
    if (state.notes.items.length === 0 && !state.notes.fetched) {
      let notes = api.fetchNotes().then((notes) => {
        commit(ADD_NOTES, { notes })
      }).then(() => {
        commit(SET_FETCHED_FLAG, { flag: true })
      })
    }
  },
  [types.ADD_NOTE]: ({ commit }, payload) => {
    commit(ADD_NOTE, payload)
  },
  [types.MARK_NOTE]: ({ commit }, id) => {
    commit(MARK_NOTE, { id })
  }
}
