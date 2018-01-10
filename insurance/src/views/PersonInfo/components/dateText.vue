<template>
  <div class="info-list" v-if='info'>
    <span><small class="red">*</small><strong>{{info.label}}</strong></span>
    <div class="info-con"><input type="date"><b>〉</b></div>
  </div>
</template>
<script>
export default {
  props: ['info'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped lang='less'>
.info-list{
  width: 100%;
  box-sizing: border-box;
  padding:0 0.1rem 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content:space-between;
  line-height: 0.8rem;
  .info-con{
    input{
      border:0;
      width: 4.3rem;
      text-align: right;
      font-size:bold;
    }
    b{
      display: inline-block;
      width: 0.5rem;
      text-align: right;
      font-size:0.16rem; 
      color: #eee;
    }
  }
}
</style>

