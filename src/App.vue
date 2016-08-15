<template>
  <div id="app">
    <h1>MyNotes</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/notes">Notes</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

#app {
  width: 980px;
  margin: 0 auto;
}
</style>
