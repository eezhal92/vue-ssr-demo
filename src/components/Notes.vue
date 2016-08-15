<template>
  <div id="notes-page">
    <h2>Add New Note</h2>
    <form @submit.prevent="addNote">
      <div>
        <label>Title</label>
        <input type="text" v-model="title">
      </div>
      <div>
        <label>Description</label>
        <textarea v-model="description"></textarea>
      </div>
      <div>
        <input type="submit" value="Add">
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">
import { ADD_NOTE } from '../store/actions/types'

export default {
  name: 'notes',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    resetState () {
      this.title = '',
      this.description = ''
    },
    addNote () {
      this.$store.dispatch(ADD_NOTE, {
        title: this.title,
        description: this.description
      }).then(() => this.resetState())

    }
  }
}
</script>
