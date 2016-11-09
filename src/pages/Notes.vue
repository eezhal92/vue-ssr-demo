<template>
  <div class="row center-xs notes">
    <note-list :notes="doneNotes"></note-list>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import { FETCH_NOTES } from '../store/actions/types'
import NoteList from '../components/NoteList.vue'

const fetchNotes = (store) => {
  return store.dispatch(FETCH_NOTES)
}

export default {
  name: 'notes',
  preFetch: fetchNotes,
  components: {
    NoteList
  },
  computed: {
    ...mapState({
      doneNotes: state => state.notes.items.filter(note => note.done)
    })
  }
}
</script>
