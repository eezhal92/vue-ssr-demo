<template>
  <div class="notes col-xs-8">
    <div class="row between-xs">
      <note-card v-for="note in notes" :note="note"></note-card>
    </div>
  </div>
</template>

<script>
import NoteCard from './NoteCard.vue'

export default {
  name: 'note-list',
  props: ['notes'],
  components: {
    NoteCard
  }
}
</script>
