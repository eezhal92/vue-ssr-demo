import {
  ADD_NOTES,
  ADD_NOTE
} from './types'

export default {
  ADD_NOTE: ({ notes }, { title, description }) => {
    let lastNote = notes.items[notes.items.length - 1]
    let lastId = lastNote ? lastNote.id : 0

    notes.items.push({
      id: lastId + 1,
      title,
      description
    })
  },
  ADD_NOTES: (state, { notes }) => {
    state.notes.items = state.notes.items.concat(notes)
  }
}
