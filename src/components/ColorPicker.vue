<template>
  <div class="color-selector">
    <i class="material-icons icon"
       @click="show()"
       :style="{ 'background-color': bgColor }"
    >
      color_lens
    </i>
    <div id="color-picker"
         class="selector row center-xs"
        :style="{ display: isShow ? '' : 'none' }"
    >
      <div class="color" @click="setColor(color)" v-for="color in colors" :style="{ 'background-color': color }"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

const bus = new Vue()

export default {
  name: 'color-picker',
  data () {
    return {
      isShow: false,
      colors: [
        '#B19CD9',
        '#FF6961',
        '#77DD77',
        '#AEC6CF',
        '#F49AC2',
        '#fff'
      ],
      bgColor: '#fff'
    }
  },
  created: () => {
    bus.$on('note-added', () => {
      window.alert('yey')
    })
  },
  methods: {
    show () {
      this.isShow = !this.isShow
    },
    setColor (color) {
      this.bgColor = color
      this.$emit('set-color', color)
    }
  }
}
</script>

<style>
.color-selector {
  position: relative;
}

.selector {
  min-width: 120px;
  border: 1px solid lightgrey;
  padding: 10px;
  background-color: #efefef;
  position: absolute;
  top: 34px;
  left: 0;
}

.color {
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
}

.color:hover {
  border: 2px solid darkgrey;
}

.icon {
  font-size: 1.4rem;
  color: grey;
  cursor: pointer;
}
</style>
