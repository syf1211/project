<template>
  <div id="app">
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import './static/css/reset.css'
import { Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
main{
  overflow-x:hidden;
  padding-bottom:1rem;
}
.footer{
  position:fixed;
  bottom:0;
  left:0;
  background:#fff;
}
body {
  background-color: #fbf9fe;
  font-size:0.25rem;
}
</style>
