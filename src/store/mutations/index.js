import Chance from 'chance'
import {
  ADD_NOTES,
  ADD_NOTE,
  MARK_NOTE,
  SET_FETCHED_FLAG
} from './types'

const chance = new Chance()

export default {
  ADD_NOTES: (state, { notes }) => {
    state.notes.items = state.notes.items.concat(notes)
  },
  ADD_NOTE: ({ notes }, { title, description, color }) => {
    notes.items.push({
      id: chance.hash({length: 12}),
      title,
      description,
      color,
      done: false
    })
  },
  MARK_NOTE: ({ notes }, { id }) => {
    notes.items = notes.items.map(note => {
      if (note.id == id) {
        note.done = true
      }

      return note
    })
  },
  SET_FETCHED_FLAG: ( { notes }, { flag }) => {
    notes.fetched = flag
  }
}
