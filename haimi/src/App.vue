<template>
  <div id="app">
    <router-view/>
    <div id='loading-box'></div>
  </div>
</template>

<script>
import './static/css/reset.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
