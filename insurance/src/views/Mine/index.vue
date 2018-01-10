<template>
  <div class="mine">
    <main>
      <userInfo/>
      <iconList/>
    </main>
    <FooterBar/>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import userInfo from './components/userInfo'
import iconList from './components/iconList'
export default {
  name: 'hello',
  data () {
    return {
      msg: '我的'
    }
  },
  created () {
    this.$store.dispatch('user/getUserInfo').then((res) => {
      console.log(res)
    })
  },
  components: {
    userInfo,
    iconList,
    FooterBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
