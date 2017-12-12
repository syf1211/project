<template>
  <div class='home'>
    <userInfo/>
    <active-content/>
    <template>
      <code-con v-if='!isFllow'/>
      <enterstory v-else-if='isFllow'/>
    </template>
  </div>
</template>
<script>
import ActiveContent from '@/components/ActiveContent'
import codeCon from './components/codeCon'
import userInfo from './components/userInfo'
import enterstory from './components/enterstory'
export default {
  data () {
    return {
      fllow: false
    }
  },
  methods: {
    isFllow () {
      this.fllow = true
    }
  },
  components: {
    ActiveContent,
    codeCon,
    userInfo,
    enterstory
  }
}
</script>
<style scoped lang='scss'></style>
