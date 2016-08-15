<template>
  <div class="row center-xs notes">
    <note-creator></note-creator>
    <note-list :notes="notes"></note-list>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import { FETCH_NOTES } from '../store/actions/types'
import NoteCreator from '../components/NoteCreator.vue'
import NoteList from '../components/NoteList.vue'

const fetchNotes = (store) => {
  return store.dispatch(FETCH_NOTES)
}

export default {
  name: 'home',
  preFetch: fetchNotes,
  beforeMount () {
    fetchNotes(this.$store)
  },
  components: {
    NoteCreator,
    NoteList
  },
  computed: {
    ...mapState({
      notes: state => state.notes.items.filter(note => !note.done)
    })
  }
}
</script>
