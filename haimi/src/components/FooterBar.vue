<template>
  <div class="foot">
    <router-link :to="'/shouye'" active-class='active'>首页</router-link>
    <router-link :to="'/fenlei'" active-class='active'>分类</router-link>
    <router-link :to="'/car'" active-class='active'>购物车</router-link>
    <router-link :to="'/my'"  active-class='active'>我的</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.foot{
  width:100%;
  height:1rem;
  border-top: 0.01rem solid #ccc;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.active{
  color: #801a2a;
}
</style>
