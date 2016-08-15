<template>
  <div id="home-page">
    <h2>Hola!</h2>
    <ul>
      <li v-for="note in notes">{{ note.title }}</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import { FETCH_NOTES } from '../store/actions/types'

const fetchNotes = (store) => {
  return store.dispatch(FETCH_NOTES)
}

export default {
  name: 'home',
  preFetch: fetchNotes,
  beforeMount () {
    if (this.notes.length == 0) {
      fetchNotes(this.$store)
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notes.items
    })
  }
}
</script>
