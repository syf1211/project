<template>
  <div id="app">
    <router-view/>
    <div id='dialog-box'></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0; 
  display: -webkit-flex;
  flex-direction: column;
}
</style>
