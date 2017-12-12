<template>
  <div class='nav'>
    <div class="nav-bar">
      <a 
        href='javascript:;' 
        v-for='(item,index) in navData'
        :class='{active: acIndex == index}'
        :key='item.id'
        @click='navTab(item.id,item.type)'
      >{{item.text}}</a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    navData: {
      default: []
    }
  },
  data () {
    return {
      acIndex: '0'
    }
  },
  methods: {
    navTab (id, type) {
      this.acIndex = id
      let typeStr = type === 1 ? 'Recommend' : 'LabelPage'
      // this.$emit('update:setTemp', typeStr)
      this.$emit('setTemp', typeStr, id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.nav{
  width:100%;
  overflow:hidden;
  padding:0.2rem;
  box-sizing:border-box;
  background:#fff;
  z-index:99;
}
.nav-bar{
  width: 100%;
  overflow:auto;
  display: -webkit-box;
  background: #fff;
  a{
    display:block;
    position:relative;
    width:1.1rem;
    padding: 0.2rem 0;
    text-align:center;
    &.active{
      &::after{
        content:'';
        width:1.1rem;
        height:0.02rem;
        background:#666;
        display:block;
        position:absolute;
        bottom:0;
        left:0;
      }
    }
  }
}
</style>
