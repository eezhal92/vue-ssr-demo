<template>
  <div class="note-card row shadow-1 col-xs-4" :style="{ 'background-color': note.color }">
    <div class="icon"
         @click="markNote"
         :style="{ 'background-color': note.color }"
         v-show="!note.done"
    >
      <i class="material-icons">check</i>
    </div>
    <div class="col-xs-12 title">
      {{ note.title }}
    </div>
    <div class="col-xs-12 value">
      {{ note.description }}
    </div>
  </div>
</template>

<script>
import { MARK_NOTE } from '../store/actions/types'
export default {
  name: 'note-card',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    markNote (id) {
      this.$store.dispatch(MARK_NOTE, this.note.id)
    }
  }
}
</script>

<style>
.note-card {
  padding: 15px;
  border-radius: 2px;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
  color: rgba(0,0,0,0.8);
}
.value {
  text-align: left;
  font-size: 1.4rem;
  font-weight: 200;
}
.icon {
  position: absolute;
  color: black;
  border: 1px solid lightgrey;
  background-color: white;
  font-size: 30px;
  top: -10px;
  left: -10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
}
</style>
