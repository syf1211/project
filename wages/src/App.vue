<template>
  <div id="app">
    <template v-if='$route.path != "/login"'>
      <header-bar></header-bar>
      <nav-bar></nav-bar>
    </template>
    <template v-else>
      <router-view/>
    </template>
  </div>
</template>

<script>
import './static/css/reset.css'
import HeaderBar from '@/components/HeaderBar'
import './static/font/iconfont.css'
import NavBar from '@/components/NavBar'
export default {
  name: 'app',
  components: {
    NavBar,
    HeaderBar
  }
}
</script>

<style lang='scss'>
#app{
  height:100%;
}
</style>
