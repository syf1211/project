<template>
  <footer class='footer'>
    <div class='foot-box' v-for='(item, index) in footData' :key='index' @click='change(item.route)'>
      <b v-if='item.route === active'><i><img :src='item.img1'/></i></b>
      <b v-else><i><img :src='item.img'/></i></b>
      <span>{{item.text}}</span>
    </div>
  </footer>  
</template>

<script>
export default {
  data () {
    return {
      active: '/home',
      footData: [
        {
          text: '首页',
          img: './static/images/icons/home.png',
          img1: './static/images/icons/home-active.png',
          route: '/home'
        },
        {
          text: '发现',
          img: './static/images/icons/share.png',
          img1: './static/images/icons/share-active.png',
          route: '/found'
        },
        {
          text: '我的',
          img: './static/images/icons/zoom.png',
          img1: './static/images/icons/zoom-active.png',
          route: '/mine'
        }
      ]
    }
  },
  methods: {
    change (path) {
      this.$router.push(path)
    }
  },
  created () {
    this.active = this.$route.path
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
footer{
  width:100%;
  height:1rem;
  display:flex;
  .foot-box{
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    span{
      margin-top:0.1rem;
    }
  }
  img{
    width:0.5rem;
  }
}
</style>
