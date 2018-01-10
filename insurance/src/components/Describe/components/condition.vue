<template>
  <div class="condition">
    <div class="con-bpx">
      <span v-for='(item,index) in features' :key='index'><b class="iconfont">&#xe62a;</b> <small>{{item}}</small></span>
    </div>
  </div>
</template>
<script>
import '@/static/icon/iconfont.css'
export default {
  props: ['features']
}
</script>
<style scoped lang='less'>
.condition{
  height:1rem;
  padding-top:0; 
  box-sizing: border-box;
  width: 100%;
  line-height: 1rem;
  overflow: auto;
  .con-bpx{
    min-width: 150%;
  }
  span{
    margin-left:0.21rem;
    margin-top:0.2rem;
    b{
      color: #FE4773;
      font-size: 0.32rem!important;
      position: relative;
      top:0.01rem;
    }
  }
  small{
    font-size: 0.24rem;
    line-height: 0.27rem;
  }
}

</style>
