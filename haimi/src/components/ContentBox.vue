<template>
  <div class="content-box">
    <h1 class='title' v-if="title" v-show='ac'>{{title}}</h1>  
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: ''
    },
    ac: {
      default: 'ac'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ac{
  background:#f7f7f7;
}
.content-box{
  background:#fff;
  margin-top:10px;
  .title{
    height: 40px;
    line-height:40px;
    text-align:center;
  }
}
</style>
