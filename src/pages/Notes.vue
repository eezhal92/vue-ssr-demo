<template>
  <div class="row center-xs notes">
    <note-list :notes="doneNotes"></note-list>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import NoteList from '../components/NoteList.vue'

export default {
  name: 'notes',
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
