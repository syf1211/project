<template>
  <header class="hello">
    <el-row class='row'>
      <el-col :span="5"><div class="left-info">
        <img src='../static/img/index_header_login.png'>
        <span>安心工作条</span>
      </div></el-col>
      <el-col :span="5"><div class="cen-info">
        <span><i class='iconfont icon-aixin' style='color:red;'></i></span>
        <small>北京易企科技有限公司</small>
        <span><i class='iconfont icon-sangangy' style='color:#fff!important;'></i></span>
      </div></el-col>
      <el-col :span="14"><div class="right-info">
        <span><i class='iconfont icon-bangzhu'></i></span>
        <span><i class='iconfont icon-naoling'></i></span>
        <span><i class='iconfont icon-rili'></i></span>
        <span><i class='iconfont icon-tuichu'></i></span>
      </div></el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
header,.row{
  text-align:center;
  line-height:50px;
  background:#919191;
}
.left-info{
  text-align:center;
  img{
    width: 25px;
    position: relative;
    top: 12px;
  }
  span{
    color:#F09D55;
  }
}
.cen-info{
  text-align:center;
  small{
    color:#fff;
  }
  i{
    position:relative;
    top:2px;
    margin:0 4px;
  }
}
.right-info{
  text-align:right;
  span{
    border-right:1px solid #fff;
    padding:0 15px;
    box-sizing:border-box;
    i{
      color:#fff!important;
    }
    &:nth-child(4){
      border-right:0;
    }
  }
}
</style>
