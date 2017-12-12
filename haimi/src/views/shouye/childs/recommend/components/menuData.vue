<template>
  <div class='menuData'>
    <div class='menu-box'>
      <a v-for="item in menuData" href="javascript:;" >
        <img :src="item.icon"/>
        <span>{{item.text}}</span>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    menuData: {
      default: []
    }
  },
  data: function () {
    return {
      msg: '广告图'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.menuData{
  width: 100%;
  background:#fff;
  .menu-box{
    display:flex;
    a{
      display:block;
      flex:1;
      text-align:center;
      padding-bottom:10px;
      img{
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
