<template>
  <div class="shouye"  v-title='"我的"'>
    <h1>个人中心</h1>
    <main>
      个人信息中心
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'

export default {
  components: {
    FooterBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  width:100%;
  line-height:1rem;
  text-align:center;
}
</style>
