<template>
  <div class="col-xs-6 creator">
    <div class="note-creator shadow-2" :style="{ 'background-color': color }">
      <form class="row" @submit.prevent="addNewNote()">
        <input type="text" v-model="title" placeholder="Title" class="col-xs-10 title">
        <input type="text" v-model="description" placeholder="Take a note..." class="col-xs-10">

        <div class="actions col-xs-12 row between-xs">
          <div class="col-xs-3">
            <color-picker v-on:set-color="setColor"></color-picker>
          </div>
          <button type="submit" class="btn-light">
            Done
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { ADD_NOTE } from './../store/actions/types'
import ColorPicker from './ColorPicker.vue'

export default {
  name: 'note-creator',
  data () {
    return {
      title: '',
      description: '',
      color: '#fff'
    }
  },
  methods: {
    resetState () {
      this.title = '',
      this.description = '',
      this.color = '#fff'
    },
    addNewNote () {
      if (!this.title || !this.description) {
        return
      }

      this.$store.dispatch(ADD_NOTE, {
        title: this.title,
        description: this.description,
        color: this.color
      }).then(() => {
        this.resetState()
        this.$emit('note-added')
      })
    },
    setColor (color) {
      this.color = color
    }
  },
  components: {
    ColorPicker
  },
  events: {
    'color-picker:set-color': (color) => {
      this.color = color
    }
  }
}
</script>

<style>
.notes {
  padding-top: 50px;
}

.creator {
  margin-bottom: 40px;
}

.note-creator {
  padding: 20px;
  background-color: white;
  border-radius: 3px;
}

.title {
  font-weight: bold;
  color: rgba(0,0,0,0.8);
}

.full {
  height: 100px;
}

</style>
