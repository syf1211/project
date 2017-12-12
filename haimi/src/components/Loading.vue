<template>
  <div class="loading-box" v-show='isLoading'>
    <div class='loading'>
      <i></i>
      <span>正在加载中...</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    show () {
      this.isLoading = true
    },
    hide () {
      this.isLoading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loading-box{
  z-index:10000;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background:rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
  .loading{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    i{
      display:block;
      width:30px;
      height:30px;
      background:blue;
      -webkit-animation:loading 1s linear infinite;
    }
    span{
      text-align:center;
      display:block;
      margin:10px auto;
      color:#fff;
    }
  }
}
@keyframes loading {
  from {
    -webkit-transform:rotate(0deg)
  }
  to {
    -webkit-transform:rotate(360deg)
  }
}
</style>
