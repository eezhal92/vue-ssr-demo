<template>
  <header class="app-bar row middle-xs">
    <span class="logo col-xs-10">
      MyNotes
    </span>
    <nav class="col-xs-2">
      <div class="row middle-xs between-xs">
        <router-link class="link" to="/">Active</router-link>
        <router-link class="link" to="/done">Done</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'tool-bar'
}
</script>

<style>
.app-bar {
  height: 65px;
  padding: 5px 30px;
  background-color: #00BCD4;
}

.logo {
  color: white;
  font-size: 30px;
  font-weight: 300;
  cursor: pointer;
}

.link {
  color: white;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
}

a.link {
  text-decoration: none;
}
</style>
