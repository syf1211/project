<template>
  <div class="tab-box">
    <span
      v-for='(item, index) in navData'
      :key='index'
      :class="activeIndex == item.product_id ? 'active' : ''"
      @click='changeCon(item)'
    >{{item.plan_title}}</span>
  </div>
</template>
<script>
export default {
  props: ['navData'],
  data () {
    return {
      activeIndex: this.$route.params.id
    }
  },
  methods: {
    changeCon (item) {
      this.activeIndex = item.product_id
      this.$emit('changeNav', item.product_id)
    }
  }
}
</script>
<style scoped lang='less'>
.tab-box{
  width: 100%;
  height: 0.8rem;
  background: #fff;
  span{
    display: inline-block;
    width: 1.3rem;
    line-height: 0.8rem;
    text-align: center;
    height: 100%;
    &.active{
      border-bottom:0.02rem solid #FE4773;
    }
  }
}
</style>
